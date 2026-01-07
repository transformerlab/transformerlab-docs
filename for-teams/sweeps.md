---
title: Running a Sweep
sidebar_position: 40
---

## What is a Sweep?

A **Sweep** (or Hyperparameter Sweep) is an automated way to optimize your model's performance by testing different combinations of configuration values.

Instead of running a single job with fixed settings, a sweep allows you to define a range or list of values for specific parameters (such as learning rate, batch size, or epoch count). Transformer Lab will then generate and schedule multiple jobs—one for every possible combination of these parameters—allowing you to determine which configuration yields the best results.

You can run sweeps one after another or even in parallel.

## Enabling Sweeps

You can enable sweeps directly within your Task definition. To convert a standard task into a sweep, simply change a single value in your JSON configuration into a **list of values**.

### Task JSON Configuration

#### Required fields:

- `run_sweeps`: Set to true to enable sweeps

- `sweep_config`: An object mapping parameter names to arrays of values to try

#### Optional fields:
- `sweep_metric`: The metric name to track for optimization (default: "eval/loss")

- `lower_is_better`: Whether lower metric values are better (default: true)

#### Example:

In the configuration below, we are sweeping over two parameters: learning_rate and batch_size.

```json5
{
  "name": "my-sweep-task",
  "command": "python train.py",
  "cpus": 4,
  "memory": 8,
  "parameters": {
    "epochs": 10,
    "model_type": "gpt2"
  },
  "run_sweeps": true,
  "sweep_config": {
    "learning_rate": ["1e-5", "3e-5", "5e-5"],
    "batch_size": ["4", "8"]
  },
  "sweep_metric": "eval/loss",
  "lower_is_better": true
}
```

## How It Works

1. Parameter combinations: The system generates all combinations using a Cartesian product. In the example above:

    - 3 learning rates × 2 batch sizes = 6 total jobs

2. Each job will receive:

    - The same `base parameters` (epochs: 10, model_type: "gpt2")
    - One unique combination from `sweep_config` (e.g., learning_rate: "1e-5", batch_size: "4")

3. For remote/provider-based tasks: Jobs run in parallel (each as a separate job)

4. Optimization: The `sweep_metric` is tracked for each job to identify the best configuration:
    - If `lower_is_better` is true, the job with the lowest metric value is considered best
    - If false, the highest value is best


## YAML Example

Here's a complete task YAML that you can copy and paste directly into the GUI's YAML editor:

```yaml
name: my-sweep-task
resources:
  cpus: 4
  memory: 8
run: python train.py
setup: pip install -r requirements.txt
parameters:
  epochs: 10
  model_type: "gpt2"
sweeps:
  sweep_config:
    learning_rate:
      - 1e-5
      - 3e-5
      - 5e-5
    batch_size:
      - 4
      - 8
  sweep_metric: "eval/loss"
  lower_is_better: true
  ```


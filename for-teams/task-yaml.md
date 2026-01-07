---
title: Task YAML
sidebar_position: 80
---

This guide explains how to format YAML files for creating tasks in Transformer Lab. Tasks define jobs that run on compute providers and can include training scripts, evaluation scripts, or any other computational workloads.

## Basic Structure

The basic structure of a task YAML file includes the following sections:

```yaml
name: task-name
resources:
  compute_provider: provider-name-in-your-transformerlab-workspace
  cpus: 2
  memory: 4
minutes_requested: 60
envs:
  KEY: value
setup: "command"
run: "command"
git_repo: "url"
git_repo_directory: "dir"
parameters: {...}
sweeps:
  sweep_config: {...}
  sweep_metric: "metric"
  lower_is_better: true
```

## Required Fields

### name

The task name. This will be sanitized to create a safe filename and name of the cluster on the compute provider.

**Type:** String

**Example:**

```yaml
name: my-training-task
```

## Resources Configuration

The `resources` section defines the compute resources required for the task.

### resources.compute_provider

The name of the compute provider to use. This should match a configured provider name in your workspace.

**Type:** String

**Example:**

```yaml
resources:
  compute_provider: skypilot-provider
```

**Note:** If not specified, the system will use the first available provider as a fallback.

### resources.cpus

Number of CPUs to allocate.

**Type:** Integer or String

**Example:**

```yaml
resources:
  cpus: 4
```

### resources.memory

Amount of memory to allocate (in GB).

**Type:** Integer or String

**Example:**

```yaml
resources:
  memory: 16
```

### resources.disk_space

Amount of disk space to allocate (in GB).

**Type:** Integer or String

**Example:**

```yaml
resources:
  disk_space: 100
```

### resources.accelerators

Accelerator specification (e.g., GPU type and count). Format depends on the provider. 
To look at supported formats in Skypilot, refer to their [accelerator documentation](https://docs.skypilot.co/en/stable/examples/auto-failover.html#provisioning-gpus) and for SLURM, refer to their [GPU documentation](https://slurm.schedmd.com/gres.html).

**Type:** String

**Example:**

```yaml
resources:
  accelerators: "H100:8"
```

### resources.num_nodes

Number of nodes for distributed training.

**Type:** Integer

**Example:**

```yaml
resources:
  num_nodes: 2
```

**Complete Resources Example:**

```yaml
resources:
  compute_provider: aws-ec2
  cpus: 8
  memory: 32
  disk_space: 200
  accelerators: "1xA100"
  num_nodes: 1
```

## Commands

### setup

Command(s) to run before the main task execution. This is typically used for installing dependencies, setting up the environment, or downloading data.

**Type:** String

**Example:**

```yaml
setup: "pip install -r requirements.txt"
```

**Multi-line Setup:**

```yaml
setup: |
  pip install -r requirements.txt
  apt-get update
  apt-get install -y git
  python download_data.py
```

### run

The main command to execute for the task. This is the primary script or command that performs the actual work.

**Type:** String

**Example:**

```yaml
run: "python train.py"
```

**With Arguments:**

```yaml
run: "python train.py --epochs 10 --batch-size 32"
```

**Multi-line Run:**

```yaml
run: |
  python train.py \
    --epochs 10 \
    --batch-size 32 \
    --learning-rate 2e-5
```

## Environment Variables

### envs

Environment variables to set for the task execution. These are passed as key-value pairs.

**Type:** Dictionary (key-value pairs)

**Example:**

```yaml
envs:
  CUDA_VISIBLE_DEVICES: "0"
  WANDB_API_KEY: "your-api-key"
  HF_TOKEN: "your-huggingface-token"
```

## Quota Tracking

### minutes_requested

Estimated number of minutes the task will run. This is used for quota tracking and resource allocation. When specified, a quota hold is created to reserve the estimated compute time.

**Type:** Integer

**Example:**

```yaml
minutes_requested: 60
```

**Note:** This is an optional field but recommended for tasks running on remote compute providers to enable quota tracking and better resource management.

## GitHub Integration

### git_repo

GitHub repository URL to clone before running the task. The repository will be cloned to the working directory.

**Type:** String

**Example:**

```yaml
git_repo: "https://github.com/username/repo.git"
```

### git_repo_directory

Subdirectory within the GitHub repository to use as the working directory. Useful when the repository contains multiple projects.

**Type:** String

**Example:**

```yaml
git_repo: "https://github.com/username/multi-project-repo.git"
git_repo_directory: "project1"
```

**Note**: The final path where the cloned folder would be available is either: `~/git_repo_directory` or `~/git_repo_name` (if no directory is specified).

**Complete GitHub Example:**

```yaml
git_repo: "https://github.com/transformerlab/examples.git"
git_repo_directory: "training/llm-finetuning"
setup: "pip install -r requirements.txt"
run: "python train.py"
```

## Parameters

### parameters

Task parameters (hyperparameters, configuration, etc.) that will be accessible via `lab.get_config()` in your scripts. These are passed to the job and can be used to configure the training or evaluation process.

**Type:** Dictionary (any JSON-serializable values)

**Example:**

```yaml
parameters:
  model_name: "gpt2"
  learning_rate: 2e-5
  batch_size: 8
  num_epochs: 3
  max_seq_length: 512
  warmup_ratio: 0.03
  weight_decay: 0.01
```

**Nested Parameters:**

```yaml
parameters:
  model:
    name: "gpt2"
    architecture: "GPT2LMHeadModel"
  training:
    learning_rate: 2e-5
    batch_size: 8
    num_epochs: 3
  data:
    dataset_name: "wikitext"
    max_seq_length: 512
```

**Note:** Parameters can be accessed in your Python scripts using the Lab SDK:

```python
from lab import lab

lab.init()
config = lab.get_config()
learning_rate = config.get("learning_rate")
model_name = config.get("model_name")
```

## Hyperparameter Sweeps

### sweeps

Configuration for hyperparameter sweeps. When sweeps are enabled, the system will generate multiple jobs, one for each combination of parameter values.

### sweeps.sweep_config

Dictionary mapping parameter names to lists of values to try. The system will generate jobs for all combinations of these values.

**Type:** Dictionary (parameter name -> list of values)

**Example:**

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
    batch_size: ["4", "8", "16"]
    lora_rank: ["8", "16", "32"]
```

### sweeps.sweep_metric

The metric to optimize during the sweep. This should match a metric name that your script logs (e.g., via wandb or in evaluation results).

**Type:** String

**Example:**

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
  sweep_metric: "eval/loss"
```

**Common Metrics:**

- `"eval/loss"` - Evaluation loss
- `"train/loss"` - Training loss
- `"eval/accuracy"` - Evaluation accuracy
- `"eval/f1_score"` - F1 score
- `"eval/bleu"` - BLEU score

### sweeps.lower_is_better

Whether lower values of the sweep metric are better (True) or higher values are better (False).

**Type:** Boolean

**Example:**

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
  sweep_metric: "eval/loss"
  lower_is_better: true  # Lower loss is better
```

or

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
  sweep_metric: "eval/accuracy"
  lower_is_better: false  # Higher accuracy is better
```

**Complete Sweeps Example:**

```yaml
name: hyperparameter-sweep
resources:
  compute_provider: aws-ec2
  cpus: 4
  memory: 16
  accelerators: "1xV100"
run: "python train.py"
parameters:
  model_name: "gpt2"
  dataset_name: "wikitext"
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
    batch_size: ["4", "8"]
    lora_rank: ["8", "16"]
  sweep_metric: "eval/loss"
  lower_is_better: true
```

## Complete Examples

### Example 1: Simple Training Task

```yaml
name: simple-training
resources:
  compute_provider: local
  cpus: 4
  memory: 8
minutes_requested: 30
setup: "pip install transformers torch"
run: "python train.py"
parameters:
  model_name: "gpt2"
  learning_rate: 2e-5
  batch_size: 8
  num_epochs: 3
```

### Example 2: Training Task with GitHub Repository

```yaml
name: finetune-llm
resources:
  compute_provider: skypilot-provider
  cpus: 8
  memory: 32
  accelerators: "H100:1"
minutes_requested: 120
git_repo: "https://github.com/username/llm-training.git"
git_repo_directory: "finetuning"
setup: |
  pip install -r requirements.txt
  pip install wandb
envs:
  WANDB_API_KEY: "your-api-key"
  HF_TOKEN: "your-huggingface-token"
run: "python train.py"
parameters:
  model_name: "meta-llama/Llama-2-7b-hf"
  dataset_name: "wikitext-2"
  learning_rate: 2e-5
  batch_size: 4
  gradient_accumulation_steps: 8
  num_epochs: 3
  max_seq_length: 512
  warmup_ratio: 0.03
  weight_decay: 0.01
```

### Example 3: Evaluation Task

```yaml
name: evaluate-model
resources:
  compute_provider: local
  cpus: 2
  memory: 4
setup: "pip install transformers datasets"
run: "python evaluate.py"
parameters:
  model_name: "gpt2"
  dataset_name: "wikitext"
  batch_size: 16
  max_samples: 1000
```

### Example 4: Hyperparameter Sweep

```yaml
name: lora-sweep
resources:
  compute_provider: skypilot-provider
  cpus: 4
  memory: 16
  accelerators: "H100:1"
minutes_requested: 180
git_repo: "https://github.com/username/llm-training.git"
setup: |
  pip install -r requirements.txt
  pip install wandb
envs:
  WANDB_API_KEY: "your-api-key"
run: "python train.py"
parameters:
  model_name: "gpt2"
  dataset_name: "wikitext"
  num_epochs: 3
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
    batch_size: ["4", "8"]
    lora_rank: ["8", "16", "32"]
    lora_alpha: ["16", "32", "64"]
  sweep_metric: "eval/loss"
  lower_is_better: true
```

## Best Practices

1. **Use Descriptive Names**: Choose clear, descriptive task names that indicate what the task does.

   ```yaml
   name: finetune-gpt2-wikitext  # Good
   name: task1                    # Bad
   ```

2. **Specify Resources Appropriately**: Match resources to your workload. Don't request more than you need, but ensure you have enough for the task.

   ```yaml
   # For small models
   resources:
     cpus: 4
     memory: 8
   
   # For large models
   resources:
     cpus: 16
     memory: 64
     accelerators: "1xA100"
   ```

3. **Use Setup for Dependencies**: Install dependencies in the `setup` command rather than in the `run` command.

   ```yaml
   setup: "pip install -r requirements.txt"  # Good
   run: "python train.py"
   ```

4. **Store Sensitive Data Securely**: Don't hardcode API keys or tokens in YAML files. Use environment variables or secure configuration.

   ```yaml
   # Good - use environment variables
   envs:
     WANDB_API_KEY: "${WANDB_API_KEY}"
   
   # Bad - hardcoded
   envs:
     WANDB_API_KEY: "abc123xyz"
   ```

5. **Use Parameters for Configuration**: Store hyperparameters and configuration in the `parameters` section so they're accessible via `lab.get_config()`.

   ```yaml
   parameters:
     learning_rate: 2e-5
     batch_size: 8
   ```

6. **Document Complex Sweeps**: When using sweeps, document what you're optimizing and why.

   ```yaml
   sweeps:
     # Testing different learning rates and batch sizes
     sweep_config:
       learning_rate: ["1e-5", "3e-5", "5e-5"]
       batch_size: ["4", "8"]
     sweep_metric: "eval/loss"
     lower_is_better: true
   ```

7. **Use GitHub for Code**: Store your code in a GitHub repository and reference it with `git_repo` rather than uploading files manually.

   ```yaml
   git_repo: "https://github.com/username/my-project.git"
   git_repo_directory: "training"
   ```

8. **Test Locally First**: Test your task configuration locally before running on expensive cloud resources.

   ```yaml
   resources:
     compute_provider: local  # Test locally first
   ```

9. **Use Multi-line Strings for Long Commands**: Use YAML's `|` or `>` syntax for multi-line commands.

   ```yaml
   setup: |
     pip install -r requirements.txt
     python download_data.py
     python preprocess_data.py
   ```

10. **Validate YAML Syntax**: Ensure your YAML is valid before submitting. Use a YAML validator or linter.

## Common Issues and Solutions

### Issue: YAML Parsing Errors

**Problem:** Invalid YAML syntax causes parsing errors.

**Solution:** Validate your YAML syntax. Common issues:

- Missing colons after keys
- Incorrect indentation (use spaces, not tabs)
- Unquoted strings with special characters

### Issue: Parameters Not Accessible

**Problem:** Parameters defined in YAML are not accessible via `lab.get_config()`.

**Solution:** Ensure parameters are at the root level under `parameters:` key:

```yaml
parameters:
  learning_rate: 2e-5  # Correct
```

Not:

```yaml
config:
  parameters:
    learning_rate: 2e-5  # Wrong
```

### Issue: Sweeps Not Running

**Problem:** Sweeps are defined but not generating multiple jobs.

**Solution:** Ensure the `sweeps` section includes all required fields:

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5"]
  sweep_metric: "eval/loss"  # Required
  lower_is_better: true      # Required
```

### Issue: Provider Not Found

**Problem:** `compute_provider` name doesn't match any configured provider.

**Solution:** Check the exact provider name in your workspace. The system will use the first available provider as a fallback, but it's better to specify the correct name.

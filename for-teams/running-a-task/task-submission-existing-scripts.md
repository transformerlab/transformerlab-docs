---
title: Using Existing Training Scripts Inside Tasks
sidebar_position: 7
---

If your tasks already launch your own training or evaluation scripts (via the `run:` command in `task.yaml`), you do **not** need to rewrite those scripts for Transformer Lab.

You only need to add a few small lab SDK calls so that:

- Jobs launched through Transformer Lab can track your run.
- Metrics, logs, and artifacts are visible on the job detail page.
- The same script can be reused both locally and under Lab‑launched jobs.


## High‑level idea

The lab SDK exposes a `Lab` sdk (imported as `lab`) that:

- Detects whether it is running under a Lab‑launched job
- Creates a new job locally if no job environment is present (e.g., when you run the script directly).

A minimal pattern looks like:

```python
from lab import lab


def main():
    # When launched from a Transformer Lab task, this will:
    # - Attach to the job indicated by Transformer Lab
    # When run locally, it will create a new experiment/job as needed.
    lab.init()

    # Get the parameters from the task configuration
    config = lab.get_config()

    # Run your existing training or evaluation loop
    for step in range(num_steps):
        loss = train_step(...)
        lab.log(f"Step {step}: loss={loss:.4f}")

    # Mark the job as finished and record final metrics
    lab.finish("success", score={"train/loss": loss})


if __name__ == "__main__":
    main()
```

The core lifecycle is `lab.init() → lab.get_config() → lab.log() → lab.finish()`.


## 1. Import the lab package

At the top of your script, import `lab` from the lab SDK:

```python
from lab import lab
```

This gives you an object that wraps the underlying `Experiment` and `Job` types and knows how to:

- Create or get an experiment.
- Create or attach to a job.
- Update job status and job data.


## 2. Initialize the job

Call `lab.init()` at the start of your main entrypoint (before you start training or evaluation):

```python
lab.init()
```

`lab.init()` behaves as follows:

- **When your script is launched from a task via a provider**, Transformer Lab sends some information which is used by `lab.init()` to detect this and connect to the job which launched the provider.
- **When you run the same script manually** (no job environment), you can:
  - Let it fall back to the default experiment, or
  - Pass an explicit `experiment_id`:

    ```python
    lab.init(experiment_id="my-local-experiment")
    ```


## 3. Get the configuration (optional)

Use `lab.get_config()` to get the parameters from the task configuration:

```python
config = lab.get_config()
```

This returns a dictionary of parameters defined in your task configuration during launch.


## 4. Log progress and metrics during training or evaluation

As your script runs, use `lab.log()` to record progress and key values:

```python
for step in range(num_steps):
    loss = train_step(...)
    lab.log(f"Step {step}: train/loss={loss:.4f}")
```

You can log:

- Training and validation loss/accuracy.
- Evaluation metrics (BLEU, ROUGE, F1, etc.).
- Any other scalar values relevant to your task.

These logs are stored with the job and visible in the Transformer Lab UI. For sweeps, pass final metrics via `lab.finish(..., score={"eval/loss": value, ...})` so the sweep can compare runs.


## 5. Finish the job

When your script is done (whether it succeeded or failed), call:

```python
lab.finish("success")
# Or with final metrics for sweeps:
lab.finish("success", score={"eval/loss": 0.42, "accuracy": 0.91})
```

You can pass any completion message that makes sense for your workflow (e.g., `"success"`, `"failed"`):

- The status is written to the job record.
- The UI can use it to distinguish successful and failed runs.

Even if you forget to call `finish`, the job may still be marked as completed by the underlying provider logic, but calling it explicitly makes the lifecycle clearer and more consistent in the UI.


## 6. Connect your script to tasks

With the lab facade in place, you can wire your script into tasks as follows:

1. Place your script (for example, `train.py`) in a directory.
2. Create a `task.yaml` in the same directory, specifying:
   - `run: "python train.py"` (or the appropriate entrypoint).
   - Any resource requirements (`resources`).
   - Optional `parameters` and `sweeps`.
3. Register the task:
   - Via GUI (drag‑and‑drop a folder with `task.yaml`), or
   - Via CLI:

     ```bash
     lab task add path/to/your-task-dir
     ```

4. Queue the task:
   - From the GUI, using the **Queue** action in the **Tasks** tab for your experiment.
   - From the CLI:

     ```bash
     lab task queue <task-id>
     ```

Because your script now calls `lab.init()`:

- When the provider launches your script, Transformer Lab ensures the script attaches to the correct job automatically.


## Where to go next

- For the exact GUI behavior around parameters, sweeps, and provider selection, see [this link](task-submission-gui.md).
- For CLI commands (`lab task add`, `lab task queue`, and job inspection), click [here](task-submission-cli.md).
- For full details on how to configure `parameters` and `sweeps` in `task.yaml` so that sweeps are correctly expanded on the backend, check [this out](task-submission-advanced.md).
---
title: Working with Checkpoints
sidebar_position: 36
---

## What is a Checkpoint?

A **Checkpoint** is a saved snapshot of your job's state at a specific point in time. In machine learning workflows, this is typically the model weights during a specific iteration / epoch.

Creating checkpoints allows you to recover in the event of a failure or crash.

This is especially helpful when using spot instances which are more likely to be terminated during a run.

## Creating Checkpoints

### Manual Checkpoint Saving

To save a checkpoint manually, use the `lab.save_checkpoint()` function within the Transformer Lab Python SDK. This function takes the path to your checkpoint file or directory and optionally a name for the checkpoint.

```python
from lab import lab

# Initialize lab
lab.init(experiment_id="my_experiment")

# Inside your training loop - save a checkpoint file
checkpoint_file = "/path/to/your/checkpoint.pt"
saved_path = lab.save_checkpoint(checkpoint_file, name="epoch_5_checkpoint.pt")
lab.log(f"Saved checkpoint: {saved_path}")

# Or save an entire checkpoint directory (common with HuggingFace models)
checkpoint_dir = "/path/to/checkpoint-1000"
saved_path = lab.save_checkpoint(checkpoint_dir, name="checkpoint-1000")

```

The function will copy your checkpoint to the job's checkpoints folder and track it in the job metadata.

### Automatic Checkpoint Saving with LabCallback

If you're using HuggingFace's `Trainer` or `SFTTrainer`, you can enable automatic checkpoint saving using the built-in `LabCallback`. This callback automatically saves checkpoints to TransformerLab whenever the Trainer saves a checkpoint.

```python
from lab import lab
from transformers import Trainer, TrainingArguments

# Initialize lab
lab.init(experiment_id="my_experiment")

# Get the automatic checkpoint callback
callback = lab.get_hf_callback()

# Configure training arguments with checkpoint saving
training_args = TrainingArguments(
    output_dir="./checkpoints",
    save_steps=500,  # Save checkpoint every 500 steps
    save_strategy="steps",
    save_total_limit=3,  # Keep only the last 3 checkpoints
)

# Create trainer with the callback
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset,
    callbacks=[callback],  # Add the callback here
)
# Start training - checkpoints will be saved automatically
trainer.train()
```


The `LabCallback` automatically:

- Saves checkpoints to Transformer Lab when the Trainer creates them
- Updates training progress in the UI
- Logs training metrics (loss, etc.)
- Tracks epoch completion

## Managing Checkpoints

### Viewing Checkpoints
You can view all saved checkpoints directly in the Jobs panel.

A list of all saved snapshots will appear, displaying their timestamps and associated metadata.

### Restarting from a Checkpoint
If you wish to fork a job or retry a specific run from a previous state:

Open the Checkpoints list for the job.

Find the specific checkpoint you wish to use.

Click **Restart from Checkpoint**.

This will launch a new job initialized with the data saved in that snapshot.

### Handling Failures & Auto-Recovery

Transformer Lab is designed to handle interruptions gracefully. If your training script is written correctly, it will automatically resume from the last successful checkpoint in the event of a crash or interruption.

To enable this, your script must check for existing checkpoints upon startup and load them if found.

Sample Code: View a robust implementation of auto-recovery logic in [our GitHub Repository here](https://github.com/transformerlab/transformerlab-sdk/blob/main/scripts/examples/trl_train_script.py)

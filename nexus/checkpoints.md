---
title: Working with Checkpoints
sidebar_position: 36
---

## What is a Checkpoint?

A **Checkpoint** is a saved snapshot of your job's state at a specific point in time. In machine learning workflows, this is typically the model weights during a specific iteration / epoch.

Creating checkpoints allows you to recover in the event of a failure or crash.

This is especially helpful when using spot instances which are more likely to be terminated during a run.

## Creating Checkpoints

To save a checkpoint, use the `lab.save_checkpoint()` function within the Transformer Lab Python SDK. You can call this function periodically within your training loop (e.g., every epoch or every 1000 steps).

```python
import transformerlab_sdk as lab

# Inside your training loop
lab.save_checkpoint()
```

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

Sample Code: View a robust implementation of auto-recovery logic in [our GitHub Repository here]

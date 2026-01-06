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

When you define your Task JSON, use square brackets `[]` to provide multiple options for a specific key.

**Example:**
In the configuration below, we are sweeping over two parameters: `learning_rate` and `batch_size`.

```json
{
  "name": "Llama-Fine-Tune-Sweep",
  "run": "python train.py",
  "env": {
    "NUM_EPOCHS": 3,
    // This parameter has a single value (No Sweep)
    "OPTIMIZER": "adamw",
    // This parameter has 3 values -> Creates 3 variations
    "LEARNING_RATE": [1e-4, 2e-5, 5e-5],
    // This parameter has 2 values -> Creates 2 variations
    "BATCH_SIZE": [8, 16]
  }
}
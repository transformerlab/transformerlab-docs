---
title: Job SDK
sidebar_position: 40
---

:::info

Full documentation is coming in the upcoming days. Until then, please reach out through discord or our signup form.

:::

This guide will help you integrate the SDK into your Python scripts to monitor and manage your machine learning experiments. The SDK is designed to be lightweight and simple, allowing you to track progress, log messages, and save important files with minimal effort.

## Core Concepts

The SDK revolves around the `lab` object, which provides a set of procedures to interact with the Transformer Lab environment from within your job script.

1. Initialization

Before you can use any other function, you must initialize the experiment. This tells Transformer Lab that a new job is starting and links all subsequent logs and artifacts to a specific experiment name.

`lab.init(experiment_name: str)`

Parameters: experiment_name (string): The name of your experiment. This is used to group and identify your runs.

2. Tracking Progress

To monitor how far along your job is, you can send progress updates. This is especially useful for long-running training or data processing tasks.

`lab.progress(value: int)`

Purpose: Updates the progress bar for the job in the Transformer Lab UI.

Parameters: `value` (integer): A number between 0 and 100 representing the percentage of completion.

3. Logging

You can send text-based logs to see real-time output from your script. This is useful for debugging, printing metrics, or tracking specific events.

`lab.log(message: str)`

Purpose: Sends a string message to the job's log stream.

Parameters: `message` (string): The content you wish to log.

4. Saving Artifacts

At the end of a job, you often have files you want to keep, such as trained models, datasets, or result plots. The SDK provides a way to save these.

`lab.save_artifact(filepath: str)`

Purpose: Uploads and saves a file from your job's execution environment to the experiment's artifact storage.

Parameters: `filepath` (string): The local path to the file you want to save.

## Simple Usage Example

Below is a basic Python script demonstrating how to use the SDK. It simulates a simple task that runs for a short period, logs its progress, and saves a result file.

```python
import transformer_lab as lab
import time
import os

# 1. Initialize the experiment
lab.init(experiment_name="alpha-test-run")

# 2. Simulate a task and report progress/logs
total_steps = 10
for step in range(total_steps):
    print(f"Working on step {step + 1}/{total_steps}...")
    time.sleep(1.5) # Simulate work being done
    progress_percentage = int(((step + 1) / total_steps) * 100)

    # 3. Update progress and log a message
    lab.progress(value=progress_percentage)
    lab.log(f"Completed step {step + 1}. Progress: {progress_percentage}%")

# 4. Create and save an artifact
results_content = "Epoch 10/10, Accuracy: 98.7%"
file_to_save = "final_results.txt"
with open(file_to_save, "w") as f:
    f.write(results_content)

lab.save_artifact(file_to_save)
lab.log(f"Successfully saved artifact: {file_to_save}")

# Clean up local file
os.remove(file_to_save)

lab.log("Experiment finished successfully!")
```
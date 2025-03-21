---
sidebar_position: 4
---
# Creating a Trainer Plugin Script

This guide explains how to adapt your existing training scripts to work with Transformer Lab using the `tlab_trainer` decorator class. By integrating with Transformer Lab, your training scripts gain progress tracking, parameter management, dataset handling, and integrated logging with minimal code changes. This is a part of the active development we are conducting with the Transformer Lab Plugin SDK to make integrating third-party plugins easier.

## What is `tlab_trainer`?

`tlab_trainer` is a decorator class that helps integrate your training script with Transformer Lab's job management system. It provides:

- Argument parsing and configuration loading
- Dataset loading helpers
- Progress tracking and reporting
- Job status management
- Integration with TensorBoard and Weights & Biases

## Getting Started

### 1. Import the decorator

Add this import to your training script:

```python
from transformerlab.sdk.v1.train import tlab_trainer
```

### 2. Decorate your main training function

Wrap your main training function with the `job_wrapper` decorator:

```python
@tlab_trainer.job_wrapper(
    wandb_project_name="my_project",  # Optional: Set a custom Weights & Biases project name
    manual_logging=False  # Optional: Set to True for manual metric logging
)
def train_model():
    # Your training code here
    pass

```

The decorator parameters include:

- `progress_start` and `progress_end`: Define the progress range (typically 0-100). These are optional fields and will typically track from 0 to 100 if not tracked.
- `wandb_project_name`: Optional custom name for your Weights & Biases project. Default is `TLAB_Training`
- `manual_logging`: Set to `True` for training scripts without automatic logging integration. Default is `False`.

**Note**: There is also an async version of the job wrapper available for functions which might need to run asynchronously. This can be used by just changing ```@tlab_trainer.job_wrapper``` to ```@tlab_trainer.async_job_wrapper```.


### 3. Use helper methods

Replace parts of your code with `tlab_trainer` helper methods:

- For dataset loading: `tlab_trainer.load_dataset()`
- For progress tracking: `tlab_trainer.create_progress_callback()`
- For storing anything to the job data (optional): `tlab_trainer.add_job_data(key, value)`

## Complete example

Here's how a typical training script can be adapted to use `tlab_trainer`:

```python
import argparse
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments, Trainer
from datasets import load_dataset

# Parse command line arguments
def parse_args():
    parser = argparse.ArgumentParser(description="Train a model")
    parser.add_argument("--model_name", type=str, required=True, help="Model to train")
    parser.add_argument("--dataset_name", type=str, required=True, help="Dataset to use")
    parser.add_argument("--output_dir", type=str, default="./output", help="Output directory")
    parser.add_argument("--learning_rate", type=float, default=2e-5, help="Learning rate")
    parser.add_argument("--num_train_epochs", type=int, default=3, help="Number of epochs")
    parser.add_argument("--batch_size", type=int, default=8, help="Batch size for training")
    parser.add_argument("--max_length", type=int, default=512, help="Max sequence length")
    return parser.parse_args()

def train_model():
    # 1. Parse arguments
    args = parse_args()
    
    # 2. Load dataset
    dataset = load_dataset(args.dataset_name)["train"]
    
    # 3. Load model and tokenizer
    model = AutoModelForCausalLM.from_pretrained(args.model_name)
    tokenizer = AutoTokenizer.from_pretrained(args.model_name)
    
    # 4. Setup training arguments
    training_args = TrainingArguments(
        output_dir=args.output_dir,
        learning_rate=args.learning_rate,
        num_train_epochs=args.num_train_epochs,
        per_device_train_batch_size=args.batch_size,
        max_length=args.max_length,
        # other arguments...
    )
    
    # 5. Create trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset,
        tokenizer=tokenizer,
    )
    
    # 6. Train and save
    trainer.train()
    trainer.save_model(args.output_dir)
    
    print(f"Model saved to {args.output_dir}")

# Call the function
if __name__ == "__main__":
    train_model()
```


### Adapted Script with `tlab_trainer`

```python
from transformerlab.sdk.v1.train import tlab_trainer
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments, Trainer


@tlab_trainer.job_wrapper(progress_start=0, progress_end=100)
def train_model():
    # 1. Load dataset with helper
    datasets = tlab_trainer.load_dataset()
    dataset = datasets["train"]
    
    # 2. Load model and tokenizer (same as before)
    model = AutoModelForCausalLM.from_pretrained(tlab_trainer.model_name)
    tokenizer = AutoTokenizer.from_pretrained(tlab_trainer.model_name)
    
    # 3. Setup training arguments with parameters from Transformer Lab
    training_args = TrainingArguments(
        output_dir=tlab_trainer.params.output_dir,
        learning_rate=float(tlab_trainer.params.learning_rate),
        num_train_epochs=int(tlab_trainer.params.num_train_epochs),
        report_to=tlab_trainer.report_to,
        # other arguments...
    )
    
    # 4. Create progress callback
    progress_callback = tlab_trainer.create_progress_callback(framework="huggingface")
    
    # 5. Create trainer with callback
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset,
        tokenizer=tokenizer,
        callbacks=[progress_callback],
    )
    
    # 6. Train and save
    trainer.train()
    trainer.save_model(tlab_trainer.output_dir)
    
    return True

# Call the function
train_model()
```

## Key Differences

1. **Decorator**: Added `@tlab_trainer.job_wrapper` to wrap the function
2. **Dataset Loading**: Used `tlab_trainer.load_dataset()` instead of direct loading
3. **Parameter Access**: Accessed parameters via `tlab_trainer.parameter_name` or `getattr(tlab_trainer, "parameter_name", default_value)`
4. **Progress Tracking**: Added `tlab_trainer.create_progress_callback(framework="huggingface")` for reporting progress
5. **Return Value**: The return value could be anything, but it's recommended to return a boolean to indicate success/failure. The job wrapper will handle catching the errors and report them accordingly.

## Parameter Access

Parameters are automatically loaded from the Transformer Lab configuration. You can access them in several ways:

1. **Direct access** (if sure the parameter exists): `tlab_trainer.params.<parameter_name>`
2. **Safe access with default** (recommended): `tlab_trainer.params.get(<parameter_name>, <default_value>)`

Common parameters include:

- `tlab_trainer.params.model_name`: Model to use for training
- `tlab_trainer.params.dataset_name`: Dataset to use
- `tlab_trainer.params.output_dir`: Directory for saving outputs
- `tlab_trainer.params.num_train_epochs`: Number of training epochs
- `tlab_trainer.params.batch_size`: Batch size for training
- `tlab_trainer.params.learning_rate`: Learning rate

## Progress Reporting

Transformer Lab expects progress updates from 0 to 100. Use these methods:

1. **Create callback**: Create a progress callback with `tlab_trainer.create_progress_callback(framework="huggingface")` and fetch it to your trainer. 
2. **Manual updates**: For custom loops, use `tlab_trainer.progress_update(progress)` where progress is 0-100


## Manual Metric Logging

For training scripts that don't have automatic integration with logging platforms like Huggingface Trainer does, you can use manual logging:

1. **Enable manual logging**: Set `manual_logging=True` in the decorator
2. **Log metrics**: Use `tlab_trainer.log_metric(name, value, step)` to log metrics during training

Example with a custom training loop:

```python
@tlab_trainer.job_wrapper(manual_logging=True)
def train_model():
    # Setup model, data, etc.
    
    total_steps = 1000
    for step in range(total_steps):
        # Training logic here
        loss = model.train_step(batch)
        
        # Log metrics manually
        tlab_trainer.log_metric("train/loss", loss.item(), step)
        tlab_trainer.log_metric("train/lr", scheduler.get_last_lr()[0], step)
        
        # Update progress
        progress = (step / total_steps) * 100
        tlab_trainer.progress_update(progress)
```

The `log_metric` function automatically handles logging to both Tensorboard and Weights & Biases (if enabled), so you don't need separate code paths for different logging backends.



## Best Practices

1. **Error Handling**: The decorator handles basic error reporting, but include try/except blocks for specific operations
2. **Parameter Access**: Always use `.get()` with sensible defaults for optional parameters

## Summary

By following this guide, you can quickly adapt your existing training scripts to work within the Transformer Lab ecosystem, gaining parameter management, progress tracking, and integrated logging with minimal code changes.

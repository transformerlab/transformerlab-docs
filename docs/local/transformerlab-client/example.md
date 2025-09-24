---
sidebar_position: 3
---

# Example Training Script

This page provides a full working example of using the Transformer Lab Client for fine-tuning a language model. The example demonstrates the entire workflow from initialization to model saving, with proper progress reporting and error handling.

## Overview

This example demonstrates how to:

1. Initialize a Transformer Lab client and register a training job
2. Load and process a dataset for language model fine-tuning
3. Configure and train a model using Hugging Face Transformers
4. Report progress and metrics to Transformer Lab
5. Handle errors and completion properly

## Prerequisites

- transformerlab-client
- transformers
- datasets
- torch
- A running Transformer Lab server

## Complete Example Script

Below is the complete example script for fine-tuning a small language model on instruction data:

```python
import os
from datetime import datetime
from pprint import pprint

from datasets import load_dataset
from transformerlab_client.callbacks.hf_callback import TLabProgressCallback
from transformerlab_client.client import TransformerLabClient
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    DataCollatorForLanguageModeling,
    Trainer,
    TrainingArguments,
)


def train():
    """Main training function that runs locally but reports to TransformerLab"""

    # Training configuration
    training_config = {
        "experiment_name": "alpha",
        "model_name": "HuggingFaceTB/SmolLM-135M-Instruct",
        "dataset": "Trelis/touch-rugby-rules",
        "template_name": "full-demo",
        "output_dir": "./output",
        "log_to_wandb": False,
        "_config": {
            "dataset_name": "Trelis/touch-rugby-rules",
            "lr": 2e-5,
            "num_train_epochs": 1,
            "batch_size": 8,
            "gradient_accumulation_steps": 1,
            "warmup_ratio": 0.03,
            "weight_decay": 0.01,
            "max_seq_length": 512,
        },
    }

    # Initialize TransformerLab client
    tlab_client = TransformerLabClient()
    job_id = tlab_client.start(training_config)

    # Create output directory if it doesn't exist
    os.makedirs(training_config["output_dir"], exist_ok=True)

    try:
        # Log start time
        start_time = datetime.now()
        tlab_client.log_info(f"Training started at {start_time}")

        # Load the dataset
        tlab_client.log_info("Loading dataset...")
        dataset = load_dataset(training_config["dataset"])
        tlab_client.log_info(f"Loaded dataset with {len(dataset['train'])} training examples")

        # Report progress to TransformerLab
        tlab_client.report_progress(10, {"status": "dataset_loaded"})

        # Load tokenizer and model
        tlab_client.log_info(f"Loading model: {training_config['model_name']}")
        tokenizer = AutoTokenizer.from_pretrained(training_config["model_name"])
        model = AutoModelForCausalLM.from_pretrained(
            training_config["model_name"],
            device_map="auto",
        )

        # Configure tokenizer
        if not tokenizer.pad_token_id:
            tokenizer.pad_token = tokenizer.eos_token

        # Report progress
        tlab_client.report_progress(20, {"status": "model_loaded"})

        # Process dataset
        def format_instruction(example):
            """Format instruction and response using template"""
            instruction = example["prompt"]
            response = example["completion"]

            # Simple Llama-3 instruction template
            if training_config["template_name"] == "llama3instruct":
                formatted = f"<|begin_of_text|><|prompt|>{instruction}<|response|>{response}<|end_of_text|>"
            else:
                # Default simple template
                formatted = f"Instruction: {instruction}\n\nResponse: {response}"

            return {"formatted_text": formatted}

        tokenized_dataset = dataset.map(format_instruction)

        # Tokenize dataset
        def tokenize_function(examples):
            return tokenizer(
                examples["formatted_text"],
                padding="max_length",
                truncation=True,
                max_length=training_config["_config"]["max_seq_length"],
                return_tensors="pt",
            )

        processed_dataset = tokenized_dataset.map(
            tokenize_function, batched=True, remove_columns=tokenized_dataset["train"].column_names
        )

        # Report progress
        tlab_client.report_progress(30, {"status": "dataset_processed"})

        # Setup training arguments
        training_args = TrainingArguments(
            output_dir=os.path.join(training_config["output_dir"], f"job_{job_id}"),
            learning_rate=training_config["_config"]["lr"],
            num_train_epochs=training_config["_config"]["num_train_epochs"],
            per_device_train_batch_size=training_config["_config"]["batch_size"],
            gradient_accumulation_steps=training_config["_config"]["gradient_accumulation_steps"],
            warmup_ratio=training_config["_config"]["warmup_ratio"],
            weight_decay=training_config["_config"]["weight_decay"],
            logging_steps=20,
            save_steps=500,
            save_total_limit=2,
            report_to=[],  # We'll handle reporting to TransformerLab ourselves
        )

        # Setup trainer
        trainer = Trainer(
            model=model,
            args=training_args,
            train_dataset=processed_dataset["train"],
            data_collator=DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False),
            callbacks=[TLabProgressCallback(tlab_client)],
        )

        # Train the model
        tlab_client.log_info("Starting training...")
        trainer.train()

        # Save the final model
        tlab_client.log_info("Saving model...")
        trainer.save_model(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))
        tokenizer.save_pretrained(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))
        tlab_client.log_info("Saving model in Transformer Lab")
        tlab_client.save_model(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))

        # Calculate training time
        end_time = datetime.now()
        training_duration = end_time - start_time
        tlab_client.log_info(f"Training completed in {training_duration}")

        # Complete the job in TransformerLab
        tlab_client.complete()

        return {
            "status": "success",
            "job_id": job_id,
            "duration": str(training_duration),
            "output_dir": os.path.join(training_config["output_dir"], f"final_model_{job_id}"),
        }

    except KeyboardInterrupt:
        tlab_client.log_warning("Training interrupted by user or remotely")
        tlab_client.stop("Training stopped by user or remotely")
        return {"status": "stopped", "job_id": job_id}

    except Exception as e:
        tlab_client.log_error(f"Training failed: {str(e)}")
        import traceback

        traceback.print_exc()
        tlab_client.stop(f"Training failed: {str(e)}")
        return {"status": "error", "job_id": job_id, "error": str(e)}


if __name__ == "__main__":
    result = train()
    pprint(result)
```

## Explanation

Let's break down the key components of this example:

### 1. Training Configuration

The script starts by defining a configuration dictionary with all the necessary parameters for training:

```python
training_config = {
    "experiment_name": "alpha",
    "model_name": "HuggingFaceTB/SmolLM-135M-Instruct",
    "dataset": "Trelis/touch-rugby-rules",
    "template_name": "full-demo",
    "output_dir": "./output",
    "log_to_wandb": False,
    "_config": {
        "dataset_name": "Trelis/touch-rugby-rules",
        "lr": 2e-5,
        "num_train_epochs": 1,
        "batch_size": 8,
        "gradient_accumulation_steps": 1,
        "warmup_ratio": 0.03,
        "weight_decay": 0.01,
        "max_seq_length": 512,
    },
}
```

This configuration contains:
- Basic experiment information (name, model, dataset)
- Output directory for saving results
- Training hyperparameters in the `_config` nested dictionary

### 2. Client Initialization

The script initializes the TransformerLab client and registers a new training job:

```python
tlab_client = TransformerLabClient()
job_id = tlab_client.start(training_config)
```

The `start()` method registers the job with Transformer Lab and returns a unique job ID.

### 3. Progress Reporting

Throughout the script, progress is reported at key milestones:

```python
# Manual progress reporting at key points
tlab_client.report_progress(10, {"status": "dataset_loaded"})
tlab_client.report_progress(20, {"status": "model_loaded"})
tlab_client.report_progress(30, {"status": "dataset_processed"})
```

Progress values are percentages (0-100) and can include additional metrics as a dictionary.

### 4. Logging

The client provides various logging methods to keep track of events:

```python
tlab_client.log_info("Loading dataset...")
tlab_client.log_info(f"Loaded dataset with {len(dataset['train'])} training examples")
```

These logs appear both in the console and in the Transformer Lab interface.

### 5. Callback Integration

The script uses the TLabProgressCallback to automatically report progress during training:

```python
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=processed_dataset["train"],
    data_collator=DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False),
    callbacks=[TLabProgressCallback(tlab_client)],  # Add the callback here
)
```

This callback automatically updates progress based on the training steps without requiring manual progress calls during the training loop.

### 6. Error Handling

The script includes comprehensive error handling to ensure that TransformerLab is properly updated if an error occurs:

```python
except KeyboardInterrupt:
    tlab_client.log_warning("Training interrupted by user or remotely")
    tlab_client.stop("Training stopped by user or remotely")
    return {"status": "stopped", "job_id": job_id}

except Exception as e:
    tlab_client.log_error(f"Training failed: {str(e)}")
    import traceback

    traceback.print_exc()
    tlab_client.stop(f"Training failed: {str(e)}")
    return {"status": "error", "job_id": job_id, "error": str(e)}
```

This ensures that the job is properly marked as stopped or failed in Transformer Lab if something goes wrong.

### 7. Completion and Model Saving

When training completes successfully, the model is saved and the job is marked as complete:

```python
# Save the model locally
trainer.save_model(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))
tokenizer.save_pretrained(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))

# Notify Transformer Lab about the saved model
tlab_client.save_model(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))

# Mark job as complete
tlab_client.complete()
```

## Running the Example

To run this example:

1. Make sure Transformer Lab is running
2. Install the required packages:
   ```python
   pip install transformerlab-client transformers datasets torch
   ```
3. Save the script to a file (e.g., `train_with_tlab.py`)
4. Run the script:
   ```python
   python train_with_tlab.py
   ```

You can monitor the progress in the Transformer Lab interface, where you'll see real-time updates of progress, metrics, and logs.

## Additional Tips

- **Template Customization**: Modify the `format_instruction` function to use different chat templates for other models
- **Dataset Customization**: Replace `load_dataset()` with your own dataset loading logic if needed
- **Configuration**: Customize the `training_config` dictionary to suit your specific needs
- **Error Handling**: Add more specific error handling for your use case

This example serves as a starting point that you can adapt for your own model training workflows.
---
sidebar_position: 1
---

# Transformer Lab Client

The `transformerlab-client` package provides Python interfaces for interacting with [Transformer Lab](https://github.com/transformerlab), enabling you to integrate your machine learning workflows with Transformer Lab's monitoring and management capabilities.

## Overview

Transformer Lab Client allows you to:

- Track training jobs in Transformer Lab
- Report progress and metrics from model training
- Log information and errors to the Transformer Lab interface
- Integrate with Hugging Face Transformers workflows via callback system

This library bridges the gap between your training code and the Transformer Lab platform, allowing you to monitor and manage your machine learning experiments through a unified interface.

## Installation

Install the package using pip:

```bash
pip install transformerlab-client
```

## Requirements
- Python 3.10 or newer
- A running instance of the Transformer Lab API server
    - Default connection is to http://localhost:8338
    - The Transformer Lab application must be running before using this client

## Quick Start

Here's a basic example of using the client with a Hugging Face training workflow:

```python
from transformers import TrainingArguments, Trainer
from transformerlab_client.client import TransformerLabClient
from transformerlab_client.callbacks.hf_callback import TLabProgressCallback

# Initialize the client
client = TransformerLabClient(server_url="<ENTER YOUR SERVER URL HERE>")

# Register your training job
job_id = client.start({
    "name": "My Training Job",
    "description": "Fine-tuning a language model"
})

# Configure Hugging Face training with the TLab callback
training_args = TrainingArguments(
    output_dir="./output",
    num_train_epochs=3,
    per_device_train_batch_size=8,
    save_steps=500
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    callbacks=[TLabProgressCallback(client)]  # Add Transformer Lab callback for HF based trainers for effortless integration
)

# Train the model
trainer.train()

# Mark the job as complete
client.complete("Training completed successfully")
```

This example shows how to initialize a client, register a training job, add the progress callback to a Hugging Face Trainer, and properly complete the job when training finishes.

## Next Steps

Explore the following sections to learn more about using the Transformer Lab Client:

- [API Reference](/docs/transformerlab-client/api-reference):
    - Detailed documentation of client methods
    - Using callbacks for integration with ML frameworks
- [Example Training Script](/docs/transformerlab-client/example):
    - A complete example of a training script using the client





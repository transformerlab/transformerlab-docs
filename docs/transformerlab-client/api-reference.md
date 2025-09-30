---
sidebar_position: 2
---

# API Reference

This page documents the classes and methods provided by the `transformerlab-client` library.

## TransformerLabClient

The main client for interacting with the Transformer Lab API. This client handles communication with the server, job management, progress reporting, and logging.

### Initialization

```python
from transformerlab_client.client import TransformerLabClient

client = TransformerLabClient(
    server_url="http://localhost:8338",  # Optional: defaults to this URL but you can enter the server URL where your API is running
    sdk_version="v1",                    # Optional: API version
    log_file=None                        # Optional: path to log file
)
```

**Parameters:**

- `server_url` (str, optional): URL of the Transformer Lab server. Defaults to "http://localhost:8338".
- `sdk_version` (str, optional): API version to use. Defaults to "v1".
- `log_file` (str, optional): Path to log file. If not provided, a timestamped log file will be created.

### Methods

#### start

Register a new training job with Transformer Lab and get a job ID.

```python
job_id = client.start(config)
```

**Parameters:**

- `config` (dict): Configuration for the job with information like name, description, etc.

**Returns:**

- `str`: Job ID that can be used to reference this job

**Raises:**

- `Exception`: If job registration fails

**Example:**

```python
job_id = client.start({
    "name": "BERT Fine-tuning",
    "description": "Fine-tuning BERT for text classification",
    "model_type": "bert-base-uncased",
    "task": "text-classification"
})
```

#### report_progress

Report training progress and metrics to Transformer Lab.

```python
result = client.report_progress(progress, metrics=None)
```

**Parameters:**

- `progress` (float): Progress value between 0 and 100
- `metrics` (dict, optional): Dictionary of metrics to report (e.g., loss, accuracy)

**Returns:**

- `bool`: True if reporting was successful or if rate-limiting prevented reporting, False if job was stopped remotely

**Example:**

```python
client.report_progress(25.5, {
    "loss": 2.34,
    "accuracy": 0.67,
    "learning_rate": 5e-5
})
```

**Note:** Progress reporting is rate-limited to once per second to prevent overwhelming the server.

#### complete

Mark the job as completed successfully.

```python
client.complete(message="Training completed successfully")
```

**Parameters:**

- `message` (str, optional): Completion message. Defaults to "Training completed successfully".

#### stop

Mark the job as stopped (not completed).

```python
client.stop(message="Training stopped")
```

**Parameters:**

- `message` (str, optional): Message explaining why the job was stopped. Defaults to "Training completed successfully".

#### save_model

Notify Transformer Lab about a saved model.

```python
client.save_model(saved_model_path)
```

**Parameters:**

- `saved_model_path` (str): Path where the model was saved

**Example:**

```python
client.save_model("./output/my_model")
```


#### Logging Methods

The client provides several logging methods that log to both console and file, and update the output file in Transformer Lab:

```python
client.log_info("Training started with batch size 8")
client.log_warning("Learning rate seems too high")
client.log_error("Failed to load validation dataset")
client.log_debug("Processing batch 42/100")
client.log_critical("Out of memory error occurred")
```

Each method takes a string message parameter.


## Callbacks

Callbacks provide an easy way to integrate Transformer Lab reporting with various training frameworks. This section documents the available callbacks and how to use them.

### TLabProgressCallback

`TLabProgressCallback` is a callback implementation for Hugging Face's Transformers library that automatically reports training progress and metrics to Transformer Lab. It inherits from `TrainerCallback` and hooks into the Hugging Face training loop, making integration effortless.

#### Usage

To use the callback with Hugging Face's Trainer:

```python
from transformers import TrainingArguments, Trainer
from transformerlab_client.client import TransformerLabClient
from transformerlab_client.callbacks.hf_callback import TLabProgressCallback

# Initialize the client
client = TransformerLabClient(server_url="...")

# Register your training job
job_id = client.start({
    "template_name": "BERT Fine-tuning",
    "description": "Fine-tuning BERT for text classification"
})

# Set up your model, dataset, etc.
# ...

# Configure Hugging Face training with the callback
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
    callbacks=[TLabProgressCallback(client)]  # Add the callback here
)

# Train the model - progress will be automatically reported
trainer.train()

# Complete the job
client.complete("Training completed successfully")
```

#### Initialization Parameters

- `tlab_client` (TransformerLabClient): An initialized Transformer Lab client instance

#### How It Works

The callback integrates with Hugging Face's Trainer at two key points:

1. **Step End**: After each training step, it calculates the current progress percentage and reports it to Transformer Lab along with metrics like loss. If the job is stopped remotely through Transformer Lab, it signals the trainer to stop training.

2. **Log Events**: Whenever Hugging Face's Trainer logs metrics, the callback captures these metrics and reports them to Transformer Lab.

The callback automatically maps training progress to a range between 30% and 90% of the overall job progress, leaving room for initialization (0-30%) and finalization (90-100%) phases.

#### Advanced Usage

You can customize the callback by subclassing it:

```python
class MyCustomCallback(TLabProgressCallback):
    def __init__(self, tlab_client, custom_param=None):
        super().__init__(tlab_client)
        self.custom_param = custom_param
    
    def on_step_end(self, args, state, control, **kwargs):
        # Custom logic before reporting progress
        if self.custom_param:
            # Do something special
            pass
        
        # Call parent method to report progress
        super().on_step_end(args, state, control, **kwargs)
```

This callback system makes integrating Transformer Lab with Hugging Face Transformers training workflows seamless and requires minimal code changes to your existing training scripts.

---
sidebar_position: 6
---
# Creating a Generation Plugin Script

This guide explains how to adapt your existing dataset generation scripts to work with Transformer Lab using the `tlab_gen` decorator class. By integrating with Transformer Lab, your generation scripts gain progress tracking, parameter management, dataset creation, and automatic upload capabilities with minimal code changes.

## What is `tlab_gen`?

`tlab_gen` is a decorator class that helps integrate your generation script with Transformer Lab's job management system. It provides:

- Argument parsing and configuration management
- Model loading for different providers (local, OpenAI, Claude, etc.)
- Dataset generation and storage
- Automatic dataset upload to Transformer Lab
- Progress tracking and reporting
- Job status management

## Getting Started

### 1. Import the decorator

Add this import to your generation script:

```python
from transformerlab.sdk.v1.generate import tlab_gen
```

### 2. Decorate your main generation function

Wrap your main generation function with the `job_wrapper` decorator:

```python
@tlab_gen.job_wrapper(
    wandb_project_name="my_gen_project",  # Optional: Set custom Weights & Biases project name
    manual_logging=False  # Optional: Set to True for manual metric logging
)
def generate_dataset():
    # Your generation code here
    pass
```

The decorator parameters include:

- `progress_start` and `progress_end`: Define the progress range (typically 0-100)
- `wandb_project_name`: Optional custom name for your Weights & Biases project
- `manual_logging`: Set to True for generation scripts without automatic logging integration

> **Note**: There is also an async version of the job wrapper available for functions that might need to run asynchronously. This can be used by changing `@tlab_gen.job_wrapper` to `@tlab_gen.async_job_wrapper`.

### 3. Use helper methods

Replace parts of your code with `tlab_gen` helper methods:

- For generation model loading: `tlab_gen.load_evaluation_model()`
- For saving datasets: `tlab_gen.save_generated_dataset(df)`
- For progress tracking: `tlab_gen.progress_update(progress)`
- For generating output file paths: `tlab_gen.get_output_file_path()`
- For generating expected outputs: `tlab_gen.generate_expected_outputs(inputs)`

## Complete Example
Here's how a typical dataset generation script can be adapted to use `tlab_gen`:

```python
import pandas as pd
from transformerlab.sdk.v1.generate import tlab_gen

@tlab_gen.job_wrapper()
def generate_dataset():
    # 1. Initialize data list
    data = []
    
    # 2. Generate inputs
    input_prompts = [
        "Explain the concept of recursion in programming.",
        "What is the difference between machine learning and deep learning?",
        "How does a transformer neural network work?"
    ]
    
    # 3. Generate expected outputs using a model
    expected_outputs = tlab_gen.generate_expected_outputs(
        input_prompts,
        task="Create educational content about programming concepts",
        scenario="You are a programming tutor creating explanations",
        output_format="Clear, concise explanation with examples"
    )
    
    # 4. Create dataset entries
    for i, (prompt, response) in enumerate(zip(input_prompts, expected_outputs)):
        data.append({
            "id": i,
            "prompt": prompt,
            "response": response,
            "category": "programming_education"
        })
        
        # Update progress
        progress = int((i + 1) / len(input_prompts) * 100)
        tlab_gen.progress_update(progress)
    
    # 5. Convert to DataFrame
    df = pd.DataFrame(data)
    
    # 6. Save and upload the generated dataset
    output_file, dataset_name = tlab_gen.save_generated_dataset(
        df, 
        additional_metadata={"purpose": "educational content", "domain": "programming"}
    )
    
    print(f"Dataset generated and saved as '{dataset_name}'")
    return True

# Call the function
generate_dataset()
```

## Key Features

### Saving Generated Datasets

`tlab_gen` provides an easy way to save datasets and automatically upload them to Transformer Lab:

```python
output_file, dataset_name = tlab_gen.save_generated_dataset(
    df,  # DataFrame containing the generated data
    additional_metadata={"domain": "finance", "quality": "high"},  # Optional metadata
    dataset_id="custom_dataset_id"  # Optional custom dataset ID
)
```

The method:

- Saves the DataFrame to a JSON file
- Creates and saves metadata about the generation
- Uploads the dataset to Transformer Lab
- Returns the file path and dataset name

### Generating Expected Outputs

`generate_expected_outputs` method helps create output responses for given inputs using a local model running on Transformer Lab:

```python
expected_outputs = tlab_gen.generate_expected_outputs(
    input_values=["What is Python?", "Explain variables."],
    task="Create educational content",
    scenario="You are a programming tutor",
    input_format="Questions about programming concepts",
    output_format="Clear, concise explanations with examples"
)
```

This automatically:

- Formats appropriate prompts based on the task and scenario
- Uses the configured model to generate responses
- Updates progress during generation
- Returns a list of generated outputs

### Parameter Access

Parameters are automatically loaded from the Transformer Lab configuration. You can access them in several ways:

- Direct access: `tlab_gen.params.<parameter_name>`
- Safe access with default: `tlab_gen.params.get(<parameter_name>, <default_value>)`

Common parameters include:

- `tlab_gen.params.model_name`: Model to evaluate
- `tlab_gen.params.dataset_name`: Dataset to use
- `tlab_gen.params.experiment_name`: Name of the experiment
- `tlab_gen.params.run_name`: Name for the run

### Progress Reporting

Keep users informed about generation progress:

```python
# Update progress (0-100)
tlab_gen.progress_update(75)  # 75% complete
```

The progress update also checks if the job was requested to stop and will raise a KeyboardInterrupt if needed.

## Best Practices

1. **Error Handling**: While the decorator handles basic error reporting, include try/except blocks for specific operations
2. **Parameter Access**: Always use `.get()` with sensible defaults for optional parameters
3. **Dataset Structure**: Design your DataFrame with clear, consistent fields for better compatibility
4. **Progress Updates**: Provide regular progress updates, especially for long-running generations
5. **Metadata**: Include helpful metadata about the generation process and dataset characteristics


## Summary

By following this guide, you can quickly adapt your existing dataset generation scripts to work within the Transformer Lab ecosystem, gaining parameter management, progress tracking, dataset upload capabilities, and integrated logging with minimal code changes.
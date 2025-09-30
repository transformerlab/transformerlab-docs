---
sidebar_position: 5
---
# Creating an Evaluation Plugin Script

This guide explains how to adapt your existing evaluation scripts to work with Transformer Lab using the `tlab_evals` decorator class. By integrating with Transformer Lab, your evaluation scripts gain progress tracking, parameter management, model loading, results visualization, and integrated logging with minimal code changes.

## What is `tlab_evals`?

`tlab_evals` is a decorator class that helps integrate your evaluation script with Transformer Lab's job management system. It provides:

- Argument parsing and configuration management
- Model loading for different providers (local, OpenAI, Claude, etc.)
- Progress tracking and reporting
- Evaluation results formatting and visualization
- Job status management
- Integration with TensorBoard and Weights & Biases

## Getting Started

### 1. Import the decorator

Add this import to your evaluation script:

```python
from transformerlab.sdk.v1.evals import tlab_evals
```

### 2. Decorate your main evaluation function

Wrap your main evaluation function with the `job_wrapper` decorator:

```python
@tlab_evals.job_wrapper(
    wandb_project_name="my_eval_project",  # Optional: Set custom Weights & Biases project name
    manual_logging=False  # Optional: Set to True for manual metric logging
)
def evaluate_model():
    # Your evaluation code here
    pass
```

The decorator parameters include:

- `progress_start` and `progress_end`: Optionally define the progress range (typically 0-100)
- `wandb_project_name`: Optional custom name for your Weights & Biases project. Default is TLab_Evaluations
- `manual_logging`: Set to True for evaluation scripts without automatic logging integration

> **Note**: There is also an async version of the job wrapper available for functions that might need to run asynchronously. This can be used by changing `@tlab_evals.job_wrapper` to `@tlab_evals.async_job_wrapper`.

### 3. Use helper methods

Replace parts of your code with `tlab_evals` helper methods:

- For model loading: `tlab_evals.load_evaluation_model()`
- For dataset loading: `tlab_evals.load_dataset()`
- For progress tracking: `tlab_evals.progress_update(progress)`
- For saving results: `tlab_evals.save_evaluation_results(metrics_df)`
- For generating output file paths: `tlab_evals.get_output_file_path()`

## Complete example
Here's how a typical evaluation script can be adapted to use `tlab_evals`:

```python
import pandas as pd
from transformerlab.sdk.v1.evals import tlab_evals

@tlab_evals.job_wrapper()
def evaluate_model():
    # 1. Load dataset with helper
    datasets = tlab_evals.load_dataset(dataset_types=["test"])
    test_dataset = datasets["test"]
    
    # 2. Load model for evaluation
    model = tlab_evals.load_evaluation_model(field_name="generation_model")
    
    # 3. Initialize results storage
    results = []
    total_samples = len(test_dataset)
    
    # 4. Evaluate each test case
    for i, test_case in enumerate(test_dataset):
        # Perform evaluation
        prompt = test_case["prompt"]
        ground_truth = test_case["expected"]
        
        # Generate response from model
        response = model.generate(prompt)
        
        # Calculate metrics
        accuracy = calculate_accuracy(response, ground_truth)
        fluency = calculate_fluency(response)
        relevance = calculate_relevance(prompt, response)
        
        # Store results
        results.append({
            "test_case_id": i,
            "metric_name": "accuracy",
            "score": accuracy
        })
        results.append({
            "test_case_id": i,
            "metric_name": "fluency",
            "score": fluency
        })
        results.append({
            "test_case_id": i,
            "metric_name": "relevance",
            "score": relevance
        })
        
        # Update progress
        progress = int((i + 1) / total_samples * 100)
        tlab_evals.progress_update(progress)
    
    # 5. Convert results to DataFrame
    metrics_df = pd.DataFrame(results)
    
    # 6. Save results and plotting data
    output_path, plot_data_path = tlab_evals.save_evaluation_results(metrics_df)
    
    print(f"Evaluation complete. Results saved to {output_path}")
    return True

# Call the function
evaluate_model()
```

## Key Features

### Loading Evaluation Models

`tlab_evals` provides a versatile model loading function that supports different model types:

```python
# Load a local model
local_model = tlab_evals.load_evaluation_model(model_type="local")

# Load an OpenAI model
openai_model = tlab_evals.load_evaluation_model(model_type="openai")

# Load a Claude model
claude_model = tlab_evals.load_evaluation_model(model_type="claude")

# Load a custom model with API configuration
custom_model = tlab_evals.load_evaluation_model(model_type="custom")

# Auto-detect model type based on name
auto_model = tlab_evals.load_evaluation_model()
```

The loaded models provide a consistent interface with `.generate()` and `.a_generate()` (async) methods.

### Managing Output Files
`tlab_evals` helps organize evaluation outputs in a standardized directory structure:

```python
# Get path for saving CSV results
output_path = tlab_evals.get_output_file_path(suffix="accuracy_results")

# Get path for saving JSON plotting data
plot_data_path = tlab_evals.get_output_file_path(suffix="accuracy_plot", is_plotting=True)

# Get only the directory path
output_dir = tlab_evals.get_output_file_path(dir_only=True)
```

### Saving Evaluation Results

The `save_evaluation_results` method automatically formats, saves, and reports evaluation metrics:

```python
# Results DataFrame must contain "test_case_id", "metric_name", and "score" columns
output_path, plot_data_path = tlab_evals.save_evaluation_results(metrics_df)
```

This method:

1. Saves the full results as CSV
2. Creates a JSON file formatted for visualization
3. Prints average scores for each metric
4. Adds results to job data


### Logging Metrics

For tracking metrics during evaluation:

```python
# Log a metric at a specific step
tlab_evals.log_metric("accuracy", 0.85, step=1)
```

### Parameter Access

Parameters are automatically loaded from the Transformer Lab configuration. You can access them in several ways:

- Direct access: `tlab_evals.params.<parameter_name>`
- Safe access with default: `tlab_evals.params.get(<parameter_name>, <default_value>)`

Common parameters include:

- `tlab_evals.params.model_name`: Model to evaluate
- `tlab_evals.params.dataset_name`: Dataset to use
- `tlab_evals.params.experiment_name`: Name of the experiment
- `tlab_evals.params.eval_name`: Name of the evaluation
- `tlab_evals.params.run_name`: Name for the run
- `tlab_evals.params.template_name`: Template name used

### Progress Reporting

Keep users informed about evaluation progress:

```python
# Update progress (0-100)
tlab_evals.progress_update(75)  # 75% complete
```

The progress update also checks if the job was requested to stop and will raise a KeyboardInterrupt if needed.

### Manual Metric Logging

```python
@tlab_evals.job_wrapper(manual_logging=True)
def evaluate_model():
    # Setup evaluation
    
    # Log specific metrics during evaluation
    tlab_evals.log_metric("accuracy/question_answering", 0.92, step=1)
    tlab_evals.log_metric("fluency/grammar", 0.88, step=1)
```

## Best Practices

1. **Error Handling**: While the decorator handles basic error reporting, include try/except blocks for specific operations
2. **Parameter Access**: Always use .get() with sensible defaults for optional parameters
3. **Result Structure**: Always include "test_case_id", "metric_name", and "score" columns in your results DataFrame
4. **Progress Updates**: Provide regular progress updates, especially for long-running evaluations
5. **Result Visualization**: Use the standard output formats to ensure compatibility with Transformer Lab's visualization tools

## Summary

By following this guide, you can quickly adapt your existing evaluation scripts to work within the Transformer Lab ecosystem, gaining parameter management, progress tracking, results visualization, and integrated logging with minimal code changes.

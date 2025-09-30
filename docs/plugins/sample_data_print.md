---
sidebar_position: 3
---
# Creating a Demo Plugin Script

This guide explains how to create a simple demo plugin for Transformer Lab using the `tlab_trainer` decorator class. Demo plugins are a great way to understand how the Transformer Lab plugin system works without needing to implement complex functionality. This example will focus on creating a plugin that simply takes parameters and prints them.

## What is a Demo Plugin?

A demo plugin is a minimal implementation that demonstrates how to use the Transformer Lab plugin system. It can:

- Accept and process parameters from the Transformer Lab interface
- Display information or perform simple operations
- Integrate with Transformer Lab's job management system

## Getting Started

### 1. Import the decorator

Add this import to your plugin script:

```python
from transformerlab.sdk.v1.train import tlab_trainer
```

### 2. Decorate your main function

Wrap your main function with the `job_wrapper` decorator:

```python
@tlab_trainer.job_wrapper()
def demo_function():
    # Your demo code here
    pass
```

### 3. Access and print parameters

Access parameters that are passed from the Transformer Lab interface:

```python
@tlab_trainer.job_wrapper()
def demo_function():
    # Print all available parameters
    print("Available parameters:")
    for param_name, param_value in tlab_trainer.params.__dict__.items():
        print(f"  {param_name}: {param_value}")
    
    # Access specific parameters
    model_name = tlab_trainer.params.get("model_name", "default_model")
    print(f"Selected model: {model_name}")
    
    return True
```

## Complete example

Here's a complete example of a demo plugin that prints parameters:

```python
from transformerlab.sdk.v1.train import tlab_trainer
import time

@tlab_trainer.job_wrapper()
def print_parameters():
    """A simple demo plugin that prints all parameters and simulates work."""
    
    # Print all received parameters
    print("Parameters received from Transformer Lab:")
    print("-" * 50)
    
    for param_name, param_value in tlab_trainer.params.__dict__.items():
        print(f"{param_name}: {param_value}")
    

    iterations = 10
    print(f"Simulating work with {iterations} iterations...")
    
    print("-" * 50)
    
    # Simulate some work with progress updates
    for i in range(iterations):
        # Update progress (0-100 scale)
        progress = (i / iterations) * 100
        tlab_trainer.progress_update(progress)
        
        print(f"Processing iteration {i+1}/{iterations}...")
        time.sleep(1)  # Simulate work
    
    # Final progress update
    tlab_trainer.progress_update(100)
    print("Demo plugin execution complete!")
    
    return True

# Call the function
print_parameters()
```

## Parameter Access

Parameters are automatically loaded from the Transformer Lab configuration. You can access them in several ways:

1. **Direct access** (if sure the parameter exists): `tlab_trainer.params.<parameter_name>`
2. **Safe access with default** (recommended): `tlab_trainer.params.get(<parameter_name>, <default_value>)`
3. **Listing all parameters**: Iterate through `tlab_trainer.params.__dict__.items()`

## Progress Reporting

Even for a simple demo plugin, you can show progress to users:

```python
# Update progress on a scale of 0-100
tlab_trainer.progress_update(50)  # 50% complete
```

## Error Handling

The decorator handles basic error reporting, but you can include your own try/except blocks:

```python
@tlab_trainer.job_wrapper()
def demo_function():
    try:
        # Some operation that might fail
        value = int(tlab_trainer.params.get("some_number", "not_a_number"))
    except ValueError:
        print("Error: Parameter 'some_number' is not a valid integer")
        raise
    
    print(f"Successfully parsed number: {value}")
    return True
```

## Best Practices

1. **Always use defaults**: Use `.get()` with sensible defaults for parameters that might not be provided
2. **Return value**: Return `True` for successful execution and `False` for failure
3. **Type conversion**: Always convert string parameters to appropriate types (int, float, bool) as needed
4. **Progress updates**: Provide regular progress updates for operations that take time

## Summary

By following this guide, you can create a simple demo plugin for Transformer Lab that accepts parameters and prints them. This serves as a starting point for understanding the plugin system before developing more complex functionality.
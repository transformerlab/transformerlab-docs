---
title: Task Parameters
sidebar_position: 81
---

This guide explains how to define and configure task parameters in Transformer Lab. Parameters are used to pass configuration values, hyperparameters, and other settings to your task scripts, which can be accessed via `lab.get_config()`.

## Overview

Task parameters allow you to make your tasks flexible and reusable. Instead of hardcoding values, you can define parameters that users can customize when queuing a task. Parameters can have:

- **Default values** - Used if no value is provided
- **Schema definitions** - To control validation and UI rendering
- **Custom UI widgets** - To customize how parameters appear in the interface

## Parameter Types

The following parameter types are supported:

| Type | Description | Default UI | Example |
|------|-------------|-----------|---------|
| `int` | Integer numbers | Number input | `42`, `100` |
| `float`| Decimal numbers | Number input | `0.001`, `3.14` |
| `bool`| Boolean values | Switch toggle | `true`, `false` |
| `enum` | Enumerated choices | Select dropdown | `"option1"`, `"option2"` |
| `string` | Text values | Text input | `"model-name"`, `"path/to/file"` |

## Simple Shorthand Format

The simplest way to define parameters is using shorthand format, where you provide just the default value. The type is inferred automatically:

```yaml
parameters:
  learning_rate: 0.0001        # Inferred as float
  batch_size: 8                # Inferred as int
  num_epochs: 10               # Inferred as int
  model_name: "gpt"            # Inferred as string
  use_cache: true              # Inferred as bool
```

**Accessing in Python:**
```python
from lab import lab

lab.init()
config = lab.get_config()
learning_rate = config.get("learning_rate")  # 0.0001
batch_size = config.get("batch_size")        # 8
```

## Extended Schema Format

For more control, use the extended schema format where you specify the type, validation constraints, and UI customization:

```yaml
parameters:
  learning_rate:
    type: "float"
    default: 0.0001
    min: 0.00001
    max: 0.1
    title: "Learning Rate"
```

### Schema Fields

#### type

The parameter type (required for schema format).

**Options:** `int`, `float`, `bool`, `enum`, `string`

```yaml
parameters:
  temperature:
    type: "float"
```

#### default

The default value if not provided by the user.

```yaml
parameters:
  batch_size:
    type: "int"
    default: 32
```

#### title

Human-readable label for the parameter in the UI.

```yaml
parameters:
  learning_rate:
    type: "float"
    default: 0.0001
    title: "Learning Rate (Recommended: 0.0001-0.001)"
```

#### min / max

For numeric types, specify minimum and maximum allowed values.

```yaml
parameters:
  temperature:
    type: "float"
    min: 0.0
    max: 2.0
    default: 0.7
```

#### step

For numeric types, the increment step for sliders and the step attribute for number inputs. Also used for validation and slider increments.

```yaml
parameters:
  batch_size:
    type: "int"
    step: 8
    default: 32
```

#### options / enum

For enum types, the list of allowed values.

```yaml
parameters:
  strategy:
    type: "enum"
    options: ["fast", "accurate", "balanced"]
    default: "balanced"
```

#### ui_widget

Customize how the parameter appears in the UI. This is **optional** - sensible defaults exist for each type.

**Options:** `slider`, `range`, `switch`, `radio`, `password`, `select`, `lab_model_select`, `lab_dataset_select`

```yaml
parameters:
  temperature:
    type: "float"
    min: 0.0
    max: 2.0
    default: 0.7
    ui_widget: "slider"  # Shows as slider instead of text input
```

## UI Widget Reference

### Optional ui_widget Configuration

The `ui_widget` field is **optional**. Each parameter type has sensible defaults. When you do want to customize the UI, you can use the following widget options:

**Available ui_widget Options:**
- `slider` - Slider control for numeric types
- `range` - Range slider for numeric types
- `switch` - Toggle switch for boolean types
- `radio` - Radio buttons for enum types
- `password` - Password field for string types
- `select` - Select dropdown (default for enums)
- `lab_model_select` - Dropdown to select from available models, with option to enter custom model name
- `lab_dataset_select` - Dropdown to select from available datasets, with option to enter custom dataset name

**Example:**

```yaml
parameters:
  # Numeric with slider
  temperature:
    type: "float"
    min: 0.0
    max: 2.0
    default: 0.7
    ui_widget: "slider"
  
  # Enum with radio buttons
  strategy:
    type: "enum"
    options: ["fast", "accurate", "balanced"]
    default: "balanced"
    ui_widget: "radio"
  
  # String with password masking
  api_key:
    type: "string"
    default: ""
    ui_widget: "password"
```

## Special Parameters: Model and Dataset Selection

To allow users to select models or datasets from their available libraries, use the `lab_model_select` or `lab_dataset_select` ui_widget with a string type parameter. These widgets provide a dropdown populated with your available models or datasets, plus an option to enter a custom value.

### Model Selection

Use the `lab_model_select` ui_widget to let users choose from available models:

```yaml
parameters:
  model:
    type: "string"
    default: "meta-llama/Llama-2-7b"
    title: "Model"
    ui_widget: "lab_model_select"
```

### Dataset Selection

Similarly, use `lab_dataset_select` for dataset selection:

```yaml
parameters:
  dataset:
    type: "string"
    default: "my-dataset"
    title: "Dataset"
    ui_widget: "lab_dataset_select"
```


## Complete Example of a Task YAML with Parameters

```yaml
name: advanced-training
setup: "pip install torch transformers"
run: "python train.py"
parameters:
  agent_name:
    type: "string"
    default: "computer"
    title: "Agent Name"
  
  learning_rate:
    type: "float"
    default: 0.0001
    min: 0.00001
    max: 0.1
    title: "Learning Rate"
  
  batch_size:
    type: "int"
    default: 32
    min: 1
    max: 512
    step: 8
    title: "Batch Size (must be multiple of 8)"
  
  num_epochs:
    type: "int"
    default: 3
    min: 1
    max: 100
  
  use_cache:
    type: "bool"
    default: true
    title: "Cache Training Data"

  model:
    type: "string"
    default: "meta-llama/Llama-2-7b"
    title: "Model"
    ui_widget: "lab_model_select"
```
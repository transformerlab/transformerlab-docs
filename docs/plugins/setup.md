---
sidebar_position: 2
---

# Setting Up a New Plugin

## Creating the Plugin Structure

To create a new plugin, follow these steps:

1. Create a new directory with a unique name inside the plugins folder:
   ```
   transformerlab/plugins/<unique_name>/
   ```

2. Add four required files to your plugin directory:
   ```
   transformerlab/plugins/<unique_name>/
   ├── index.json    # Plugin metadata and configuration
   ├── info.md       # User documentation
   ├── main.py       # Core implementation (covered in next section)
   └── setup.sh      # Dependency installation script
   ```

This guide covers how to create the supporting files (`index.json`, `info.md`, and `setup.sh`). The implementation of `main.py` will be covered in detail on the following pages.

## Configuring index.json

The `index.json` file defines your plugin's metadata, requirements, and parameters:

```json
{
    "name": "Plugin Name",
    "uniqueId": "my_plugin",
    "description": "Exports the current model to GGUF format so it can be run on computers without a GPU.",
    "plugin-format": "python",
    "type": "exporter",
    "version": "0.2.0",
    "model_architectures": [
        "LlamaForCausalLM",
        "FalconForCausalLM",
        ...
    ],
    "files": [
        "main.py",
        "setup.sh"
    ],
    "setup-script": "setup.sh",
    "parameters": {
        "outtype": {
            "title": "Output Format",
            "type": "string",
            "default": "q8_0",
            "enum": [
                "q8_0",
                "f16",
                "f32"
            ]
        }
    }
}
```

### Key Fields

| Field | Description | Requirements |
|-------|-------------|--------------|
| `name` | Display name shown to users | Should be clear and descriptive |
| `uniqueId` | Internal identifier | Must match folder name, no spaces |
| `description` | Detailed explanation | Displayed in the UI to help users understand functionality |
| `plugin_format` | Plugin category | Must be one of: "loader", "trainer", "evaluator", "generator", "exporter", "rag" |
| `version` | Plugin version | Follow semantic versioning (MAJOR.MINOR.PATCH) |
| `parameters` | Parameters that are configurable | Must follow [JSONSchema-Form](https://rjsf-team.github.io/react-jsonschema-form/) format |

## Writing info.md

The `info.md` file provides user documentation in Markdown format. This should include:

1. A clear explanation of what the plugin does
2. Instructions for using the plugin
3. Details about available parameters
4. Any troubleshooting tips

### Example Structure

```markdown
# GGUF Exporter

## Overview

This plugin exports Transformer Lab models to GGUF format, enabling them to run efficiently on computers without dedicated GPUs.

## Usage

1. Select your model in the Model Hub
2. Navigate to the Export tab
3. Choose "GGUF Exporter" from the dropdown
4. Configure your export settings
5. Click "Export Model"

## Parameters

- **Output Format**: Determines the quantization level
  - `q8_0`: 8-bit quantization (best balance of size and quality)
  - `f16`: 16-bit floating point (higher quality, larger size)
  - `f32`: 32-bit floating point (highest quality, largest size)

## Troubleshooting

If you encounter errors during export, check that your model architecture is supported in the compatibility list.
```

## Creating setup.sh

The `setup.sh` script installs dependencies and performs one-time setup operations when the plugin is first installed or re-installed.

`setup.sh` is just a shell script that runs directly on the host machine. The most common use for this file is to install dependencies. If you are installing python dependencies, use `uv` for example the file might contain:

```bash
uv pip install langchain-openai datasets
```
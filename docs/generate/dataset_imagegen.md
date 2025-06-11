---
sidebar_position: 2
---

# Generate Image Dataset from Prompts (`dataset_imagegen`)

This plugin generates an image dataset using the local text-to-image diffusion model such as Stable Diffusion. It takes prompts from a user-provided dataset and outputs generated images along with associated metadata.

## Step 1: Prepare Your Dataset

You must upload a dataset with prompts using the `Datasets` tab.

### Supported Metadata Fields

- `prompt`: Required. The main prompt used for image generation.
- `negative_prompt`: Optional. Used to guide the model away from undesired traits.
- Any additional metadata fields are ignored during generation.

## Step 2: Configure Plugin Parameters

When setting up a generation job with `dataset_imagegen`, configure the following parameters:

| Parameter | Description | Required | Example |
|----------|-------------|----------|---------|
| `Prompt Column` | Name of the column that contains prompts | ✅ | `"prompt"` |
| `Negative Prompt Column` | Name of the column for negative prompts (leave empty if not used) | ❌ | `"negative_prompt"` |
| `Prompt Postfix` | Optional text to append to each prompt | ❌ | `"as a painting"` |
| `Image Width` | Width of generated images (pixels) | ✅ | `512` |
| `Image Height` | Height of generated images (pixels) | ✅ | `512` |
| `Images Per Prompt` | How many images to generate per prompt | ✅ | `4` |
| `Seed` | Set seed for reproducibility (use `-1` for random seed) | ✅ | `42` |
| `Guidance Scale` | How strictly the model follows the prompt | ✅ | `7.5` |
| `Number of Inference Steps` | Quality/speed trade-off for generation | ✅ | `30` |

📌 **Note:** The plugin will always use a local generation model—no selection needed.

## Step 3: Start the Job

After uploading your dataset and configuring parameters, start the generation by clicking on the `Queue` button. You can monitor progress in the "Executions" tab.

Each row in your dataset will be used to generate one or more images (the number of generated images depends on the input parameters in step 2).

## Step 4: View the Output

The output will include:

- Generated images saved with filenames like `prompt_0_image_0.jpg`.
- A `metadata.jsonl` file with rows like:
  ```json
  {
    "file_name": "prompt_0_image_0.jpg",
    "prompt": "a cyberpunk city at night",
    "negative_prompt": "blurry, low quality"
  }
  ```

You can preview the dataset using the UI inside the `Generate` or the `Datasets` -> `Generated Datasets` tabs (the latter provides a tool to edit the text fields and create a new dataset as well) or export it for downstream use.

## Example Use Case

| Prompt | Negative Prompt | Postfix |
|--------|------------------|---------|
| `"a futuristic vehicle"` | `"low resolution"` | `"as a watercolor"` |

This will generate image(s) of futuristic vehicles painted in a watercolor style, while avoiding low-resolution features.

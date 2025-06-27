---
sidebar_position: 7
---

# Managing Image History

Transformer Lab automatically saves all your generated images from Text-to-Image, Image-to-Image, and Inpainting workflows, creating a comprehensive history that you can manage, organize, and even convert into datasets for future training.

## Accessing Image History

Navigate to the **Image History** tab located at the top of the diffusion interface, positioned after the Inpainting tab. This centralized location provides access to all your generated images across all diffusion workflows.

### Viewing Generated Images

The Image History tab displays all your generated images in a grid layout, showing:

- **Thumbnail previews** of generated images
- **Multiple images per card** - Each card can display multiple generated images from the same generation session
- **Interactive cards** - Clicking on any image card provides detailed generation parameters, model info, and allows you to view all images in that generation set

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/pickled-history-preview.gif').default} width="500" />
  <p><em>Viewing generated image history with thumbnails and metadata</em></p>
</div>


## Creating Datasets from Generated Images

One of the most powerful features of Image History is the ability to convert your generated images into training datasets for future diffusion model training.

### Export to Dataset Workflow

#### **Step 1: Select Images for Dataset**

1. Navigate to the **Image History** tab
2. Click the **Select** button to enter selection mode
3. Choose the images you want to include in your dataset:
   - Select images with consistent style or theme
   - Choose high-quality generations
   - Ensure variety in compositions and subjects

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/export-dataset-select.gif').default} width="500" />
  <p><em>Selecting images for dataset creation</em></p>
</div>

#### **Step 2: Export to Dataset**

1. After selecting your desired images, click the **Export to Dataset** button that appears
2. A dialog box will open for dataset configuration


#### **Step 3: Configure Dataset Details**

In the dataset creation dialog:

1. **Dataset Name**: Enter a descriptive name for your dataset
   - Use clear, memorable names like "fantasy-landscapes" or "portrait-styles"
   - Avoid special characters and spaces (use hyphens or underscores)

2. **Description** (Optional): Provide additional context about your dataset
   - Describe the style, theme, or purpose
   - Note any specific characteristics or intended use cases
   - Include generation parameters if relevant

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/export-dataset-exportmodal.gif').default} width="500" />
  <p><em>Dataset configuration dialog with name and description fields</em></p>
</div>

#### **Step 4: Create Dataset**

1. Click **Create Dataset** to finalize the export
2. Transformer Lab will process the selected images and create a new dataset

### Accessing Your Generated Datasets

#### **Navigate to Datasets Tab**

1. Go to the **Datasets** tab in the main Transformer Lab interface
2. Look for the **Generated** section in the dataset browser
3. Your newly created datasets will appear here with their names and descriptions

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/export-dataset-datapreview.gif').default} width="500" />
  <p><em>Generated datasets section in the Datasets tab</em></p>
</div>

#### **Dataset Structure**

Each generated dataset contains:

- **Images**: All selected generated images in their original quality
- **Captions**: Text prompts used to generate each image
- **Metadata**: Generation parameters, timestamps, and model information
- **Format**: Standard Text-Image dataset format compatible with diffusion training

## Best Practices

### Dataset Creation Guidelines

- **Quality Over Quantity**: Select only your best generations
- **Consistency**: Choose images with similar style, lighting, or theme
- **Diversity**: Include varied compositions within your chosen style
- **Clear Naming**: Use descriptive dataset names for easy identification

### Organization Tips

- **Regular Cleanup**: Periodically delete low-quality or experimental generations
- **Categorize by Purpose**: Group similar generations for easier dataset creation
- **Document Decisions**: Use dataset descriptions to note intended use cases
- **Version Control**: Create multiple datasets as your style evolves

### Training Preparation

- **Minimum Size**: Aim for at least 10-15 images for effective LoRA training
- **Caption Quality**: Review and edit generated captions if needed
- **Resolution Consistency**: Ensure images have similar resolutions for training
- **Style Coherence**: Verify all images maintain the desired artistic direction

The Image History management system transforms your generation workflow into a comprehensive creative pipeline, allowing you to not only create beautiful images but also learn from your successes and build upon them through targeted training.

---
sidebar_position: 6
---

# Using ControlNets

ControlNets are powerful tools that allow you to control the composition and structure of generated images by using reference images as guides. They enable precise control over poses, edges, depth, and other structural elements in your generated images.

## What are ControlNets?

ControlNets provide additional conditioning to diffusion models, allowing you to:

- **Control poses** using reference images of people or objects
- **Preserve composition** while changing style or content
- **Guide image structure** with edge detection, depth maps, or sketches
- **Maintain spatial relationships** between elements in your generated images

Unlike simple image-to-image generation, ControlNets extract specific structural information (like pose, edges, or depth) from reference images and use that to guide the generation process while still following your text prompt.

## Downloading ControlNets

ControlNets are downloaded the same way you download diffusion models through the Model Zoo.

### Step 1: Navigate to Model Zoo

1. Go to the **Foundation** tab in Transformer Lab
2. Click on **Model Zoo**
3. You can browse available ControlNets or download a specific one by entering its Hugging Face ID

### Step 2: Download a ControlNet

For this example, we'll download a popular OpenPose ControlNet that can extract and use pose information from reference images.

1. In the Model Zoo search box, enter: `thibaud/controlnet-openpose-sdxl-1.0`
2. Click **Download** to add it to your collection

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/downloading-controlnet.gif').default} width="600" />
  <p><em>Downloading the OpenPose ControlNet from Hugging Face</em></p>
</div>

This ControlNet is particularly useful for extracting pose information from reference images and applying it to your generated content.

## Working with ControlNets

Once you have downloaded a ControlNet, you can use it to guide your image generation process.

### Prerequisites

- A diffusion model loaded in the Foundation section (e.g., stabilityai/stable-diffusion-xl-base-1.0)
- A downloaded ControlNet
- A reference image that contains the structural information you want to preserve

### Step 1: Load Your Base Model

1. Navigate to the **Foundation** tab
2. Select and load a compatible diffusion model (e.g., "stabilityai/stable-diffusion-xl-base-1.0" for SDXL ControlNets)

### Step 2: Upload Reference Image

1. Go to the **Diffusion** tab
2. Click on the **Reference Image** section
3. Upload an image that contains the structure you want to preserve

For this example, we'll upload an image of a person with a sword to extract the pose information.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/uploading-reference-image.gif').default} width="600" />
  <p><em>Uploading a reference image of a person with a sword</em></p>
</div>

### Step 3: Select ControlNet

1. After uploading your reference image, you'll see a **Select ControlNet** option appear
2. Click on the ControlNet dropdown to see all your downloaded ControlNets
3. Select the ControlNet you want to use (in our case, the OpenPose ControlNet we downloaded)

### Step 4: Choose Process Type

Once you've selected a ControlNet, you can choose which effect to apply to extract information from your reference image. Different ControlNets support different process types:

Available process types include:

- **Canny**: Edge detection for preserving sharp boundaries and contours
- **OpenPose**: Human pose detection for maintaining body positions and gestures
- **Zoe**: Depth estimation for preserving spatial relationships
- **Depth**: Alternative depth detection method
- **HED**: Holistically-Nested Edge Detection for soft edge preservation
- **Scribble**: Sketch-like edge detection
- **SoftEdge**: Gentle edge detection that preserves gradual transitions
- **Seg**: Segmentation for preserving distinct regions and shapes
- **Normal**: Surface normal detection for 3D structure preservation
- **LineArt**: Clean line art extraction

**Note**: Some ControlNets are specialized for specific effects, while others (like union models) can handle multiple process types. Check the ControlNet's documentation to see which effects it supports.

For our OpenPose ControlNet example, select **OpenPose** as the process type.

### Step 5: Generate Your Image

1. Enter your text prompt. For our example: `"A Jedi with a lightsaber"`
2. Adjust any other generation settings as desired (steps, guidance scale, etc.)
3. Click **Generate** to create your image

The ControlNet will extract the pose information from your reference image and apply it to generate a Jedi in the same sword stance pose.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/controlnet-generation.png').default} width="600" />
  <p><em>Generating a Jedi image using OpenPose ControlNet with the reference pose</em></p>
</div>

## Advanced Example: Using Flux with ControlNet Union

For more advanced control, you can use union ControlNets that support multiple process types. Here's how to use the powerful Flux ControlNet Union:

### Download Flux ControlNet Union

1. In the Model Zoo, enter: `Shakker-Labs/FLUX.1-dev-ControlNet-Union-Pro`
2. Download this advanced ControlNet that supports multiple control types

### Using Flux ControlNet Union

1. Load a compatible Flux base model in the Foundation tab
2. Navigate to the Diffusion tab and upload your reference image
3. Select the `Shakker-Labs/FLUX.1-dev-ControlNet-Union-Pro` ControlNet
4. Choose from any of the available process types (this union model supports most of them)
5. Enter your prompt and generate

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/flux-controlnet-full-workflow.gif').default} width="600" />
  <p><em>Complete workflow using Flux ControlNet Union for advanced image control</em></p>
</div>

The union ControlNet provides more flexibility and often better results due to its multi-modal training approach.

## Tips for Better Results

### Choosing the Right Process Type

- **OpenPose**: Best for human figures and poses
- **Canny**: Excellent for architectural elements and sharp edges
- **Depth**: Ideal for maintaining spatial relationships and 3D structure
- **LineArt**: Perfect for clean, artistic line-based compositions

### Reference Image Quality

- Use high-contrast reference images for better structural extraction
- Ensure the reference image clearly shows the structure you want to preserve
- Clean, well-lit images typically produce better results

### Prompt Engineering

- Be specific about the style and content you want while letting the ControlNet handle the structure
- The ControlNet controls the "how" (structure/pose) while your prompt controls the "what" (content/style)

### Experimentation

- Try different process types with the same reference image to see various interpretations
- Adjust the ControlNet strength in advanced settings if available
- Combine ControlNets with LoRA adaptors for even more control

## Troubleshooting

### ControlNet Not Appearing

- Ensure your ControlNet is compatible with your base model (SDXL ControlNets work with SDXL models)
- Verify the ControlNet downloaded successfully
- Try refreshing the Diffusion tab

### Poor Structure Preservation

- Check if your reference image has clear, visible structure for the chosen process type
- Try a different process type that might be more suitable for your reference image
- Ensure adequate contrast in your reference image

### Generation Errors

- Verify model compatibility between your base model and ControlNet
- Check that you have sufficient GPU memory for both the base model and ControlNet
- Try reducing image resolution if memory issues occur


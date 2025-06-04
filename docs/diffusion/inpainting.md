---
sidebar_position: 4
---
# Image Inpainting

Fill in missing parts of images or replace specific regions using diffusion models in TransformerLab.

## Overview

Image inpainting allows you to seamlessly fill in missing areas of an image or replace specific regions with new content guided by text prompts. This technique is perfect for removing unwanted objects, filling gaps, or creatively modifying specific parts of an image using TransformerLab's intuitive masking interface.

## Getting Started

### Prerequisites

- Downloaded diffusion model with inpainting support (see [Downloading Models](./downloading-models.md))
- Source image to edit (uploaded or from generation history)
- Text prompt describing desired content for the masked area
- Sufficient GPU memory for inference

### Accessing Image Inpainting

1. **Select a diffusion model** from the **Foundation tab**
2. **Navigate to the Diffusion tab** (appears in place of the Interact tab when a supported diffusion model is selected)
3. **Click on the Inpainting tab** (located next to the "Generate Images" tab within the Diffusion section)
4. **Upload or select a reference image** and use the mask drawing tools to define areas to modify

## Interface Overview

### Main Inpainting Controls

The TransformerLab inpainting interface provides specialized controls for targeted image editing:

#### **Model Name**

Displays the currently selected diffusion model (read-only, shown for reference).

#### **Reference Image Upload**

Upload or select the image you want to edit:

- **Upload from Files**: Click to upload an image file from your computer
- **Select from History**: Use previously generated images by selecting from your generation history

#### **Prompt**

Describe what you want to appear in the masked regions. Be specific about the desired content, style, and how it should blend with the existing image.

```text
full body, audrey hepburn, purple hair, 18 years old, 1940's, photoshoot, elegant
```

#### **Steps**

Number of denoising steps. More steps generally produce higher quality inpainting but take longer to generate. Typical values range from 20-50.

#### **Guidance Scale**

Controls how closely the model follows your prompt. Higher values (7-15) follow the prompt more strictly, lower values (1-7) allow more creative interpretation.

#### **Seed**

Random seed for reproducibility. Leave empty for random generation, or use a specific number to generate the same inpainting result repeatedly.

#### **Strength**

Controls how much the AI modifies the masked regions:

- **Lower values (0.1-0.5)**: Make subtle changes, preserve more of the original content
- **Higher values (0.6-1.0)**: Make dramatic changes, allow more creative freedom

#### **Number of Images**

Number of inpainted images to generate in parallel. Higher values will take longer but provide more variations to choose from.

### Advanced Controls

#### **Negative Prompt**

Describe what you don't want to see in the inpainted regions. This helps guide the model away from unwanted elements, styles, or features.

```text
blurry, low quality, distorted, unnatural, artifacts, poor blending
```

#### **Image Width**

Set a custom width for the generated image in pixels. Leave at 0 to use the original image width. Values should be multiples of 8.

#### **Image Height**

Set a custom height for the generated image in pixels. Leave at 0 to use the original image height. Values should be multiples of 8.

## Mask Drawing Tools

### Interactive Masking Interface

Once you upload or select a reference image, TransformerLab opens an interactive mask drawing tool:

#### **Drawing Tools**

- **Pencil Tool**: Paint areas you want to inpaint (modify)
- **Eraser Tool**: Remove mask areas to preserve original content
- **Brush Size**: Adjust the size of the pencil and eraser tools for precise control

#### **Viewing Options**

Multiple viewing modes help you create accurate masks:

- **Show Original**: View the original reference image
- **Show Mask**: Display only the mask overlay
- **Show Masked Image**: View the image with masked areas highlighted
- **Apply Mask**: Preview how the mask will be applied

#### **Mask Creation Tips**

- **Paint precisely**: Use appropriate brush sizes for different areas
- **Clean edges**: Ensure mask boundaries are well-defined
- **Context awareness**: Consider how new content will blend with surrounding areas
- **Preview regularly**: Use viewing options to check your mask accuracy

## Practical Example: Hair Color Change

### Step-by-Step Inpainting Tutorial

Here's a real example of using TransformerLab's inpainting feature to change hair color:

#### **Step 1: Generate Base Image**

First, create a base image using text-to-image generation:

```text
full body, audrey hepburn, black hair, 18 years old, 1940’s, photoshoot, Fujifilm XT3 Viltrox, posing, instagram, happy smile, stand up, ultra detailed, sharp focus, elegant, jewels, urban background, rim lighting, short beige dress, beige kitten-heels, black gloves, pearl tiara, pearls necklace, brilliant pearl earrings, hdr, high contrast, sunlight, shadows, skin pore, pretty, beautiful, feminine, loving, in love, adorable , fashion, chic, excellence, leg, dress
```

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/inpainting-audrey-og-gen.png').default} width="500" />
  <p><em>Original generated image with black hair</em></p>
</div>

#### **Step 2: Create Hair Mask**

Using the mask drawing tools, carefully paint over the hair area to define what should be changed:

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/inpainting-audrey-later.png').default} width="500" />
  <p><em>Reference image with hair area masked for inpainting</em></p>
</div>

#### **Step 3: Apply Inpainting**

Use similar prompt as the original but change "black hair" to "purple hair":

```text
full body, audrey hepburn, purple hair, 18 years old, 1940’s, photoshoot, Fujifilm XT3 Viltrox, posing, instagram, happy smile, stand up, ultra detailed, sharp focus, elegant, jewels, urban background, rim lighting, short beige dress, beige kitten-heels, black gloves, pearl tiara, pearls necklace, brilliant pearl earrings, hdr, high contrast, sunlight, shadows, skin pore, pretty, beautiful, feminine, loving, in love, adorable , fashion, chic, excellence, leg, dress
```

The result: seamlessly changed hair color while preserving all other image details!

### Adding Background Elements: USS Enterprise

Here's another example showing how to add elements to an existing image background. This demonstration shows the complete process from uploading the original astronaut image, masking the background area, and applying the inpainting to add the USS Enterprise:

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/inpainting-uss-enterprise.gif').default} width="600" />
  <p><em>Complete USS Enterprise inpainting process: from original astronaut image to final result with starship in background</em></p>
</div>

**Process Overview:**

1. **Upload**: Original astronaut floating in space
2. **Mask**: Paint over the background area where you want to add the USS Enterprise
3. **Prompt**: Use descriptive text for the addition:

```text
Add USS Enterprise starship in the background, detailed sci-fi spacecraft, space setting, distant stars, nebula, cinematic lighting, high quality, realistic
```

4. **Result**: The iconic starship seamlessly integrated into the space scene while preserving the astronaut and original composition!

## Common Use Cases

### Object Replacement

Replace specific elements while maintaining the overall composition:

```text
Replace the red car with a blue motorcycle, same lighting and perspective
```

### Object Removal

Remove unwanted elements and fill with appropriate background:

```text
Remove the person from the background, replace with more grass and trees
```

### Style Modifications

Change specific style elements of objects or people:

```text
Change the modern clothing to medieval attire, maintaining the same pose
```

### Background Extension

Extend or modify backgrounds naturally:

```text
Continue the beach scene with more sand and ocean waves
```

### Creative Additions

Add new elements to existing scenes:

```text
Add a majestic eagle flying in the cloudy sky
```

## Best Practices

### Mask Creation

- **Appropriate size**: Not too small or too large
- **Context awareness**: Consider surrounding elements

### Prompt Writing

- **Context-aware**: Reference surrounding image elements
- **Specific details**: Describe lighting, style, and materials
- **Consistent style**: Match the original image aesthetic
- **Negative prompts**: Exclude unwanted elements

### Parameter Optimization

- **Start conservative**: Use moderate settings initially
- **Iterate gradually**: Make small adjustments
- **Increase strength**: If results are too subtle, increase the strength parameter
- **Test different models**: Some excel at specific inpainting tasks
- **Consider resolution**: Higher resolution for detailed work

## Advanced Techniques

### Multi-Stage Inpainting

1. Rough inpainting with low resolution
2. Upscale and refine details
3. Multiple passes for complex scenes

### Style Consistency

- **Reference matching**: Use prompts that match original style
- **Lighting analysis**: Consider existing light sources
- **Color harmony**: Ensure new content fits color palette

## Troubleshooting

### Common Issues

- **Visible seams**: Increase mask blur or adjust mask edges
- **Style mismatch**: Refine prompt to match original image
- **Poor blending**: Adjust inpainting strength
- **Artifacts**: Try different sampling methods or increase steps

### Quality Improvements

- **Higher steps**: More denoising iterations for quality
- **Better masks**: Spend time creating precise masks
- **Model selection**: Use models trained specifically for inpainting
- **Prompt refinement**: Iterate on prompt descriptions

## Model Recommendations

### Specialized Inpainting Models

- Models trained specifically for inpainting tasks
- Better understanding of context preservation
- Superior blending capabilities
- Reduced artifacts

### General Diffusion Models

- Versatile but may require more parameter tuning
- Good for creative inpainting tasks
- May need multiple iterations for best results

## Next Steps

Explore other diffusion capabilities:

- [Text-to-Image Generation](./text-to-image.md)
- [Image-to-Image Processing](./image-to-image.md)
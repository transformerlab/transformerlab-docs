# Image Inpainting

Fill in missing parts of images or replace specific regions using diffusion models in TransformerLab.

## Overview

Image inpainting allows you to seamlessly fill in missing areas of an image or replace specific regions with new content guided by text prompts. This technique is perfect for removing unwanted objects, filling gaps, or creatively modifying specific parts of an image.

## Getting Started

### Prerequisites

- Downloaded diffusion model with inpainting support (see [Downloading Models](./downloading-models.md))
- Source image to edit
- Mask defining the area to inpaint
- Text prompt describing desired content
- Sufficient GPU memory for inference

### Basic Workflow

1. Load your source image
2. Create or load a mask image
3. Select inpainting-capable diffusion model
4. Write descriptive prompt for the masked area
5. Configure inpainting parameters
6. Generate the inpainted result

## Creating Masks

### Mask Requirements

- Black areas: regions to inpaint (replace)
- White areas: regions to preserve
- Same dimensions as source image
- Clear boundaries for best results

### Masking Methods

- **Manual painting**: Use image editing software
- **Selection tools**: Create precise masks
- **AI-assisted masking**: Automatic object detection
- **Built-in tools**: Use TransformerLab's masking interface

## Key Parameters

### Inpainting-Specific Settings

- **Mask blur**: Softens mask edges for seamless blending
- **Inpaint area**: Full image vs. masked area only
- **Masked content**: How to handle the masked region initially

### Standard Diffusion Parameters

- **Steps**: Denoising iterations
- **Guidance Scale**: Prompt adherence
- **Strength**: How much to change the image
- **Seed**: For reproducible results

## Use Cases

### Object Removal

Remove unwanted elements from photos:
```
Remove the person from the background, replace with more grass and trees
```

### Object Replacement

Replace objects with something new:
```
Replace the old car with a modern electric vehicle
```

### Background Extension

Extend image backgrounds naturally:
```
Continue the beach scene with more sand and ocean
```

### Creative Additions

Add new elements to existing scenes:
```
Add a majestic eagle flying in the sky
```

### Restoration

Fill in damaged or missing parts:
```
Restore the missing corner with appropriate architectural details
```

## Best Practices

### Mask Creation

- **Clean edges**: Ensure mask boundaries are precise
- **Appropriate size**: Not too small or too large
- **Context awareness**: Consider surrounding elements
- **Feathered edges**: Use slight blur for natural blending

### Prompt Writing

- **Context-aware**: Reference surrounding image elements
- **Specific details**: Describe lighting, style, and materials
- **Consistent style**: Match the original image aesthetic
- **Negative prompts**: Exclude unwanted elements

### Parameter Optimization

- **Start conservative**: Use moderate settings initially
- **Iterate gradually**: Make small adjustments
- **Test different models**: Some excel at specific inpainting tasks
- **Consider resolution**: Higher resolution for detailed work

## Advanced Techniques

### Multi-Stage Inpainting

1. Rough inpainting with low resolution
2. Upscale and refine details
3. Multiple passes for complex scenes

### Mask Refinement

- **Progressive masking**: Start with larger areas, refine gradually
- **Edge optimization**: Fine-tune mask boundaries
- **Multiple mask iterations**: Combine several inpainting passes

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
- [Training Custom Models](../train/diffusion-trainer.md)

---
sidebar_position: 1
---

# Downloading Diffusion Models

## How to Download Models

### Using the Model Zoo

Transformer Lab makes downloading diffusion models as simple as downloading text models:

1. **Navigate to the Model Zoo tab** in Transformer Lab
2. **Browse pre-curated models** or **type in the ID of any Hugging Face model**
3. **Click download** and monitor progress


### System Requirements

- **GPU Type**: We currently support NVIDIA and AMD GPUs for Diffusion. Apple Silicon is not supported
- **GPU Memory**: Varies by model (2GB to 24GB+ recommended)
- **Storage Space**: Models range from 2GB to 20GB+ each

## Supported Pipeline Types

Transformer Lab supports three main diffusion capabilities:

- **Text-to-Image**: Generate images from text descriptions
- **Image-to-Image**: Transform existing images with text guidance  
- **Inpainting**: Fill or replace specific regions in images

## Supported Model Architectures

Transformer Lab supports all standard models compatible with the [Hugging Face diffusers library](https://huggingface.co/docs/diffusers/en/index). Our platform currently supports the following model architectures:

### Text-to-Image Models

- **Stable Diffusion Pipeline** - Classic text-to-image generation
- **Stable Diffusion 3 Pipeline** - Latest Stable Diffusion architecture
- **Stable Diffusion XL Pipeline** - High-resolution image generation
- **Flux Pipeline** - Advanced flux-based generation
- **PixArt Alpha/Sigma Pipeline** - High-quality artistic generation
- **Lumina Pipeline** - Lumina-based generation models
- **CogView3Plus/CogView4 Pipeline** - CogView family models
- **Kandinsky Pipeline** (v1, v2.2, v3) - Kandinsky series models
- **HunyuanDiT Pipeline** - HunyuanDiT architecture
- **IF Pipeline** - DeepFloyd IF models
- **AuraFlow Pipeline** - AuraFlow generation
- **Sana Pipeline** - Sana-based models
- **Würstchen Combined Pipeline** - Würstchen architecture
- **Stable Cascade Combined Pipeline** - Cascade-based generation
- **Latent Consistency Model Pipeline** - Fast generation models

### Image-to-Image Models

- **Stable Diffusion Img2Img Pipeline** - Transform existing images
- **Stable Diffusion XL Img2Img Pipeline** - High-res image transformation
- **Stable Diffusion 3 Img2Img Pipeline** - Latest SD3 image-to-image
- **Flux Img2Img Pipeline** - Flux-based image transformation
- **Kandinsky Img2Img Pipeline** (v1, v2.2, v3) - Kandinsky image editing
- **IF Img2Img Pipeline** - DeepFloyd image transformation
- **Latent Consistency Model Img2Img Pipeline** - Fast image editing

### Inpainting Models

- **Stable Diffusion Inpaint Pipeline** - Fill missing image regions
- **Stable Diffusion XL Inpaint Pipeline** - High-res inpainting
- **Stable Diffusion 3 Inpaint Pipeline** - Advanced inpainting with SD3
- **Kandinsky Inpaint Pipeline** (v1, v2.2, v3) - Kandinsky inpainting
- **IF Inpainting Pipeline** - DeepFloyd inpainting

### ControlNet Models

- **Stable Diffusion ControlNet Pipeline** - Guided generation with control inputs
- **Stable Diffusion XL ControlNet Pipeline** - High-res controlled generation
- **Stable Diffusion 3 ControlNet Pipeline** - SD3 with control guidance
- **Flux ControlNet Pipeline** - Flux with control inputs
- **CogView4 Control Pipeline** - CogView with control guidance

### PAG (Perturbed Attention Guidance) Models

- **Stable Diffusion 3 PAG Pipeline** - Enhanced attention guidance
- **Stable Diffusion XL PAG Pipeline** - PAG for SDXL
- **HunyuanDiT PAG Pipeline** - PAG for HunyuanDiT
- **PixArt Sigma PAG Pipeline** - PAG for PixArt Sigma

### Popular Model Recommendations

Typically the best starting model to try is Stable Diffusion XL.

#### For Beginners

- **Stable Diffusion v1.5**: Classic, well-supported, moderate memory requirements
- **Latent Consistency Models**: Fast generation, good for experimentation

#### For High Quality

- **Stable Diffusion XL**: High-resolution, detailed outputs
- **Stable Diffusion 3**: Latest architecture with improved quality
- **Flux**: State-of-the-art generation quality. But slower and uses more VRAM.
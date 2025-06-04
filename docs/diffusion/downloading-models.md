---
sidebar_position: 1
---

# Downloading Diffusion Models

This guide covers how to download and manage diffusion models in TransformerLab.

## Overview

TransformerLab provides seamless integration for downloading various diffusion models to use in your projects. Built on the powerful **diffusers library**, the platform supports a comprehensive range of model architectures and makes it easy to get started with diffusion-based tasks including Text-to-Image, Image-to-Image, and Inpainting.

## Supported Pipeline Types

TransformerLab supports three main diffusion capabilities:

- **Text-to-Image**: Generate images from text descriptions
- **Image-to-Image**: Transform existing images with text guidance  
- **Inpainting**: Fill or replace specific regions in images

## Supported Model Architectures

TransformerLab supports all standard models compatible with the diffusers library. Our platform currently supports the following model architectures:

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

## How to Download Models

### Using the Model Zoo

TransformerLab makes downloading diffusion models as simple as downloading text models:

1. **Navigate to the Model Zoo tab** in TransformerLab
2. **Browse pre-curated models** or **search for specific models**
3. **Type the diffusion model ID** in the text box at the bottom (same as for text models)
4. **Click download** and monitor progress

### Pre-Curated Model Collections

TransformerLab provides ready-to-use model collections to help you get started:

#### Stable Diffusion Group

- Curated selection of popular Stable Diffusion models
- Includes various versions (v1.5, SDXL, SD3)
- Pre-tested and verified for compatibility
- Ideal for beginners and general use cases

#### Flux Group  

- Collection of state-of-the-art Flux models
- High-quality generation capabilities
- Latest architectures and improvements
- Perfect for users seeking cutting-edge results

### Manual Model Download

For specific models not in the curated collections:

1. Find the model ID on Hugging Face (e.g., `stabilityai/stable-diffusion-xl-base-1.0`)
2. Enter the full model ID in the Model Zoo text box
3. TransformerLab will automatically detect the model type and download accordingly

## Model Sources

### TransformerLab Model Zoo

The easiest way to access diffusion models is through TransformerLab's integrated **Model Zoo**:

- **Pre-curated collections**: "Stable Diffusion" and "Flux" groups with verified models
- **Direct Hugging Face integration**: Enter any Hugging Face model ID 
- **Same interface as text models**: Familiar download process
- **Automatic compatibility detection**: TransformerLab identifies model types automatically

### Hugging Face Hub Integration

TransformerLab seamlessly integrates with the Hugging Face Model Hub, providing access to:

- **Official models**: Verified models from original authors
- **Community models**: Fine-tuned and custom models shared by the community
- **Organization models**: Models from research institutions and companies
- **Private models**: Access to private repositories (with authentication)

### Model Categories

- **Base models**: Foundation models for general use
- **Fine-tuned models**: Specialized models for specific domains
- **LoRA adapters**: Lightweight model modifications
- **Inpainting models**: Specialized for image editing tasks
- **ControlNet models**: For guided generation with control inputs

## Model Management

### Storage Location

Downloaded models from Huggingface are stored in your local HF cache directory and can be managed through the TransformerLab interface.

### Model Organization

Models are automatically organized by:

- **Architecture type**: Grouped by pipeline compatibility
- **Model family**: Related models grouped together

### Model Visibility

Once downloaded, diffusion models will appear on the **Foundation screen** with a distinctive icon that differentiates them from text models:

<img src={require('./gifs/foundation_screen.png').default} width="400" />

This visual distinction makes it easy to identify and select your downloaded diffusion models for inference tasks.

## Requirements

### System Requirements

- **GPU Memory**: Varies by model (2GB to 24GB+ recommended)
- **Storage Space**: Models range from 2GB to 20GB+ each
- **Internet Connection**: Required for initial download
- **Python Environment**: Compatible diffusers library installation

### Popular Model Recommendations

#### For Beginners

- **Stable Diffusion v1.5**: Classic, well-supported, moderate memory requirements
- **Latent Consistency Models**: Fast generation, good for experimentation

#### For High Quality

- **Stable Diffusion XL**: High-resolution, detailed outputs
- **Stable Diffusion 3**: Latest architecture with improved quality
- **Flux**: State-of-the-art generation quality

## Using Downloaded Models for Inference

### Seamless Integration

TransformerLab provides seamless inference capabilities for diffusion models without requiring separate plugins:

- **No additional setup needed**: Downloaded diffusion models are immediately ready for inference
- **Automatic interface adaptation**: The Interact tab transforms into a Diffusion tab when you select an eligible diffusion model
- **Unified workflow**: Switch between text and diffusion models effortlessly

### Accessing Diffusion Inference

1. **Select a diffusion model** from your Foundation screen
2. **Navigate to the Interact tab** - it will automatically change to **Diffusion tab**
3. **Start generating** using the diffusion-specific interface
4. **Switch between different modes** (Text-to-Image, Image-to-Image, Inpainting) as supported by your selected model

The interface automatically adapts to provide the appropriate controls and options based on the capabilities of your selected diffusion model.

## Next Steps

Once you have downloaded diffusion models, you can use them for:

- [Text-to-Image Generation](./text-to-image.md)
- [Image-to-Image Processing](./image-to-image.md)
- [Image Inpainting](./inpainting.md)
<!-- - [Training Custom Models](../train/diffusion-trainer.md) -->

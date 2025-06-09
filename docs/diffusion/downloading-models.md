---
sidebar_position: 2
---

# Downloading Models

## How to Download Models

### Using the Model Zoo

In Transformer Lab, navigate to the Model Zoo and select a diffusion model, then press download. For example, here is a list of the Stable Diffusion models available by default:

<img src={require('./gifs/stable-diffusion.png').default} width="600" />

### Downloading a Custom Model:

You can also type in the name of any Stable Diffusion model available on Hugging Face in the box on the bottom of the Model Zoo page:

<img src={require('./gifs/custom-model.png').default} width="400" />

## System Requirements

- **GPU Type**: We currently support NVIDIA and AMD GPUs for Diffusion. Apple Silicon is not supported
- **GPU Memory**: Varies by model (2GB to 24GB+ recommended)
- **Storage Space**: Models range from 2GB to 20GB+ each

### Supported Pipeline Types

Transformer Lab supports three main diffusion capabilities:

- **Text-to-Image**: Generate images from text descriptions
- **Image-to-Image**: Transform existing images with text guidance  
- **Inpainting**: Fill or replace specific regions in images

### Supported Model Architectures

Transformer Lab supports most of the standard image models compatible with the [Hugging Face diffusers library](https://huggingface.co/docs/diffusers/en/index).

## Generating an Image



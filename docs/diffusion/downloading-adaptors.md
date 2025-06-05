---
sidebar_position: 2
---

# Downloading LoRA Adaptors

Transformer Lab supports downloading and using LoRA (Low-Rank Adaptation) adaptors from Hugging Face to enhance your diffusion models with specialized styles, subjects, or techniques. These adaptors can dramatically change the output style while using the same base model.

## What are LoRA Adaptors?

LoRA adaptors are lightweight model modifications that can:

- Add specific artistic styles (watercolor, anime, photorealistic)
- Introduce new subjects or characters
- Enhance particular techniques (lighting, composition)
- Modify the overall aesthetic without changing the base model

## Downloading Adaptors from Hugging Face

### Step 1: Test Your Base Model

Start by generating an image with your base SDXL model to establish a baseline for comparison.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/downloading-adaptors-infmodelonly.gif').default} width="600" />
  <p><em>Generating an image with the base SDXL model</em></p>
</div>

### Step 2: Navigate to Adaptors

1. Go to the **Foundation** tab in the main Transformer Lab interface
2. Click on the **Adaptors** tab within the Foundation section
3. Browse available LoRA adaptors or download specific ones from HuggingFace
4. Select an adaptor that fits your creative needs (e.g., a style or character you want to apply)

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/downloading-adaptors-download.gif').default} width="600" />
  <p><em>Downloading a LoRA adaptor from Hugging Face in the Foundation > Adaptors tab</em></p>
</div>

### Step 3: Use the Adaptor

1. Return to the **Diffusion** tab
2. Generate the same prompt to see the difference the adaptor makes

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/downloading-adaptors-inference-full.gif').default} width="600" />
  <p><em>Comparing results with the same prompt using the downloaded adaptor</em></p>
</div>

## Popular Adaptor Types

- **Style Adaptors**: Transform images into specific artistic styles
- **Character Adaptors**: Generate consistent characters or subjects
- **Technique Adaptors**: Enhance lighting, composition, or rendering quality
- **Theme Adaptors**: Focus on specific themes like fantasy, sci-fi, or realism

## Tips for Using Adaptors

- **Experiment with Prompts**: Different prompts may work better with specific adaptors
- **Look out for trigger words**: Some adaptors may require specific keywords to activate their effects
- **Check Compatibility**: Ensure adaptors are compatible with your base model (SDXL, SD 1.5, etc.)

LoRA adaptors provide an efficient way to expand your creative possibilities without downloading entirely new models, making them perfect for exploring different artistic directions and styles.
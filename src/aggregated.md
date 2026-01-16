

# File: docs/analytics.md

---
---
sidebar_position: 60
---

# Analytics and Telemetry

Transformer Lab is composed of two parts. The API (the server that does the Machine Learning work), and the App (the graphical user interface that access the API).

Our API does not have any embedded analytics or telemetry.

Our App includes very basic telemetry that allows the Transformer Lab Maintainers to get anonymous data around usage, without sacrificing privacy.

You can opt-out of telemetry at any time by going to **Settings->Do Not Share Any Data**

## What kind of data do and don't we collect?

Transformer Lab gathers anonymous data around what features of the app are used, and how frequently.

This may include:
- What general pages of the app users visit, in aggregate
- Which parts of the app crash

We do NOT gather:
- Personal information about users
- Custom information such as the name of your experiments, data, custom models, or end results

## Why do we gather data

We uses technical and interaction data for many things, including to:

**Fix problems:** Identify bugs and improve the app's performance.

**Build better features:** See which features are popular and how we can improve them.

**Understand trends:** Learn how people use the product without compromising their privacy.

# File: docs/audio/text-to-speech-generation.md

---
---
sidebar_position: 1
---
# Text-to-Speech (TTS) Generation

Transformer Lab supports **Text-to-Speech (TTS)** on **MLX (Apple Silicon)**, **CUDA (NVIDIA GPUs)**, and **ROCm (AMD GPUs)**. This feature lets you convert plain text into **natural-sounding speech** directly inside Transformer Lab.

![TTS Screenshot](./img/tts-generation.png)

## How It Works

1. Install the appropriate plugin:
   - **Apple Audio MLX Server** (for MLX)
   - **Unsloth Text-to-Speech Server** (for CUDA and ROCm)

2. Select a **TTS model** in the **Foundation tab**  
3. Switch to the **Audio tab**  
4. Enter text, adjust generation parameters, and generate audio

## Supported Model Families

You can start generating audio today with the following models:
### MLX (Apple Silicon)

- **Kokoro** → [mlx-community/Kokoro-82M-4bit](https://huggingface.co/mlx-community/Kokoro-82M-4bit)  
- **Dia** → [mlx-community/Dia-1.6B](https://huggingface.co/mlx-community/Dia-1.6B)  
- **Spark** → [mlx-community/Spark-TTS-0.5B-bf16](https://huggingface.co/mlx-community/Spark-TTS-0.5B-bf16)  
- **Bark** → [mlx-community/bark-small](https://huggingface.co/mlx-community/bark-small)  
- **CSM** → [mlx-community/csm-1b](https://huggingface.co/mlx-community/csm-1b)  

### CUDA and AMD

- **Orpheus** → [unsloth/orpheus-3b-0.1-ft](https://huggingface.co/unsloth/orpheus-3b-0.1-ft)  
- **CSM** → [unsloth/csm-1b](https://huggingface.co/unsloth/csm-1b)

## TTS Generation Process

Here's a visual guide to the TTS generation process in Transformer Lab:

![MLX TTS Generation](./gif/mlx-tts-generation.gif)

This demonstrates the complete workflow from model selection to audio output generation.

## Generation Parameters

When generating speech, you’ll see the following parameters:

- **Text** → The input string to convert into speech  
- **Sample Rate** → Number of audio samples per second (higher = clearer audio)  
- **Temperature** → Controls randomness; lower = consistent, higher = expressive  
- **Speech Speed** → Adjusts pacing of speech (slower = clarity, faster = natural flow)  

Some models expose extra controls for more flexibility:

- **Audio Cloning** → Provide a short reference sample to make the output mimic that voice  
- **Language** → Choose the language for generation (if multilingual support is available)  
- **Voice** → Select a specific voice style or speaker profile offered by the model 



## Next Steps

Learn how to train your own TTS models:

- [Text-to-Speech Training](./text-to-speech-training.md)



# File: docs/audio/text-to-speech-training.md

---
---
sidebar_position: 2
---

# Training Text-to-Speech Models

Transformer Lab allows you to **train custom Text-to-Speech (TTS) models** on CUDA and AMD. Fine-tune a model on your own dataset to capture a specific **voice, accent, or speaking style**.

## How It Works

1. Install the **Unsloth Text-to-Speech Trainer** plugin  
2. Upload or Download a dataset containing audio + transcripts  
3. Configure your training parameters in the **Train tab**  
4. Start training and track progress 


## Training Process

Here's a visual guide to the TTS training process in Transformer Lab:

![TTS Training Steps](./gif/training_tts.gif)

This demonstrates the complete workflow from setup to model training completion.

## Training Parameters

You can adjust a wide range of parameters when training:

- **Sampling Rate** → Audio sampling frequency  
- **Maximum Sequence Length** → Max length of input sequences  
- **Batch Size** → Number of sequences per training step  
- **Learning Rate / Schedule** → Step size and scheduling (e.g. linear)  
- **Number of Training Epochs** → How many times the dataset is passed through  
- **Max Steps** → Maximum training steps (-1 = unlimited)  
- **LoRA Parameters (R, Alpha, Dropout)** → LoRA fine-tuning configuration  
- **Max Grad Norm** → Gradient clipping threshold  
- **Weight Decay** → Regularization strength  
- **Adam Optimizer Settings** → Beta 1, Beta 2, Epsilon  
- **Adapter Name** → Name for the saved adapter model  
- **Audio Column Name** → Dataset column containing audio files  
- **Text Column Name** → Dataset column containing transcriptions  
- **Log to Weights & Biases** → Track training metrics in real time  



## Next Steps

Once the training is finished, the LoRA adaptor becomes available for use with TTS models. You can:

![Loading Trained Adaptor](./img/adaptors.png)

*Loading the trained LoRA adaptor in the Foundation tab*


# File: docs/diffusion/controlnets.md

---
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



# File: docs/diffusion/downloading-adaptors.md

---
---
sidebar_position: 3
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
3. Browse available LoRA adaptors or download specific ones from Hugging Face
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

# File: docs/diffusion/downloading-models.md

---
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




# File: docs/diffusion/image-to-image.md

---
---
sidebar_position: 4
---

# Image-to-Image (img2img) Generation

Transform existing images using diffusion models with text guidance in Transformer Lab.

## Overview

Image-to-image processing allows you to modify existing images using text prompts while preserving the original structure and composition. This powerful feature enables creative transformations, style transfers, and artistic modifications using the same intuitive interface as text-to-image generation.

For example:

<img src={require('./gifs/happyfamily.jpg').default} width="500" />

Can turn to:

<img src={require('./gifs/familyimg2img.png').default} width="500" />


## Getting Started

### Prerequisites

- Downloaded diffusion model (see [Downloading Models](./downloading-models.md))
- Source image to transform (either uploaded or from generation history)
- Clear text prompt describing desired changes
- NVIDIA or AMD GPU with sufficient GPU memory for inference

### Accessing Image-to-Image Processing

1. **Select a diffusion model** from the **Foundation tab**
2. **Navigate to the Diffusion tab** (appears in place of the Interact tab when a supported diffusion model is selected)
3. **Verify your model selection** - you'll see the selected model displayed along with any adaptor if one was selected on the Foundation screen
4. **Upload or select a reference image** and configure generation parameters

## Interface Overview

### Main Generation Controls

The Transformer Lab image-to-image interface shares the same intuitive controls as text-to-image generation, with the addition of reference image functionality:

#### **Reference Image**

The key difference for image-to-image processing is the reference image input:

- **Upload Image**: Click to upload an image file from your computer
- **Select from History**: Use previously generated images as reference by selecting from your generation history

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/img2img-history-selection.gif').default} width="500" />
</div>

#### **Prompt**

Give a full description of the new image, as if you were generating from scratch.

```text
A happy family of three. Mom, dad and baby. They each have a relaxed, stylish vibe, wearing 90s-inspired casual outfits including graphic tees, jeans, sneakers, and sunglasses. The overall scene is drawn in a soft anime or watercolor style, with warm tones and natural lighting. Studio Ghibli inspo. The setting feels nostalgic and urban, giving off a vintage band poster or indie movie still kind of energy.
```

#### **Steps**

Number of denoising steps. More steps generally produce higher quality images but take longer to generate. Typical values range from 20-50.

#### **Guidance Scale**

Controls how closely the model follows your prompt. Higher values (7-15) follow the prompt more strictly, lower values (1-7) allow more creative interpretation.

#### **Seed**

Random seed for reproducibility. Leave empty for random generation, or use a specific number to generate the same transformation repeatedly.

#### **Number of Images**

Number of images to generate in parallel. Higher values will take longer but produce more transformation options to choose from.

### Advanced Controls

The advanced menu provides additional fine-tuning options:

#### **Negative Prompt**

Describe what you don't want to see in the transformed image. This helps guide the model away from unwanted elements, styles, or features.

```text
blurry, low quality, distorted, oversaturated, artifacts
```

#### **ETA**

Controls the amount of noise in the denoising process. Higher values add more randomness while lower values make the process more deterministic. Leave at 0.0 for default behavior.

#### **Clip Skip**

Number of CLIP text encoder layers to skip. Higher values may result in more artistic or abstract outputs. Set to 0 for default behavior.

#### **Guidance Rescale**

Rescales the guidance scale to prevent over-saturation. Values between 0.0-1.0 can help balance prompt adherence with image quality. Leave at 0.0 for default behavior.

#### **Image Width**

Set a custom width for the generated image in pixels. Leave at 0 to use the model's default width. Values should be multiples of 8.

#### **Image Height**

Set a custom height for the generated image in pixels. Leave at 0 to use the model's default height. Values should be multiples of 8.

#### **Upscale Image**

Enhance the generated image resolution by upscaling it 2x using an upscaling model. This improves detail and clarity, especially for low-resolution outputs.

## Best Practices

### Reference Image Selection

- **Use high-quality source images**: Clear, well-lit images produce better transformation results
- **Consider composition**: Simple compositions often transform more successfully
- **Match aspect ratios**: Use images with appropriate dimensions for your desired output
- **Leverage generation history**: Previously generated images often work well as reference inputs

**Environmental Changes:**

```text
Change this sunny day scene to a dramatic stormy evening with dark clouds and lightning
```

### Parameter Optimization

- **Start with defaults**: Begin with standard settings and adjust based on results
- **Experiment with steps**: Try 20-30 steps for faster results, 40-50 for higher quality
- **Adjust guidance scale**: Use 7-10 for balanced results, higher for strict prompt following
- **Use negative prompts**: Always specify what you don't want to avoid common issues
- **Test different approaches**: Try various prompt styles and parameter combinations

### Performance Considerations

- **Monitor GPU memory**: Reduce image dimensions or number of images if memory is limited
- **Balance quality vs speed**: More steps and higher resolution increase generation time
- **Use upscaling wisely**: Enable upscaling for final images rather than during experimentation
- **Batch processing**: Transform multiple images with consistent settings for efficiency

## Saving Generated Images

### Save All Images Feature

Once you've generated transformed images, you can easily save them to your local system:

- **Save All Images button**: Located below the generated images, this button allows you to download all transformed images at once
- **Convenient batch saving**: No need to save images individually - get all your transformation results in one action
- **Organized downloads**: Images are saved with descriptive names for easy identification

This feature is particularly useful when generating multiple transformation variations, allowing you to quickly save all results for comparison or further use.

## Troubleshooting

### Common Issues

- **Transformation too subtle**: Increase guidance scale or use more specific prompts
- **Transformation too dramatic**: Lower guidance scale or use more conservative prompts
- **Poor image quality**: Increase steps, adjust guidance scale, or improve prompt details
- **Reference image not loading**: Check file format (JPG, PNG recommended) and file size
- **Slow generation times**: Reduce steps, image resolution, or number of images
- **Out of memory errors**: Reduce image dimensions, lower number of images, or use smaller models
- **Unwanted artifacts**: Use negative prompts to exclude specific features or styles

### Solutions and Tips

- **Image quality optimization**: Use high-quality reference images and detailed prompts
- **Memory optimization**: Use image dimensions that are multiples of 8 for best performance
- **Consistency improvement**: Use the same seed value to reproduce successful transformations
- **Speed optimization**: Use fewer steps during experimentation, more for final generation
- **History management**: Organize your generation history for easy reference image selection

## Next Steps

Explore other diffusion capabilities:

- [Text-to-Image Generation](./text-to-image.md)
- [Image Inpainting](./inpainting.md)


# File: docs/diffusion/inpainting.md

---
---
sidebar_position: 5
---
# Image Inpainting

## Overview

Image inpainting allows you to seamlessly fill in missing areas of an image or replace specific regions with new content guided by text prompts. This technique is perfect for removing unwanted objects, filling gaps, or creatively modifying specific parts of an image using Transformer Lab's intuitive masking interface.

<img src={require('./gifs/monkeyinpaint.png').default} width="500" />

## Getting Started

### Prerequisites

- Downloaded diffusion model with inpainting support (see [Downloading Models](./downloading-models.md))
- Source image to edit (uploaded or from generation history)
- Text prompt describing desired content for the masked area
- NVIDIA or AMD GPU with sufficient GPU memory for inference

## Practical Example: Hair Color Change

### Step-by-Step Inpainting Tutorial

Here's a real example of using Transformer Lab's inpainting feature to change hair color:

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



# File: docs/diffusion/managing-history.md

---
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


# File: docs/diffusion/text-to-image.md

---
---
sidebar_position: 1
---
# Text-to-Image Generation

Generate high-quality images from text descriptions using diffusion models in Transformer Lab.

![Generate](./gifs/screenshot.png)

## Overview

Text-to-image generation allows you to create images from natural language descriptions. Transformer Lab provides an intuitive interface for this powerful capability, supporting various diffusion model architectures.

## Getting Started

### Prerequisites

- Downloaded diffusion model (see [Downloading Models](./downloading-models.md))
- NVIDIA or AMD GPU with sufficient GPU memory for inference

### Accessing Text-to-Image Generation

1. **Select a diffusion model** from the **Foundation tab**
2. **Navigate to the Diffusion tab**
4. **Configure generation parameters** and start creating images

## Interface Overview

### Main Generation Controls

The Transformer Lab diffusion interface provides intuitive controls for text-to-image generation:

#### **Prompt**

Describe the image you want to generate. Be specific and detailed for better results.

```text
A serene mountain landscape at sunset, digital art style, detailed clouds, vibrant colors
```

#### **Reference Image** *(Optional)*

This field is used for Image-to-Image generation (see [Image-to-Image Processing](./image-to-image.md) for details).

#### **Steps**

Number of denoising steps. More steps generally produce higher quality images but take longer to generate. Typical values range from 20-50.

#### **Guidance Scale**

Controls how closely the model follows your prompt. Higher values (7-15) follow the prompt more strictly, lower values (1-7) allow more creative interpretation.

#### **Seed**

Random seed for reproducibility. Leave empty for random generation, or use a specific number to generate the same image repeatedly.

#### **Number of Images**

Number of images to generate in parallel. Higher values will take longer but produce more options to choose from.

### Advanced Controls

The advanced menu provides additional fine-tuning options:

#### **Negative Prompt**

Describe what you don't want to see in the generated image. This helps guide the model away from unwanted elements, styles, or features.

```text
blurry, low quality, distorted, watermark, text, signature
```

#### **ETA**

Controls the amount of noise in the denoising process. Higher values add more randomness while lower values make the process more deterministic. Leave at 0.0 for default behavior.

#### **Clip Skip**

Number of CLIP text encoder layers to skip. Higher values may result in more artistic or abstract outputs. Set to 0 for default behavior.

#### **Guidance Rescale**

Rescales the guidance scale to prevent over-saturation. Values between 0.0-1.0 can help balance prompt adherence with image quality. Leave at 0.0 for default behavior.

#### **Image Width**

Set a custom width for the generated image in pixels. Leave at 0 to use the model's default width. Values should be multiples of 8.

#### **Image Height**

Set a custom height for the generated image in pixels. Leave at 0 to use the model's default height. Values should be multiples of 8.

#### **Upscale Image**

Enhance the generated image resolution by upscaling it 2x using an upscaling model. This improves detail and clarity, especially for low-resolution outputs.

## Best Practices

### Prompt Writing Tips

- **Be descriptive and specific**: Include detailed descriptions of subjects, styles, and compositions
- **Use quality modifiers**: Add terms like "high quality", "detailed", "professional"
- **Specify artistic styles**: Mention specific art styles, techniques, or artists
- **Include lighting details**: Describe lighting conditions for better results

### Example Prompts

**Landscape:**

```text
A serene mountain landscape at sunset, digital art style, detailed clouds, vibrant colors, high resolution
```

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/t2i_eg1.png').default} width="500" />
</div>

**Portrait:**

```text
Ethereal glitchcore avatar, ghostly neon lights, transparent digital face, colorful broken static, futuristic spectral energy, vibrant holographic mist
```

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/screenshot.png').default} width="500" />
</div>

### Parameter Optimization

- **Start with defaults**: Begin with standard settings and adjust based on results
- **Experiment with steps**: Try 20-30 steps for faster results, 40-50 for higher quality
- **Adjust guidance scale**: Use 7-10 for balanced results, higher for strict prompt following
- **Use negative prompts**: Always specify what you don't want to avoid common issues
- **Test different seeds**: Generate multiple variations to find the best result

### Performance Considerations

- **Monitor GPU memory**: Reduce image dimensions or number of images if memory is limited
- **Balance quality vs speed**: More steps and higher resolution increase generation time
- **Use upscaling wisely**: Enable upscaling for final images rather than during experimentation
- **Batch generation**: Generate multiple images at once for efficiency

## Saving Generated Images

Once you've generated images, you can easily save them to your local system:

- **Save All Images button**: Located below the generated images, this button allows you to download all generated images at once
- **Convenient batch saving**: No need to save images individually - get all your results in one action as a zip file

This feature is particularly useful when generating multiple images in a batch, allowing you to quickly save all variations for comparison or further use.

## Troubleshooting

### Common Issues

- **Out of memory errors**: Reduce image dimensions, lower number of images, or use smaller models
- **Poor image quality**: Increase steps, adjust guidance scale, or improve prompt details
- **Slow generation times**: Reduce steps, image resolution, or number of images
- **Prompt not being followed**: Increase guidance scale, improve prompt specificity, or add negative prompts
- **Unwanted elements**: Use negative prompts to exclude specific features or styles

### Solutions and Tips

- **Memory optimization**: Use image dimensions that are multiples of 8 for best performance
- **Quality improvement**: Combine detailed prompts with appropriate guidance scale settings
- **Speed optimization**: Use fewer steps during experimentation, more for final generation
- **Consistency**: Use the same seed value to reproduce successful results


# File: docs/diffusion/uploading-image-datasets.md

---
---
sidebar_position: 8
---

# Uploading Image Datasets

## Downloading Datasets from Hugging Face

On the **Datasets** tab, switch to the **Local Datasets** view. At the bottom left, use the search bar to find and download any text or image dataset directly from Hugging Face.

## Uploading Local Image Datasets

You can upload your own image datasets in standard Hugging Face format.

1. In **Local Datasets**, click the **New** button at the bottom right.
2. In the upload dialog:
   - **Dataset Name**: Enter a unique name for your dataset.
   - **Type**: Select **Image**.
   - **Folder**: Choose a local folder containing images organized in Hugging Face’s image dataset structure (see [Huggingface Image Datasets](https://huggingface.co/docs/datasets/en/image_dataset)).
3. **Drag and drop** your folder into the dialog or click to select it.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/imgdatasets-uploading-data.gif').default} width="600" />
  <p><em>Uploading a new image dataset</em></p>
</div>

Once complete, a new dataset card appears in **Local Datasets**:

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/imgdatasets-preview.gif').default} width="600" />
  <p><em>Previewing an uploaded image dataset</em></p>
</div>

## Editing Image Datasets

Transformer Lab preserves provenance by creating a new dataset when you edit.

1. On any local image dataset card, click the **Edit** icon.
2. In the edit dialog you can:
   - Modify any metadata column (caption, label, etc.).
   - Change the **split** value for each row (accepted: `train`, `valid`, `test`; any other value defaults to `train`).
3. Note: Datasets uploaded from Parquet files are not supported for editing.
4. Click **Save** to create an edited copy, leaving the original intact.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/imgdatasets-editing.gif').default} width="600" />
  <p><em>Editing an uploaded image dataset</em></p>
</div>

After saving, the edited dataset appears alongside the original:

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/imgdatasets-editpreview.gif').default} width="600" />
  <p><em>Previewing the edited image dataset</em></p>
</div>

# File: docs/download.md

---
---
sidebar_position: 200
---

import Button from '@site/src/components/Button';
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import appVersion from '../static/app-version.json';

# Download ↓

:::warning
We have deprecated the downloadable app and will no longer be releasing updates as of version 0.28. Please install Transformer Lab [on the commandline by following the instructions here](./install/install.md).
:::

Latest downloadable version: 0.27.8

## <FaApple /> macOS

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-0.27.8-arm64.dmg`}>
<Button>Download for <FaApple /> Mac (Silicon)</Button>
</a>

<br/><br/>

<!-- <a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-0.27.8.dmg`}>
  <Button>Download for <FaApple /> Mac (Intel)</Button>
  </a> -->

## <FaWindows/> Windows

<a href={`https://github.com/transformerlab/transformerlab-app/releases/download/v${appVersion.version}/Transformer-Lab-Setup-0.27.8.exe`}>
<Button>Download for <FaWindows /> Windows</Button>
</a>

<br/>

Local Connection on Windows requires Windows 10+ with WSL installed.

## <FaLinux/> Linux

Follow our [Install Instructions](./install/install.md)


# File: docs/evaluate/common-evals.md

---
---
sidebar_position: 4
---
# Basic Evaluation Metrics

This plugin allows you to perform common evaluation checks, such as string matching, string containment, or even custom checks using regular expressions on any output. It’s designed to help you quickly validate and analyze outputs through predefined as well as custom evaluation metrics.

## Steps to Use the Plugin

### 1. Download the Plugin

- **Step:** Go to the `Plugins` tab.
- **Instruction:** Download the `Basic Evaluation Metrics` Plugin.

<img src={require('./gifs/common-evals/1_InstallPlugin.gif').default} alt="GIF Animation" width="500" />

### 2. Create a New Evaluation Task

- **Step:** Go to the `Evaluate` tab.
- **Instruction:** Click on the `Add Task` button.
- A pop-up will appear where you configure your evaluation task.
- **Tabs:**
  - **Introduction Tab:** Provides details about the plugin.
  - **Name Tab:** Set the name for your task.

<img src={require('./gifs/common-evals/2_CreatingTask.gif').default} alt="GIF Animation" width="500" />

### 3. Configure Plugin Settings

- **Tab:** *Plugin Config*
- **Predefined Metrics:**
  - `Is Valid JSON`: Checks if the output is a valid JSON.
  - `Word Count`: Counts the number of words in the output.
  - `Contains bulleted lists`: Verifies if the output includes bulleted lists.
  - `Contains headings`: Checks for presence of headings.
  - `Contains URLs`: Detects URLs in the output.
  - `Contains code blocks`: Looks for formatted code blocks.
  - `Contains tables`: Identifies table elements within the output.
  - `Contains images`: Checks for image references.
  - `Contains numbered lists`: Detects numbered list formatting.
  - `Contains bold text`: Verifies instances of bold text.
  - `Contains italic text`: Checks for italicized text.
  - `Contains underline text`: Looks for underlined text.
  - `Contains strikethrough text`: Checks text for strikethrough formatting.
  - `Contains blockquotes`: Detects blockquoted text.
  - `Contains inline code`: Looks for inline code snippets.
  - `Contains emojis`: Checks if the output includes emojis.
  - `Contains email addresses`: Verifies presence of email addresses.
  - `Contains phone numbers`: Identifies phone number patterns.
  - `Contains dates`: Checks for date formats.
  - `Contains times`: Looks for time patterns.
  - `Contains numbers`: Verifies the presence of numerical data.

  <img src={require('./gifs/common-evals/3_SettingPredefined.gif').default} alt="GIF Animation" width="500" />


- **Custom Evaluation Metrics:**
  - Click the **Add Field** button.
  - Three fields will appear:
    - **Evaluation Name:** Provide a name for your custom check.
    - **Regular Expression/String:** Input your regex pattern or string criteria or a Python code block.
    - **Type Drop Down:** Choose from `Boolean`, `Number`, `Contains`, or `IsEqual`.
      - **Boolean:** Returns the percentage (out of 1) where the regular expression holds true.
      - **Number:** Returns the average length of matches found.
      - **Contains:** Checks if a specific string is found within your output.
      - **IsEqual:** Compares the output for an exact match to the provided string.
      - **Code**: You can also use the `Code` option to write custom Python code for evaluation.

> **Note**: If using the `Code` option, ensure that the code returns a numeric value or a boolean. The code must contain a function called `evaluate` which will be used for the main execution. The params provided will be called `output_text` which represents the text in the output column for each row provided one at a time.

<img src={require('./gifs/common-evals/4_SettingCustomAndOthers.gif').default} alt="GIF Animation" width="500" />


### 4. Select Your Dataset

- **Step:** In the next tab, select the dataset for your task.
- **Instruction:** Set the input and output column names within your dataset. The `input` column represents the prompts that you originally sent to the model. The `output` column contains the model’s responses.
- **Outcome:** The plugin will evaluate the output column based on the metrics you have defined. While the current version only supports evaluating model outputs, future versions will allow you to evaluate the input column as well on some specific evaluation metrics.
<img src={require('./gifs/common-evals/5_SelectingDataset.gif').default} alt="GIF Animation" width="500" />


### 5. Run and View the Evaluation Task

- **Step:** Click on the `Queue` button.
- **Instruction:** The evaluation task will run on your dataset.
- **Outcome:** You can view a detailed report along with live output of the job execution.

<img src={require('./gifs/common-evals/6_RunTaskAndOutputs.gif').default} alt="GIF Animation" width="500" />


# File: docs/evaluate/diffusion-llm-evaluator.md

---
---
sidebar_position: 6
---

# Diffusion LLM Evaluator

Use the Diffusion LLM Evaluator plugin to score BERT, Dream, and LLaDA text-diffusion models with the EleutherAI LM Evaluation Harness. The plugin mirrors the workflow of other Harness evaluators but exposes dllm-specific decoding controls (diffusion steps, CFG, Dream sampling, etc.) so you can compare apples-to-apples with your training configurations.

## 1. Install the Evaluator Plugin

1. Open the `Plugins` tab.
2. Filter by `Evaluator` and install **Diffusion LLM Evaluator**.
3. Ensure your workspace has CUDA GPUs—the harness backend and dllm runners currently target CUDA only.

<img src={require('./gifs/diffusion-llm-evaluator/eval_config.png').default} alt="Plugin Config" width="500" />


## 2. Select a Model to Evaluate

1. Go to the **Foundation** tab and pick the adaptor or fused model you trained earlier (BERT / Dream / LLaDA).
2. Click **Create Evaluation Task** and choose the Diffusion LLM Evaluator as the plugin.

### Dataset Tab?

Harness benchmarks ship their own datasets, so you can leave the Dataset tab empty. Transformer Lab handles all prompt/answer fetching for the task you choose later.

## 3. Configure the Evaluation Task

Fill in the **Template/Task Name** and move to the **Plugin Config** tab. The fields mirror the JSON schema in your `index.json` and map directly to EleutherAI Harness arguments.

### Model + Task Selection

- **Model Type (`model_type`):** Pick the architecture family for the adaptor you selected (`bert`, `dream`, or `llada`). This toggles which dllm runner spins up.
- **Tasks (`tasks`):** Choose one benchmark from the Harness list (ARC, HellaSwag, MMLU categories, GSM8K, HumanEval, etc.). Each task runs separately; duplicate the template if you want a sweep.
- **Limit (`limit`):** Fraction of the task to evaluate (0.05–1.0). Keep it at `1.0` for leaderboard-quality scores; drop lower for sanity checks.
- **Num Few-shot (`num_fewshot`):** Add K-shot demonstrations for tasks that support it.
- **Apply Chat Template:** Enable to wrap prompts using the model’s chat formatting before sending them to the evaluator.

### Diffusion Generation Controls

- **Steps (`steps`):** Number of diffusion steps per completion (1–2048).
- **Max New Tokens (`max_new_tokens`):** Upper bound on output length.
- **Block Length / CFG Scale:** Available for BERT and LLaDA models to control block sampling and classifier-free guidance.
- **Temperature / Top-p:** Dream-only sampling knobs for controllable diversity.

### Advanced Accuracy Options

- **Monte Carlo Samples (`mc_num`):** Number of samples per loglikelihood evaluation. Increase for stable estimates on generative tasks.

After reviewing everything, click **Save Evaluation Template**.

## 4. Queue and Monitor the Evaluation

1. Open the template drawer and hit **Queue**.
2. The evaluator will:
   - Load the selected adaptor and harness task definition
   - Run inference with your diffusion sampling settings
   - Aggregate metrics from the EleutherAI Harness report

## 5. Review the Results

- **Job Output:** Inspect the live log stream for per-sample scores, harness status, and any dllm warnings.
- **Results Reports:** You can view the results reports with your run and also compare the evaluation run to other evaluation runs under the Evaluate tab.
- **Foundation Tab:** Metrics are attached to the evaluated model under provenance so you can quickly compare.

<img src={require('./gifs/diffusion-llm-evaluator/eval_output.png').default} alt="Plugin Output" width="500" />

## Tips for Reliable Harness Runs

- **Match Training + Eval Settings:** Re-use the same model type, CFG, and temperature settings you logged during training for apples-to-apples comparisons.
- **Start with Smaller Limits:** Validate script wiring with `limit = 0.1` before paying the cost of full evaluations.
- **GPU Utilization:** Evaluations parallelize over CUDA devices just like training; keep other heavy jobs paused to avoid OOMs mid-run.



# File: docs/evaluate/harness.md

---
---
sidebar_position: 1
---

# EleutherAI Harness Evaluation

EleutherAI Harness is a powerful evaluation framework that lets you measure how well a model performs across a range of standardized benchmarks. Follow the steps below for a guided walkthrough of the evaluation process.

## 1. Selecting a Model from the Foundation Tab

Start by navigating to the Foundation tab in Transformer Lab. Choose the model you want to evaluate from the list provided.

<!-- Insert GIF showing model selection -->

<img src={require('./gifs/harness/1_SelectModel.gif').default} alt="GIF Animation" width="500" />

## 2. Downloading the Appropriate Plugin

In order to use the evaluation functionalities, you need to download the correct plugin:

- **For Mac Systems:** Download the `Eleuther AI LM Evaluation Harness MLX` plugin. This version is optimized for Mac systems and provides better support.
- **For Other Systems:** Download the `Eleuther AI LM Evaluation Harness` plugin.

<!-- Insert GIF showing plugin download -->

<img src={require('./gifs/harness/2_DownloadPlugin.gif').default} alt="GIF Animation" width="500" />

## 3. Configuring the Evaluation Task

Configure your evaluation task by following these steps:

- **Name Your Evaluation Task:** Enter a descriptive name for easy identification.
- **Select Evaluation Tasks:** Choose the suite of tasks within the Harness that you wish to evaluate.
- **Define the Evaluation Scope:** Select the fraction of samples to evaluate. The recommended fraction is `1` (using the full benchmark) for a thorough assessment. For testing or debugging, you can choose a lower fraction.

<!-- Insert GIF showing task configuration -->

<img src={require('./gifs/harness/3_SetTask.gif').default} alt="GIF Animation" width="500" />

## 4. Running the Evaluation

Once you have set up the task, click on the **Queue** button to start the evaluation process.

<!-- Insert GIF showing the evaluation queue -->

<img src={require('./gifs/harness/4_RunEval.gif').default} alt="GIF Animation" width="500" />

## 5. Viewing the Results

After the evaluation completes, you can review the results:

- **Job Output:** Check the output logs for immediate results and logs of the job execution.
- **Detailed Report:** Access the detailed report generated by Harness for an in-depth analysis of the evaluation outcomes.

<!-- Insert GIF showing results output -->

<img src={require('./gifs/harness/5_ResultsPreview.gif').default} alt="GIF Animation" width="500" />


# File: docs/evaluate/judge.md

---
---
sidebar_position: 2
---

# LLM-as-Judge Evaluations

Transformer Lab provides an easier way to intergrate the LLM-as-judge suite of metrics by DeepEval to evaluate model outputs across multiple dimensions. Here's an overview of the available metrics:

- **Bias**: Measures the presence of unfair prejudices or discriminatory content in model outputs
- **Toxicity**: Evaluates the presence of harmful, offensive, or inappropriate content
- **Faithfulness**: Assesses how well the output aligns with and stays true to the provided context
- **Hallucination**: Checks for fabricated or incorrect information not supported by the context
- **Answer Relevancy**: Measures how well the output addresses the input query
- **Contextual Precision**: Evaluates the accuracy of information used from the provided context
- **Contextual Recall**: Assesses how comprehensively the output covers relevant information from the context
- **Contextual Relevancy**: Measures how well the output relates to and uses the given context
- **Custom (GEval)**: Allows creation of custom evaluation criteria by providing specific evaluation guidelines

## Dataset Requirements

To perform these evaluations, you'll need to upload a dataset with the following required columns:

- `input`: The prompt/query given to the LLM
- `output`: The actual response generated by the LLM
- `expected_output`: The ideal or reference response
- `context`: Supporting context (optional for plugins that don't require it)

## Step-by-Step Evaluation Process

### 1. Download the Plugin

Navigate to the Plugins section and install the `LLM-as-Judge Evaluator` plugin.

<!-- Insert GIF for plugin download -->

<img src={require('./gifs/judge/1_DownloadPlugin.gif').default} alt="Download Plugin" width="500" />

### 2. Create Evaluation Task

Configure your evaluation task with these settings:

a) **Basic Configuration**

- Provide a name for your evaluation task
- Select the desired evaluation metrics from the Tasks tab

b) **Plugin Configuration**

- Choose a judge model (select 'local' to use Transformer Lab's local model)
- Set the sample fraction for evaluation
- For GEval tasks:
  - Specify the Criteria Name and Description
  - Choose between context-dependent or context-independent evaluation
- Select your evaluation dataset

<!-- Insert GIF for task creation -->

<img src={require('./gifs/judge/2_CreateTask.gif').default} alt="Create Task" width="500" />

### 3. Run the Evaluation

Click the Queue button to start the evaluation process. Monitor progress through the View Output option.

<!-- Insert GIF for running evaluation -->

<img src={require('./gifs/judge/3_RunTask.gif').default} alt="Run Evaluation" width="500" />

### 4. Review Results

After completion, you can:

- View the evaluation scores directly in the interface
- Access the Detailed Report for in-depth analysis
- Download the complete evaluation report

<!-- Insert GIF for viewing results -->

<img src={require('./gifs/judge/4_ResultsPreview.gif').default} alt="View Results" width="500" />

> **Note**: You can now create custom evaluation metrics using GEval by providing custom evaluation metrics' description and the Judge LLM would use that to formulate and score based on your description and provide a score and reason for the same.

<img src={require('./gifs/judge/5_GEval.gif').default} alt="View Results" width="500" />

# File: docs/evaluate/objective.md

---
---
sidebar_position: 3
---

# Evaluating with Objective Metrics

Transformer Lab provides a suite of industry-standard objective metrics supported by DeepEval to evaluate model outputs. Here's an overview of the available metrics:

- **Rouge**: Evaluates text similarity based on overlapping word sequences
- **BLEU**: Measures the quality of machine-translated text by comparing it with reference translations
- **Exact Match**: Checks for perfect string matches between output and expected output
- **Quasi Exact Match**: Similar to exact match but allows for minor variations in capitalization and whitespace
- **Quasi Contains**: Checks if the expected output is contained within the model output, allowing for minor variations
- **BERT Score**: Uses BERT embeddings to compute similarity between outputs

## Dataset Requirements

To perform these evaluations, you'll need to upload a dataset with the following required columns:

- `input`: The prompt/query given to the LLM
- `output`: The actual response generated by the LLM
- `expected_output`: The ideal or reference response

## Step-by-Step Evaluation Process

### 1. Download the Plugin

Navigate to the Plugins section and install the `Objective Metrics` plugin.

<!-- Insert GIF for plugin download -->

<img src={require('./gifs/objective/1_DownloadPlugin.gif').default} alt="Download Plugin" width="500" />

### 2. Create Evaluation Task

Configure your evaluation task with these settings:

a) **Basic Configuration**

- Provide a name for your evaluation task
- Select the desired evaluation metrics from the Tasks tab

b) **Plugin Configuration**

- Set the sample fraction for evaluation
- Select your evaluation dataset

<!-- Insert GIF for task creation -->

<img src={require('./gifs/objective/2_CreateTask.gif').default} alt="Create Task" width="500" />

### 3. Run the Evaluation

Click the Queue button to start the evaluation process. Monitor progress through the View Output option.

<!-- Insert GIF for running evaluation -->

<img src={require('./gifs/objective/3_RunTask.gif').default} alt="Run Evaluation" width="500" />

### 4. Review Results

After completion, you can:

- View the evaluation scores directly in the interface
- Access the Detailed Report for in-depth analysis
- Download the complete evaluation report

<!-- Insert GIF for viewing results -->

<img src={require('./gifs/objective/4_ResultsPreview.gif').default} alt="View Results" width="500" />


# File: docs/evaluate/red-teaming.md

---
---
sidebar_position: 5
---
# Red Teaming Evaluations

This plugin helps you evaluate Language Models (LLMs) for vulnerabilities and weaknesses through red teaming techniques. It systematically tests for various security concerns including bias, misinformation, PII leakage, and unauthorized access attempts.

## Steps to Use the Plugin

### 1. Download the Plugin

- **Step:** Go to the `Plugins` tab.
- **Instruction:** Download the `Red Teaming Evaluations` Plugin.

<img src={require('./gifs/red-teaming/1_InstallPlugin.gif').default} alt="GIF Animation" width="500" />

### 2. Create a New Evaluation Task

- **Step:** Go to the `Evaluate` tab.
- **Instruction:** Click on the `Add Task` button.
- A pop-up will appear where you configure your evaluation task.
- **Tabs:**
  - **Introduction Tab:** Provides details about the plugin.
  - **Name Tab:** Set the name for your task.


### 3. Configure Plugin Settings

- **Tab:** *Plugin Config*
- **Vulnerability Testing Areas:**
  - `Bias Detection`: Select bias categories to test:
    - Gender
    - Race
    - Religion
    - Political bias
  - `Misinformation`: Test for:
    - Factual errors
    - Unsupported claims
    - Expertise misrepresentation
  - `PII Leakage`: Evaluate protection against:
    - Database access
    - Direct leakage
    - Session leaks
    - Social manipulation
  - `Personal Safety`: Check handling of:
    - Self-harm content
    - Bullying
    - Unsafe practices
    - Dangerous challenges
  - `Toxicity`: Test responses to:
    - Profanity
    - Insults
    - Threats
    - Mockery
  - `Robustness`: Assess vulnerability to:
    - Prompt hijacking
    - Input overreliance
  - `Unauthorized Access`: Test security against:
    - SQL Injection
    - Shell Injection
    - Debug Access
    - SSRF (Server-Side Request Forgery)
    - RBAC bypasses
    - BOLA (Broken Object Level Authorization)
    - BFLA (Broken Function Level Authorization)
  - `Illegal Activity`: Detection of content related to:
    - Weapons
    - Drugs
    - Cybercrime
  - `Graphic Content`: Test handling of sensitive material
  - `Intellectual Property`: Check for protection of:
    - Copyright
    - Trademark
    - Patent information

<!-- <img src={require('./gifs/red-teaming/3_SelectingVulnerabilities.gif').default} alt="GIF Animation" width="500" /> -->

- **Attack Enhancement Methods:**
  - Select multiple enhancement methods from a single dropdown:
    - `Encoding Techniques` (BASE64, ROT13, LEETSPEAK)
    - `Jailbreak Patterns` (Crescendo, Linear, and Tree approaches)
    - `Advanced Methods` (Gray box attacks, Prompt injection, Multilingual attacks)
    - `Specialized Probing` (Math problems, Prompt probing)

<img src={require('./gifs/red-teaming/2_CreatingTask.gif').default} alt="GIF Animation" width="500" />

- **Test Parameters:**
  - **Judge Model:** Select which LLM will evaluate the results
  - **Number of Attacks:** Define how many attacks per vulnerability to test
  - **Target Details:** Specify the purpose and system prompt of your target model

<img src={require('./gifs/red-teaming/3_RunningTask.gif').default} alt="GIF Animation" width="500" />

### 5. Run and View the Evaluation Task

- **Step:** Click on the `Queue` button.
- **Instruction:** The evaluation task will run on your dataset.
- **Outcome:** You can view a detailed report showing vulnerabilities detected, attack success rates, and recommended mitigations.

<img src={require('./gifs/red-teaming/4_Outputs.gif').default} alt="GIF Animation" width="500" />

# File: docs/export/gguf-exporter.md

---
---
sidebar_position: 2
---
# GGUF Exporter Plugin

GGUF is a binary format optimized for quick loading and saving of models, making it highly efficient for inference and designed for use with GGML and other executors. [Learn more about GGUF](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md).

The GGUF Exporter Plugin allows you to export your model to the GGUF format with quantization. Follow the steps below to use the plugin.

<img src={require('./gifs/GGUFExporter.gif').default} alt="Exporter GIF" width="500" />

## Steps to Export

1. **Download the Plugin**:  
   Navigate to the **Plugins** tab and download the GGUF Exporter Plugin.

2. **Switch to the Export Tab**:  
   After downloading, go to the **Export** tab.

3. **Select GGUF Exporter**:  
   Choose **GGUF Exporter** from the available export options.

4. **Configure Export Settings**:  
   a.  **Output Format**: Configure the output format of the exporter. Supported values are `q8_0`, `f16`, or `f32`.

5. **Export the Model**:  
   Click **Export**. The plugin will process the request and display the exported model in the **Foundation** tab.

Explore the GGUF Exporter Plugin to simplify model quantization and export tasks!


# File: docs/export/llamafile-exporter.md

---
---
sidebar_position: 3
---
# Llamafile Exporter Plugin

The Llamafile Exporter Plugin enables you to transform your model into the Llamafile format. Llamafile allows efficient distribution and local execution of LLMs through a single-file executable, eliminating the need for complex installations. [Learn more about Llamafile](https://llamafile.ai).


<img src={require('./gifs/LlamafileExporter.gif').default} alt="Exporter GIF" width="500" />

## Steps to Export

1. **Download the Plugin**:  
   Navigate to the **Plugins** tab and download the Llamafile Exporter Plugin.

2. **Switch to the Export Tab**:  
   After downloading, go to the **Export** tab.

3. **Select Llamafile Exporter**:  
   Choose **Llamafile Exporter** from the available export options.

4. **Export the Model**:  
   Click **Export**. The plugin will process the request and display the exported model in the **Foundation** tab.

Explore the Llamafile Exporter Plugin to simplify export to Llamafile and export tasks!


# File: docs/export/mlx-exporter.md

---
---
sidebar_position: 1
---
# MLX Exporter Plugin

MLX is an array framework built for efficient model execution on Apple silicon. It leverages the unified memory architecture and a familiar NumPy-like API, along with high-level neural net and optimization tools, to deliver fast model performance. [Learn more about MLX](https://opensource.apple.com/projects/mlx/)

The MLX Exporter Plugin allows you to export your model to the MLX format with quantization. The exported models would only currently work with the Apple M-Series Silicon Chips. Follow the steps below to use the plugin.

<img src={require('./gifs/MLXExporter.gif').default} alt="Exporter GIF" width="500" />

## Steps to Export

1. **Download the Plugin**:  
   Navigate to the **Plugins** tab and download the MLX Exporter Plugin.

2. **Switch to the Export Tab**:  
   After downloading, go to the **Export** tab.

3. **Select MLX Exporter**:  
   Choose **MLX Exporter** from the available export options.

4. **Configure Export Settings**:  
   - **Bits per Weight**: Enter the bits per weight of [quantization](#quantization-footer). Supported values are 2, 4, or 8.

5. **Export the Model**:  
   Click **Export**. The plugin will process the request and display the exported model in the **Foundation** tab.

Explore the MLX Exporter Plugin to simplify model quantization and export tasks!

---

<a id="quantization-footer"></a>
**Quantization**  
Quantization is the process of reducing the precision of the numbers used to represent a model's weights. This helps to decrease memory usage and accelerate inference speed while maintaining a balance with model accuracy.

# File: docs/generate/dataset_imagegen.md

---
---
sidebar_position: 7
---

# Generate Image Dataset from Prompts (`dataset_imagegen`)

This plugin generates an image dataset using the local text-to-image diffusion model such as Stable Diffusion. It takes prompts from a user-provided dataset and outputs generated images along with associated metadata.

## Step 1: Prepare Your Dataset

You must upload a dataset with prompts using the `Datasets` tab.

### Supported Metadata Fields

- `prompt`: Required. The main prompt used for image generation.
- `negative_prompt`: Optional. Used to guide the model away from undesired traits.
- Any additional metadata fields are ignored during generation.

<img src={require('./gifs/dataset_imagegen/dataset.gif').default} alt="Dataset Creation" width="500" />

## Step 2: Configure Plugin Parameters

When setting up a generation job with `dataset_imagegen`, configure the following parameters:

| Parameter | Description | Required | Example |
|----------|-------------|----------|---------|
| `Prompt Column` | Name of the column that contains prompts | ✅ | `"prompt"` |
| `Negative Prompt Column` | Name of the column for negative prompts (leave empty if not used) | ❌ | `"negative_prompt"` |
| `Prompt Postfix` | Optional text to append to each prompt (useful for adding trigger words or style cues) | ❌ | `"as a painting"` |
| `Image Width` | Width of generated images (pixels) | ✅ | `512` |
| `Image Height` | Height of generated images (pixels) | ✅ | `512` |
| `Images Per Prompt` | How many images to generate per prompt | ✅ | `4` |
| `Seed` | Set seed for reproducibility (use `-1` for random seed) | ✅ | `42` |
| `Guidance Scale` | How strictly the model follows the prompt | ✅ | `7.5` |
| `Number of Inference Steps` | Quality/speed trade-off for generation | ✅ | `30` |

<img src={require('./gifs/dataset_imagegen/parameters.gif').default} alt="Input Parameters" width="500" />

## Step 3: Start the Job

After uploading your dataset and configuring parameters, start the generation by clicking on the `Queue` button. You can monitor progress in the "Executions" tab.

Each row in your dataset will be used to generate one or more images (the number of generated images depends on the input parameters in step 2).

## Step 4: View the Output

You can preview the dataset using the UI inside the `Generate` or the `Datasets` -> `Generated Datasets` tabs (the latter provides a tool to edit the text fields and create a new dataset as well) or export it for downstream use.

## Example Use Case

| Prompt | Negative Prompt | Postfix |
|--------|------------------|---------|
| `"a futuristic city skyline at sunset"` | `"low resolution"` | `"as Persian artwork"` |

This will generate image(s) of futuristic cities painted using a Persian artwork style, while avoiding low-resolution features.

<img src={require('./gifs/dataset_imagegen/process.gif').default} alt="Generation Process" width="500" />


# File: docs/generate/docs.md

---
---
sidebar_position: 1
---

# Generate Data from Documents

This page explains how to generate data from reference documents using Transformer Lab.


## Step 1: Upload Your Documents

- Navigate to the **Documents Section**.
- Choose to either upload a single document or create a folder to upload multiple documents at once.

<img src={require('./gifs/docs/UploadDocs.gif').default} alt="Docs Upload Gif" width="500" />

## Step 2: Download the Generate From Docs Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Generate From Docs Plugin**.

<img src={require('./gifs/docs/DownloadPlugin.gif').default} alt="Plugin Gif" width="500" />

## Step 3: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Generate from Documents**.
- A pop-up window will appear for configuring your generation task.


### Step 3.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Specify the embedding model that will be used for the generation.
- Feel free to adjust other settings, although the recommended defaults usually work best.

#### Selecting Documents

- After configuring the plugin, navigate to the **Documents Tab**.
- Select the file(s) or folder(s) you want to use to generate your datasets.

<img src={require('./gifs/docs/GenerationTaskCreation.gif').default} alt="Generation Task Gif" width="500" />

## Step 4: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, the generated dataset will be visible under the **Generated Tab** in the **Datasets** section.

<img src={require('./gifs/docs/GeneratingData.gif').default} alt="Generation Task Gif" width="500" />

## Step 5: Preview Your Data

- Go to the **Generated** tab in the **Datasets** section.
- Click on the dataset you generated to preview the data.

<img src={require('./gifs/docs/DatasetPreview.gif').default} alt="Generation Task Gif" width="500" />


# File: docs/generate/qna_dataset.md

---
---
sidebar_position: 2
---

# Generate Fact-based QnA Dataset From Documents

This page explains how to generate a fact-based question and answer dataset from documents using Transformer Lab.

## Step 1: Upload Your Documents

- Navigate to the **Documents Section**.
- Choose to either upload a single document or create a folder to upload multiple documents at once.

> **Note**: If you plan to use these documents for RAG as well then you should upload the documents in a folder called `rag` for enabling automatic indexing.

<img src={require('./gifs/qna_dataset/1_UploadingDocs.gif').default} alt="Docs Upload Gif" width="500" />

## Step 2: Download the Generate Dataset with QA Pairs for RAG Evaluation Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Generate Dataset with QA Pairs for RAG Evaluation** Plugin.

<img src={require('./gifs/qna_dataset/2_DownloadingPlugin.gif').default} alt="Plugin Gif" width="500" />

## Step 3: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Generate Dataset with QA Pairs for RAG Evaluation**.
- A pop-up window will appear for configuring your generation task.

### Step 3.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Add the Number of QA Pairs you'd like to generate. The default is 10.
- Feel free to adjust other settings, although the recommended defaults usually work best.

#### Selecting Documents

- After configuring the plugin, navigate back to the **Documents Tab**.
- Select the file(s) or folder(s) you want to use to generate your datasets.

<img src={require('./gifs/qna_dataset/3_GenerationTaskCreation.gif').default} alt="Generation Task Gif" width="500" />

## Step 4: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, the generated dataset will be visible under the **Generated** tab in the **Training Data** section.

## Step 5: Preview Your Data

- Go to the **Generated** tab in the **Training Data** section.
- Click on the dataset you generated to preview the data.

<img src={require('./gifs/qna_dataset/4_DatasetPreview.gif').default} alt="Generation Task Gif" width="500" />


# File: docs/generate/rag_outputs_batched.md

---
---
sidebar_position: 6
---

# Generate Batched RAG Outputs from Datasets

This page explains how to generate batched RAG (Retrieval-Augmented Generation) outputs from datasets using Transformer Lab.

## Prerequisites

Before using the RAG Batched Outputs Generator, you need:

1. A dataset containing input questions
2. The RAG Plugin installed in Transformer Lab
3. A running foundation model (you can enable this from the Foundation tab)

## Step 1: Download the RAG Batched Outputs Generator Plugin

- Go to the **Plugins Tab**
- Use the filter by type **generator** to narrow down the list
- Find and download the **RAG Batched Outputs Generator** plugin

<img src={require('./gifs/rag_outputs_batched/1_DownloadingPlugin.gif').default} alt="Plugin Download Gif" width="500" />

## Step 2: Create a Generation Task

- Navigate to the **Generate Tab**
- Click on **Create Task**
- From the drop-down menu, select **RAG Batched Outputs Generator**
- A pop-up window will appear for configuring your generation task

### Step 2.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**
- Configure the following settings:
  - **Input Field**: Specify the column name in your dataset containing the input questions
  - **RAG Parameters**:
    - Set retrieval options (number of chunks, similarity threshold, etc.)
    - Configure generation parameters
  - **Reranker Options**:
    - Toggle **Use Reranker** to enable/disable reranking of retrieved documents
    - If enabled, enter the name of the reranker model from HuggingFace or the path to the reranker

#### Selecting Your Dataset

- Navigate to the **Dataset** tab
- Select the dataset containing your input questions

<img src={require('./gifs/rag_outputs_batched/2_CreatingTask.gif').default} alt="Task Configuration Gif" width="500" />

## Step 3: Run the Task

- Once you have configured your task, click on the **Create** button
- Click on the **Queue** button to start the generation process
- The task will begin processing each input in your dataset through the RAG pipeline

<img src={require('./gifs/rag_outputs_batched/3_RunningTask.gif').default} alt="Task Configuration Gif" width="500" />


## Step 4: View the Generated Output

- When the task completes, a new dataset will be created in the **Datasets** tab
- This dataset will contain:
  - Your original data columns
  - The RAG-generated outputs
  - Retrieved context used for generation
  - If your input dataset was created with the "RAG QA Dataset Generator for RAG Evaluation" plugin, an **expected_output** column will also be preserved for evaluation purposes

<img src={require('./gifs/rag_outputs_batched/4_ResultsPreview.gif').default} alt="Results Viewing Gif" width="500" />

## Use Cases

This plugin is particularly useful for:

- Batch processing queries through your RAG system
- Testing RAG performance on large datasets
- Preparing data for RAG system evaluation
- Comparing different RAG configurations


# File: docs/generate/raw_text.md

---
---
sidebar_position: 4
---

# Generate Data from Raw Text

This page explains how to generate data from raw text using Transformer Lab.

<img src={require('./gifs/raw_text/DownloadPlugin.gif').default} alt="Docs Upload Gif" width="500" />

## Step 1: Download the Generate From Raw Text Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Generate From Raw Text Plugin**.

## Step 2: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Generate from Raw Text**.
- A pop-up window will appear for configuring your generation task.

### Step 2.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Specify the number of samples you want to generate.

#### Entering Context

- After configuring the plugin, navigate back to the **Context** tab.
- Paste the raw context you want to use to generate your datasets.

## Step 3: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, the generated dataset will be visible under the **Generated Tab** in the **Training Data** section.

<img src={require('./gifs/raw_text/CompleteGeneration.gif').default} alt="Docs Upload Gif" width="500" />

## Step 4: Preview Your Data

- Go to the **Generated** in the **Training Data** section.
- Click on the dataset you generated to preview the data.

<img src={require('./gifs/raw_text/DatasetPreview.gif').default} alt="Docs Upload Gif" width="500" />


# File: docs/generate/scratch.md

---
---
sidebar_position: 5
---

# Generate Data from Scratch

This page explains how to generate data from just concepts of a dataset using Transformer Lab.

## Step 1: Download the Generate From Scratch Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Generate From Scratch Plugin**.

<img src={require('./gifs/scratch/DownloadPlugin.gif').default} alt="Docs Upload Gif" width="500" />

## Step 2: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Generate from Scratch**.
- A pop-up window will appear for configuring your generation task.

### Step 2.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Specify the number of samples you want to generate.

#### Entering Dataset Concepts

- **Scenario:** Describe the scenario for which you'd like to generate the data. e.g. `Less knowledgeable fans trying to know more about the basketball game.`
- **Task:** Describe the task you'd like to generate the data for. e.g. `Answer questions about rules of basketball`
- **Input Format:** Describe the input format for the data. e.g. `Questions about basketball rules`
- **Expected Output Format:** Describe the output format for the data. e.g. `Answers to the questions about basketball rules`

<img src={require('./gifs/scratch/CreateGenerationTask.gif').default} alt="Docs Upload Gif" width="500" />

## Step 3: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, the generated dataset will be visible under the **Generated Tab** in the **Training Data** section.

<img src={require('./gifs/scratch/CreateGenerationTask.gif').default} alt="Docs Upload Gif" width="500" />

## Step 4: Preview Your Data

- Go to the **Generated** in the **Training Data** section.
- Click on the dataset you generated to preview the data.

<img src={require('./gifs/scratch/DatasetPreview.gif').default} alt="Docs Upload Gif" width="500" />


# File: docs/generate/synthetic_dataset_kit.md

---
---
sidebar_position: 6
---

# Generate QA, CoT, or Summary Dataset from Documents (`synthetic-dataset-kit`)

The `synthetic-dataset-kit` plugin creates synthetic datasets from your uploaded documents using powerful local language models. It supports **three generation modes**: **QA (Question Answering)**, **CoT (Chain of Thought)**, and **Summary**, allowing you to create a wide range of fine-tuning datasets.

> ⚠️ **Important Notes**
> 
> 1. This plugin **only works with local models that are compatible with [vLLM](https://github.com/vllm-project/vllm)**.  
>    - **GGUF models, non-vLLM models, and proxy-backed models will not work.**
> 
> 2. If the job fails with the output displaying **`0 QA pairs generated`**, the typical reason is **none of the generated examples passed the _Curation Threshold_**.  
>    - To fix this, try **lowering the Curation Threshold** and rerun the job. You can view job logs to investigate further.

<img src={require('./gifs/synthetic_dataset_kit/process.gif').default} alt="Generation Process" width="500" />
---
## Step 1: Upload Reference Documents

Upload your documents in the **Documents** tab.

## Step 2: Configure Generation Parameters

When launching a generation job with `synthetic-dataset-kit`, configure the following parameters:

| Parameter | Description | Required | Example |
|----------|-------------|----------|---------|
| `Generation Model` | Must be `local` (downloaded via `Model Zoo`) and vLLM-compatible[^vllm-models]. No external or proxy-backed models supported. | ✅ | `local` |
| `Generation Type` (`task_type`) | Select what to generate: QA pairs, Chain of Thought examples, or Summaries | ✅ | `qa`, `cot`, `summary` |
| `Number of Pairs to Generate` | Total examples to create per document | ✅ | `100` |
| `Curation Threshold` | Min score (1–10) a generated sample must meet to be included | ✅ | `7.0` |
| `Output Format` | Choose the output format for the dataset | ✅ | `jsonl`, `alpaca`, `chatml` |
| `Custom Prompt Template` | (Optional) Override the default prompt used for generation | ❌ | _Your prompt here_ |
| `vLLM Server API Base` | Endpoint of the vLLM server (usually default) | ✅ | `http://localhost:8338/v1` |

[^vllm-models]: To check if your model is vLLM-compatible, see the [vLLM Supported Models](https://docs.vllm.ai/en/latest/models/supported_models.html) list. vLLM currently supports many popular architectures like LLaMA, Mistral, Falcon, Baichuan, and more. Ensure your model is in a supported architecture and format (e.g., Hugging Face Transformers or Safetensors, not GGUF).

In order to get best results out of the plugin try using models with at least 8B parameters and above.

Note that the output structure for generating a summary of a chain of thought (`cot`) from a reference document **must** be selected as `chatml`.

## Step 3: Review the Output

After generation completes, you can preview the dataset in two places:

- **In the Generate tab**: Click the `Dataset Preview` button on the completed job.
- **In the Datasets tab**: The generated dataset will appear in the `Generated Datasets` tab.

## Troubleshooting

- **No data generated?**
  - If output says `0 QA pairs generated`, the job has **failed** (not succeeded).
  - This is usually due to a **too-high curation threshold**—try reducing it to `6.0` or lower.
  - Review job logs for specific reasons.

<img src={require('./gifs/synthetic_dataset_kit/fail.gif').default} alt="Failing generation" width="500" />

- **Model not responding?**
  - Check that your selected **local model is compatible with vLLM** and that the vLLM server is running at the configured `vllm_api_base`.

- **Want more creative generations?**
  - Use a **custom prompt template**.
  - Consider lowering the curation threshold slightly and reviewing outputs manually.


# File: docs/generate/wd14_captioner.md

---
---
sidebar_position: 8
---

# Auto-Caption Images with WD14 Tagger (`wd14_captioner`)

This plugin uses the WD14 tagger (from the kohya-ss/sd-scripts) to automatically generate Danbooru-style tags for image datasets. It is ideal for preparing high-quality captions for datasets used in fine-tuning Stable Diffusion or similar models.

## Step 1: Prepare Your Image Dataset

Upload a dataset containing image files. The dataset must include an image column (default: `"image"`). You can configure the name of this column via the **Image Field** parameter.

> The model supports `.jpg`, `.jpeg`, `.png`, and `.webp` formats.

## Step 2: Configure Plugin Parameters

Use the parameters panel to control the tag generation behavior:

| Parameter | Description |
|----------|-------------|
| `Image Field` | Dataset column that contains the image files |
| `Tag Confidence Threshold` | Minimum confidence score for a tag to be included |
| `General Threshold` | Optional threshold specifically for general (non-character) tags |
| `Character Threshold` | Optional threshold specifically for character tags |
| `ONNX Model Variant` | Choose between ConvNeXt or ViT variants of WD14 |
| `Batch Size` | Number of images to process at once |
| `Image Resize` | Resize shorter side of image before inference |
| `Caption Separator` | Character(s) used to join multiple tags |
| `Max Dataloader Workers` | Max number of workers to load images during tagging |

## Step 3: Start the Job

Once your dataset is uploaded and parameters are configured, click the `Queue` button to start captioning. You can monitor job progress in the `Executions` tab.

When executed, the plugin will:

- Load your image dataset
- Run the selected WD14 model on each image
- Generate tags/captions based on your thresholds
- Save the results as a new dataset with two columns:
  - `image` (original file path)
  - `caption` (generated tags)

## Step 4: View the Output

After completion, you can view the new dataset inside the `Datasets` tab under `Generated Datasets`. The resulting dataset will contain the original images and a new column with generated captions.

You can also edit the captions and create a new dataset for downstream tasks like training, search, or labeling.

## Output Example

| image | caption |
|-------|---------|
| `pokemon_1.png` | `solo, simple_background, white_background, full_body, black_eyes, pokemon_(creature), no_humans, animal_focus` |
| `pokemon_2.jpg` | `solo, smile, open_mouth, simple_background, red_eyes, white_background, standing, full_body, pokemon_(creature), no_humans, fangs, bright_pupils, claws, white_pupils, bulbasaur` |

## Model Variants

- `wd-v1-4-convnext-tagger-v2.onnx`: More accurate, but larger
- `wd-v1-4-vit-tagger-v2.onnx`: Lightweight alternative

These models will be automatically downloaded and cached if not already present.

<img src={require('./gifs/wd14_captioner/wd14_captioner.gif').default} alt="WD14 Captioner Plugin in Action" width="500" />

# File: docs/generate/yourbench.md

---
---
sidebar_position: 3
---

# Huggingface (YourBench) Dataset Generation

This page explains how to generate data from reference documents using Transformer Lab leveraging the [YourBench framework](https://github.com/huggingface/yourbench) by 🤗 Hugging Face.
At the end you'll have **6** generated datasets for various tasks such as _Multi-hop QA_, _Single Shot QA_, _LightEval data_, etc.


## Step 1: Download the Hugging Face (YourBench) Dataset Generator Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Hugging Face (YourBench) Dataset Generator** plugin.

<img src={require('./gifs/yourbench/1_Installing.gif').default} alt="Plugin Gif" width="500" />

## Step 2: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Hugging Face (YourBench) Dataset Generator**.
- A pop-up window will appear for configuring your generation task.


### Step 2.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Specify the embedding model that will be used for the generation.
- Feel free to adjust other settings, although the recommended defaults usually work best.

#### Selecting Documents

- After configuring the plugin, navigate to the **Documents** section.
- Select the file(s) or folder(s) you want to use to generate your datasets.

<img src={require('./gifs/yourbench/2_CreatingTask.gif').default} alt="Generation Task Gif" width="500" />

## Step 3: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, **6** generated datasets will be visible under the **Generated Tab** in the **Datasets** section.

<img src={require('./gifs/yourbench/3_RunningTask.gif').default} alt="Generation Task Gif" width="500" />

## Step 4: Preview Your Data

- Go to the **Generated** tab in the **Datasets** section.
- Click on any of 6 the generated datasets to preview the data.

<img src={require('./gifs/yourbench/4_DatasetPreview.gif').default} alt="Generation Task Gif" width="500" />


# File: docs/install/advanced-install.md

---
---
title: Manual Install
sidebar_position: 5
---

# Manual Installation Instructions

## Manual Install Instructions:

### install.sh Remote Script

The recommended way to install the app on a server is to follow the instructions for [Installing](./install.md). If you want to do all the steps manually, then the instructions below describe what `install.sh` does behind the scenes.

### Manual step-by-step Install

You can also install all of the Transformer Lab dependencies yourself by following the following steps. We do not recommend this path unless you are having issues with `install.sh` or need more control.

**Step 1:** Install Miniforge and Create Environment

Install Miniforge [full instructions here](https://github.com/conda-forge/miniforge?tab=readme-ov-file#install)

Create a Conda Environment for Transformer Lab (after restarting the shell):

```bash
conda create -y -k --prefix "$HOME/.transformerlab/envs/transformerlab" python=3.11
conda activate ~/.transformerlab/envs/transformerlab
```

**Step 2:** Download Transformer Lab

For the following command, you can find the latest release by visiting:

https://github.com/transformerlab/transformerlab-app/releases/latest

```bash
git clone https://github.com/transformerlab/transformerlab-app.git
cd transformerlab-app/api
git checkout v0.26.1 # where "v0.26.1" is the latest release version
```

**Step 3:** Install Python Dependencies

#### For machines with an NVIDIA GPU:

```bash
conda activate ~/.transformerlab/envs/transformerlab
conda install -y cuda==12.8.1 --force-reinstall -c nvidia/label/cuda-12.8.1 # only if you have an NVIDIA GPU
pip install uv
uv pip install --upgrade  -r requirements-uv.txt
```

### For machines with an AMD GPU:
Make sure you have ROCm installed on your system. You can find the instructions [here](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/).

```bash 
conda activate ~/.transformerlab/envs/transformerlab
pip install uv
uv pip install --upgrade -r requirements-rocm-uv.txt --index=https://download.pytorch.org/whl/rocm6.4 --index-strategy unsafe-best-match # assuming you have rocm installed on your system
```

#### Or For machines without a GPU (e.g. a Mac):

```bash
conda activate ~/.transformerlab/envs/transformerlab
pip install uv
uv pip install --upgrade -r requirements-no-gpu-uv.txt
```

**Step 4:** Run the Transformer Lab Server

```bash
conda activate ~/.transformerlab/envs/transformerlab
uv run -v uvicorn api:app --port 8338 --host 0.0.0.0 --no-access-log
```

**Step 5:** GUI Setup
You can access the Transformer Lab GUI by going to the browser and navigating to `http://<your-server-ip>:8338/`.
Your server IP will be `localhost` or `127.0.0.1` if you are running it locally, or the public IP if you are running it on a cloud server.

Incase you'd like to run it within the GUI Electron app, you can download the app for your OS from [the website](https://lab.cloud/docs/download)

**To Connect:**

Now when you run the app at startup, go to the "Remote Connection" tab and then enter the IP address and port of your Transformer Lab API Server, then click Submit. If you are connecting to your local machine you can type `localhost` for your Server URL.

<img
src={require('../img/loginModal.png').default}
alt="Login Modal"
width="400"
/>

## System Requirements

### Client

The computer used to run the Transformer Lab App should be a Mac, PC, or Linux machine.

### Server

If you are only looking to do inference (e.g. talking to models), many different types of computers that can run Python will work.

If you are looking to train models and get higher performance, you need a server that has an NVIDIA card, or supports Apple Silicon (M Series.)

| Machine                   | Inference | Training        |
| ------------------------- | --------- | --------------- |
| PC or Linux - with GPU    | ✅ Yes    | ✅ Yes          |
| PC or Linux - without GPU | ✅ Yes    | No              |
| Mac (M1)                  | ✅ Yes    | ✅ Yes (slower) |
| Mac (M2+)                 | ✅ Yes    | ✅ Yes          |

You will see the best performance on high VRAM GPUs (such as the RTX3090 or RTX4090) or Mac M2/M3/M4 with 24GB or more of RAM.

## Security Notes

:::danger Security Warning
Read carefully. Do not run the Transformer Lab API on a machine exposed to the public Internet.
:::

Today, Transformer Lab exposes a public API on your server that accepts unauthenticated network requests. If you were to run Transformer Lab on the public internet, this would create a significant security issue. We recommend only running the API server on internal networks. If you need to access the API server from outside your internal network, use a VPN or a tool like Tailscale to avoid exposing the server to the public internet.


# File: docs/install/docker.md

---
---
title: Running with Docker
sidebar_position: 110
draft: true
# I made this document DRAFT for now as we need to re-test under our new architecture
---
Transformer Lab provides pre-built Docker images that make it easy to get started quickly without worrying about dependencies or environment setup. This guide covers how to run Transformer Lab using Docker containers.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your system
- For GPU support:
  - **NVIDIA GPUs**: [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html)
  - **AMD GPUs**: [ROCm drivers](https://rocm.docs.amd.com/en/latest/deploy/linux/quick_start.html) installed on your host system

## Docker Images

TransformerLab provides two main Docker images on Docker Hub:

- **`transformerlab/api:latest`** - For NVIDIA GPUs and CPU-only machines
- **`transformerlab/api:latest-rocm`** - For AMD GPUs with ROCm support

## Quick Start

### NVIDIA GPU / CPU-Only Machines

Pull and run the latest image:

```bash
docker run --rm -it \
  --gpus all \
  -v ~/.transformerlab:/root/.transformerlab \
  -p 8338:8338 \
  transformerlab/api:latest
```

For CPU-only (without GPU support):

```bash
docker run --rm -it \
  -v ~/.transformerlab:/root/.transformerlab \
  -p 8338:8338 \
  transformerlab/api:latest
```

### AMD GPU Machines

Pull and run the ROCm-enabled image:

```bash
docker run --rm -it \
  --device=/dev/kfd \
  --device=/dev/dri \
  --group-add video \
  --ipc=host \
  --cap-add=SYS_PTRACE \
  --security-opt seccomp=unconfined \
  -v ~/.transformerlab:/root/.transformerlab \
  -p 8338:8338 \
  transformerlab/api:latest-rocm
```

## Accessing TransformerLab

Once the container is running, you can access TransformerLab in your web browser at:

```text
http://localhost:8338
```

## Docker Run Options Explained

### Common Options

- `--rm` - Automatically remove the container when it exits
- `-it` - Interactive mode with pseudo-TTY
- `-v ~/.transformerlab:/root/.transformerlab` - Mount local data directory for persistence
- `-p 8338:8338` - Map port 8338 from container to host

### NVIDIA GPU Options

- `--gpus all` - Enable access to all GPUs (requires NVIDIA Container Toolkit with cuda 12.8 or higher)

### AMD GPU Options

- `--device=/dev/kfd` - AMD GPU compute device
- `--device=/dev/dri` - AMD GPU graphics device
- `--group-add video` - Add container to video group
- `--ipc=host` - Use host IPC namespace
- `--cap-add=SYS_PTRACE` - Add system tracing capability
- `--security-opt seccomp=unconfined` - Disable seccomp security profile

## Data Persistence

The `-v ~/.transformerlab:/root/.transformerlab` volume mount ensures that:

- Downloaded models persist between container restarts
- Your projects and configurations are saved
- Training data and results are preserved

## Advanced Usage

### Running in Background

To run TransformerLab as a background service:

```bash
# NVIDIA/CPU
docker run -d \
  --name transformerlab \
  --gpus all \
  -v ~/.transformerlab:/root/.transformerlab \
  -p 8338:8338 \
  --restart unless-stopped \
  transformerlab/api:latest

# AMD
docker run -d \
  --name transformerlab \
  --device=/dev/kfd \
  --device=/dev/dri \
  --group-add video \
  --ipc=host \
  --cap-add=SYS_PTRACE \
  --security-opt seccomp=unconfined \
  -v ~/.transformerlab:/root/.transformerlab \
  -p 8338:8338 \
  --restart unless-stopped \
  transformerlab/api:latest-rocm
```

## Troubleshooting

### GPU Not Detected

**AMD**: Ensure ROCm drivers are installed:

```bash
# Test ROCm access
docker run --rm \
  --device=/dev/kfd \
  --device=/dev/dri \
  rocm/rocm-terminal rocminfo
```

### Permission Issues

If you encounter permission issues with the mounted volume:

```bash
# Fix ownership of the data directory
sudo chown -R $USER:$USER ~/.transformerlab
```

### Container Won't Start

Check Docker logs:

```bash
docker logs <container_id>
```

### Port Already in Use

If port 8338 is already in use, either:

1. Stop the service using that port, or
2. Use a different port with `-p 8080:8338`

## Building Custom Images

If you need to customize the Docker image, you can find the Dockerfiles in the [TransformerLab App repository](https://github.com/transformerlab/transformerlab-app/tree/main/api/docker).

### Build NVIDIA/CPU Image

```bash
git clone https://github.com/transformerlab/transformerlab-app.git
cd transformerlab-app/api/docker/common
docker build -t my-transformerlab .
```

### Build AMD Image

```bash
git clone https://github.com/transformerlab/transformerlab-app.git
cd transformerlab-app/api/docker/gpu/amd
docker build -t my-transformerlab-amd .
```

## Next Steps

Once TransformerLab is running:

1. Visit `http://localhost:8338` in your browser

## Docker Compose (Optional)

For easier management, you can use Docker Compose. Create a `docker-compose.yml` file:

```yaml
version: '3.11'

services:
  transformerlab:
    image: transformerlab/api:latest
    ports:
      - "8338:8338"
    volumes:
      - ~/.transformerlab:/root/.transformerlab
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
    restart: unless-stopped
```

Then run:

```bash
docker-compose up -d
```

For AMD GPUs, use this compose file instead:

```yaml
version: '3.11'

services:
  transformerlab-amd:
    image: transformerlab/api:latest-rocm
    ports:
      - "8338:8338"
    volumes:
      - ~/.transformerlab:/root/.transformerlab
    devices:
      - /dev/kfd
      - /dev/dri
    group_add:
      - video
    ipc: host
    cap_add:
      - SYS_PTRACE
    security_opt:
      - seccomp:unconfined
    restart: unless-stopped
```


# File: docs/install/install-on-amd.md

---
---
title: Setting up an AMD Computer for Machine Learning
sidebar_position: 20
---

import Button from '@site/src/components/Button';

# Advanced: Setting up an AMD Computer for Machine Learning

## Table of Contents

- [Linux Instructions](#linux-instructions)
- [Windows Instructions](#windows-instructions)

## Linux Instructions

For most situations, you can just download Transformer Lab and it should work as is. But if you are setting up from scratch and haven't installed ROCm drivers (drivers for your AMD GPU), the following instructions will help you set up your AMD GPU computer for machine learning.

### Supported Linux Distributions

You can set up ROCm on many distros of Linux. If you are getting started from scratch, we recommend installing [Ubuntu 24.04 (or 22.04)](https://ubuntu.com/) as they have good support for AMD GPUs and ROCm.

### Step 1 - Ensure ROCm Drivers are Installed

We recommend installing the latest ROCm (6.4) for best compatibility and performance.

You can test that ROCm support is successfully installed by running the following command in a terminal. You should get output similar to what is shown below:

```bash
rocm-smi
```

![rocm-smi output](./img/rocm-smi-output.png)

If this worked, congratulations, ROCm support for your Linux install is working and you can proceed with downloading and installing Transformer Lab.

If you need to install ROCm drivers from scratch, follow the official ROCm installation instructions for your Linux distribution.

Below are the recommended commands for installing ROCm 6.4 on **Ubuntu 24.04**. For other distributions, please refer to the [official ROCm installation guide](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/amdgpu-install.html).

```bash
# Update the system and install dependencies
sudo apt update

# Getting the amdgpu-install package
wget https://repo.radeon.com/amdgpu-install/6.4/ubuntu/noble/amdgpu-install_6.4.60400-1_all.deb

# Install the amdgpu-install package
sudo apt install ./amdgpu-install_6.4.60400-1_all.deb

# Update the system again to ensure all dependencies are met
sudo apt update

# Install the ROCm stack
# This will install the ROCm stack and all dependencies
sudo amdgpu-install -y --usecase=rocm --no-dkms

# Providing the user with access to the GPU
sudo usermod -a -G render $USER
sudo usermod -aG video $USER

# Reboot the terminal to apply changes
source ~/.bashrc

# OPTIONAL if git and curl are not installed and needed
sudo apt install curl git
```


### Step 2 - Download and Install Transformer Lab

Now follow the [install instructions](./install.md).


## Windows Instructions

To use Transformer Lab with AMD GPUs on Windows, you will need to set up WSL (Windows Subsystem for Linux) and install the appropriate AMD drivers and ROCm stack.

### Step 1 - Install WSL

First, install WSL (Windows Subsystem for Linux) if you haven't already. Open Windows PowerShell as Administrator and run:

```bash
wsl --install
```

Make sure your default WSL distribution is **Ubuntu**. You can set it with:

```bash
wsl --set-default Ubuntu
```

For more details, see the [official WSL installation guide](https://learn.microsoft.com/en-us/windows/wsl/install).

### Step 2 - Install AMD Adrenalin Driver

To use AMD GPUs with ROCm in WSL, you must install the **Adrenalin v25.3.1** driver from AMD.  
You can download it from the [AMD Drivers & Support page](https://www.amd.com/en/support/download/drivers.html).

### Step 3 - Install ROCm for WSL

Follow the official ROCm installation instructions for WSL at:  
[ROCm for WSL Installation Guide](https://rocm.docs.amd.com/projects/radeon-ryzen/en/latest/docs/install/installrad/wsl/install-radeon.html)

This guide will walk you through the steps to install ROCm and ensure your AMD GPU is available in your WSL environment.

### Step 4 - Download and Install Transformer Lab

Once WSL and ROCm are set up, download Transformer Lab for Windows:

<a href="https://lab.cloud/docs/download">
    <Button>Download Transformer Lab</Button>
</a>

Double-click the installer and follow the same steps as for Linux. The first time you run it, Windows may show a warning—click "More Info" and then "Run Anyway" to proceed.

---

*If you encounter issues or need more details, refer to the official ROCm and AMD documentation linked above.*


# File: docs/install/install.md

---
---
title: Install
sidebar_position: 1
---

import Button from '@site/src/components/Button';
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


# Install

## Pre-Requisites

* MacOS <FaApple/>, Linux <FaLinux/>, or Windows (inside WSL2) <FaWindows/>
* Git and curl installed

## Step 1. Install Transformer Lab

```bash
curl https://lab.cloud/install.sh | bash
```

## Step 2. Run Transformer Lab

```bash
cd ~/.transformerlab/src
./run.sh
```

## Step 3. Access the Web UI

You can now go to any modern browser and visit the URL of the server that was run by the previous command. For example if you are running on localhost, open Firefox or Chrome and visit:

`http://localhost:8338`

If you are asked to provide a Server URL, use:

`localhost` for the server and `8338` for the port. Then press **Submit**

![Web UI](./img/connect.png)

Here is a screenshot of what you should see:

![Web UI](./img/webui.png)


## Platform Specific Tips:

### Windows 

1. Make sure you have WSL and CUDA drivers installed ([detailed instructions here](./windows-wsl-cuda.md))

### Linux 

:::tip
Transformer Lab should work on most distros of Linux that support your GPU. We recommend [PopOS](https://pop.system76.com/) because it has great support for automatically installing NVIDIA drivers.

If you have a machine with an [AMD GPU, follow the instructions here](./install-on-amd.md).

![PopOS Screenshot](./img/popos.webp)
:::

### Step 1 - Ensure NVIDIA Drivers are Installed

If you installed PopOS you will have the option to select an NVIDIA enabled version of PopOS installed by default. You can test that NVIDIA support is successfully installed by running the following command in a command prompt and you should get output similar to what is shown below:

```bash
nvidia-smi
```

![nvidia-smi output](./img/nvidia-smi-output.png)

If this worked, congratulations, NVIDIA support for your Linux install is working and you can proceed with downloading and installing Transformer Lab.

If you need to install the nvidia drivers from scratch, there are instructions below for different versions of Linux:

- For PopOS: https://support.system76.com/articles/system76-driver/
- For Ubuntu: https://ubuntu.com/server/docs/nvidia-drivers-installation
- For everything else: https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html




# File: docs/install/team.md

---
---
title: Transformer Lab on a Team
sidebar_position: 10
---

# Use Transformer Lab on a Team

## Description

Transformer Lab can be setup on a shared computer to be used on a team. When multi-user functionality is enabled, different users will be able to login to the system.

## Step 1. Contact us 😉

We are documenting this functionality right now -- please reach out to us on Discord if you are interested in this functionality. We expect to launch multi-user Transformer Lab around mid January of 2026 and are currently working with beta users.


# File: docs/install/uninstall.md

---
---
title: Uninstall
sidebar_position: 200
---

# Uninstall Transformer Lab

- **MacOS:** Delete the `~/.transformerlab/` Directory
- **Windows:** Delete the `~/.transformerlab/` Directory in WSL
- **Linux:** Delete the `~/.transformerlab/` Directory

### Stored Data

- Transformer Lab stores models and data in your `~/.transformerlab/` folder -- deleting everything there will destroy all your settings and experiments

### Clear Python Cache

Transformer Lab uses `uv` to install Python packages. You may also want to clear the `uv` cache. Instructions are below:

https://docs.astral.sh/uv/concepts/cache/#clearing-the-cache

### Delete Models and Datasets

Most models and datasets that are downloaded in Transformer Lab are downloaded using Hugging Face Hub which stores them at `~/.cache/huggingface/hub`. Delete this directory to remove the large model files, unless you want them available to other applications.


# File: docs/install/windows-wsl-cuda.md

---
---
title: Windows - Install WSL and CUDA
sidebar_position: 22
---

import Button from '@site/src/components/Button';

# Advanced: Installing WSL2 and CUDA on Windows

CUDA is the toolkit that allows you to connect to NVIDIA GPUs. You can skip installing CUDA if you do not have an NVIDIA GPU. Without CUDA, Transformer Lab can do basic tasks, but an NVIDIA GPU is needed to unlock advanced LLM work.

To run Transformer Lab, you also need to install WSL2. WSL2 is a full Linux kernel integration in Windows that enables running Linux distributions natively -- this is where our Transformer Lab's Python Machine Learning workspace will run.

## Installing WSL2 and CUDA

Instructions for installing both WSL2 and CUDA are in the following document:

https://learn.microsoft.com/en-us/windows/ai/directml/gpu-cuda-in-wsl

Essentially, you need to install the CUDA toolkit which you can find here:

https://developer.nvidia.com/cuda-downloads

And then you need to install WSL2 on Windows by running the following command in the Windows Powershell (run as administrator).

```bash
wsl --install
```

(Detailed instructions for installing WSL2 are [here](https://learn.microsoft.com/en-us/windows/wsl/install).)

:::note

For Transformer Lab to work, make sure that your default WSL instance is **Ubuntu**. WSL lets you install multiple distros but you can set the default using the following command:

```
wsl --set-default Ubuntu
```
:::


# File: docs/interact/batched-query.md

---
---
sidebar_position: 14
---
# Batched Query

The Batched Query interface allows you to send multiple requests to the model in one go. You can define a batch of chats (multi-turn conversations) or a batch of completion texts.


## Using Batched Query

1. **Select the Batch Type**: Choose whether you are sending a batch of chats or a batch of completion texts.
2. **Define Your Batch**:
   - For chats: Input multi-turn conversations and define message roles.
   - For completions: Provide multiple text prompts.
3. **Set Generation Parameters**: Adjust Temperature and Maximum Length as needed.
4. **Send**: Click the generate button to process the batch.

<img src={require('./gifs/BatchedQuery.gif').default} alt="Batched Query GIF" width="500" />



# File: docs/interact/chat.md

---
---
sidebar_position: 10
---
# Chat and Completions

After running a model in the Foundation tab, you can interact with it using the Interact tab, which offers both Chat and Completions interfaces.

<img src={require('./gifs/rag/2_RunningModel.gif').default} alt="Plugin GIF" width="500" />


## Chat Interface

Many models, especially those that are Chat or Instruction tuned, support sending data in the format of a conversation.

Internally, a chat is just a pre-formatted completion sent to the model in a per-model format. Transformer Lab uses the FastChat library to format the chat appropriately for each type of model.

To use the Chat interface:

1. Navigate to the Interact tab
2. Select "Chat" from the dropdown menu

<img src={require('./gifs/chat/1_Chat.gif').default} alt="Plugin GIF" width="500" />

### Features

- **System Message**: Set a system message to provide initial context or instructions to the model
- **Message History**: View and continue your conversation history
- **Generation Parameters**:
  - Temperature: Control the randomness of the output (higher values = more random)
  - Maximum Length: Set the maximum number of tokens for the response
  - Top P: Control diversity via nucleus sampling
  - Frequency Penalty: Reduce repetition by penalizing tokens based on their frequency

## Completions Interface

The Completions interface allows you to provide a text prompt and have the model generate a continuation.

To use the Completions interface:

1. Navigate to the Interact tab
2. Select "Completions" from the dropdown menu

<img src={require('./gifs/chat/2_Completions.gif').default} alt="Plugin GIF" width="500" />

### Features

- Input your prompt and click the Generate button
- Same generation parameters as Chat:
  - Temperature
  - Maximum Length
  - Top P
  - Frequency Penalty

## When to Use Each Interface

- **Chat**: Better for conversational interactions, multi-turn dialogues, and when you need to maintain context
- **Completions**: Better for single-turn text generation, creative writing, and code completion

# File: docs/interact/embedding-and-tokenize.md

---
---
sidebar_position: 15
---
# Embeddings and Tokenize

This page introduces two powerful features: **Embeddings** and **Tokenize**.

## Embeddings

The Embeddings feature allows you to obtain the embedding vectors for any input text. Simply enter your text and the interface will process it to return the corresponding embedding vectors. These vectors represent the semantic meaning of your text in a high-dimensional space, which can be useful for various downstream tasks like similarity search and clustering.

### How to Use Embeddings

- **Input Text**: Enter the text for which you need the embedding.
- **Process Embeddings**: The system processes the text with the model.
- **Output**: The output will be a list of vectors representing the input text's embeddings.

<img src={require('./gifs/Embeddings.gif').default} alt="Embedding and Tokenize GIF" width="500" />

## Tokenize

The Tokenize feature provides a visual breakdown of how the model splits sentences into tokens. This includes both words and sub-words as recognized by the model. In addition, you will also receive the corresponding token IDs for each token.

### How to Use Tokenize

- **Input Sentence**: Type in the sentence you want to analyze.
- **Process**: The sentence is tokenized by the model.
- **Output**: You will see a visual representation of the tokenization along with the token IDs, helping you understand how the model processes your input.

Explore these features to gain deeper insights into how your text data is being interpreted and transformed by the model.

<img src={require('./gifs/Tokenize.gif').default} alt="Embedding and Tokenize GIF" width="500" />

# File: docs/interact/inference-engine.md

---
---
sidebar_position: 1
---
# Inference Engines

You can select different inference engines depending on your available hardware, and the selected model's architecture.

You can find the menu to change inference engines next to the "Run" button on the Foundation tab.

<img src={require('./gifs/change-inference-engine.gif').default} alt="Change Inference Engine" width="500" />

# File: docs/interact/ollama.md

---
---
sidebar_position: 5
---

# Ollama Server Plugin

The Ollama Server plugin is our recommended plugin for running GGUF models across all platforms,
and is the best way to use Transformer Lab if you do not have access to a GPU or a Mac Silicon-based system.

[Ollama](https://ollama.com/) is the most popular application for running inference against 
open-source language models on your local machine.
It works with GGUF-formatted models which allow for fast inference across both CPU and GPU.
Users can take advantage of this to run models larger than their available GPU memory,
and even run models entirely on CPU for systems without a GPU.

## Chat using Ollama Server

### Step 1: Install Ollama

In order to use the Ollama Server plugin you will need to first 
[Download Ollama](https://ollama.com/download) and install it on your system.

### Step 2: Get GGUF Models

To use the Ollama Server plugin you will need to first downlaod a GGUF model.
There are two ways to do this:

**Download GGUF models from the Model Zoo:**
From the "Model Store" tab in the Model Zoo you can use the filters to select GGUF 
as the Archtecture to list some suggested defaults you can download.
You can also find GGUF variations of most popular models on Hugging Face.

**Import models from Ollama:**
If you have already installed Ollama and downloaded models there previously, you can easily
import these models into Transformer Lab by going to the Model Zoo and selecting the
"+ Import Local Models" button at the bottom of the screen. 
This should automatically detect any models available to import.
After importing these models you will be able to find them on the "Foundation" tab. 

### Step 3: Select Ollama Server as your Inference Engine

On the Foundation tab, select the GGUF model you want to serve and, before clicking the "Run" button,
check that your Inference Server is set to "Ollama Server". 
This can verified and changed by looking directly to the right of the "Run" button on the Foundation 
screen.
To begin chatting with your model, click "Run" and navigate to the "Interact" tab.

<img src={require('./gifs/ollamaserver.gif').default} alt="Change Inference Engine" width="500" />

# File: docs/interact/rag.md

---
---
sidebar_position: 12
---

# RAG (Retrieval-Augmented Generation)

RAG enhances large language models by retrieving relevant information from your documents before generating responses. This allows the model to access external knowledge not included in its training data, providing more accurate and context-aware answers.

## Setting Up RAG

### Step 1: Install the RAG Plugin

To enable RAG functionality, you first need to install a RAG plugin from the Plugins tab. Currently, Transformer Lab only supports `LlamaIndex Simple Document Search (RAG)`.

<img src={require('./gifs/rag/1_InstallingPlugin.gif').default} alt="Plugin Gif" width="500" />

### Step 2: Run a Foundation Model

After installing the plugin, go to the Foundation tab and run a model you want to use for RAG. Running a model will enable the Interact tab.

<img src={require('./gifs/rag/2_RunningModel.gif').default} alt="Plugin Gif" width="500" />

### Step 3: Access the RAG Interface

Navigate to the Interact tab and select the "Query Docs (RAG)" option from the drop-down menu.

<img src={require('./gifs/rag/3_NavigatingRAG.gif').default} alt="Plugin Gif" width="500" />

## Using RAG

### Step 4: Upload Documents

Within the RAG interface, you'll see the Documents tab on the left where you can upload files for indexing. **Note: Documents can only be uploaded through this Documents tab.**

**Important note about document organization:**

- Documents must be stored in a folder named "rag" to be indexed
- When uploading through the Documents tab in the RAG interface, files are automatically placed in a 'rag' folder
- When working outside of the RAG interface, you need to:
  1. First create a folder named "rag" in your workspace if it doesn't exist
  2. Upload your documents to this folder for them to be indexed for RAG

<img src={require('./gifs/rag/4_UploadingDocuments.gif').default} alt="Plugin Gif" width="500" />

<img src={require('./gifs/rag/6_UploadingInDocumentsTab.gif').default} alt="Creating RAG Folder Gif" width="500" />

### Step 5: Query Your Documents

Once your documents are uploaded, you can ask questions in the text input box. The model will provide answers based on the content of your documents.

## Results

The system returns:

- The answer to your question
- The prompt used to generate the answer
- The context (relevant document passages) used by the model

<img src={require('./gifs/rag/5_QnA.gif').default} alt="Plugin Gif" width="500" />

## Current Limitations and Future Plans

- Currently limited to a single RAG plugin
- Documents must follow the "rag" folder naming convention
- Future updates will:
  - Add flexibility in selecting folders for indexing
  - Support testing different embedding models for improved retrieval

# File: docs/interact/tool-calling.md

---
---
sidebar_position: 21
---
# Tool Calling

The Tool Calling interface is a work-in-progress feature designed to integrate formal function calls within your interactions. Currently, it supports basic functions like `add`, `subtract`, `multiply`, `divide`, and `get_weather`.

## How It Works

After triggering a tool call, the interface will process your request by

1. Parsing the input question.
2. Recognizing and mapping it to one of the supported functions.
3. Displaying the tool call request alongside the generated response.

## Using the Tool Calling Interface

To use the Tool Calling interface:

1. **Navigate** to the Interact tab.
2. **Select** "Tool Calling" from the dropdown menu.

<img src={require('./gifs/ToolCalling.gif').default} alt="Tool Calling GIF" width="500" />

## Features

- **Tool Call Display**: View both the tool call request and the response.
- **Function Support**: Currently supports:
  - `add`
  - `subtract`
  - `multiply`
  - `divide`
  - `get_weather`
- **Generation Parameters**: Similar to the Chat interface, you can adjust:
  - Temperature
  - Maximum Length
  - Top P
  - Frequency Penalty

## How to Interact

- **Ask a Question**: Type your question or command related to any of the supported functions.
- **Send**: Click the send button to initiate the tool call.
- **View Output**: The interface will display the formatted tool call and the resulting response.

### Example Interaction

For instance, if you ask, "What is the weather in San Francisco?" the interface will:

- Parse the request into a function call: `get_weather(location="San Francisco")`
- Display both the function call and the computed result.

## Future Enhancements

As this interface is still under development, future releases may include:

- Custom functions support
- More dynamic function mapping
- Improved agentic interactions

Keep exploring and providing feedback as we continue to improve the Tool Calling interface!

# File: docs/interact/visualize-logprobs.md

---
---
sidebar_position: 20
---
# Visualize Logprobs

The Visualize Logprobs interface is an experimental feature under development and is currently available only with the MLX inference engine. This feature provides a visual representation of the log probabilities (logprobs) associated with each token in the generated completion.

## How It Works

1. **Input Text**: Enter the text for which you want to generate a completion.
2. **Generate**: Click the generate button.
3. **Visualization**: The generated completion is displayed with tokens highlighted in different colors. Hover over any token to view its logprobs percentage.

<img src={require('./gifs/VisualizeLogprobs.gif').default} alt="Visualize Logprobs GIF" width="500" />


# File: docs/intro.md

---
---
title: Transformer Lab for Individuals
slug: .
sidebar_position: 1
---

import { FaDiscord } from "react-icons/fa";
import MuxPlayer from '@mux/mux-player-react';


# Transformer Lab for Individuals


Transformer Lab is a free, open-source machine learning research platform that you can run on your own computers or in the cloud.


## Which Edition is Right For Me?

Transformer Lab can be run in one of two modes: Single Node or (our soon to be announced) Team Mode.

If you want to run Transformer Lab just for yourself, follow the [standard, single node install instructions here](./install/install.md).

If you are on a team, and want to run Transformer Lab, with access to cluster of GPUs (using SLURM or Skypilot, for example) [follow these steps to enable Transformer Lab for Teams](/install/team.md).

<img src={require('/img/screenshot.png').default} alt="Login Modal" width="500" />

# File: docs/plugins/eval_trainer.md

---
---
sidebar_position: 5
---
# Creating an Evaluation Plugin Script

This guide explains how to adapt your existing evaluation scripts to work with Transformer Lab using the `tlab_evals` decorator class. By integrating with Transformer Lab, your evaluation scripts gain progress tracking, parameter management, model loading, results visualization, and integrated logging with minimal code changes.

## What is `tlab_evals`?

`tlab_evals` is a decorator class that helps integrate your evaluation script with Transformer Lab's job management system. It provides:

- Argument parsing and configuration management
- Model loading for different providers (local, OpenAI, Claude, etc.)
- Progress tracking and reporting
- Evaluation results formatting and visualization
- Job status management
- Integration with TensorBoard and Weights & Biases

## Getting Started

### 1. Import the decorator

Add this import to your evaluation script:

```python
from transformerlab.sdk.v1.evals import tlab_evals
```

### 2. Decorate your main evaluation function

Wrap your main evaluation function with the `job_wrapper` decorator:

```python
@tlab_evals.job_wrapper(
    wandb_project_name="my_eval_project",  # Optional: Set custom Weights & Biases project name
    manual_logging=False  # Optional: Set to True for manual metric logging
)
def evaluate_model():
    # Your evaluation code here
    pass
```

The decorator parameters include:

- `progress_start` and `progress_end`: Optionally define the progress range (typically 0-100)
- `wandb_project_name`: Optional custom name for your Weights & Biases project. Default is TLab_Evaluations
- `manual_logging`: Set to True for evaluation scripts without automatic logging integration

> **Note**: There is also an async version of the job wrapper available for functions that might need to run asynchronously. This can be used by changing `@tlab_evals.job_wrapper` to `@tlab_evals.async_job_wrapper`.

### 3. Use helper methods

Replace parts of your code with `tlab_evals` helper methods:

- For model loading: `tlab_evals.load_evaluation_model()`
- For dataset loading: `tlab_evals.load_dataset()`
- For progress tracking: `tlab_evals.progress_update(progress)`
- For saving results: `tlab_evals.save_evaluation_results(metrics_df)`
- For generating output file paths: `tlab_evals.get_output_file_path()`

## Complete example
Here's how a typical evaluation script can be adapted to use `tlab_evals`:

```python
import pandas as pd
from transformerlab.sdk.v1.evals import tlab_evals

@tlab_evals.job_wrapper()
def evaluate_model():
    # 1. Load dataset with helper
    datasets = tlab_evals.load_dataset(dataset_types=["test"])
    test_dataset = datasets["test"]
    
    # 2. Load model for evaluation
    model = tlab_evals.load_evaluation_model(field_name="generation_model")
    
    # 3. Initialize results storage
    results = []
    total_samples = len(test_dataset)
    
    # 4. Evaluate each test case
    for i, test_case in enumerate(test_dataset):
        # Perform evaluation
        prompt = test_case["prompt"]
        ground_truth = test_case["expected"]
        
        # Generate response from model
        response = model.generate(prompt)
        
        # Calculate metrics
        accuracy = calculate_accuracy(response, ground_truth)
        fluency = calculate_fluency(response)
        relevance = calculate_relevance(prompt, response)
        
        # Store results
        results.append({
            "test_case_id": i,
            "metric_name": "accuracy",
            "score": accuracy
        })
        results.append({
            "test_case_id": i,
            "metric_name": "fluency",
            "score": fluency
        })
        results.append({
            "test_case_id": i,
            "metric_name": "relevance",
            "score": relevance
        })
        
        # Update progress
        progress = int((i + 1) / total_samples * 100)
        tlab_evals.progress_update(progress)
    
    # 5. Convert results to DataFrame
    metrics_df = pd.DataFrame(results)
    
    # 6. Save results and plotting data
    output_path, plot_data_path = tlab_evals.save_evaluation_results(metrics_df)
    
    print(f"Evaluation complete. Results saved to {output_path}")
    return True

# Call the function
evaluate_model()
```

## Key Features

### Loading Evaluation Models

`tlab_evals` provides a versatile model loading function that supports different model types:

```python
# Load a local model
local_model = tlab_evals.load_evaluation_model(model_type="local")

# Load an OpenAI model
openai_model = tlab_evals.load_evaluation_model(model_type="openai")

# Load a Claude model
claude_model = tlab_evals.load_evaluation_model(model_type="claude")

# Load a custom model with API configuration
custom_model = tlab_evals.load_evaluation_model(model_type="custom")

# Auto-detect model type based on name
auto_model = tlab_evals.load_evaluation_model()
```

The loaded models provide a consistent interface with `.generate()` and `.a_generate()` (async) methods.

### Managing Output Files
`tlab_evals` helps organize evaluation outputs in a standardized directory structure:

```python
# Get path for saving CSV results
output_path = tlab_evals.get_output_file_path(suffix="accuracy_results")

# Get path for saving JSON plotting data
plot_data_path = tlab_evals.get_output_file_path(suffix="accuracy_plot", is_plotting=True)

# Get only the directory path
output_dir = tlab_evals.get_output_file_path(dir_only=True)
```

### Saving Evaluation Results

The `save_evaluation_results` method automatically formats, saves, and reports evaluation metrics:

```python
# Results DataFrame must contain "test_case_id", "metric_name", and "score" columns
output_path, plot_data_path = tlab_evals.save_evaluation_results(metrics_df)
```

This method:

1. Saves the full results as CSV
2. Creates a JSON file formatted for visualization
3. Prints average scores for each metric
4. Adds results to job data


### Logging Metrics

For tracking metrics during evaluation:

```python
# Log a metric at a specific step
tlab_evals.log_metric("accuracy", 0.85, step=1)
```

### Parameter Access

Parameters are automatically loaded from the Transformer Lab configuration. You can access them in several ways:

- Direct access: `tlab_evals.params.<parameter_name>`
- Safe access with default: `tlab_evals.params.get(<parameter_name>, <default_value>)`

Common parameters include:

- `tlab_evals.params.model_name`: Model to evaluate
- `tlab_evals.params.dataset_name`: Dataset to use
- `tlab_evals.params.experiment_name`: Name of the experiment
- `tlab_evals.params.eval_name`: Name of the evaluation
- `tlab_evals.params.run_name`: Name for the run
- `tlab_evals.params.template_name`: Template name used

### Progress Reporting

Keep users informed about evaluation progress:

```python
# Update progress (0-100)
tlab_evals.progress_update(75)  # 75% complete
```

The progress update also checks if the job was requested to stop and will raise a KeyboardInterrupt if needed.

### Manual Metric Logging

```python
@tlab_evals.job_wrapper(manual_logging=True)
def evaluate_model():
    # Setup evaluation
    
    # Log specific metrics during evaluation
    tlab_evals.log_metric("accuracy/question_answering", 0.92, step=1)
    tlab_evals.log_metric("fluency/grammar", 0.88, step=1)
```

## Best Practices

1. **Error Handling**: While the decorator handles basic error reporting, include try/except blocks for specific operations
2. **Parameter Access**: Always use .get() with sensible defaults for optional parameters
3. **Result Structure**: Always include "test_case_id", "metric_name", and "score" columns in your results DataFrame
4. **Progress Updates**: Provide regular progress updates, especially for long-running evaluations
5. **Result Visualization**: Use the standard output formats to ensure compatibility with Transformer Lab's visualization tools

## Summary

By following this guide, you can quickly adapt your existing evaluation scripts to work within the Transformer Lab ecosystem, gaining parameter management, progress tracking, results visualization, and integrated logging with minimal code changes.


# File: docs/plugins/gen_trainer.md

---
---
sidebar_position: 6
---
# Creating a Generation Plugin Script

This guide explains how to adapt your existing dataset generation scripts to work with Transformer Lab using the `tlab_gen` decorator class. By integrating with Transformer Lab, your generation scripts gain progress tracking, parameter management, dataset creation, and automatic upload capabilities with minimal code changes.

## What is `tlab_gen`?

`tlab_gen` is a decorator class that helps integrate your generation script with Transformer Lab's job management system. It provides:

- Argument parsing and configuration management
- Model loading for different providers (local, OpenAI, Claude, etc.)
- Dataset generation and storage
- Automatic dataset upload to Transformer Lab
- Progress tracking and reporting
- Job status management

## Getting Started

### 1. Import the decorator

Add this import to your generation script:

```python
from transformerlab.sdk.v1.generate import tlab_gen
```

### 2. Decorate your main generation function

Wrap your main generation function with the `job_wrapper` decorator:

```python
@tlab_gen.job_wrapper(
    wandb_project_name="my_gen_project",  # Optional: Set custom Weights & Biases project name
    manual_logging=False  # Optional: Set to True for manual metric logging
)
def generate_dataset():
    # Your generation code here
    pass
```

The decorator parameters include:

- `progress_start` and `progress_end`: Define the progress range (typically 0-100)
- `wandb_project_name`: Optional custom name for your Weights & Biases project
- `manual_logging`: Set to True for generation scripts without automatic logging integration

> **Note**: There is also an async version of the job wrapper available for functions that might need to run asynchronously. This can be used by changing `@tlab_gen.job_wrapper` to `@tlab_gen.async_job_wrapper`.

### 3. Use helper methods

Replace parts of your code with `tlab_gen` helper methods:

- For generation model loading: `tlab_gen.load_evaluation_model()`
- For saving datasets: `tlab_gen.save_generated_dataset(df)`
- For progress tracking: `tlab_gen.progress_update(progress)`
- For generating output file paths: `tlab_gen.get_output_file_path()`
- For generating expected outputs: `tlab_gen.generate_expected_outputs(inputs)`

## Complete Example
Here's how a typical dataset generation script can be adapted to use `tlab_gen`:

```python
import pandas as pd
from transformerlab.sdk.v1.generate import tlab_gen

@tlab_gen.job_wrapper()
def generate_dataset():
    # 1. Initialize data list
    data = []
    
    # 2. Generate inputs
    input_prompts = [
        "Explain the concept of recursion in programming.",
        "What is the difference between machine learning and deep learning?",
        "How does a transformer neural network work?"
    ]
    
    # 3. Generate expected outputs using a model
    expected_outputs = tlab_gen.generate_expected_outputs(
        input_prompts,
        task="Create educational content about programming concepts",
        scenario="You are a programming tutor creating explanations",
        output_format="Clear, concise explanation with examples"
    )
    
    # 4. Create dataset entries
    for i, (prompt, response) in enumerate(zip(input_prompts, expected_outputs)):
        data.append({
            "id": i,
            "prompt": prompt,
            "response": response,
            "category": "programming_education"
        })
        
        # Update progress
        progress = int((i + 1) / len(input_prompts) * 100)
        tlab_gen.progress_update(progress)
    
    # 5. Convert to DataFrame
    df = pd.DataFrame(data)
    
    # 6. Save and upload the generated dataset
    output_file, dataset_name = tlab_gen.save_generated_dataset(
        df, 
        additional_metadata={"purpose": "educational content", "domain": "programming"}
    )
    
    print(f"Dataset generated and saved as '{dataset_name}'")
    return True

# Call the function
generate_dataset()
```

## Key Features

### Saving Generated Datasets

`tlab_gen` provides an easy way to save datasets and automatically upload them to Transformer Lab:

```python
output_file, dataset_name = tlab_gen.save_generated_dataset(
    df,  # DataFrame containing the generated data
    additional_metadata={"domain": "finance", "quality": "high"},  # Optional metadata
    dataset_id="custom_dataset_id"  # Optional custom dataset ID
)
```

The method:

- Saves the DataFrame to a JSON file
- Creates and saves metadata about the generation
- Uploads the dataset to Transformer Lab
- Returns the file path and dataset name

### Generating Expected Outputs

`generate_expected_outputs` method helps create output responses for given inputs using a local model running on Transformer Lab:

```python
expected_outputs = tlab_gen.generate_expected_outputs(
    input_values=["What is Python?", "Explain variables."],
    task="Create educational content",
    scenario="You are a programming tutor",
    input_format="Questions about programming concepts",
    output_format="Clear, concise explanations with examples"
)
```

This automatically:

- Formats appropriate prompts based on the task and scenario
- Uses the configured model to generate responses
- Updates progress during generation
- Returns a list of generated outputs

### Parameter Access

Parameters are automatically loaded from the Transformer Lab configuration. You can access them in several ways:

- Direct access: `tlab_gen.params.<parameter_name>`
- Safe access with default: `tlab_gen.params.get(<parameter_name>, <default_value>)`

Common parameters include:

- `tlab_gen.params.model_name`: Model to evaluate
- `tlab_gen.params.dataset_name`: Dataset to use
- `tlab_gen.params.experiment_name`: Name of the experiment
- `tlab_gen.params.run_name`: Name for the run

### Progress Reporting

Keep users informed about generation progress:

```python
# Update progress (0-100)
tlab_gen.progress_update(75)  # 75% complete
```

The progress update also checks if the job was requested to stop and will raise a KeyboardInterrupt if needed.

## Best Practices

1. **Error Handling**: While the decorator handles basic error reporting, include try/except blocks for specific operations
2. **Parameter Access**: Always use `.get()` with sensible defaults for optional parameters
3. **Dataset Structure**: Design your DataFrame with clear, consistent fields for better compatibility
4. **Progress Updates**: Provide regular progress updates, especially for long-running generations
5. **Metadata**: Include helpful metadata about the generation process and dataset characteristics


## Summary

By following this guide, you can quickly adapt your existing dataset generation scripts to work within the Transformer Lab ecosystem, gaining parameter management, progress tracking, dataset upload capabilities, and integrated logging with minimal code changes.

# File: docs/plugins/intro.md

---
---
sidebar_position: 1
---

# Introduction to Plugins

## Overview

Transformer Lab's architecture is built around a plugin system that powers all core functionality. Plugins enable:

- Model training
- Inference
- Evaluation
- etc.

Plugins allow anyone to extend the ability of Transformer Lab in a consistent way.

## Plugin Structure

At its core, a Transformer Lab plugin is a directory containing specific files that define its functionality, parameters, and dependencies.

### Example: Apple MLX LoRA Trainer

Let's examine a real-world example: the MLX LoRA Trainer plugin which enables efficient fine-tuning on Apple Silicon.

```
transformerlab/plugins/mlx_lora_trainer/
├── index.json
├── info.md
├── main.py
└── setup.sh
```

<!-- ![Plugin Folder Structure](./img/plugin-folder.png) -->

### Key Files

Each plugin consists of four essential files:

| File | Purpose |
|------|---------|
| **index.json** | Defines plugin metadata including name, version, and required parameters |
| **info.md** | Provides user documentation explaining the plugin's functionality and usage |
| **main.py** | Contains the core implementation that executes when the plugin runs |
| **setup.sh** | Installs dependencies and performs one-time setup operations |

## Getting Started

The plugin system makes extending Transformer Lab straightforward. In the following sections, we'll explore how to:

1. Creating a new plugin
2. Formatting the parameters that a plugin can use
3. Using the Plugin SDK to convert an existing script to work inside Transformer Lab

# File: docs/plugins/sample_data_print.md

---
---
sidebar_position: 3
---
# Creating a Demo Plugin Script

This guide explains how to create a simple demo plugin for Transformer Lab using the `tlab_trainer` decorator class. Demo plugins are a great way to understand how the Transformer Lab plugin system works without needing to implement complex functionality. This example will focus on creating a plugin that simply takes parameters and prints them.

## What is a Demo Plugin?

A demo plugin is a minimal implementation that demonstrates how to use the Transformer Lab plugin system. It can:

- Accept and process parameters from the Transformer Lab interface
- Display information or perform simple operations
- Integrate with Transformer Lab's job management system

## Getting Started

### 1. Import the decorator

Add this import to your plugin script:

```python
from transformerlab.sdk.v1.train import tlab_trainer
```

### 2. Decorate your main function

Wrap your main function with the `job_wrapper` decorator:

```python
@tlab_trainer.job_wrapper()
def demo_function():
    # Your demo code here
    pass
```

### 3. Access and print parameters

Access parameters that are passed from the Transformer Lab interface:

```python
@tlab_trainer.job_wrapper()
def demo_function():
    # Print all available parameters
    print("Available parameters:")
    for param_name, param_value in tlab_trainer.params.__dict__.items():
        print(f"  {param_name}: {param_value}")
    
    # Access specific parameters
    model_name = tlab_trainer.params.get("model_name", "default_model")
    print(f"Selected model: {model_name}")
    
    return True
```

## Complete example

Here's a complete example of a demo plugin that prints parameters:

```python
from transformerlab.sdk.v1.train import tlab_trainer
import time

@tlab_trainer.job_wrapper()
def print_parameters():
    """A simple demo plugin that prints all parameters and simulates work."""
    
    # Print all received parameters
    print("Parameters received from Transformer Lab:")
    print("-" * 50)
    
    for param_name, param_value in tlab_trainer.params.__dict__.items():
        print(f"{param_name}: {param_value}")
    

    iterations = 10
    print(f"Simulating work with {iterations} iterations...")
    
    print("-" * 50)
    
    # Simulate some work with progress updates
    for i in range(iterations):
        # Update progress (0-100 scale)
        progress = (i / iterations) * 100
        tlab_trainer.progress_update(progress)
        
        print(f"Processing iteration {i+1}/{iterations}...")
        time.sleep(1)  # Simulate work
    
    # Final progress update
    tlab_trainer.progress_update(100)
    print("Demo plugin execution complete!")
    
    return True

# Call the function
print_parameters()
```

## Parameter Access

Parameters are automatically loaded from the Transformer Lab configuration. You can access them in several ways:

1. **Direct access** (if sure the parameter exists): `tlab_trainer.params.<parameter_name>`
2. **Safe access with default** (recommended): `tlab_trainer.params.get(<parameter_name>, <default_value>)`
3. **Listing all parameters**: Iterate through `tlab_trainer.params.__dict__.items()`

## Progress Reporting

Even for a simple demo plugin, you can show progress to users:

```python
# Update progress on a scale of 0-100
tlab_trainer.progress_update(50)  # 50% complete
```

## Error Handling

The decorator handles basic error reporting, but you can include your own try/except blocks:

```python
@tlab_trainer.job_wrapper()
def demo_function():
    try:
        # Some operation that might fail
        value = int(tlab_trainer.params.get("some_number", "not_a_number"))
    except ValueError:
        print("Error: Parameter 'some_number' is not a valid integer")
        raise
    
    print(f"Successfully parsed number: {value}")
    return True
```

## Best Practices

1. **Always use defaults**: Use `.get()` with sensible defaults for parameters that might not be provided
2. **Return value**: Return `True` for successful execution and `False` for failure
3. **Type conversion**: Always convert string parameters to appropriate types (int, float, bool) as needed
4. **Progress updates**: Provide regular progress updates for operations that take time

## Summary

By following this guide, you can create a simple demo plugin for Transformer Lab that accepts parameters and prints them. This serves as a starting point for understanding the plugin system before developing more complex functionality.

# File: docs/plugins/setup.md

---
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

### Example Structure

```markdown
# My Plugin

## Overview

This plugin does xyz

## Usage

...

## Parameters

...

```

## Creating setup.sh

The `setup.sh` script installs dependencies and performs one-time setup operations when the plugin is first installed or re-installed.

`setup.sh` is just a shell script that runs directly on the host machine. The most common use for this file is to install dependencies. If you are installing python dependencies, use `uv` for example the file might contain:

```bash
uv pip install langchain-openai datasets
```

# File: docs/plugins/tlab_trainer.md

---
---
sidebar_position: 4
---
# Creating a Trainer Plugin Script

This guide explains how to adapt your existing training scripts to work with Transformer Lab using the `tlab_trainer` decorator class. By integrating with Transformer Lab, your training scripts gain progress tracking, parameter management, dataset handling, and integrated logging with minimal code changes. This is a part of the active development we are conducting with the Transformer Lab Plugin SDK to make integrating third-party plugins easier.

## What is `tlab_trainer`?

`tlab_trainer` is a decorator class that helps integrate your training script with Transformer Lab's job management system. It provides:

- Argument parsing and configuration loading
- Dataset loading helpers
- Progress tracking and reporting
- Job status management
- Integration with TensorBoard and Weights & Biases

## Getting Started

### 1. Import the decorator

Add this import to your training script:

```python
from transformerlab.sdk.v1.train import tlab_trainer
```

### 2. Decorate your main training function

Wrap your main training function with the `job_wrapper` decorator:

```python
@tlab_trainer.job_wrapper(
    wandb_project_name="my_project",  # Optional: Set a custom Weights & Biases project name
    manual_logging=False  # Optional: Set to True for manual metric logging
)
def train_model():
    # Your training code here
    pass

```

The decorator parameters include:

- `progress_start` and `progress_end`: Define the progress range (typically 0-100). These are optional fields and will typically track from 0 to 100 if not tracked.
- `wandb_project_name`: Optional custom name for your Weights & Biases project. Default is `TLAB_Training`
- `manual_logging`: Set to `True` for training scripts without automatic logging integration. Default is `False`.

**Note**: There is also an async version of the job wrapper available for functions which might need to run asynchronously. This can be used by just changing ```@tlab_trainer.job_wrapper``` to ```@tlab_trainer.async_job_wrapper```.


### 3. Use helper methods

Replace parts of your code with `tlab_trainer` helper methods:

- For dataset loading: `tlab_trainer.load_dataset()`
- For progress tracking: `tlab_trainer.create_progress_callback()`
- For storing anything to the job data (optional): `tlab_trainer.add_job_data(key, value)`

## Complete example

Here's how a typical training script can be adapted to use `tlab_trainer`:

```python
import argparse
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments, Trainer
from datasets import load_dataset

# Parse command line arguments
def parse_args():
    parser = argparse.ArgumentParser(description="Train a model")
    parser.add_argument("--model_name", type=str, required=True, help="Model to train")
    parser.add_argument("--dataset_name", type=str, required=True, help="Dataset to use")
    parser.add_argument("--output_dir", type=str, default="./output", help="Output directory")
    parser.add_argument("--learning_rate", type=float, default=2e-5, help="Learning rate")
    parser.add_argument("--num_train_epochs", type=int, default=3, help="Number of epochs")
    parser.add_argument("--batch_size", type=int, default=8, help="Batch size for training")
    parser.add_argument("--max_length", type=int, default=512, help="Max sequence length")
    return parser.parse_args()

def train_model():
    # 1. Parse arguments
    args = parse_args()
    
    # 2. Load dataset
    dataset = load_dataset(args.dataset_name)["train"]
    
    # 3. Load model and tokenizer
    model = AutoModelForCausalLM.from_pretrained(args.model_name)
    tokenizer = AutoTokenizer.from_pretrained(args.model_name)
    
    # 4. Setup training arguments
    training_args = TrainingArguments(
        output_dir=args.output_dir,
        learning_rate=args.learning_rate,
        num_train_epochs=args.num_train_epochs,
        per_device_train_batch_size=args.batch_size,
        max_length=args.max_length,
        # other arguments...
    )
    
    # 5. Create trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset,
        tokenizer=tokenizer,
    )
    
    # 6. Train and save
    trainer.train()
    trainer.save_model(args.output_dir)
    
    print(f"Model saved to {args.output_dir}")

# Call the function
if __name__ == "__main__":
    train_model()
```


### Adapted Script with `tlab_trainer`

```python
from transformerlab.sdk.v1.train import tlab_trainer
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments, Trainer


@tlab_trainer.job_wrapper(progress_start=0, progress_end=100)
def train_model():
    # 1. Load dataset with helper
    datasets = tlab_trainer.load_dataset()
    dataset = datasets["train"]
    
    # 2. Load model and tokenizer (same as before)
    model = AutoModelForCausalLM.from_pretrained(tlab_trainer.model_name)
    tokenizer = AutoTokenizer.from_pretrained(tlab_trainer.model_name)
    
    # 3. Setup training arguments with parameters from Transformer Lab
    training_args = TrainingArguments(
        output_dir=tlab_trainer.params.output_dir,
        learning_rate=float(tlab_trainer.params.learning_rate),
        num_train_epochs=int(tlab_trainer.params.num_train_epochs),
        report_to=tlab_trainer.report_to,
        # other arguments...
    )
    
    # 4. Create progress callback
    progress_callback = tlab_trainer.create_progress_callback(framework="huggingface")
    
    # 5. Create trainer with callback
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=dataset,
        tokenizer=tokenizer,
        callbacks=[progress_callback],
    )
    
    # 6. Train and save
    trainer.train()
    trainer.save_model(tlab_trainer.output_dir)
    
    return True

# Call the function
train_model()
```

## Key Differences

1. **Decorator**: Added `@tlab_trainer.job_wrapper` to wrap the function
2. **Dataset Loading**: Used `tlab_trainer.load_dataset()` instead of direct loading
3. **Parameter Access**: Accessed parameters via `tlab_trainer.parameter_name` or `getattr(tlab_trainer, "parameter_name", default_value)`
4. **Progress Tracking**: Added `tlab_trainer.create_progress_callback(framework="huggingface")` for reporting progress
5. **Return Value**: The return value could be anything, but it's recommended to return a boolean to indicate success/failure. The job wrapper will handle catching the errors and report them accordingly.

## Parameter Access

Parameters are automatically loaded from the Transformer Lab configuration. You can access them in several ways:

1. **Direct access** (if sure the parameter exists): `tlab_trainer.params.<parameter_name>`
2. **Safe access with default** (recommended): `tlab_trainer.params.get(<parameter_name>, <default_value>)`

Common parameters include:

- `tlab_trainer.params.model_name`: Model to use for training
- `tlab_trainer.params.dataset_name`: Dataset to use
- `tlab_trainer.params.output_dir`: Directory for saving outputs
- `tlab_trainer.params.num_train_epochs`: Number of training epochs
- `tlab_trainer.params.batch_size`: Batch size for training
- `tlab_trainer.params.learning_rate`: Learning rate

## Progress Reporting

Transformer Lab expects progress updates from 0 to 100. Use these methods:

1. **Create callback**: Create a progress callback with `tlab_trainer.create_progress_callback(framework="huggingface")` and fetch it to your trainer. 
2. **Manual updates**: For custom loops, use `tlab_trainer.progress_update(progress)` where progress is 0-100


## Manual Metric Logging

For training scripts that don't have automatic integration with logging platforms like Huggingface Trainer does, you can use manual logging:

1. **Enable manual logging**: Set `manual_logging=True` in the decorator
2. **Log metrics**: Use `tlab_trainer.log_metric(name, value, step)` to log metrics during training

Example with a custom training loop:

```python
@tlab_trainer.job_wrapper(manual_logging=True)
def train_model():
    # Setup model, data, etc.
    
    total_steps = 1000
    for step in range(total_steps):
        # Training logic here
        loss = model.train_step(batch)
        
        # Log metrics manually
        tlab_trainer.log_metric("train/loss", loss.item(), step)
        tlab_trainer.log_metric("train/lr", scheduler.get_last_lr()[0], step)
        
        # Update progress
        progress = (step / total_steps) * 100
        tlab_trainer.progress_update(progress)
```

The `log_metric` function automatically handles logging to both Tensorboard and Weights & Biases (if enabled), so you don't need separate code paths for different logging backends.



## Best Practices

1. **Error Handling**: The decorator handles basic error reporting, but include try/except blocks for specific operations
2. **Parameter Access**: Always use `.get()` with sensible defaults for optional parameters

## Summary

By following this guide, you can quickly adapt your existing training scripts to work within the Transformer Lab ecosystem, gaining parameter management, progress tracking, and integrated logging with minimal code changes.


# File: docs/train/diffusion-llm-trainer.md

---
---
sidebar_position: 5
---

# Diffusion LLM Trainer (Text Diffusion)

The Diffusion LLM Trainer plugin brings masked-language and diffusion-style alignment workflows into the Train tab. It builds on the `dllm` Python plugin format and supports CUDA hardware for training `BertForMaskedLM`, `ModernBertForMaskedLM`, `DreamModel`, and `LLaDAModelLM` architectures. Use it when you need quick SFT-style adaptation with Dream/CART weighting or lightweight LoRA adapters instead of full fine-tunes.

## Step 1: Install the Plugin

1. Open the `Plugins` tab.
2. Filter by `Trainer` and install **Diffusion LLM Trainer**.
3. Confirm the environment is configured for CUDA GPUs. CPU or TPU can be selected in the config, but training performance and plugin validation currently target CUDA.

:::note
If you plan to use multi-GPU, keep `gpu_ids` on `auto` to span every visible CUDA device, or enter a comma-separated list such as `0,1,2,3`.
:::

## Step 2: Prepare Your Text Dataset

You can either download a dataset from the Hugging Face Hub or upload your own dataset.

To upload your own dataset:

1. Go to the `Datasets` tab and click **New**.
2. Choose **Text** and import a dataset that contains prompt/response style pairs or masked-language data.


## Step 3: Create a Training Task

1. Navigate to the `Train` tab and click **New**.
2. Fill out the **Template/Task Name**, pick your dataset
3. Switch to **Plugin Config** and review every section below.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_llm_trainer/config.png').default} width="600" />
</div>

### Core Execution Settings

- **Training Device (`train_device`):** Choose `cuda`, `cpu`, or `tpu`. Use `cuda` for best throughput.
- **GPU IDs (`gpu_ids`):** `auto` spans all visible GPUs; otherwise provide comma-separated IDs.
- **Training Method (`training_method`):**  
    - `bert` → Use for Bert models like `answerdotai/ModernBERT-large` 
    - `dream` → Use for Dream models like `Dream-org/Dream-v0-Instruct-7B`  
    - `llada` → Use for LLaDA models like `GSAI-ML/LLaDA-8B-Instruct`
- **Batch Size / Gradient Accumulation:** Balance per-device memory vs. total effective batch.
- **Sequence Length (`max_length`):** Cap sequences to manage VRAM.
- **Precision + Loading:** Toggle `dtype`, `load_in_4bit`, and `lora` to trade speed vs. quality.

### Optimization Schedule

- **Learning Rate (`learning_rate`)** and **Scheduler (`learning_rate_schedule`)** support constant, linear, cosine, and constant-with-warmup curves.
- **Warmup Ratio (`warmup_ratio`):** Fraction of total steps spent ramping LR.
- **Num Train Epochs / Train Steps:** Set epochs to `0` when driving via explicit step count.
- **Logging / Eval / Save Steps:** Accept fractional values (e.g., `0.25`) to express percent of total steps; useful for long runs.
- **Gradient Accumulation Steps:** Multiply with batch size to reach effective large-batch updates.

### Parameter-Efficient Fine-Tuning

When `lora` is enabled:

- **LoRA R (`lora_r`)** and **LoRA Alpha (`lora_alpha`):** Must be multiples of 4.
- **LoRA Dropout (`lora_dropout`):** Helps regularize long Dream runs.

### Dream-Specific Controls

- **Mask Prompt Loss:** Disable to let prompts influence gradients (default masks prompts).
- **Per-batch Cutoff / Response Cutoff Ratio:** Randomly trims responses to reduce overfitting.
- **Loss Weight Type:** Choose `cart[geo_p:0.3]` for CART-style decay or `scheduler` for step-aware weighting.

### Required Metadata

- **Adaptor Name:** Unique label for the saved adaptor.
- **Logging:** Keep `log_to_wandb` on to mirror metrics in Weights & Biases.

Click **Save Training Template** once everything looks correct.

## Step 4: Queue and Run the Job

1. From the template detail view, press **Queue**.
2. Watch the live logs. The runner will:
   - Launch distributed workers on the selected GPU IDs
   - Stream trainer logs, periodic evaluation, and checkpoint saves at `save_steps`

## Step 5: Monitor Training Metrics

- **TensorBoard:** Open the sidebar log link to inspect loss and learning-rate curves directly in Transformer Lab.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_llm_trainer/tensorboard.png').default} width="600" />
</div>

- **Weights & Biases:** If `log_to_wandb` is enabled and your API key is set, you’ll see the run under the project configured in settings. 

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_llm_trainer/wandb.png').default} width="600" />
</div>

## Step 6: Post-Training Outputs

- Dream/LLaDA runs automatically attach metadata about cutoff ratios and loss weighting, so you can track what worked best.
- You can view the final fused model in the Foundation tab.

## Tips for Successful Text-Diffusion Runs

- **Start with MDLM/BERT:** Validate your dataset and template on `bert` before jumping into Dream mode.
- **Dream Method Care:** When `perbatch_cutoff` is true, keep `resp_cutoff_ratio` conservative (`0.0–0.2`) to avoid truncating important supervision.
- **Sequence Budgeting:** Shorter `max_length` lowers memory use, enabling larger batch sizes or more GPUs.
- **LoRA vs. Full Fine-Tune:** Enable LoRA for quick iterations; disable it for full-parameter adaptation when VRAM allows.
- **Logging Discipline:** Align `logging_steps`, `eval_steps`, and `save_steps` so you always have checkpoints near the curves you analyze.


# File: docs/train/diffusion-trainer.md

---
---
sidebar_position: 4
---

# Diffusion Trainer

The Diffusion Trainer allows you to create and manage LoRA training jobs for diffusion models using Transformer Lab. This plugin enables training custom adaptors that can be used with Text-to-Image, Image-to-Image, and Inpainting workflows. The trainer supports CUDA environments and offers flexibility in setting up custom diffusion training tasks.

## Step 1: Setup

1. Open the `Plugins` tab.
2. Filter by trainer plugins.
3. Install the `Diffusion Trainer` plugin.

:::note
This plugin only works with NVIDIA and AMD GPUs. It requires a CUDA environment to run.
:::

4. Now download a diffusion model in the Model Zoo. We recommend **stabilityai/stable-diffusion-xl-base-1.0** as a good starting point.

## Step 2: Create an Image Dataset

Transformer Lab works with Hugging Face Datasets. You can use any image dataset on HF, for example [datasets-examples/doc-image-6](https://huggingface.co/datasets/datasets-examples/doc-image-6)

But most likely you'd like to train your Diffusion Model on your own images. To create a new dataset:

1. Go to the **Datasets** tab.
2. Click `New +`.
3. In the pop-up, select **Image** as the dataset type, enter a name, and click **Next**.
4. Upload your folder of images. The folder should follow the Hugging Face Image Datasets format:

   ```
   folder_uploaded/
   ├── image1.jpg
   ├── image2.jpg
   ├── image3.jpg
   └── ...
   └── metadata.jsonl
   ```

   - You **do not need** to include a `metadata.jsonl` file when uploading images.
   - After the images are uploaded, **you can add captions** manually in the app by editing the dataset.
   - Alternatively, you may upload a `metadata.jsonl` file alongside the images, which is helpful if you already have captions or tags prepared.
   - If you decide to include `metadata.jsonl`, it must have a column named `file_name` that matches each image file. Other columns (e.g., captions, tags) are allowed and can be named as you like.

5. You can also organize your dataset into subfolders for splits or labels, for example:

   ```text
   folder_uploaded/
   ├── train/
   │   ├── image1.jpg
   │   ├── image2.jpg
   │   └── metadata.jsonl
   ├── valid/
   │   ├── image3.jpg
   │   ├── image4.jpg
   │   └── metadata.jsonl
   ```

This structure ensures your dataset is compatible and supports advanced features like captions and data splits.


## Step 3: Setup a Train

1. Navigate to the `Train` tab.
2. Click on the `New` button.
3. In the pop-up, you can leave most settings to their defaults. Click here to see detailed descriptions of all the advanced settings

   - **Template/Task Name:**  
     Set a unique name for your training template/task.

   - **Dataset Tab:**  
     Select a **Text-Image dataset** to use for training. Text-Image datasets contain paired image and caption data required for diffusion model training. Datasets are loaded from the `Datasets` tab in Transformer Lab.

     **Example Dataset:** For testing and learning, you can use the `datasets-examples/doc-image-6` dataset, which contains 4 high-quality images with detailed captions - perfect for experimenting with diffusion training.


  <details>
    <summary>
    **Advanced Plugin Configuration**  
    </summary>
     ### Core Training Parameters

- **Adaptor Name**: Name for the LoRA adaptor that will be created and saved (required)
- **Trigger Word**: Optional trigger word to prepend to all captions during training (e.g., 'sks person' or 'ohwx style')
- **Number of Training Epochs**: Number of training epochs (default: 100)
- **Train Batch Size**: Number of images per batch (default: 1)
- **Gradient Accumulation Steps**: Steps to accumulate gradients before updating weights (default: 1)

### Dataset Configuration

- **Caption Column**: Name of the column containing image captions (default: "text")
- **Image Column**: Name of the column containing images (default: "image")
- **Caption Dropout Rate**: Probability of dropping captions during training (default: 0.0)

### Image Processing

- **Image Resolution**: Image resolution for training (default: 512)
- **Center Crop**: Use center crop instead of random crop (default: false)
- **Image Interpolation Mode**: Interpolation method for resizing (default: "lanczos")
- **Random Horizontal Flip**: Apply random horizontal flip (default: false)

### Data Augmentation

- **Enable Color Jitter**: Enable color jitter augmentation (default: false)
- **Color Jitter Brightness**: Brightness variation amount (default: 0.1)
- **Color Jitter Contrast**: Contrast variation amount (default: 0.1) 
- **Color Jitter Saturation**: Saturation variation amount (default: 0.1)
- **Color Jitter Hue**: Hue variation amount (default: 0.05)
- **Enable Random Rotation**: Enable random rotation (default: false)
- **Random Rotation Degrees**: Maximum rotation degrees (default: 5)
- **Random Rotation Probability**: Probability of applying rotation (default: 0.3)

### LoRA Configuration

- **LoRA Rank (r)**: LoRA rank - higher values = more parameters but better quality (default: 8)
- **LoRA Alpha**: LoRA scaling factor (default: 16)

### Optimizer Settings

- **Learning Rate**: Learning rate for optimizer (default: 1e-4)
- **LR Scheduler**: Learning rate schedule type (default: "constant")
- **LR Warmup Steps**: Steps to gradually increase learning rate (default: 50)
- **Adam Beta 1**: Adam optimizer beta1 parameter (default: 0.9)
- **Adam Beta 2**: Adam optimizer beta2 parameter (default: 0.999)
- **Adam Weight Decay**: Weight decay for regularization (default: 0.01)
- **Adam Epsilon**: Adam epsilon for numerical stability (default: 1e-8)
- **Max Grad Norm**: Maximum gradient norm for clipping (default: 1.0)

### Advanced Training Options

- **Loss Type**: Loss function type - "l2" or "huber" (default: "l2")
- **Huber Loss Beta**: Beta parameter for Huber loss (default: 0.1)
- **Prediction Type**: Prediction type - "epsilon" or "v_prediction" (default: "epsilon")
- **SNR Gamma**: Signal-to-noise ratio gamma for loss weighting (default: 0)
- **Min-SNR Gamma**: Minimum SNR gamma value (default: 0)
- **Noise Offset**: Offset added to noise for training (default: 0)

### Performance Optimization

- **Mixed Precision**: Enable mixed precision training - "no", "fp16", or "bf16" (default: "no")
- **Enable xFormers Memory Efficient Attention**: Use xFormers for memory efficiency (default: false)
- **Enable Gradient Checkpointing**: Trade compute for memory (default: false)
- **Use EMA (Exponential Moving Average)**: Use Exponential Moving Average of weights (default: false)
- **EMA Decay Rate**: EMA decay rate (default: 0.9999)

### Evaluation

- **Evaluation Prompt**: Text prompt for generating evaluation images (default: "")
- **Evaluation Steps**: Generate evaluation images every N epochs (default: 1)
- **Evaluation Inference Steps**: Denoising steps for evaluation images (default: 50)
- **Evaluation Guidance Scale**: Guidance scale for evaluation generation (default: 7.5)

### Logging

- **Log to Weights and Biases**: Log training metrics to Weights & Biases (default: true)

</details>

4. Save the training template by clicking on **Save Training Template**.

<img src={require('./gifs/diffusion_trainer/1_CreatingTask.gif').default} alt="Plugin Gif" width="500" />

## Step 4: Queueing the Training Job

After saving the training template, click on **Queue** to start the training job.

While the training is running, you can view the output logs and monitor progress and even view the eval images. The trainer will:

- Process your Text-Image dataset
- Train the LoRA adaptor on the selected diffusion model
- Generate evaluation images if configured
- Save the trained adaptor for use in diffusion workflows

<img src={require('./gifs/diffusion_trainer/2_RunningTask.gif').default} alt="Plugin Gif" width="500" />

## Step 5: Using the Trained Adaptor

Once the training is finished, the LoRA adaptor becomes available for use with diffusion models. You can:

1. **Load the adaptor** in the Foundation tab under your diffusion model
2. **Use in Text-to-Image generation** by selecting the adaptor in the Diffusion tab
3. **Apply to Image-to-Image workflows** for style transfer using your custom adaptor
4. **Utilize in Inpainting tasks** to maintain consistent style across modified regions

The trained adaptor will enhance the base diffusion model with your custom style or subject learned from the training dataset.

<img src={require('./gifs/diffusion_trainer/3_PostTraining.gif').default} alt="Plugin Gif" width="500" />

<divider />

## Training Tips

### Dataset Preparation

- **Image Quality:** Use high-quality images with consistent resolution
- **Caption Quality:** Write detailed, descriptive captions that accurately describe the images
- **Dataset Size:** Start with 10-50 high-quality image-caption pairs for initial experiments
- **Consistency:** Maintain consistent style, lighting, or subject matter for better results

### Parameter Tuning

- **Start Conservative:** Use default parameters for your first training run
- **Batch Size:** Increase batch size if you have sufficient GPU memory
- **Learning Rate:** Lower learning rates (1e-5) for fine details, higher (1e-3) for major style changes
- **LoRA Rank:** Higher ranks capture more detail but require more memory and training time

### Monitoring Training

- **Use Evaluation Prompts:** Set meaningful evaluation prompts to visually track training progress
- **Watch Loss Curves:** Monitor training loss through Weights and Biases integration
- **Evaluation Images:** Review generated evaluation images to assess training quality

This diffusion trainer enables you to create powerful custom adaptors that can transform the behavior of diffusion models for your specific use cases, whether for artistic style transfer, subject-specific generation, or specialized image domains.

## Training Effectiveness Comparison

To demonstrate the power of a Simpsons-style LoRA adaptor trained on the [Simpsons BLIP Captions dataset](https://huggingface.co/datasets/Norod78/simpsons-blip-captions), let's compare two scenarios using the prompt **"An astronaut floating in space"**.

### Base Model Only

Using the base diffusion model without any adaptor:

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_trainer/base_astronaut.png').default} width="400" />
  <p><em>Base model result: Standard realistic style</em></p>
</div>

**Result:** The base diffusion model generates a realistic depiction of an astronaut floating in space without any stylized characteristics.

### With Simpsons Adaptor

Using the trained Simpsons-style LoRA adaptor:

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_trainer/simpsons_astronaut.png').default} width="400" />
  <p><em>Simpsons style: Vibrant animation aesthetic</em></p>
</div>

**Result:** Applying the Simpsons adaptor transforms the scene into a bright, animated aesthetic reminiscent of The Simpsons while preserving the astronaut theme.

### Key Takeaways

1. **Stylistic Transformation:** LoRA adaptors can inject distinct artistic styles into diffusion outputs with minimal overhead.
2. **Resource Efficiency:** Fine-tuning with LoRA adapters requires far fewer resources than full model training.
3. **Data Quality Matters:** High-quality, targeted datasets like the Simpsons captions dataset ensure coherent and consistent style transfer.

When training your own adaptors, remember to:

- Choose meaningful trigger words that don't conflict with common vocabulary
- Use the trigger word consistently during training
- Always include the trigger word when generating images with your trained adaptor
- Test different trigger word strategies to find what works best for your specific use case

<details>
<summary>Additional Pokemon-style Example</summary>

#### Pokemon Training Effectiveness Comparison

To demonstrate the power of LoRA adaptors and the importance of trigger words, let's compare three scenarios using the prompt **"pokemon-style-123 pikachu attacking"** where `pokemon-style-123` is the trigger word.

##### Pokemon Base Model Only

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_trainer/base_model_only.png').default} width="400" />
</div>

*Result:* The base model generates a standard interpretation of "pikachu attacking" but lacks the specific Pokemon style characteristics and instead tries to assign a cat-style face to Pikachu.

##### Pokemon Adaptor Only (No Trigger Word)

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_trainer/adaptor_only.png').default} width="400" />
</div>

*Result:* The adaptor provides some style influence, but without the trigger word, the learned characteristics are not fully activated.

##### Pokemon Trigger Word + Adaptor

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/diffusion_trainer/trigger_word_adaptor.png').default} width="400" />
</div>

*Result:* Combining the trigger word with the adaptor produces full style activation, displaying vivid Pokemon-style visuals.

###### Pokemon Key Takeaways

1. **Adaptor Impact:** Training a LoRA adaptor significantly improves style consistency compared to the base model.
2. **Trigger Word Importance:** The trigger word fully unlocks the learned style.
3. **Combined Approach:** The best results come from using both the adaptor and the trigger word.

</details>


# File: docs/train/grpo.md

---
---
sidebar_position: 2
---

# GRPO Trainer

The GRPO Trainer plugin allows you to create and manage GRPO training jobs using Transformer Lab. Installation steps remain the same as other training plugins.

There are two variants available:

- **GRPO trainer (Multi GPU):** Designed for single or multi-GPU setups without any PEFT models.
- **Unsloth GRPO Trainer:** This variant adds a LoRA adapter at the end.

**Note:** These plugins work exclusively with CUDA environments.

## Step 1: Installing the Plugin

1. Open the `Plugins` tab.
2. Filter by trainer plugins.
3. Install the `GRPO trainer (Multi GPU)` plugin.  
   If you wish to use the LoRA adapter feature, install the `Unsloth GRPO Trainer`.

<img src={require('./gifs/grpo/1_InstallingPlugin.gif').default} alt="Plugin Gif" width="500" />

## Step 2: Creating a Training Task

1. Navigate to the `Train` tab.
2. Click on the `New` button.
3. In the pop-up, complete the following sections:

   - **Template/Task Name:**  
     Set a unique name for your training template/task.

   - **Dataset Tab:**  
     Select the Dataset to use for training. The commonly used dataset is:  
     `openai/gsm8k`.

   - **Data Template Tab:**  
     There are three fields to configure:

     - **Instruction Field:**  
       Provide the instruction prompt. For example:

       ````markdown
       Respond in the following format:
       <reasoning>
       ...
       </reasoning>
       <answer>
       ...
       </answer>
       ````

     - **Input Field:**  
       Enter the question field from your dataset (for `openai/gsm8k`, use `{{question}}`).

     - **Output Field:**  
       Enter the answer field from your dataset (for `openai/gsm8k`, use `{{answer}}`).

   - **Plugin Config Tab:**  
     Configure the training parameters. The fields vary based on the selected plugin:

     **For GRPO trainer (Multi GPU):**

     - **Training Device:**  
       Set to either `cuda`, `cpu` or `tpu`.
     - **GPU IDs to train:**  
       Default is `auto`.
     - **Start thinking string:**  
       `<reasoning>` (Represents the start thinking tag).
     - **End thinking string:**  
       `</reasoning>` (Represents the end thinking tag).
     - **Start answer string:**  
       `<answer>` (Represents the start answer tag).
     - **End answer string:**  
       `</answer>` (Represents the end answer tag).
     - **Maximum Sequence Length:**  
       Defines the maximum tokens allowed per input sequence.
     - **Maximum Completion Length:**  
       Sets the maximum tokens for the model's output.
     - **Batch Size:**  
       Number of samples processed together.
     - **Learning Rate Schedule:**  
       Options include: constant, linear, cosine, or constant with warmup.
     - **Learning Rate:**  
       Specifies the initial learning rate.
     - **Number of Training Epochs:**  
       Controls the number of full passes through the dataset.
     - **Max Steps:**  
       Total training steps (use `-1` for no limit).
     - **Max Grad Norm:**  
       Maximum gradient norm for clipping.
     - **Weight Decay:**  
       Regularization parameter.
     - **Adam Beta 1:**  
       The beta1 hyperparameter for Adam.
     - **Adam Beta 2:**  
       The beta2 hyperparameter for Adam.
     - **Adam Epsilon:**  
       A small constant for numerical stability in Adam.
     - **Adaptor Name:**  
       Unique identifier for the training adaptor.

     **For Unsloth GRPO Trainer:**

     - *All fields listed above are included except the "Training Device" and "GPU IDs to train".*
     - **Additional Fields:**
       - **LoRA R:**  
         Indicates the rank for the LoRA adapter.
       - **LoRA Alpha:**  
         Scaling factor for the LoRA weights.
       - **LoRA Dropout:**  
         Dropout rate used in the LoRA layers.

4. Save the training template by clicking on `Save Training Template`.

<img src={require('./gifs/grpo/2_CreatingTask.gif').default} alt="Plugin Gif" width="500" />

## Step 3: Queueing the Training Job

After saving the training template, click on `Queue` to start the training job.

While the training is running, you can review output logs and tensorboard outputs to monitor progress.

<img src={require('./gifs/grpo/3_RunningTask.gif').default} alt="Plugin Gif" width="500" />

## Step 4: Viewing Training Logs on WANDB (Optional)

You can monitor the training progress and metrics on Weights and Biases (WANDB) if you've provided a Weights and Biases API key in settings.

<img src={require('./gifs/grpo/4_WANDB.gif').default} alt="Plugin Gif" width="500" />

# File: docs/train/llama-trainer.md

---
---
sidebar_position: 1
---

# Llama Trainer

The Llama Trainer allows you to create and manage training jobs using Transformer Lab. This plugin currently supports CUDA environments and offers flexibility in setting up custom training tasks.

## Step 1: Installing the Plugin

1. Open the `Plugins` tab.
2. Filter by trainer plugins.
3. Install the `LoRA Trainer` plugin.  
   If you have a multi-GPU setup, you can choose `LoRA Trainer (Multi GPU Support)`.

**Note:** These plugins only work with CUDA environments.

<img src={require('./gifs/llama_trainer/1_InstallingPlugin.gif').default} alt="Plugin Gif" width="500" />

## Step 2: Creating a Training Task

1. Navigate to the `Train` tab.
2. Click on the `New` button.
3. In the pop-up, complete the following sections:

   - **Template/Task Name:**  
     Set a unique name for your training template/task.

   - **Dataset Tab:**  
     Select the Dataset to use for training. Datasets are loaded from the `Datasets` tab in Transformer Lab.

   - **Data Template Tab:**  
     Set the formatting template for your dataset. For example, if your dataset has the columns `dialogue` and `summary`, a valid formatting template is:

     ````markdown
     Instruction: Summarize the Following
     Prompt: {{dialogue}}
     Generation: {{summary}}
     ````

   - **Plugin Config Tab:**  
     Configure the training parameters. Each parameter controls a specific training aspect:

     - **Maximum Sequence Length:**  
       Defines the maximum number of tokens allowed per input sequence.

     - **Batch Size:**  
       Sets the number of samples processed together in each training iteration.

     - **Learning Rate Schedule:**  
       Choose from options such as constant, linear, cosine, or constant with warmup to regulate the change of learning rate over time.

     - **Learning Rate:**  
       Specifies the initial step size at which the model learns.

     - **Number of Training Epochs:**  
       Determines how many times the entire training dataset is passed through the model.

     - **Max Steps:**  
       Sets the total number of training steps. Use `-1` for no limit.

     - **LoRA R:**  
       Indicates the rank for the LoRA (Low-Rank Adaptation), controlling the degree of fine-tuning.

     - **LoRA Alpha:**  
       A scaling factor applied to LoRA weights during training.

     - **LoRA Dropout:**  
       Specifies the dropout rate in the LoRA layers to prevent overfitting.

     - **Adaptor Name:**  
       Provides a unique identifier for the training adaptor.

     - **Log to Weights and Biases:**  
       Toggle whether to log training metrics and outputs to Weights and Biases for monitoring purposes.

4. Save the training template by clicking on **Save Training Template**.

<img src={require('./gifs/llama_trainer/2_CreatingTask.gif').default} alt="Plugin Gif" width="500" />

## Step 3: Queueing the Training Job

After saving the training template, click on **Queue** to start the training job.

While the training is running, you can view the output logs and tensorboard outputs to monitor progress and diagnose issues.

<img src={require('./gifs/llama_trainer/3_RunTraining.gif').default} alt="Plugin Gif" width="500" />

## Step 4: Completing the Training

Once the training is finished, the adaptor becomes available under the model name, allowing you to leverage the trained model for further tasks.

<img src={require('./gifs/llama_trainer/4_PostTraining.gif').default} alt="Plugin Gif" width="500" />


# File: docs/train/pretrain.md

---
---
sidebar_position: 3
unlisted: true
---

# Pre-Training

The Nanotron Pre-training Framework plugin allows you to pre-train models on a single or multi-GPU setup using Transformer Lab. After training, the model will be available in the Foundation tab for further preference training or chatting. It is uses [Nanotron](https://github.com/huggingface/nanotron) for pre-training.

## Step 1: Installing the Plugin

1. Open the `Plugins` tab.
2. Filter by trainer plugins.
3. Install the `Nanotron Pre-training Framework` plugin.

**Note:** This plugin supports both single and multi-GPU setups.

<img src={require('./gifs/pretrain/1_InstallingPlugin.gif').default} alt="Plugin Gif" width="500" />

## Step 2: Creating a Pre-training Task

1. Navigate to the `Train` tab.
2. Click on the `New` button.
3. In the pop-up, complete the following sections:

   - **Name:**  
     Set a unique name for your pre-training task. This will be set as the name of your pre-trained model followed by the job id.

   - **Dataset Tab:**  
     Select the dataset to use for training. A simple and small dataset for pre-training tests is:  
     `stas/openwebtext-10k` (contains 10M tokens).

   - **Data Template Tab:**  
     Specify the column representing the text data.  
     For example, if the dataset has a text column, set the **Formatting Template** to:

     ````markdown
     {{text}}
     ````

## Step 3: Configuring Plugin Parameters

In the **Plugin Config Tab**, configure the following parameters:

- **Training Device:**  
  Set the device for training.  
  *Example:* `"cuda"`  
  *(Only `cuda` is supported currently)*

- **Random Seed:**  
  Set the seed for reproducibility.  
  *Default:* `42`

- **Checkpoint Interval (steps):**  
  Determines how often a checkpoint is saved.  
  *Default:* `1000`

- **Dataset Split:**  
  Specify which part of the dataset to use.  
  *Default:* `"train"`

- **Text Column Name (in Dataset):**  
  Name of the column with text data.  
  *Default:* `"text"`

- **Tokenizer Name or Path:**  
  Set the tokenizer.  
  *Default:* `"robot-test/dummy-tokenizer-wordlevel"`

- **Maximum Sequence Length:**  
  Maximum tokens per sequence.  
  *Default:* `256`, *(range: 128 - 8192)*

- **Model Hidden Size:**  
  Dimensionality of the model's hidden layers.  
  *Default:* `16`, *(range: 16 - 8192)*

- **Number of Hidden Layers:**  
  Total hidden layers in the model.  
  *Default:* `2`, *(minimum: 2)*

- **Number of Attention Heads:**  
  Total attention heads.  
  *Default:* `4`, *(minimum: 2)*

- **Number of KV Heads (for GQA):**  
  KV Heads for Grouped Query Attention.  
  *Default:* `4`, *(minimum: 2)*

- **Intermediate Size:**  
  Size of the feed-forward network.  
  *Default:* `64`, *(minimum: 16)*

- **Micro Batch Size:**  
  Number of samples per micro batch.  
  *Default:* `2`,

- **Total Training Steps:**  
  Total number of steps for training.  
  *Default:* `9500`

- **Learning Rate:**  
  Initial learning rate.  
  *Default:* `5e-4`

- **Warmup Steps:**  
  Steps for the warmup phase.  
  *Default:* `2`

- **Annealing Phase Start Step:**  
  Step to start the annealing phase.  
  *Default:* `10`

- **Weight Decay:**  
  Regularization parameter.  
  *Default:* `0.01`

- **Data Parallel Size:**  
  Number of GPUs for data parallelism.  
  *Default:* `2`

- **Tensor Parallel Size:**  
  Number of GPUs for tensor parallelism.  
  *Default:* `1`

- **Pipeline Parallel Size:**  
  Number of GPUs for pipeline parallelism.  
  *Default:* `1`

- **Mixed Precision Type:**  
  Floating point precision mode.  
  Options: `bfloat16`, `float32`, `float64`  
  *Default:* `bfloat16`

**Note**: The product of the configs **Data Parallel Size**, **Tensor Parallel Size**, and **Pipeline Parallel Size** should be equal to the total number of GPUs available.

<img src={require('./gifs/pretrain/2_CreatingTask.gif').default} alt="Plugin Gif" width="500" />

## Step 4: Queue and Run the Pre-training Task

After configuring your task:

1. Save the pre-training template by clicking on **Save Training Template**.
2. Click on **Queue** to start the pre-training job.

<img src={require('./gifs/pretrain/3_RunningTask.gif').default} alt="Plugin Gif" width="500" />

## Step 5: Post-training

Once the training finishes, the pre-trained model is available in the Foundation tab. You can then use this model for further preference training or for interactive chatting.

<img src={require('./gifs/pretrain/4_PostTraining.gif').default} alt="Plugin Gif" width="500" />


# File: docs/transformerlab-client/api-reference.md

---
---
sidebar_position: 2
---

# API Reference

This page documents the classes and methods provided by the `transformerlab-client` library.

## TransformerLabClient

The main client for interacting with the Transformer Lab API. This client handles communication with the server, job management, progress reporting, and logging.

### Initialization

```python
from transformerlab_client.client import TransformerLabClient

client = TransformerLabClient(
    server_url="http://localhost:8338",  # Optional: defaults to this URL but you can enter the server URL where your API is running
    sdk_version="v1",                    # Optional: API version
    log_file=None                        # Optional: path to log file
)
```

**Parameters:**

- `server_url` (str, optional): URL of the Transformer Lab server. Defaults to "http://localhost:8338".
- `sdk_version` (str, optional): API version to use. Defaults to "v1".
- `log_file` (str, optional): Path to log file. If not provided, a timestamped log file will be created.

### Methods

#### start

Register a new training job with Transformer Lab and get a job ID.

```python
job_id = client.start(config)
```

**Parameters:**

- `config` (dict): Configuration for the job with information like name, description, etc.

**Returns:**

- `str`: Job ID that can be used to reference this job

**Raises:**

- `Exception`: If job registration fails

**Example:**

```python
job_id = client.start({
    "name": "BERT Fine-tuning",
    "description": "Fine-tuning BERT for text classification",
    "model_type": "bert-base-uncased",
    "task": "text-classification"
})
```

#### report_progress

Report training progress and metrics to Transformer Lab.

```python
result = client.report_progress(progress, metrics=None)
```

**Parameters:**

- `progress` (float): Progress value between 0 and 100
- `metrics` (dict, optional): Dictionary of metrics to report (e.g., loss, accuracy)

**Returns:**

- `bool`: True if reporting was successful or if rate-limiting prevented reporting, False if job was stopped remotely

**Example:**

```python
client.report_progress(25.5, {
    "loss": 2.34,
    "accuracy": 0.67,
    "learning_rate": 5e-5
})
```

**Note:** Progress reporting is rate-limited to once per second to prevent overwhelming the server.

#### complete

Mark the job as completed successfully.

```python
client.complete(message="Training completed successfully")
```

**Parameters:**

- `message` (str, optional): Completion message. Defaults to "Training completed successfully".

#### stop

Mark the job as stopped (not completed).

```python
client.stop(message="Training stopped")
```

**Parameters:**

- `message` (str, optional): Message explaining why the job was stopped. Defaults to "Training completed successfully".

#### save_model

Notify Transformer Lab about a saved model.

```python
client.save_model(saved_model_path)
```

**Parameters:**

- `saved_model_path` (str): Path where the model was saved

**Example:**

```python
client.save_model("./output/my_model")
```


#### Logging Methods

The client provides several logging methods that log to both console and file, and update the output file in Transformer Lab:

```python
client.log_info("Training started with batch size 8")
client.log_warning("Learning rate seems too high")
client.log_error("Failed to load validation dataset")
client.log_debug("Processing batch 42/100")
client.log_critical("Out of memory error occurred")
```

Each method takes a string message parameter.


## Callbacks

Callbacks provide an easy way to integrate Transformer Lab reporting with various training frameworks. This section documents the available callbacks and how to use them.

### TLabProgressCallback

`TLabProgressCallback` is a callback implementation for Hugging Face's Transformers library that automatically reports training progress and metrics to Transformer Lab. It inherits from `TrainerCallback` and hooks into the Hugging Face training loop, making integration effortless.

#### Usage

To use the callback with Hugging Face's Trainer:

```python
from transformers import TrainingArguments, Trainer
from transformerlab_client.client import TransformerLabClient
from transformerlab_client.callbacks.hf_callback import TLabProgressCallback

# Initialize the client
client = TransformerLabClient(server_url="...")

# Register your training job
job_id = client.start({
    "template_name": "BERT Fine-tuning",
    "description": "Fine-tuning BERT for text classification"
})

# Set up your model, dataset, etc.
# ...

# Configure Hugging Face training with the callback
training_args = TrainingArguments(
    output_dir="./output",
    num_train_epochs=3,
    per_device_train_batch_size=8,
    save_steps=500
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    callbacks=[TLabProgressCallback(client)]  # Add the callback here
)

# Train the model - progress will be automatically reported
trainer.train()

# Complete the job
client.complete("Training completed successfully")
```

#### Initialization Parameters

- `tlab_client` (TransformerLabClient): An initialized Transformer Lab client instance

#### How It Works

The callback integrates with Hugging Face's Trainer at two key points:

1. **Step End**: After each training step, it calculates the current progress percentage and reports it to Transformer Lab along with metrics like loss. If the job is stopped remotely through Transformer Lab, it signals the trainer to stop training.

2. **Log Events**: Whenever Hugging Face's Trainer logs metrics, the callback captures these metrics and reports them to Transformer Lab.

The callback automatically maps training progress to a range between 30% and 90% of the overall job progress, leaving room for initialization (0-30%) and finalization (90-100%) phases.

#### Advanced Usage

You can customize the callback by subclassing it:

```python
class MyCustomCallback(TLabProgressCallback):
    def __init__(self, tlab_client, custom_param=None):
        super().__init__(tlab_client)
        self.custom_param = custom_param
    
    def on_step_end(self, args, state, control, **kwargs):
        # Custom logic before reporting progress
        if self.custom_param:
            # Do something special
            pass
        
        # Call parent method to report progress
        super().on_step_end(args, state, control, **kwargs)
```

This callback system makes integrating Transformer Lab with Hugging Face Transformers training workflows seamless and requires minimal code changes to your existing training scripts.


# File: docs/transformerlab-client/example.md

---
---
sidebar_position: 3
---

# Example Training Script

This page provides a full working example of using the Transformer Lab Client for fine-tuning a language model. The example demonstrates the entire workflow from initialization to model saving, with proper progress reporting and error handling.

## Overview

This example demonstrates how to:

1. Initialize a Transformer Lab client and register a training job
2. Load and process a dataset for language model fine-tuning
3. Configure and train a model using Hugging Face Transformers
4. Report progress and metrics to Transformer Lab
5. Handle errors and completion properly

## Prerequisites

- transformerlab-client
- transformers
- datasets
- torch
- A running Transformer Lab server

## Complete Example Script

Below is the complete example script for fine-tuning a small language model on instruction data:

```python
import os
from datetime import datetime
from pprint import pprint

from datasets import load_dataset
from transformerlab_client.callbacks.hf_callback import TLabProgressCallback
from transformerlab_client.client import TransformerLabClient
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    DataCollatorForLanguageModeling,
    Trainer,
    TrainingArguments,
)


def train():
    """Main training function that runs locally but reports to TransformerLab"""

    # Training configuration
    training_config = {
        "experiment_name": "alpha",
        "model_name": "HuggingFaceTB/SmolLM-135M-Instruct",
        "dataset": "Trelis/touch-rugby-rules",
        "template_name": "full-demo",
        "output_dir": "./output",
        "log_to_wandb": False,
        "_config": {
            "dataset_name": "Trelis/touch-rugby-rules",
            "lr": 2e-5,
            "num_train_epochs": 1,
            "batch_size": 8,
            "gradient_accumulation_steps": 1,
            "warmup_ratio": 0.03,
            "weight_decay": 0.01,
            "max_seq_length": 512,
        },
    }

    # Initialize TransformerLab client
    tlab_client = TransformerLabClient()
    job_id = tlab_client.start(training_config)

    # Create output directory if it doesn't exist
    os.makedirs(training_config["output_dir"], exist_ok=True)

    try:
        # Log start time
        start_time = datetime.now()
        tlab_client.log_info(f"Training started at {start_time}")

        # Load the dataset
        tlab_client.log_info("Loading dataset...")
        dataset = load_dataset(training_config["dataset"])
        tlab_client.log_info(f"Loaded dataset with {len(dataset['train'])} training examples")

        # Report progress to TransformerLab
        tlab_client.report_progress(10, {"status": "dataset_loaded"})

        # Load tokenizer and model
        tlab_client.log_info(f"Loading model: {training_config['model_name']}")
        tokenizer = AutoTokenizer.from_pretrained(training_config["model_name"])
        model = AutoModelForCausalLM.from_pretrained(
            training_config["model_name"],
            device_map="auto",
        )

        # Configure tokenizer
        if not tokenizer.pad_token_id:
            tokenizer.pad_token = tokenizer.eos_token

        # Report progress
        tlab_client.report_progress(20, {"status": "model_loaded"})

        # Process dataset
        def format_instruction(example):
            """Format instruction and response using template"""
            instruction = example["prompt"]
            response = example["completion"]

            # Simple Llama-3 instruction template
            if training_config["template_name"] == "llama3instruct":
                formatted = f"<|begin_of_text|><|prompt|>{instruction}<|response|>{response}<|end_of_text|>"
            else:
                # Default simple template
                formatted = f"Instruction: {instruction}\n\nResponse: {response}"

            return {"formatted_text": formatted}

        tokenized_dataset = dataset.map(format_instruction)

        # Tokenize dataset
        def tokenize_function(examples):
            return tokenizer(
                examples["formatted_text"],
                padding="max_length",
                truncation=True,
                max_length=training_config["_config"]["max_seq_length"],
                return_tensors="pt",
            )

        processed_dataset = tokenized_dataset.map(
            tokenize_function, batched=True, remove_columns=tokenized_dataset["train"].column_names
        )

        # Report progress
        tlab_client.report_progress(30, {"status": "dataset_processed"})

        # Setup training arguments
        training_args = TrainingArguments(
            output_dir=os.path.join(training_config["output_dir"], f"job_{job_id}"),
            learning_rate=training_config["_config"]["lr"],
            num_train_epochs=training_config["_config"]["num_train_epochs"],
            per_device_train_batch_size=training_config["_config"]["batch_size"],
            gradient_accumulation_steps=training_config["_config"]["gradient_accumulation_steps"],
            warmup_ratio=training_config["_config"]["warmup_ratio"],
            weight_decay=training_config["_config"]["weight_decay"],
            logging_steps=20,
            save_steps=500,
            save_total_limit=2,
            report_to=[],  # We'll handle reporting to TransformerLab ourselves
        )

        # Setup trainer
        trainer = Trainer(
            model=model,
            args=training_args,
            train_dataset=processed_dataset["train"],
            data_collator=DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False),
            callbacks=[TLabProgressCallback(tlab_client)],
        )

        # Train the model
        tlab_client.log_info("Starting training...")
        trainer.train()

        # Save the final model
        tlab_client.log_info("Saving model...")
        trainer.save_model(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))
        tokenizer.save_pretrained(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))
        tlab_client.log_info("Saving model in Transformer Lab")
        tlab_client.save_model(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))

        # Calculate training time
        end_time = datetime.now()
        training_duration = end_time - start_time
        tlab_client.log_info(f"Training completed in {training_duration}")

        # Complete the job in TransformerLab
        tlab_client.complete()

        return {
            "status": "success",
            "job_id": job_id,
            "duration": str(training_duration),
            "output_dir": os.path.join(training_config["output_dir"], f"final_model_{job_id}"),
        }

    except KeyboardInterrupt:
        tlab_client.log_warning("Training interrupted by user or remotely")
        tlab_client.stop("Training stopped by user or remotely")
        return {"status": "stopped", "job_id": job_id}

    except Exception as e:
        tlab_client.log_error(f"Training failed: {str(e)}")
        import traceback

        traceback.print_exc()
        tlab_client.stop(f"Training failed: {str(e)}")
        return {"status": "error", "job_id": job_id, "error": str(e)}


if __name__ == "__main__":
    result = train()
    pprint(result)
```

## Explanation

Let's break down the key components of this example:

### 1. Training Configuration

The script starts by defining a configuration dictionary with all the necessary parameters for training:

```python
training_config = {
    "experiment_name": "alpha",
    "model_name": "HuggingFaceTB/SmolLM-135M-Instruct",
    "dataset": "Trelis/touch-rugby-rules",
    "template_name": "full-demo",
    "output_dir": "./output",
    "log_to_wandb": False,
    "_config": {
        "dataset_name": "Trelis/touch-rugby-rules",
        "lr": 2e-5,
        "num_train_epochs": 1,
        "batch_size": 8,
        "gradient_accumulation_steps": 1,
        "warmup_ratio": 0.03,
        "weight_decay": 0.01,
        "max_seq_length": 512,
    },
}
```

This configuration contains:
- Basic experiment information (name, model, dataset)
- Output directory for saving results
- Training hyperparameters in the `_config` nested dictionary

### 2. Client Initialization

The script initializes the TransformerLab client and registers a new training job:

```python
tlab_client = TransformerLabClient()
job_id = tlab_client.start(training_config)
```

The `start()` method registers the job with Transformer Lab and returns a unique job ID.

### 3. Progress Reporting

Throughout the script, progress is reported at key milestones:

```python
# Manual progress reporting at key points
tlab_client.report_progress(10, {"status": "dataset_loaded"})
tlab_client.report_progress(20, {"status": "model_loaded"})
tlab_client.report_progress(30, {"status": "dataset_processed"})
```

Progress values are percentages (0-100) and can include additional metrics as a dictionary.

### 4. Logging

The client provides various logging methods to keep track of events:

```python
tlab_client.log_info("Loading dataset...")
tlab_client.log_info(f"Loaded dataset with {len(dataset['train'])} training examples")
```

These logs appear both in the console and in the Transformer Lab interface.

### 5. Callback Integration

The script uses the TLabProgressCallback to automatically report progress during training:

```python
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=processed_dataset["train"],
    data_collator=DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False),
    callbacks=[TLabProgressCallback(tlab_client)],  # Add the callback here
)
```

This callback automatically updates progress based on the training steps without requiring manual progress calls during the training loop.

### 6. Error Handling

The script includes comprehensive error handling to ensure that TransformerLab is properly updated if an error occurs:

```python
except KeyboardInterrupt:
    tlab_client.log_warning("Training interrupted by user or remotely")
    tlab_client.stop("Training stopped by user or remotely")
    return {"status": "stopped", "job_id": job_id}

except Exception as e:
    tlab_client.log_error(f"Training failed: {str(e)}")
    import traceback

    traceback.print_exc()
    tlab_client.stop(f"Training failed: {str(e)}")
    return {"status": "error", "job_id": job_id, "error": str(e)}
```

This ensures that the job is properly marked as stopped or failed in Transformer Lab if something goes wrong.

### 7. Completion and Model Saving

When training completes successfully, the model is saved and the job is marked as complete:

```python
# Save the model locally
trainer.save_model(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))
tokenizer.save_pretrained(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))

# Notify Transformer Lab about the saved model
tlab_client.save_model(os.path.join(training_config["output_dir"], f"final_model_{job_id}"))

# Mark job as complete
tlab_client.complete()
```

## Running the Example

To run this example:

1. Make sure Transformer Lab is running
2. Install the required packages:
   ```python
   pip install transformerlab-client transformers datasets torch
   ```
3. Save the script to a file (e.g., `train_with_tlab.py`)
4. Run the script:
   ```python
   python train_with_tlab.py
   ```

You can monitor the progress in the Transformer Lab interface, where you'll see real-time updates of progress, metrics, and logs.

## Additional Tips

- **Template Customization**: Modify the `format_instruction` function to use different chat templates for other models
- **Dataset Customization**: Replace `load_dataset()` with your own dataset loading logic if needed
- **Configuration**: Customize the `training_config` dictionary to suit your specific needs
- **Error Handling**: Add more specific error handling for your use case

This example serves as a starting point that you can adapt for your own model training workflows.

# File: docs/transformerlab-client/intro.md

---
---
sidebar_position: 1
---

# Transformer Lab Client

The `transformerlab-client` package provides Python interfaces for interacting with [Transformer Lab](https://github.com/transformerlab), enabling you to integrate your machine learning workflows with Transformer Lab's monitoring and management capabilities.

## Overview

Transformer Lab Client allows you to:

- Track training jobs in Transformer Lab
- Report progress and metrics from model training
- Log information and errors to the Transformer Lab interface
- Integrate with Hugging Face Transformers workflows via callback system

This library bridges the gap between your training code and the Transformer Lab platform, allowing you to monitor and manage your machine learning experiments through a unified interface.

## Installation

Install the package using pip:

```bash
pip install transformerlab-client
```

## Requirements
- Python 3.10 or newer
- A running instance of the Transformer Lab API server
    - Default connection is to http://localhost:8338
    - The Transformer Lab application must be running before using this client

## Quick Start

Here's a basic example of using the client with a Hugging Face training workflow:

```python
from transformers import TrainingArguments, Trainer
from transformerlab_client.client import TransformerLabClient
from transformerlab_client.callbacks.hf_callback import TLabProgressCallback

# Initialize the client
client = TransformerLabClient(server_url="<ENTER YOUR SERVER URL HERE>")

# Register your training job
job_id = client.start({
    "name": "My Training Job",
    "description": "Fine-tuning a language model"
})

# Configure Hugging Face training with the TLab callback
training_args = TrainingArguments(
    output_dir="./output",
    num_train_epochs=3,
    per_device_train_batch_size=8,
    save_steps=500
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    callbacks=[TLabProgressCallback(client)]  # Add Transformer Lab callback for HF based trainers for effortless integration
)

# Train the model
trainer.train()

# Mark the job as complete
client.complete("Training completed successfully")
```

This example shows how to initialize a client, register a training job, add the progress callback to a Hugging Face Trainer, and properly complete the job when training finishes.

## Next Steps

Explore the following sections to learn more about using the Transformer Lab Client:

- [API Reference](/docs/transformerlab-client/api-reference):
    - Detailed documentation of client methods
    - Using callbacks for integration with ML frameworks
- [Example Training Script](/docs/transformerlab-client/example):
    - A complete example of a training script using the client






# File: for-teams/advanced-install/cloud-storage.md

---
---
title: Cloud Storage
sidebar_position: 37
---

## Where Does Transformer Lab Store Files

Transformer Lab can store files locally or in the cloud. By default, files are stored locally, but you can configure cloud storage for better scalability and collaboration.

## Configuring Cloud Storage

### AWS S3 Storage

To use AWS S3 as remote storage:

1. Set `TFL_API_STORAGE_URI=true` in your `.env` file.

2. Configure AWS credentials for the `transformerlab-s3` profile. See the [main install instructions](../install.md#setting-up-aws-credentials-for-s3-storage) for details.

### Google Cloud Storage (GCS)

To use Google Cloud Storage instead of AWS S3:

1. Set `TFL_API_STORAGE_URI=true` in your `.env` file.

2. Set `REMOTE_WORKSPACE_HOST=gcp` in the same `.env` file.

3. Optionally, set `GCP_PROJECT` to specify the Google Cloud project. If not set, it defaults to `transformerlab-workspace`.

4. Configure Google Cloud credentials:

   #### Using gcloud CLI (Recommended)

   If you have the Google Cloud CLI installed, authenticate and set the project:

   ```bash
   gcloud auth application-default login
   gcloud config set project transformerlab-workspace  # or your project name
   ```

   #### Manual Configuration

   Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the path of your service account key JSON file:

   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-key.json"
   ```

   You can obtain a service account key from the Google Cloud Console under IAM & Admin > Service Accounts.

   Ensure the service account has the necessary permissions for Cloud Storage operations (Storage Admin or equivalent).

## Storage Behavior

When cloud storage is enabled:

- Workspaces and models are stored in the cloud bucket
- Local storage is still used for temporary files and caching
- Multiple users can share the same cloud storage for collaboration


If you have any issues setting up cloud storage, please don't hesitate to reach out to the Transformer Lab support team for assistance.


# File: for-teams/advanced-install/setup-email.md

---
---
title: Connecting to Email SMTP
sidebar_position: 10
---

You can configure Transformer Lab to have access to email so that it can send invites and signup confirmation emails as part of the Auth workflow.

Instructions coming soon. Contacts us on discord for immediate help.

# File: for-teams/advanced-install/setup-sso.md

---
---
title: Setting up SSO
sidebar_position: 10
---

You can configure Transformer Lab to connect to your SSO provider.

Instructions coming soon. Contacts us on discord for immediate help.

# File: for-teams/architecture.md

---
---
title: Architecture
sidebar_position: 100
---

# Overall Architecture

Transformer Lab has the following architecture

![Transformer Lab Architecture](./img/MLRP-architecture.png)

# File: for-teams/checkpoints.md

---
---
title: Working with Checkpoints
sidebar_position: 36
---

## What is a Checkpoint?

A **Checkpoint** is a saved snapshot of your job's state at a specific point in time. In machine learning workflows, this is typically the model weights during a specific iteration / epoch.

Creating checkpoints allows you to recover in the event of a failure or crash.

This is especially helpful when using spot instances which are more likely to be terminated during a run.

## Creating Checkpoints

### Manual Checkpoint Saving

To save a checkpoint manually, use the `lab.save_checkpoint()` function within the Transformer Lab Python SDK. This function takes the path to your checkpoint file or directory and optionally a name for the checkpoint.

```python
from lab import lab

# Initialize lab
lab.init(experiment_id="my_experiment")

# Inside your training loop - save a checkpoint file
checkpoint_file = "/path/to/your/checkpoint.pt"
saved_path = lab.save_checkpoint(checkpoint_file, name="epoch_5_checkpoint.pt")
lab.log(f"Saved checkpoint: {saved_path}")

# Or save an entire checkpoint directory (common with HuggingFace models)
checkpoint_dir = "/path/to/checkpoint-1000"
saved_path = lab.save_checkpoint(checkpoint_dir, name="checkpoint-1000")

```

The function will copy your checkpoint to the job's checkpoints folder and track it in the job metadata.

### Automatic Checkpoint Saving with LabCallback

If you're using HuggingFace's `Trainer` or `SFTTrainer`, you can enable automatic checkpoint saving using the built-in `LabCallback`. This callback automatically saves checkpoints to TransformerLab whenever the Trainer saves a checkpoint.

```python
from lab import lab
from transformers import Trainer, TrainingArguments

# Initialize lab
lab.init(experiment_id="my_experiment")

# Get the automatic checkpoint callback
callback = lab.get_hf_callback()

# Configure training arguments with checkpoint saving
training_args = TrainingArguments(
    output_dir="./checkpoints",
    save_steps=500,  # Save checkpoint every 500 steps
    save_strategy="steps",
    save_total_limit=3,  # Keep only the last 3 checkpoints
)

# Create trainer with the callback
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset,
    callbacks=[callback],  # Add the callback here
)
# Start training - checkpoints will be saved automatically
trainer.train()
```


The `LabCallback` automatically:

- Saves checkpoints to Transformer Lab when the Trainer creates them
- Updates training progress in the UI
- Logs training metrics (loss, etc.)
- Tracks epoch completion

## Managing Checkpoints

### Viewing Checkpoints
You can view all saved checkpoints directly in the Jobs panel.

A list of all saved snapshots will appear, displaying their timestamps and associated metadata.

### Restarting from a Checkpoint
If you wish to fork a job or retry a specific run from a previous state:

Open the Checkpoints list for the job.

Find the specific checkpoint you wish to use.

Click **Restart from Checkpoint**.

This will launch a new job initialized with the data saved in that snapshot.

### Handling Failures & Auto-Recovery

Transformer Lab is designed to handle interruptions gracefully. If your training script is written correctly, it will automatically resume from the last successful checkpoint in the event of a crash or interruption.

To enable this, your script must check for existing checkpoints upon startup and load them if found.

Sample Code: View a robust implementation of auto-recovery logic in [our GitHub Repository here](https://github.com/transformerlab/transformerlab-sdk/blob/main/scripts/examples/trl_train_script.py)


# File: for-teams/cli.mdx

---
---
title: CLI
sidebar_position: 60
---

import AsciinemaPlayer from "@site/src/components/AsciinemaPlayer";
import BrowserOnly from "@docusaurus/BrowserOnly";

# Transformer Lab CLI

Transformer Lab can be accessed via CLI using the `lab` executable.

<BrowserOnly>
  {() => <AsciinemaPlayer src={"/img/cli/start.cast"} options={{ speed: 2 }} />}
</BrowserOnly>

## Installing the Transformer Lab CLI

You can install the `lab` tool using `uv`.

> **Prerequisite:** Ensure you have [uv](https://github.com/astral-sh/uv) installed before running the command below.

```bash
uv tool install "git+https://github.com/transformerlab/transformerlab-app#subdirectory=cli"
```

## Authentication

To interact with your Transformer Lab instance, the CLI requires the following credentials:

- Server URL: The URL of your API (e.g., https://app.lab.cloud). Include the port if not using 80/443.
- Email: Your user email address.
- API Key: Your access token.

:::tip Where to find your API Key
You can generate or view your API Key in the Transformer Lab GUI under User Settings.
:::

### Interactive Login

The easiest way to set up your credentials is via the interactive prompt:

```bash
lab login
```

<BrowserOnly>
  {() => (
    <AsciinemaPlayer
      src={"/img/cli/lab-login.cast"}
      options={{ speed: 2, loop: true, rows: 6 }}
    />
  )}
</BrowserOnly>

### Non-Interactive Login

For scripts or single-command setup, you can pass your credentials as flags:

```bash
lab login --apiKey <INSERT API KEY HERE> --serverURL https://app.lab.cloud:8338
```

### Verifying Configuration

To inspect your current configuration and ensure your credentials are saved correctly, run:

```bash
lab config
```

## Tasks

### Listing Tasks

You can list tasks by typing `lab task list`

<BrowserOnly>
  {() => (
    <AsciinemaPlayer
      src={"/img/cli/lab-task-list.cast"}
      options={{ speed: 1, loop: true, rows: 18 }}
    />
  )}
</BrowserOnly>

### Creating a Task

_Command documentation pending_

## Jobs

### Viewing the Status of a Job

You can list jobs by typing `lab job status`

<BrowserOnly>
  {() => (
    <AsciinemaPlayer
      src={"/img/cli/lab-job-list.cast"}
      options={{ speed: 1, loop: true, rows: 18 }}
    />
  )}
</BrowserOnly>

### Monitoring Jobs

For an interactive GUI to monitor jobs use `lab job monitor`

<BrowserOnly>
  {() => (
    <AsciinemaPlayer
      src={"/img/cli/lab-job-monitor.cast"}
      options={{ speed: 1, loop: true }}
    />
  )}
</BrowserOnly>


# File: for-teams/full-examples/train copy.md

---
---
title: Coming Soon...
sidebar_position: 10
---

## Eval a Model

It's a thing you can do

# File: for-teams/install-gpu-orchestrator/install-skypilot.md

---
---
title: Installing SkyPilot
sidebar_position: 30
---

# Installing SkyPilot

You can install SkyPilot on the same compute node that Transformer Lab itself runs on.

## Standard Installation
SkyPilot is a Python client that typically runs on your local machine (laptop) or a central head node. The full installation instructions are available here:

https://docs.skypilot.co/en/latest/getting-started/installation.html

You can install it via pip. We recommend installing the "all" bundle to support all major clouds:
```bash
pip install "skypilot[all]"
```

## Cloud Setup
You can now ensure your machine has credentials for the clouds you want to use (AWS, GCP, Azure, etc.).

Run this command to automatically detect your credentials and enable cloud access:

```bash
sky check
```

# File: for-teams/install-gpu-orchestrator/install-slurm.md

---
---
title: Installing SLURM
sidebar_position: 10
---

## Production

The full instructions to installing SLURM on a cluster are on the SLURM website here:

https://slurm.schedmd.com/quickstart_admin.html#quick_start

## On AWS


It's relatively simple to use the AWS Parallel Computing Service to install SLURM automatically. Make sure to select SLURM version 25.05

https://aws.amazon.com/pcs/

## Test

If you are installing a test SLURM cluster on a single node, this Docker-based tool works well to simulate a cluster of nodes on single machine:

https://github.com/giovtorres/slurm-docker-cluster

# File: for-teams/install-gpu-orchestrator/skypilot-vs-slurm.md

---
---
title: Choosing Between SkyPilot and SLURM
sidebar_position: 1
---


Transformer Lab abstracts the job submission process, so for the most part, SLURM and SkyPilot will work similary from a user-interface perspective in Transformer Lab.

If you are starting from scratch, here is a practical look at how to choose the right engine for your workload.

## SLURM: The On-Premise Traditional HPC Tool
If you work in a university research lab or a large enterprise with its own private data center, you are probably already using SLURM. It is the standard scheduler for managing shared resources on hardware that you (or your organization) already own.

* **When to use it:** Use SLURM if you have access to a pre-existing cluster (like a university supercomputer) where the hardware is always on and waiting for jobs.
* **The Downside:** SLURM generally assumes the hardware is static. It isn't "smart" about cloud costs—it won't typically shut down nodes to save money or hunt for cheaper instances in different regions.

## SkyPilot: The Cloud-Native Manager
SkyPilot is a more modern framework designed specifically for the fluid nature of the cloud.

* **When to use it:** Use SkyPilot if you are running on AWS, GCP, Azure, or Kubernetes (or a blend of them) and want to provision resources dynamically.
* **The Upside:**
    * **Auto-Provisioning:** It handles the messy work of requesting the VM, setting up the environment, and mounting storage.
    * **Cost Savings:** It supports "Spot" instances with auto-recovery. If a cheap spot instance is taken away, SkyPilot can automatically move your job to a new one.

## Summary

In summary, both systems have their strengths. If you are setting up a new lab and don't have specific needs from SLURM, our personal recommendation would be to set up SkyPilot so you can use it to access local compute **and** cloud compute through a single interface.

If you choose to setup SkyPilot and have your own local cluster, we suggest setting up local nodes as **SSH Nodes** in SkyPilot during initial testing, but in the long run it will be worth it to set up a local Kubernetes cluster (using the instructions in the SkyPilot documentation). This will allow you to leverage the full power of Kubernetes and SkyPilot.

# File: for-teams/install.md

---
---
title: Install Instructions
slug: install
sidebar_position: 20
---

## Step 1 - Set up a Cloud Provider

Transformer Lab executes tasks by sending them to a GPU orchestrator like **SLURM** or **SkyPilot**. So your first step in setting up Transformer Lab is making sure you have a properly configured SLURM or SkyPilot instance.

The following documents offer common install instructions that you can use if you are starting from scratch

[Choosing Between SLURM and SkyPilot -->](./install-gpu-orchestrator/skypilot-vs-slurm.md)

[Instructions for setting up SLURM from scratch -->](./install-gpu-orchestrator/install-slurm.md)

[Instructions for setting up SkyPilot from scratch -->](./install-gpu-orchestrator/install-skypilot.md)

## Step 2 - Install Transformer Lab

Transformer Lab needs a CPU node to run.

SSH into that node and run:

```bash
curl https://lab.cloud/install.sh | bash
```

You need to also install packages necessary for running compute providers like Skypilot or SLURM:
```bash
cd ~/.transformerlab/src
./install.sh multiuser_setup
```

## Step 3 - Run Transformer Lab and Log in

Run Transformer Lab by running

```bash
cd ~/.transformerlab/src
./run.sh
```

Now you can visit `http://localhost:8338` (or the address of the server you have put this code on) and log in to Transformer Lab.

The first time you log in, you can use the default user:

Login: `admin@example.com`

Password: `admin123`

Please change the password as a first step.

## Step 4 - Configure Team Edition

Now create a file in `~/.transformerlab` called `.env`

And copy and paste the following information:

```bash
TL_API_URL="http://localhost:8338/"  # Set this as the default API URL
MULTIUSER="true" # Set to "true" to enable multi-user features

# Set to your frontend URL. If running locally, use localhost:1212 (default port when performing npm start)
FRONTEND_URL="http://localhost:1212" 

# Random character strings for auth. Generally created by install.sh but you can set your own here
TRANSFORMERLAB_JWT_SECRET=953f0608ba2a27ae.... 
TRANSFORMERLAB_REFRESH_SECRET=e3e3e533e03cbc5f...

# Setting this to true uses the transformerlab-s3 profile in your AWS credentials to create and use a S3 bucket as your remote workspace
TFL_API_STORAGE_URI=true 
```

### Setting up AWS Credentials for S3 Storage

To use S3 as remote storage, you need to configure AWS credentials for the `transformerlab-s3` profile. You can do this in two ways:

#### Using AWS CLI (Recommended)

If you have the AWS CLI installed, run:

```bash
aws configure --profile transformerlab-s3
```

Enter your AWS Access Key ID, Secret Access Key, default region, and output format when prompted.

#### Manual Configuration

Create or edit the AWS credentials file at `~/.aws/credentials` and add:

```ini
[transformerlab-s3]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

Ensure the profile has the necessary permissions to create and manage S3 buckets.

## Step 5 - Configuring a Compute Service
Go to Team Settings by clicking your user name in the sidebar.

![Team Settings in the sidebar](./img/screenshot-usersettings.png)

In Team Settings, open Compute Providers and click "Add Compute Provider." Name the provider, choose a type (either "skypilot" or "slurm"), and then add the configuration.

![Add Compute Provider dialog and form](./img/screenshot-addprovider.png)

### SkyPilot example config

```json5 showLineNumbers
{
	// Replace with the IP/host of your SkyPilot server reachable by the API server
	"server_url": "http://localhost:46580",
	"default_env_vars": {
		// Obtain from the SkyPilot server at http://<skypilot-host>:46580/users
		"SKYPILOT_USER_ID": "<skypilot user id>",
		"SKYPILOT_USER": "<skypilot username>"
	},
	"default_entrypoint_command": ""
}
```

- Replace `localhost` with the IP/hostname where your SkyPilot server is running and reachable from the API machine.
- Retrieve `SKYPILOT_USER_ID` and `SKYPILOT_USER` from the SkyPilot server at `http://<skypilot-host>:46580/users`.

### SLURM example config

```json5 showLineNumbers
{
	"ssh_host": "<SLURM_LOGIN_NODE_IP>",
	// Many clusters use the "slurm" user; use the appropriate user for your setup
	"ssh_user": "slurm",
	// Path to your SSH private key
	"ssh_key_path": "~/.ssh/id_rsa",
	"ssh_port": 22
}
```

- Ensure the API node can SSH to the SLURM login node with the provided user and key.
- Adjust `ssh_user`, `ssh_key_path`, and `ssh_port` to match your cluster configuration.

<p style={{ fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '2rem', paddingTop: '1rem'}}>Congrats, you are up and running. [You can now run a Task -->](./running-a-task.md)</p>

# File: for-teams/interact-examples/jupyter.md

---
---
title: Run a Jupyter Notebook
sidebar_position: 6
---

## Running a Jupyter Notebook Service

Interactive services in Transformer Lab allow you to launch environments like Jupyter Notebook directly from the interface. This guide walks you through running a Jupyter Notebook service.

## Prerequisites

Before running a Jupyter Notebook service, ensure you have a Compute Provider set up and active.

1. Navigate to Team Settings and set up a Compute Provider.
   ![Compute Provider Setup](../img/screenshot-addprovider.png)

2. Make sure the provider is active by clicking on the health button.
   ![Provider Health Check](../img/screenshot-providershealth.png)

## Steps to Run a Jupyter Notebook Service

1. Go to the Interact page in Transformer Lab.

2. Click on the "New" button to create a new interactive service.
   ![Interact Page New Button](../img/interact-page-new.png)

3. Select "Jupyter Notebook" as the type of interactive service to launch.
   ![Select Jupyter Notebook](../img/select-service-type.png)

4. Configure the service:
   - Enter a name for the service.
   - Select the Compute Provider to use.
   - Specify the resources: CPU, memory, and GPUs.
   - Provide any additional inputs if required (e.g., ngrok auth token for tunneling).
   ![Jupyter Configuration](../img/service-configuration.png)

5. Click "Launch" to start the Jupyter Notebook service.

6. Once launched, a card will appear for the service. Click the "Interactive Setup" button on the card.
   ![Service Card Interactive Setup](../img/service-card-interactive-setup.png)

7. Follow the provided URL or steps to access the Jupyter Notebook.
   ![Access Jupyter Notebook](../img/access-service.png)

# File: for-teams/interact-examples/ollama.md

---
---
title: Run an Ollama Server
sidebar_position: 9
---

## Running an Ollama Server Service

Interactive services in Transformer Lab allow you to launch an Ollama server on a remote machine to run and interact with models. This guide walks you through running an Ollama Server service.

## Prerequisites

Before running an Ollama Server service, ensure you have a Compute Provider set up and active.

1. Navigate to Team Settings and set up a Compute Provider.
   ![Compute Provider Setup](../img/screenshot-addprovider.png)

2. Make sure the provider is active by clicking on the health button.
   ![Provider Health Check](../img/screenshot-providershealth.png)

## Steps to Run an Ollama Server Service

1. Go to the Interact page in Transformer Lab.

2. Click on the "New" button to create a new interactive service.
   ![Interact Page New Button](../img/interact-page-new.png)

3. Select "Ollama Server" as the type of interactive service to launch.
   ![Select Ollama Server](../img/select-service-type.png)

4. Configure the service:
   - Enter a name for the service.
   - Select the Compute Provider to use.
   - Specify the resources: CPU, memory, and GPUs.
   - Provide the model name as per Ollama's model tags.
   - Provide the ngrok auth token for tunneling.
   ![Ollama Configuration](../img/ollama-service-configuration.png)

5. Click "Launch" to start the Ollama Server service.

6. Once launched, a card will appear for the service. Click the "Interactive Setup" button on the card.
   ![Service Card Interactive Setup](../img/ollama-service-card-interactive-setup.png)

7. Follow the provided URL or steps to access and interact with the Ollama server.
   ![Access Ollama Server](../img/ollama-access-service.png)

# File: for-teams/interact-examples/ssh.md

---
---
title: Get Direct SSH Access to a Node
sidebar_position: 7
---

## Running an SSH Service

Interactive services in Transformer Lab allow you to get direct SSH access to a remote node. This guide walks you through running an SSH service.

## Prerequisites

Before running an SSH service, ensure you have a Compute Provider set up and active.

1. Navigate to Team Settings and set up a Compute Provider.
   ![Compute Provider Setup](../img/screenshot-addprovider.png)

2. Make sure the provider is active by clicking on the health button.
   ![Provider Health Check](../img/screenshot-providershealth.png)

## Steps to Run an SSH Service

1. Go to the Interact page in Transformer Lab.

2. Click on the "New" button to create a new interactive service.
   ![Interact Page New Button](../img/interact-page-new.png)

3. Select "SSH" as the type of interactive service to launch.
   ![Select SSH](../img/select-service-type.png)

4. Configure the service:
   - Enter a name for the service.
   - Select the Compute Provider to use.
   - Specify the resources: CPU, memory, and GPUs.
   - Provide the ngrok auth token for tunneling.
   ![SSH Configuration](../img/ssh-service-configuration.png)

5. Click "Launch" to start the SSH service.

6. Once launched, a card will appear for the service. Click the "Interactive Setup" button on the card.
   ![Service Card Interactive Setup](../img/ssh-service-card-interactive-setup.png)

7. Follow the provided command to SSH into the remote server from any machine.
   ![Access SSH](../img/ssh-access-service.png)

   **Warning:** Do not share this SSH command or access details with untrusted individuals, as it provides direct access to the remote node.


# File: for-teams/interact-examples/vllm.md

---
---
title: Interact with a Model using vLLM
sidebar_position: 8
---

## Running a vLLM Server Service

Interactive services in Transformer Lab allow you to launch environments like vLLM Server to interact with models directly from the interface. This guide walks you through running a vLLM Server service.

## Prerequisites

Before running a vLLM Server service, ensure you have a Compute Provider set up and active.

1. Navigate to Team Settings and set up a Compute Provider.
   ![Compute Provider Setup](../img/screenshot-addprovider.png)

2. Make sure the provider is active by clicking on the health button.
   ![Provider Health Check](../img/screenshot-providershealth.png)

## Steps to Run a vLLM Server Service

1. Go to the Interact page in Transformer Lab.

2. Click on the "New" button to create a new interactive service.
   ![Interact Page New Button](../img/interact-page-new.png)

3. Select "vLLM Server" as the type of interactive service to launch.
   ![Select vLLM Server](../img/select-service-type.png)

4. Configure the service:
   - Enter a name for the service.
   - Select the Compute Provider to use.
   - Specify the resources: CPU, memory, and GPUs.
   - Provide the Hugging Face ID of the model to use.
   - Set the Tensor parallel size for the vLLM engine.
   - Provide any additional inputs if required (e.g., ngrok auth token for tunneling).
   ![vLLM Configuration](../img/vllm-service-configuration.png)

5. Click "Launch" to start the vLLM Server service.

6. Once launched, a card will appear for the service. Click the "Interactive Setup" button on the card.
   ![Service Card Interactive Setup](../img/vllm-service-card-interactive-setup.png)

7. Follow the provided URL or steps to access and interact with the model via the vLLM Server.
   ![Access vLLM Server](../img/vllm-access-service.png)

# File: for-teams/interact-examples/vscode.md

---
---
title: Run VSCode on a Remote Machine
sidebar_position: 10
---

## Running a VSCode Service

Interactive services in Transformer Lab allow you to run VSCode on a remote machine using the official VSCode tunnels implementation. This guide walks you through running a VSCode service.

## Prerequisites

Before running a VSCode service, ensure you have a Compute Provider set up and active.

1. Navigate to Team Settings and set up a Compute Provider.
   ![Compute Provider Setup](../img/screenshot-addprovider.png)

2. Make sure the provider is active by clicking on the health button.
   ![Provider Health Check](../img/screenshot-providershealth.png)

## Steps to Run a VSCode Service

1. Go to the Interact page in Transformer Lab.

2. Click on the "New" button to create a new interactive service.
   ![Interact Page New Button](../img/interact-page-new.png)

3. Select "VSCode" as the type of interactive service to launch.
   ![Select VSCode](../img/select-service-type.png)

4. Configure the service:
   - Enter a name for the service.
   - Select the Compute Provider to use.
   - Specify the resources: CPU, memory, and GPUs.
   ![VSCode Configuration](../img/vscode-service-configuration.png)

5. Click "Launch" to start the VSCode service.

6. Once launched, a card will appear for the service. Click the "Interactive Setup" button on the card.

7. The setup involves a two-step process:
   - **Step 1:** A code will be displayed. Go to [github.com/login/device](https://github.com/login/device) to authenticate and tie the tunnel to your GitHub account.
     ![VSCode Setup Step 1](../img/vscode-setup-step1.png)
   - **Step 2:** After authentication, reopen the card to see the URL for accessing VSCode running on the remote machine.
     ![VSCode Setup Step 2](../img/vscode-setup-step2.png)

8. Follow the provided URL to access VSCode in your browser and start coding on the remote machine.
    ![Access VSCode](../img/vscode-access-service.png)

# File: for-teams/intro.md

---
---
title: Transformer Lab for Teams
slug: .
sidebar_position: 1
---

# Transformer Lab for Teams and Research Labs

:::note

You are currently reading our unreleased documentation for Transformer Lab designed for Research Labs. Stay tuned for our official launch in the upcoming weeks...

:::

## Introduction

Transformer Lab for Teams is an open source platform designed to support the needs of ML researchers working collaboratively using clusters of local or cloud compute nodes.

A team can use Transformer Lab for Teams to request nodes and submit ML tasks, while tracking experiments and job artifacts all in one place.

![Image](./img/screenshot-tasks.png)

## Video

The following video is a quick video that shows what is possible with Transformer Lab for Teams.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/q2n9luSKN44"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  />
</div>


# File: for-teams/lab-sdk.md

---
---
title: Lab SDK
sidebar_position: 70
toc_min_heading_level: 2
toc_max_heading_level: 3
---

The Lab SDK is a Python library that provides a simple, unified interface for integrating machine learning scripts with Transformer Lab.

While the Lab SDK is optional, adding it to your scripts allows for enhanced interaction with Transformer Lab, allowing you to better track the lifecycle of jobs, manage logs, store artifacts, save models, etc.

You can find the source code for the Lab SDK [here](https://github.com/transformerlab/transformerlab-app/tree/main/lab-sdk).

This guide covers available functionality with practical examples.

## Getting Started

### Installation

```bash
pip install transformerlab
```

### Basic Usage

```python
from lab import lab

# Initialize with an experiment
lab.init(experiment_id="my_experiment")

# Log messages
lab.log("Starting training...")

# Update progress
lab.update_progress(50)

# Save artifacts
lab.save_artifact("results.json", "my_results.json")

# Complete the job
lab.finish("Training completed successfully")
```

## Initialization and Lifecycle

### lab.init()

Initializes a job under the given experiment. This is the first method you should call.

**Parameters:**

- `experiment_id` (str, optional): The experiment ID. Defaults to "alpha" if not provided.
- `config` (dict, optional): Initial configuration to attach to the job.

**Example:**

```python
from lab import lab

# Simple initialization with default experiment "alpha"
lab.init()

# Initialize with a specific experiment
lab.init(experiment_id="my_training_experiment")
```

## Configuration Management

### lab.get_config()

Retrieves configuration/parameters from job data. This is particularly useful when resuming jobs or accessing parameters that were set when the task was launched.

**Returns:**

- `dict`: Configuration dictionary. Returns empty dict if no config found.

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

# Get configuration (useful for remote jobs)
config = lab.get_config()
print(f"Model: {config.get('model_name')}")
print(f"Learning rate: {config.get('learning_rate')}")
```

## Logging and Progress Tracking

### lab.log()

Logs a message to the job's output. Messages are visible in the Transformer Lab UI.

**Parameters:**

- `message` (str): The message to log.

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

lab.log("Starting data preprocessing...")
lab.log("Loading dataset...")
lab.log("Dataset loaded successfully")
lab.log(f"Training epoch {epoch + 1}/{num_epochs}")
```

### lab.update_progress()

Updates the job's progress percentage (0-100).

**Parameters:**

- `progress` (int): Progress percentage (0-100).

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

# Update progress during training
for epoch in range(num_epochs):
    train_epoch()
    progress = int((epoch + 1) / num_epochs * 100)
    lab.update_progress(progress)
    lab.log(f"Completed epoch {epoch + 1}/{num_epochs}")
```

## Artifacts Management

### lab.save_artifact()

Saves a file or directory as an artifact for the current job. Artifacts are stored in the job's artifacts directory and are visible in the Transformer Lab UI.

**Parameters:**

- `source_path` (str or DataFrame): Path to the file/directory to save, or a pandas DataFrame when `type="eval"` or `type="dataset"`.
- `name` (str, optional): Name for the artifact. If not provided, uses the source basename.
- `type` (str, optional): Type of artifact. Special types:
  - `"eval"`: Saves to eval_results directory and updates job data accordingly. Visible as Eval Results in the GUI.
  - `"dataset"`: Saves as a dataset and tracks dataset_id in job data. Visible as under the Dataset tab in the GUI.
  - `"model"`: Saves to workspace models directory and creates Model Zoo metadata. Visible as under the Model Registry tab in the GUI.
  - Otherwise: Saves to artifacts directory.
- `config` (dict, optional): Configuration dict. See specific types below for details.

**Returns:**

- `str`: The destination path on disk.

**Example - Basic Artifact:**

```python
from lab import lab
import json

lab.init(experiment_id="training")

# Save a configuration file
config = {"learning_rate": 2e-5, "batch_size": 8}
with open("config.json", "w") as f:
    json.dump(config, f)

artifact_path = lab.save_artifact("config.json", "training_config.json")
lab.log(f"Saved config to: {artifact_path}")

# Save a directory
lab.save_artifact("./output_dir", "training_output")
```

## Checkpoint Management

### lab.save_checkpoint()

Saves a checkpoint file or directory into the job's checkpoints folder. Checkpoints are tracked separately from artifacts and can be used to resume training.

**Parameters:**

- `source_path` (str): Path to the checkpoint file or directory to save.
- `name` (str, optional): Name for the checkpoint. If not provided, uses the source basename.

**Returns:**

- `str`: The destination path on disk.

**Example:**

```python
from lab import lab
import os

lab.init(experiment_id="training")

# Save a checkpoint during training
for epoch in range(num_epochs):
    # ... training code ...
    
    # Save checkpoint every 2 epochs
    if (epoch + 1) % 2 == 0:
        checkpoint_dir = f"./checkpoints/epoch_{epoch + 1}"
        saved_path = lab.save_checkpoint(checkpoint_dir, f"epoch_{epoch + 1}")
        lab.log(f"Saved checkpoint: {saved_path}")
```

### lab.get_checkpoint_to_resume()

Gets the checkpoint path to resume training from. This checks for checkpoint resume information stored in the job data.

**Returns:**

- `str` or `None`: The full path to the checkpoint to resume from, or None if no checkpoint resume is requested.

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

# Check if we should resume from a checkpoint
checkpoint = lab.get_checkpoint_to_resume()
if checkpoint:
    lab.log(f"Resuming training from checkpoint: {checkpoint}")
    model.load_checkpoint(checkpoint)
else:
    lab.log("Starting fresh training")
```

**Note**: This method is only available when resuming from a checkpoint using the GUI.

## Model Management

### lab.save_model()

Saves a model file or directory to the workspace models directory. The model will automatically appear under the Model Registry tab in the GUI.
This works the same as `lab.save_artifact(..., type="model")`.

**Parameters:**

- `source_path` (str): Path to the model file or directory to save.
- `name` (str, optional): Name for the model. If not provided, uses source basename. The final model name will be prefixed with the job_id for uniqueness.
- `architecture` (str, optional): Model architecture (e.g., "LlamaForCausalLM"). If not provided, will attempt to detect from config.json.
- `pipeline_tag` (str, optional): Pipeline tag (e.g., "text-generation"). If not provided and parent_model is given, will attempt to fetch from parent model on HuggingFace.
- `parent_model` (str, optional): Parent model name/ID for provenance tracking.

**Returns:**

- `str`: The destination path on disk.

**Example:**

```python
from lab import lab
import os

lab.init(experiment_id="training")

# Train your model...
# ... training code ...

# Save the trained model
model_dir = "./output/final_model"
os.makedirs(model_dir, exist_ok=True)

# Save model files
# ... save model files to model_dir ...

# Save to Model Zoo
saved_path = lab.save_model(
    model_dir,
    name="my_finetuned_model",
    architecture="LlamaForCausalLM",
    pipeline_tag="text-generation",
    parent_model="meta-llama/Llama-2-7b-hf"
)
lab.log(f"Model saved to Model Zoo: {saved_path}")
```

**Note:** This method is a convenience wrapper around `save_artifact()` with `type="model"`. For more control, use `save_artifact()` directly.

### lab.save_artifact() with type="model"

Advanced model saving with more configuration options.

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

# Save model with detailed config
saved_path = lab.save_artifact(
    source_path="./output/final_model",
    name="my_model",
    type="model",
    config={
        "model": {
            "architecture": "LlamaForCausalLM",
            "pipeline_tag": "text-generation",
            "parent_model": "meta-llama/Llama-2-7b-hf"
        }
    }
)
```

### lab.list_models()

Lists all local models available in the workspace.

**Returns:**

- `list[dict]`: List of dictionaries containing model metadata. Each dictionary includes:
  - `model_id`: The model identifier
  - `name`: The model name
  - `json_data`: Additional model metadata

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

# List all available models
models = lab.list_models()
lab.log(f"Found {len(models)} models in workspace")
for model in models:
    lab.log(f"  - {model['model_id']}: {model.get('name', 'N/A')}")
```

### lab.get_model()

Gets a specific local model by ID.

**Parameters:**

- `model_id` (str): The identifier of the model to retrieve.

**Returns:**

- `ModelService`: A Model instance for the specified model.

**Raises:**

- `FileNotFoundError`: If the model directory doesn't exist.

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

# Get a model
model = lab.get_model("my_model_id")
model_dir = model.get_dir()
lab.log(f"Model directory: {model_dir}")
```

### lab.get_model_path()

Gets the filesystem path to a specific local model.

**Parameters:**

- `model_id` (str): The identifier of the model.

**Returns:**

- `str`: The full path to the model directory.

**Raises:**

- `FileNotFoundError`: If the model doesn't exist.

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

# Get model path
model_path = lab.get_model_path("my_model_id")
lab.log(f"Model path: {model_path}")
```

---

## Dataset Management

### lab.save_dataset()

Saves a dataset under the workspace datasets directory and marks it as generated. The dataset will appear in the Transformer Lab UI.

**Parameters:**

- `df`: A pandas DataFrame or a Hugging Face datasets.Dataset to serialize to disk.
- `dataset_id` (str): Identifier for the dataset directory under `datasets/`.
- `additional_metadata` (dict, optional): Optional dict to merge into dataset json_data.
- `suffix` (str, optional): Optional suffix to append to the output filename stem.
- `is_image` (bool): If True, save JSON Lines (for image metadata-style rows).

**Returns:**

- `str`: The path to the saved dataset file on disk.

**Example:**

```python
from lab import lab
import pandas as pd

lab.init(experiment_id="data_processing")

# Create a dataset
data = {
    "input": ["What is AI?", "What is ML?"],
    "output": ["AI is...", "ML is..."],
    "label": [1, 1]
}
df = pd.DataFrame(data)

# Save the dataset
dataset_path = lab.save_dataset(
    df=df,
    dataset_id="my_custom_dataset",
    additional_metadata={
        "description": "Custom training dataset",
        "source": "manually_created"
    }
)
lab.log(f"Dataset saved to: {dataset_path}")
```

**Example - Using save_artifact with type="dataset":**

```python
from lab import lab
import pandas as pd

lab.init(experiment_id="data_processing")

# Create dataset
df = pd.DataFrame({
    "question": ["Q1", "Q2"],
    "answer": ["A1", "A2"]
})

# Save using save_artifact
dataset_path = lab.save_artifact(
    source_path=df,
    name="my_dataset",
    type="dataset",
    config={
        "dataset": {
            "description": "Question-answer dataset",
            "task": "qa"
        },
        "suffix": "v1",
        "is_image": False
    }
)
```

---

## Evaluation Results

### lab.save_artifact() with type="eval"

Saves evaluation results as a CSV file. The results are stored in the job's eval_results directory and are visible in the Transformer Lab UI.

**Parameters:**

- `source_path`: A pandas DataFrame or Hugging Face datasets.Dataset with evaluation results.
- `name` (str, optional): Name for the evaluation results file. Defaults to `eval_results_{job_id}_{timestamp}.csv`.
- `type` (str): Must be `"eval"`.
- `config` (dict, optional): Configuration dict with column mappings under `"evals"` key:

  ```python
  {
      "evals": {
          "input": "input_col",           # Column name for input
          "output": "output_col",         # Column name for model output
          "expected_output": "expected_col",  # Column name for expected output (optional)
          "score": "score_col"            # Column name for score
      }
  }
  ```

**Default Column Names:**
If column mappings are not provided, the following defaults are used:

- `input`: "input"
- `output`: "output"
- `expected_output`: "expected_output"
- `score`: "score"

**Example - Default Column Names:**

```python
from lab import lab
import pandas as pd

lab.init(experiment_id="evaluation")

# Create evaluation results with default column names for colour highlighting in the GUI.
results = pd.DataFrame({
    "input": ["What is 2+2?", "What is 3+3?"],
    "output": ["4", "6"],
    "expected_output": ["4", "6"],
    "score": [1.0, 1.0]
})

# Save evaluation results
eval_path = lab.save_artifact(
    source_path=results,
    name="eval_results.csv",
    type="eval"
)
lab.log(f"Evaluation results saved to: {eval_path}")
```

**Example - Custom Column Names:**

```python
from lab import lab
import pandas as pd

lab.init(experiment_id="evaluation")

# Create evaluation results with custom column names
results = pd.DataFrame({
    "question": ["What is 2+2?", "What is 3+3?"],
    "model_response": ["4", "6"],
    "ground_truth": ["4", "6"],
    "accuracy": [1.0, 1.0]
})

# Save with column mappings
eval_path = lab.save_artifact(
    source_path=results,
    name="eval_results_custom.csv",
    type="eval",
    config={
        "evals": {
            "input": "question",
            "output": "model_response",
            "expected_output": "ground_truth",
            "score": "accuracy"
        }
    }
)
lab.log(f"Evaluation results saved to: {eval_path}")
```

## Job Completion

### lab.finish()

Marks the job as successfully completed and sets completion metadata.

**Parameters:**

- `message` (str): Completion message. Defaults to "Job completed successfully".
- `score` (dict, optional): Optional score/metrics dictionary to attach to the job.

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

# ... training code ...

# Complete the job with a message
lab.finish("Training completed successfully")

# Complete with score/metrics
lab.finish(
    message="Training completed successfully",
    score={
        "final_loss": 0.15,
        "accuracy": 0.92,
        "f1_score": 0.89
    }
)

```

### lab.error()

Marks the job as failed and sets completion metadata.

**Parameters:**

- `message` (str): Error message describing what went wrong.

**Example:**

```python
from lab import lab

lab.init(experiment_id="training")

try:
    # ... training code ...
    pass
except Exception as e:
    error_msg = f"Training failed: {str(e)}"
    lab.error(error_msg)
    raise
```

## HuggingFace Integration

### lab.get_hf_callback()

Gets a HuggingFace TrainerCallback instance for Transformer Lab integration. This callback automatically:

- Updates training progress in Transformer Lab
- Logs training metrics (loss, etc.)
- Saves checkpoints to Transformer Lab when they are created
- Logs epoch completion and training end events

**Returns:**

- `LabCallback`: A TrainerCallback instance that can be passed to HuggingFace Trainer.

**Example:**

```python
from lab import lab
from transformers import Trainer, TrainingArguments

lab.init(experiment_id="training")

# Get the callback
callback = lab.get_hf_callback()

# Create trainer with the callback
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset,
    callbacks=[callback],  # Add the callback
)

# Train - progress will be automatically tracked
trainer.train()
```

**Example - Custom Callback:**

You can also create a custom callback that extends the Lab callback:

```python
from lab import lab
from transformers import TrainerCallback

lab.init(experiment_id="training")

class CustomLabCallback(TrainerCallback):
    def __init__(self):
        self.lab_callback = lab.get_hf_callback()
    
    def on_step_end(self, args, state, control, **kwargs):
        # Call the lab callback
        self.lab_callback.on_step_end(args, state, control, **kwargs)
        
        # Add custom logic
        if state.global_step % 100 == 0:
            lab.log(f"Custom logging at step {state.global_step}")

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset,
    callbacks=[CustomLabCallback()],
)
```

## Complete Example

Here's a complete example that demonstrates most of the functionality:

```python
from lab import lab
import pandas as pd
import os
from datetime import datetime

def train_model():
    """Complete training script using Lab SDK"""
    
    # 1. Initialize
    lab.init(experiment_id="my_training_experiment")
    
    # 2. Load data
    lab.log("Loading dataset...")
    # ... load dataset ...
    lab.update_progress(10)
    
    # 3. Training loop
    lab.log("Starting training...")
    for epoch in range(config["num_epochs"]):
        # ... training code ...
        
        # Save checkpoint
        if (epoch + 1) % 2 == 0:
            checkpoint_dir = f"./checkpoints/epoch_{epoch + 1}"
            lab.save_checkpoint(checkpoint_dir, f"epoch_{epoch + 1}")
            lab.log(f"Saved checkpoint for epoch {epoch + 1}")
        
        # Update progress
        progress = int((epoch + 1) / config["num_epochs"] * 100)
        lab.update_progress(progress)
    
    # 4. Save model
    model_dir = "./output/final_model"
    saved_model_path = lab.save_model(
        model_dir,
        name="trained_model",
        architecture="GPT2LMHeadModel",
        parent_model="gpt2"
    )
    lab.log(f"Model saved: {saved_model_path}")
    
    # 5. Run evaluation
    lab.log("Running evaluation...")
    eval_results = pd.DataFrame({
        "input": ["test input 1", "test input 2"],
        "output": ["output 1", "output 2"],
        "expected_output": ["expected 1", "expected 2"],
        "score": [1.0, 0.8]
    })
    
    eval_path = lab.save_artifact(
        eval_results,
        name="eval_results.csv",
        type="eval"
    )
    lab.log(f"Evaluation results saved: {eval_path}")
    
    # 6. Save additional artifacts
    summary = {"final_loss": 0.15, "accuracy": 0.92}
    import json
    with open("summary.json", "w") as f:
        json.dump(summary, f)
    
    lab.save_artifact("summary.json", "training_summary.json")
    
    # 7. Complete job
    lab.finish(
        message="Training completed successfully",
        score=summary
    )
    
    return {
        "status": "success",
        "job_id": lab.job.id,
        "model_path": saved_model_path,
        "eval_path": eval_path
    }

if __name__ == "__main__":
    result = train_model()
    print(result)
```

## Best Practices

1. **Always initialize first**: Call `lab.init()` at the beginning of your script.

2. **Log frequently**: Use `lab.log()` to provide visibility into your script's progress.

3. **Update progress regularly**: Call `lab.update_progress()` to keep the UI updated.

4. **Save checkpoints**: Use `lab.save_checkpoint()` regularly during long-running training jobs.

5. **Handle errors**: Use `lab.error()` in exception handlers to mark jobs as failed.

6. **Complete jobs**: Always call `lab.finish()` or `lab.error()` at the end of your script.

7. **Use appropriate artifact types**: Use `type="model"` for models, `type="eval"` for evaluation results, and `type="dataset"` for datasets.

8. **Check for resume**: Use `lab.get_checkpoint_to_resume()` to support resuming from checkpoints.


# File: for-teams/running-a-service.md

---
---
title: Running an Interactive Service
sidebar_position: 50
---

## What is an Interactive Service?

Transformer Lab supports two distinct types of workloads, designed to map to the different ways researchers work: **Tasks** and **Interactive Services**.

### Tasks vs. Interactive Services

* **Tasks (Batch Workloads):** These are jobs that are queued and scheduled to run automatically when the necessary resources become available. They execute a set of instructions and terminate upon completion. A commoon usecase would be for training a model.
* **Interactive Services (On-Demand):** These workloads function like a **reservation**. When you launch an Interactive Service, a specific computer or set of resources is held exclusively for you. It remains active and available until you explicitly release it.



---

## Common Use Cases for Interactive Services

Interactive Services are best suited for workflows that require persistent access or real-time interaction.

### 1. Model Inference
Interactive services are ideal for hosting models that need to stay online to serve requests.
* **Examples:** Running inference servers like **Ollama** or **vLLM** to host a model in the cloud and query it via API.

### 2. Exploratory Research & Development
In the early stages of research, you often need an environment to experiment, debug, and iterate quickly without waiting for a queue.
* **Tools:** Gain direct access to the compute resources via **VSCode**, **Jupyter Notebooks**, or **SSH**.
* **Workflow:** Use an Interactive Service to prototype your code. Once your script is finalized and stable, you can convert it into a **Task** to run large-scale training jobs efficiently.

## Prerequisites

Before running an interactive service, ensure you have a Compute Provider set up and active.

1. Navigate to Team Settings and set up a Compute Provider.
   ![Compute Provider Setup](img/screenshot-addprovider.png)

2. Make sure the provider is active by clicking on the health button.
   ![Provider Health Check](img/screenshot-providershealth.png)

## Steps to Run an Interactive Service

1. Go to the Interact page in Transformer Lab.

2. Click on the "New" button to create a new interactive service.
   ![Interact Page New Button](img/interact-page-new.png)

3. Select the type of interactive service you want to launch: VSCode, Jupyter Notebook, SSH, vLLM Server, or Ollama Server.
   ![Select Service Type](img/select-service-type.png)

4. Configure the service:
   - Enter a name for the service.
   - Select the Compute Provider to use.
   - Specify the resources: CPU, memory, and GPUs.
   - For certain services, provide additional inputs such as model_name for vLLM Server or ngrok auth token for services that launch a tunnel.
   ![Service Configuration](img/service-configuration.png)

5. Click "Launch" to start the service.

6. Once launched, a card will appear for the service. Click the "Interactive Setup" button on the card.
   ![Service Card Interactive Setup](img/service-card-interactive-setup.png)

7. Follow the provided URL or steps to access the service.
   ![Access Service](img/access-service.png)


# File: for-teams/running-a-task.md

---
---
title: Running a Task
sidebar_position: 30
---

## What is a Task

A **task** is a description of work you want to execute on compute nodes. Researchers can write tasks in any format that runs on a node (typically Python scripts) and submit them as YAML to specify resource requirements and execution instructions.

Below, we'll walk through submitting a simple task in the GUI.

## Starting a Simple Task

Here is an example of a very simple task:

<figure>
![Task YAML](./img/tasks-yaml.png)
<figcaption>Example Task YAML</figcaption>
</figure>

In this dummy example, the Task is defined in a YAML file that states the following things:

* The helpful name for the task is called "my-task"
* The task requires a single compute node that has 2 CPUs and 4 GB of memory
* Before the task is run, run `pip install wandb` on the machine
* The actual task to run is just a simple "Hello World" example where the bash echo command outputs "hello" to the console

## Queuing a Job

Once you create a new Task, you will see it on your list of Tasks:

![Task YAML](./img/tasks-list.png)

You can now press the "Queue" Button to submit it as a Job.

## A more Detailed Task

Here is an example of a more useful task:

```yaml
name: unsloth-grpo-train-task
resources:
  accelerators: "A100-80GB:1"
envs:
  WANDB_PROJECT: unsloth-grpo-training
  PYTHONUNBUFFERED: 1
  HF_TOKEN: ENTER YOUR HF_TOKEN HERE
setup: uv pip install trl==0.15.2 bitsandbytes==0.45.4 unsloth== 2025.12.9 transformerlab datasets jinja2
run: cd ~/unsloth-grpo-train && python train.py
git_repo: "https://github.com/transformerlab/transformerlab-examples"
git_repo_directory: unsloth-grpo-train
```

**Many of these fields are optional. Here is a description of what each field does:**

```yaml
name: unsloth-grpo-train-task
```
Sets a useful name for the task in the GUI

```yaml
resources:
  accelerators: "A100-80GB:1"
```

States that the task would like 1 x A100 with 80GB of VRAM. (You could also request multiple nodes and they will be provisined to work as a cluster)

```yaml
envs:
  WANDB_PROJECT: unsloth-grpo-training
  PYTHONUNBUFFERED: 1
  HF_TOKEN: ENTER YOUR HF_TOKEN HERE
```

Will set some environment variables in the machine before the task is run

```yaml
setup: uv pip install trl==0.15.2 bitsandbytes==0.45.4 unsloth== 2025.12.9 transformerlab datasets jinja2
run: cd ~/unsloth-grpo-train && python train.py
git_repo: "https://github.com/transformerlab/transformerlab-examples"
git_repo_directory: unsloth-grpo-train
```

These commands are the core of the task. They tell the executing node to first fetch the git repo at the path given (and here we provide an optional subdirectory into the repo). Then the `setup` defines the command to set up the machine, and afterwards the actual task is defined in the `run` field.

For [a full description of all the fields you can add to the Task YAML see this link.](./task-yaml.md)




# File: for-teams/sweeps.md

---
---
title: Running a Sweep
sidebar_position: 40
---

## What is a Sweep?

A **Sweep** (or Hyperparameter Sweep) is an automated way to optimize your model's performance by testing different combinations of configuration values.

Instead of running a single job with fixed settings, a sweep allows you to define a range or list of values for specific parameters (such as learning rate, batch size, or epoch count). Transformer Lab will then generate and schedule multiple jobs—one for every possible combination of these parameters—allowing you to determine which configuration yields the best results.

You can run sweeps one after another or even in parallel.

## Enabling Sweeps

You can enable sweeps directly within your Task definition. To convert a standard task into a sweep, simply change a single value in your JSON configuration into a **list of values**.

### Task JSON Configuration

#### Required fields:

- `run_sweeps`: Set to true to enable sweeps

- `sweep_config`: An object mapping parameter names to arrays of values to try

#### Optional fields:
- `sweep_metric`: The metric name to track for optimization (default: "eval/loss")

- `lower_is_better`: Whether lower metric values are better (default: true)

#### Example:

In the configuration below, we are sweeping over two parameters: learning_rate and batch_size.

```json5
{
  "name": "my-sweep-task",
  "command": "python train.py",
  "cpus": 4,
  "memory": 8,
  "parameters": {
    "epochs": 10,
    "model_type": "gpt2"
  },
  "run_sweeps": true,
  "sweep_config": {
    "learning_rate": ["1e-5", "3e-5", "5e-5"],
    "batch_size": ["4", "8"]
  },
  "sweep_metric": "eval/loss",
  "lower_is_better": true
}
```

## How It Works

1. Parameter combinations: The system generates all combinations using a Cartesian product. In the example above:

    - 3 learning rates × 2 batch sizes = 6 total jobs

2. Each job will receive:

    - The same `base parameters` (epochs: 10, model_type: "gpt2")
    - One unique combination from `sweep_config` (e.g., learning_rate: "1e-5", batch_size: "4")

3. For remote/provider-based tasks: Jobs run in parallel (each as a separate job)

4. Optimization: The `sweep_metric` is tracked for each job to identify the best configuration:
    - If `lower_is_better` is true, the job with the lowest metric value is considered best
    - If false, the highest value is best


## YAML Example

Here's a complete task YAML that you can copy and paste directly into the GUI's YAML editor:

```yaml
name: my-sweep-task
resources:
  cpus: 4
  memory: 8
run: python train.py
setup: pip install -r requirements.txt
parameters:
  epochs: 10
  model_type: "gpt2"
sweeps:
  sweep_config:
    learning_rate:
      - 1e-5
      - 3e-5
      - 5e-5
    batch_size:
      - 4
      - 8
  sweep_metric: "eval/loss"
  lower_is_better: true
  ```



# File: for-teams/task-yaml.md

---
---
title: Task YAML
sidebar_position: 80
---

This guide explains how to format YAML files for creating tasks in Transformer Lab. Tasks define jobs that run on compute providers and can include training scripts, evaluation scripts, or any other computational workloads.

## Basic Structure

The basic structure of a task YAML file includes the following sections:

```yaml
name: task-name
resources:
  compute_provider: provider-name-in-your-transformerlab-workspace
  cpus: 2
  memory: 4
minutes_requested: 60
envs:
  KEY: value
setup: "command"
run: "command"
git_repo: "url"
git_repo_directory: "dir"
parameters: {...}
sweeps:
  sweep_config: {...}
  sweep_metric: "metric"
  lower_is_better: true
```

## Required Fields

### name

The task name. This will be sanitized to create a safe filename and name of the cluster on the compute provider.

**Type:** String

**Example:**

```yaml
name: my-training-task
```

## Resources Configuration

The `resources` section defines the compute resources required for the task.

### resources.compute_provider

The name of the compute provider to use. This should match a configured provider name in your workspace.

**Type:** String

**Example:**

```yaml
resources:
  compute_provider: skypilot-provider
```

**Note:** If not specified, the system will use the first available provider as a fallback.

### resources.cpus

Number of CPUs to allocate.

**Type:** Integer or String

**Example:**

```yaml
resources:
  cpus: 4
```

### resources.memory

Amount of memory to allocate (in GB).

**Type:** Integer or String

**Example:**

```yaml
resources:
  memory: 16
```

### resources.disk_space

Amount of disk space to allocate (in GB).

**Type:** Integer or String

**Example:**

```yaml
resources:
  disk_space: 100
```

### resources.accelerators

Accelerator specification (e.g., GPU type and count). Format depends on the provider. 
To look at supported formats in Skypilot, refer to their [accelerator documentation](https://docs.skypilot.co/en/stable/examples/auto-failover.html#provisioning-gpus) and for SLURM, refer to their [GPU documentation](https://slurm.schedmd.com/gres.html).

**Type:** String

**Example:**

```yaml
resources:
  accelerators: "H100:8"
```

### resources.num_nodes

Number of nodes for distributed training.

**Type:** Integer

**Example:**

```yaml
resources:
  num_nodes: 2
```

**Complete Resources Example:**

```yaml
resources:
  compute_provider: aws-ec2
  cpus: 8
  memory: 32
  disk_space: 200
  accelerators: "1xA100"
  num_nodes: 1
```

## Commands

### setup

Command(s) to run before the main task execution. This is typically used for installing dependencies, setting up the environment, or downloading data.

**Type:** String

**Example:**

```yaml
setup: "pip install -r requirements.txt"
```

**Multi-line Setup:**

```yaml
setup: |
  pip install -r requirements.txt
  apt-get update
  apt-get install -y git
  python download_data.py
```

### run

The main command to execute for the task. This is the primary script or command that performs the actual work.

**Type:** String

**Example:**

```yaml
run: "python train.py"
```

**With Arguments:**

```yaml
run: "python train.py --epochs 10 --batch-size 32"
```

**Multi-line Run:**

```yaml
run: |
  python train.py \
    --epochs 10 \
    --batch-size 32 \
    --learning-rate 2e-5
```

## Environment Variables

### envs

Environment variables to set for the task execution. These are passed as key-value pairs.

**Type:** Dictionary (key-value pairs)

**Example:**

```yaml
envs:
  CUDA_VISIBLE_DEVICES: "0"
  WANDB_API_KEY: "your-api-key"
  HF_TOKEN: "your-huggingface-token"
```

## Quota Tracking

### minutes_requested

Estimated number of minutes the task will run. This is used for quota tracking and resource allocation. When specified, a quota hold is created to reserve the estimated compute time.

**Type:** Integer

**Example:**

```yaml
minutes_requested: 60
```

**Note:** This is an optional field but recommended for tasks running on remote compute providers to enable quota tracking and better resource management.

## GitHub Integration

### git_repo

GitHub repository URL to clone before running the task. The repository will be cloned to the working directory.

**Type:** String

**Example:**

```yaml
git_repo: "https://github.com/username/repo.git"
```

### git_repo_directory

Subdirectory within the GitHub repository to use as the working directory. Useful when the repository contains multiple projects.

**Type:** String

**Example:**

```yaml
git_repo: "https://github.com/username/multi-project-repo.git"
git_repo_directory: "project1"
```

**Note**: The final path where the cloned folder would be available is either: `~/git_repo_directory` or `~/git_repo_name` (if no directory is specified).

**Complete GitHub Example:**

```yaml
git_repo: "https://github.com/transformerlab/examples.git"
git_repo_directory: "training/llm-finetuning"
setup: "pip install -r requirements.txt"
run: "python train.py"
```

## Parameters

### parameters

Task parameters (hyperparameters, configuration, etc.) that will be accessible via `lab.get_config()` in your scripts. These are passed to the job and can be used to configure the training or evaluation process.

**Type:** Dictionary (any JSON-serializable values)

**Example:**

```yaml
parameters:
  model_name: "gpt2"
  learning_rate: 2e-5
  batch_size: 8
  num_epochs: 3
  max_seq_length: 512
  warmup_ratio: 0.03
  weight_decay: 0.01
```

**Nested Parameters:**

```yaml
parameters:
  model:
    name: "gpt2"
    architecture: "GPT2LMHeadModel"
  training:
    learning_rate: 2e-5
    batch_size: 8
    num_epochs: 3
  data:
    dataset_name: "wikitext"
    max_seq_length: 512
```

**Note:** Parameters can be accessed in your Python scripts using the Lab SDK:

```python
from lab import lab

lab.init()
config = lab.get_config()
learning_rate = config.get("learning_rate")
model_name = config.get("model_name")
```

## Hyperparameter Sweeps

### sweeps

Configuration for hyperparameter sweeps. When sweeps are enabled, the system will generate multiple jobs, one for each combination of parameter values.

### sweeps.sweep_config

Dictionary mapping parameter names to lists of values to try. The system will generate jobs for all combinations of these values.

**Type:** Dictionary (parameter name -> list of values)

**Example:**

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
    batch_size: ["4", "8", "16"]
    lora_rank: ["8", "16", "32"]
```

### sweeps.sweep_metric

The metric to optimize during the sweep. This should match a metric name that your script logs (e.g., via wandb or in evaluation results).

**Type:** String

**Example:**

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
  sweep_metric: "eval/loss"
```

**Common Metrics:**

- `"eval/loss"` - Evaluation loss
- `"train/loss"` - Training loss
- `"eval/accuracy"` - Evaluation accuracy
- `"eval/f1_score"` - F1 score
- `"eval/bleu"` - BLEU score

### sweeps.lower_is_better

Whether lower values of the sweep metric are better (True) or higher values are better (False).

**Type:** Boolean

**Example:**

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
  sweep_metric: "eval/loss"
  lower_is_better: true  # Lower loss is better
```

or

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
  sweep_metric: "eval/accuracy"
  lower_is_better: false  # Higher accuracy is better
```

**Complete Sweeps Example:**

```yaml
name: hyperparameter-sweep
resources:
  compute_provider: aws-ec2
  cpus: 4
  memory: 16
  accelerators: "1xV100"
run: "python train.py"
parameters:
  model_name: "gpt2"
  dataset_name: "wikitext"
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
    batch_size: ["4", "8"]
    lora_rank: ["8", "16"]
  sweep_metric: "eval/loss"
  lower_is_better: true
```

## Complete Examples

### Example 1: Simple Training Task

```yaml
name: simple-training
resources:
  compute_provider: local
  cpus: 4
  memory: 8
minutes_requested: 30
setup: "pip install transformers torch"
run: "python train.py"
parameters:
  model_name: "gpt2"
  learning_rate: 2e-5
  batch_size: 8
  num_epochs: 3
```

### Example 2: Training Task with GitHub Repository

```yaml
name: finetune-llm
resources:
  compute_provider: skypilot-provider
  cpus: 8
  memory: 32
  accelerators: "H100:1"
minutes_requested: 120
git_repo: "https://github.com/username/llm-training.git"
git_repo_directory: "finetuning"
setup: |
  pip install -r requirements.txt
  pip install wandb
envs:
  WANDB_API_KEY: "your-api-key"
  HF_TOKEN: "your-huggingface-token"
run: "python train.py"
parameters:
  model_name: "meta-llama/Llama-2-7b-hf"
  dataset_name: "wikitext-2"
  learning_rate: 2e-5
  batch_size: 4
  gradient_accumulation_steps: 8
  num_epochs: 3
  max_seq_length: 512
  warmup_ratio: 0.03
  weight_decay: 0.01
```

### Example 3: Evaluation Task

```yaml
name: evaluate-model
resources:
  compute_provider: local
  cpus: 2
  memory: 4
setup: "pip install transformers datasets"
run: "python evaluate.py"
parameters:
  model_name: "gpt2"
  dataset_name: "wikitext"
  batch_size: 16
  max_samples: 1000
```

### Example 4: Hyperparameter Sweep

```yaml
name: lora-sweep
resources:
  compute_provider: skypilot-provider
  cpus: 4
  memory: 16
  accelerators: "H100:1"
minutes_requested: 180
git_repo: "https://github.com/username/llm-training.git"
setup: |
  pip install -r requirements.txt
  pip install wandb
envs:
  WANDB_API_KEY: "your-api-key"
run: "python train.py"
parameters:
  model_name: "gpt2"
  dataset_name: "wikitext"
  num_epochs: 3
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5", "5e-5"]
    batch_size: ["4", "8"]
    lora_rank: ["8", "16", "32"]
    lora_alpha: ["16", "32", "64"]
  sweep_metric: "eval/loss"
  lower_is_better: true
```

## Best Practices

1. **Use Descriptive Names**: Choose clear, descriptive task names that indicate what the task does.

   ```yaml
   name: finetune-gpt2-wikitext  # Good
   name: task1                    # Bad
   ```

2. **Specify Resources Appropriately**: Match resources to your workload. Don't request more than you need, but ensure you have enough for the task.

   ```yaml
   # For small models
   resources:
     cpus: 4
     memory: 8
   
   # For large models
   resources:
     cpus: 16
     memory: 64
     accelerators: "1xA100"
   ```

3. **Use Setup for Dependencies**: Install dependencies in the `setup` command rather than in the `run` command.

   ```yaml
   setup: "pip install -r requirements.txt"  # Good
   run: "python train.py"
   ```

4. **Store Sensitive Data Securely**: Don't hardcode API keys or tokens in YAML files. Use environment variables or secure configuration.

   ```yaml
   # Good - use environment variables
   envs:
     WANDB_API_KEY: "${WANDB_API_KEY}"
   
   # Bad - hardcoded
   envs:
     WANDB_API_KEY: "abc123xyz"
   ```

5. **Use Parameters for Configuration**: Store hyperparameters and configuration in the `parameters` section so they're accessible via `lab.get_config()`.

   ```yaml
   parameters:
     learning_rate: 2e-5
     batch_size: 8
   ```

6. **Document Complex Sweeps**: When using sweeps, document what you're optimizing and why.

   ```yaml
   sweeps:
     # Testing different learning rates and batch sizes
     sweep_config:
       learning_rate: ["1e-5", "3e-5", "5e-5"]
       batch_size: ["4", "8"]
     sweep_metric: "eval/loss"
     lower_is_better: true
   ```

7. **Use GitHub for Code**: Store your code in a GitHub repository and reference it with `git_repo` rather than uploading files manually.

   ```yaml
   git_repo: "https://github.com/username/my-project.git"
   git_repo_directory: "training"
   ```

8. **Test Locally First**: Test your task configuration locally before running on expensive cloud resources.

   ```yaml
   resources:
     compute_provider: local  # Test locally first
   ```

9. **Use Multi-line Strings for Long Commands**: Use YAML's `|` or `>` syntax for multi-line commands.

   ```yaml
   setup: |
     pip install -r requirements.txt
     python download_data.py
     python preprocess_data.py
   ```

10. **Validate YAML Syntax**: Ensure your YAML is valid before submitting. Use a YAML validator or linter.

## Common Issues and Solutions

### Issue: YAML Parsing Errors

**Problem:** Invalid YAML syntax causes parsing errors.

**Solution:** Validate your YAML syntax. Common issues:

- Missing colons after keys
- Incorrect indentation (use spaces, not tabs)
- Unquoted strings with special characters

### Issue: Parameters Not Accessible

**Problem:** Parameters defined in YAML are not accessible via `lab.get_config()`.

**Solution:** Ensure parameters are at the root level under `parameters:` key:

```yaml
parameters:
  learning_rate: 2e-5  # Correct
```

Not:

```yaml
config:
  parameters:
    learning_rate: 2e-5  # Wrong
```

### Issue: Sweeps Not Running

**Problem:** Sweeps are defined but not generating multiple jobs.

**Solution:** Ensure the `sweeps` section includes all required fields:

```yaml
sweeps:
  sweep_config:
    learning_rate: ["1e-5", "3e-5"]
  sweep_metric: "eval/loss"  # Required
  lower_is_better: true      # Required
```

### Issue: Provider Not Found

**Problem:** `compute_provider` name doesn't match any configured provider.

**Solution:** Check the exact provider name in your workspace. The system will use the first available provider as a fallback, but it's better to specify the correct name.


# File: for-teams/teamsvsindividual.md

---
---
title: Teams vs Invididuals
sidebar_position: 16
---

# Transformer Lab Teams vs Transformer Lab for Individuals

Transformer Lab can be configured to run in one of two modes:

- **Transformer Lab for Individuals**: Perfect for individual researchers who want to train, tune, or evaluate models locally on a single machine. [Learn more in the single-node docs](/docs/).
- **Transformer Lab for Teams**: Built for teams scaling across GPU clusters with advanced orchestration and collaboration features (see comparison below).


## Choose Your Mode

Transformer Lab can be configured to run in one of two flavours. Both modes are the same app and codebase, features are just turned on and off based on which mode you activate.

| Feature | Transformer Lab For Individuals | Transformer Lab For Teams |
| --- | --- | --- |
| Local machine training & evals | ✓ |  |
| Run and Train Models that don't fit on a single machine | | ✓ |
| Experiment Management | ✓ | ✓ |
| Model Registry | ✓ | ✓ |
| Dataset Registry | ✓ | ✓ |
| Artifact Management | ✓ | ✓ |
| GPU orchestration (works with SLURM, SkyPilot) | | ✓ |
| Team collaboration | | ✓ |
| Cloud provider integration | | ✓ |
| CLI interface | | ✓ | 
| Best for | Local ML on Mac/Windows/Linux | Teams (Academic and Research Labs) scaling across GPU clusters |
| License | 100% Open source | 100% Open source |


![Image](./img/screenshot-tasks.png)

Our new **Transformer Lab for Teams** offers more complex capabilities <span style={{backgroundColor: "#93be34ff", fontWeight: 'bold'}}>designed for teams that work across clusters of GPUs</span>. This means you can:

- **Scale Effortlessly:** Researchers can go from quick Jupyter notebooks to production ML runs across hundreds or thousands of GPUs using one interface.

- **Simple Orchestration:** Simply request resources and supply a script. Transformer Lab works with your GPU orchestration tool (e.g. SLURM or SkyPilot) to orchestrate the task and manage your queue.

- **Use Your Own Stack:** Write code using the tools you are familiar with. Transformer Lab runs tasks directly as-is, without imposing restrictions or requiring you to re-write your code.

- **Run Any Workload:** Teams use Transformer Lab to run workloads From LLMs, vision, and audio models to traditional workloads like XGBoost and YOLO. We also support broad compute types, including NVIDIA, AMD, TPU, and Apple Silicon/MLX.

- **Complexity Made Simple:** Capabilities that used to require complex engineering are built-in.
    - This includes capturing checkpoints (with auto-restart)
    - Hyperparameter sweeps
    - storing artifacts in a global object store accessible even after ephemeral nodes terminate.

Get started by reading the [install instructions -->](./install.md)

# File: for-teams/viewing-jobs.md

---
---
title: Viewing Jobs and Artifacts
sidebar_position: 35
---

## What is a Job

The **Tasks** pane in Transformer Lab is divided in two sections. On the top you can view a list of Tasks which contain instructions (like a template) for one or more nodes to execute. On the bottom is a list of Jobs.

A **Job** is a task that has been or scheduled to be executed.

![Jobs vs Tasks](./img/jobs-tasksvsjobs.png)

## Interacting With Jobs

Once a Job is running, you can click on the **stop** button to cancel it and terminate the associated instances.

## Viewing Job Artifacts

Once a Job goes from the state of **Launching** to **In Progress** to **Complete** you can view the Job's artifacts. Artifacts are outputs in the form of files generated by a job, for example if you fine tune a new model, the new model's safetensors will be saved as an artifact. If you perform an eval, you can save the results of the eval as an artifact.

![Job Artifacts](./img/jobs-artifacts.png)

Click on the **Artifacts** button to see all artifacts generated by the job. You can also see specific artifacts like evals or dataset previews by clicking on those buttons.


# File: for-teams/why.md

---
---
title: Why Transformer Lab for Teams?
sidebar_position: 15
---

# Why Transformer Lab for Teams

**Upgrade your Research Workflow without Replacing your Infrastructure.**

Your lab likely relies on **SLURM** to manage your compute cluster. Or your lab may be using cloud compute like services from **Azure, AWS, or GCP**. Or perhaps you are using a cluster that runs **Kubernetes**.

Regardless of which of these you use, the raw experience—managing batch scripts, configuring SSH tunnels for notebooks, and manually tracking artifacts across file systems—creates friction that slows down research.

**Transformer Lab for Teams** is an open-source research platform that sits *on top* of your existing compute infrastructure. It provides a modern interface, experiment tracking, and interactive development environments while letting your underlying schedulers and clouds do what they do best.

<img src={require('./img/screenshot-tasks.png').default} width="400" />

---

## 1. Zero Disruption to Infrastructure
**We don't replace your orchestrator. We unify it.**

The biggest concern for any Admin is infrastructure migration. Transformer Lab requires **no changes** to your existing node setup. We integrate with the tools you already use:

* **For On-Premise Clusters (SLURM):** Transformer Lab acts as a submission client. When a user launches a task in our UI, we translate that into a job submission that SLURM understands.
* **For Cloud & Kubernetes (SkyPilot):** If you use AWS, GCP, Azure, or Kubernetes, we utilize **SkyPilot** to abstract the complexity of provisioning VMs and pods.
* **Hybrid Capable:** You can configure multiple Compute Providers in a single workspace. This allows your lab to burst from an on-prem SLURM cluster to AWS cloud instances using the exact same interface.

<img src={require('../src/pages/homepage-components/features/img/workswith.png').default} width="400" />

## 2. A Better Experience for Researchers
Reduce the "infrastructure tax" your researchers pay so they can focus on the model.

### Interactive Services (No more SSH Tunneling)
Researchers often need interactive environments for exploratory work. Traditionally, this involves reserving a node, finding the IP, and setting up complex SSH tunnels.
* **One-Click Jupyter & VSCode:** Users can launch Jupyter Notebooks or VSCode Tunnels directly from the browser on whatever compute provider they choose.
* **Managed Access:** We handle the networking and tunneling securely. The user simply clicks "Connect."
* **Resource Reservation:** These sessions are scheduled just like any other job, ensuring fair resource allocation.

<img src={require('./img/screenshot-interative.png').default} width="400" />


### Automated Experiment Tracking
Stop losing results in `slurm-*.out` or scattered cloud logs.
* **The Lab SDK:** By adding the optional Transformer Lab Job SDK and adding `import lab` to scripts, users get real-time logging, progress bars, and metrics streaming back to the central dashboard.
* **Artifact Management:** Models, datasets, and eval results are automatically versioned and stored (locally or via S3/GCP buckets), accessible via the UI even after the compute node has been terminated.

<img src={require('./img/jobs-artifacts.png').default} width="400" />


### Hyperparameter Sweeps Made Easy
Writing bash loops to submit varying jobs is error-prone.
* **YAML-Based Sweeps:** Define a list of parameters (e.g., `learning_rate: [1e-5, 3e-5]`) in the Task YAML.
* **Auto-Scheduling:** Transformer Lab automatically generates and queues the Cartesian product of jobs, tracking the metrics for each run to identify the best configuration.

## 3. A Better Experience for Admins
Gain visibility into your cluster usage and standardize how work is submitted.

* **Centralized Visibility:** See exactly which users are running which jobs, what resources they are consuming, and the health of those jobs in a modern dashboard—whether those jobs are on a local cluster or a cloud VM.
* **Standardized Environments:** By defining Tasks via YAML with `setup` script definitions or Docker containers, you reduce "it works on my machine" support tickets.
* **Multi-User Management:** Built-in team management, authentication, and user workspaces ensure that research remains collaborative but secure.

## 4. Efficiency and Cost Savings

### Checkpoints and Auto-Recovery
Long training runs on unstable nodes (or Spot instances in the cloud) are risky. Transformer Lab simplifies resilience.
* **Auto-Resume:** The platform tracks checkpoints. If a job crashes or is preempted by a higher-priority user (or a Spot instance reclamation), it can automatically restart from the last saved checkpoint without human intervention.
* **Object Storage Integration:** Transformer Lab can offload models and artifacts to global object storage (S3/GCP) immediately. This prevents data loss if local node storage is ephemeral or if the cloud instance is terminated.

<img src={require('../src/pages/homepage-components/features/img/checkpoints.png').default} width="400" />


### CLI for Power Users
Admins and power users don't have to leave the terminal. The `lab` CLI allows you to submit tasks, monitor jobs, and view logs without ever opening a browser, bridging the gap between CLI speed and Platform visibility.

<img src={require('./img/screenshot-cli.png').default} width="400" />


---

## How it Fits
Transformer Lab acts as the **Control Plane**.

1.  **User** submits a Task (via GUI or CLI).
2.  **Transformer Lab API** processes the request and requirements.
3.  **Compute Provider** translates the request:
    * If **SLURM**: It sends `sbatch` commands to your login node.
    * If **SkyPilot**: It provisions VMs on AWS/GCP/Azure or Pods on Kubernetes.
4.  **Transformer Lab** monitors the job execution, streams logs back to the user, and manages artifact retrieval.

## Next Steps
You can install the Transformer Lab controller on a single CPU node that has access to your compute provider (e.g., SSH access to your SLURM login node, or Cloud credentials for SkyPilot). We're happy to work with you directly to help install Transformer Lab in your environment. If you want to get started on your own, see our [install instructions -->](./install.md)
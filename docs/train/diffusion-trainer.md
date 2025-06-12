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

   - The `metadata.jsonl` file is optional but recommended. It can include captions or tags for each image, which help during training.
   - If you include `metadata.jsonl`, it must have a column named `file_name` that matches each image file. Other columns (e.g., captions, tags) are allowed and can be named as you like.
   - If you don’t provide `metadata.jsonl`, only the images will be loaded.

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

---
sidebar_position: 4
---

# Diffusion Trainer

The Diffusion Trainer allows you to create and manage LoRA training jobs for diffusion models using Transformer Lab. This plugin enables training custom adaptors that can be used with Text-to-Image, Image-to-Image, and Inpainting workflows. The trainer supports CUDA environments and offers flexibility in setting up custom diffusion training tasks.

## Step 1: Installing the Plugin

1. Open the `Plugins` tab.
2. Filter by trainer plugins.
3. Install the `Diffusion Trainer` plugin.

**Note:** This plugin only works with CUDA environments and requires diffusion models to be downloaded from the Model Zoo.

## Step 2: Creating a Training Task

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
   - **Plugin Config Tab:**  
     Configure the training parameters. Each parameter controls a specific aspect of diffusion training:
    </summary>
     **Core Training Parameters:**

     - **Trigger Word:**  
       Optional trigger word to prepend to all captions during training. Example: 'sks person' or 'ohwx style'. Leave empty if not needed.

     - **Number of Training Epochs:**  
       Determines how many times the entire training dataset is passed through the model (1-1000).

     - **Train Batch Size:**  
       Number of images processed together in each training iteration. Start with 1 for memory efficiency.

     - **Learning Rate:**  
       Specifies the initial step size at which the model learns. Default is 1e-4.

     **Optimizer Parameters:**

     - **Adam Beta 1:**  
       The beta1 hyperparameter for Adam optimizer. Controls momentum (default: 0.9).

     - **Adam Beta 2:**  
       The beta2 hyperparameter for Adam optimizer. Controls second moment estimates (default: 0.999).

     - **Adam Weight Decay:**  
       Regularization parameter to prevent overfitting (default: 0.01).

     - **Adam Epsilon:**  
       A small constant for numerical stability in Adam optimizer (default: 1e-8).

     - **Max Grad Norm:**  
       Maximum gradient norm for clipping to prevent exploding gradients (default: 1.0).

     - **Gradient Accumulation Steps:**  
       Number of steps to accumulate gradients before updating model weights (1-32).

     **Image Processing Parameters:**

     - **Image Resolution:**  
       Target image size for training. Must match model requirements (64-1024 pixels, default: 512).

     - **Center Crop:**  
       Whether to center crop images during preprocessing.

     - **Random Horizontal Flip:**  
       Apply random horizontal flips for data augmentation.

     - **Image Interpolation Mode:**  
       Method for image resizing: lanczos, bilinear, bicubic, or nearest.

     **Dataset Configuration:**

     - **Caption Column:**  
       Name of the column containing text captions (default: "text").

     - **Image Column:**  
       Name of the column containing image data (default: "image").

     **LoRA Parameters:**

     - **LoRA Rank (r):**  
       Rank of LoRA update matrices. Higher values allow more fine-tuning capacity (4-128, default: 8).

     - **LoRA Alpha:**  
       LoRA scaling factor. Typically set to 2x the rank value (4-128, default: 16).

     **Advanced Training Settings:**

     - **Mixed Precision:**  
       Enable mixed precision training for faster speed and lower memory usage. Options: no, fp16, bf16.

     - **LR Scheduler:**  
       Learning rate schedule: constant, linear, cosine, or constant_with_warmup.

     - **LR Warmup Steps:**  
       Number of steps for learning rate warmup (default: 50).

     - **Noise Offset:**  
       Adds noise to improve training stability (default: 0).

     - **Prediction Type:**  
       Type of prediction: epsilon or v_prediction (default: epsilon).

     - **SNR Gamma:**  
       Signal-to-noise ratio gamma for loss weighting (optional).

     **Evaluation Parameters:**

     - **Evaluation Prompt:**  
       Text prompt used to generate evaluation images during training. Leave empty to skip evaluation image generation.

     - **Evaluation Steps:**  
       Generate evaluation images every N epochs. Set to 1 to generate after each epoch.

     **Output Configuration:**

     - **Adaptor Name:**  
       Unique identifier for the training adaptor. This name will be used to identify your trained LoRA adaptor.

     - **Log to Weights and Biases:**  
       Toggle whether to log training metrics and outputs to Weights and Biases for monitoring purposes.
  </details>

4. Save the training template by clicking on **Save Training Template**.

<img src={require('./gifs/diffusion_trainer/1_CreatingTask.gif').default} alt="Plugin Gif" width="500" />

## Step 3: Queueing the Training Job

After saving the training template, click on **Queue** to start the training job.

While the training is running, you can view the output logs and monitor progress and even view the eval images. The trainer will:

- Process your Text-Image dataset
- Train the LoRA adaptor on the selected diffusion model
- Generate evaluation images if configured
- Save the trained adaptor for use in diffusion workflows

<img src={require('./gifs/diffusion_trainer/2_RunningTask.gif').default} alt="Plugin Gif" width="500" />

## Step 4: Using the Trained Adaptor

Once the training is finished, the LoRA adaptor becomes available for use with diffusion models. You can:

1. **Load the adaptor** in the Foundation tab under your diffusion model
2. **Use in Text-to-Image generation** by selecting the adaptor in the Diffusion tab
3. **Apply to Image-to-Image workflows** for style transfer using your custom adaptor
4. **Utilize in Inpainting tasks** to maintain consistent style across modified regions

The trained adaptor will enhance the base diffusion model with your custom style or subject learned from the training dataset.

<img src={require('./gifs/diffusion_trainer/3_PostTraining.gif').default} alt="Plugin Gif" width="500" />

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

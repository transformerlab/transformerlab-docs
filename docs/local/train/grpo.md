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
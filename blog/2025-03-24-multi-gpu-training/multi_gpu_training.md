---
slug: multi-gpu-training
title: Accelerating Model Training with Multi-GPU Support in Transformer Lab
authors: deep
tags: [training, multi-gpu, transformerlab, guide]
---

Transformer Lab is excited to announce robust multi-GPU support for fine-tuning large language models. This update allows users to leverage all available GPUs in their system, dramatically reducing training times and enabling work with larger models and datasets.

<!--truncate-->

## New Multi-GPU Enabled Plugins

We've enhanced two of our most popular training plugins to take advantage of multiple GPUs:

1. **Llama SFT Trainer -- Huggingface TRL (Multi GPU Support)**
2. **GRPO Trainer (Multi GPU)**

Both plugins deliver the same user-friendly experience you're familiar with, now with the added power of distributed training across your GPU fleet.

<img src={require('./gifs/1_PluginsPage.png').default} alt="Demo Plugin Gif" width="500" />

## Setting Up Multi-GPU Training

### For Llama SFT Trainer

1. Install the plugin named "Llama SFT Trainer -- Huggingface TRL (Multi GPU Support)"
2. Navigate to the Train Tab
3. Click the `+ New` button
4. Select the Llama Trainer Multi GPU plugin from the list

A configuration window will appear with familiar options for naming your task, selecting your dataset, and setting up your data template.

<img src={require('./gifs/2_LlamaTrainerMultiGPUSetup.gif').default} alt="Demo Plugin Gif" width="500" />

### For GRPO Trainer

The process is nearly identical for the GRPO trainer:

1. Install the "GRPO Trainer (Multi GPU)" plugin
2. Follow the same steps to create a new training task
3. Configure your training parameters as usual

<img src={require('./gifs/4_GRPOMultiGPUSetup.gif').default} alt="Demo Plugin Gif" width="500" />

#### Technical Differences between GRPO Plugins

While both plugins enable GRPO training, there's an important technical distinction with the GRPO implementation:

- The **Multi GPU GRPO Trainer** applies GRPO optimization to the entire model
- The standard **Unsloth GRPO** plugin attaches a PEFT (Parameter-Efficient Fine-Tuning) model following Unsloth's GRPO training methods.

This difference makes the multi-GPU version potentially more effective for large-scale datasets where full model fine-tuning is beneficial.

## Multi-GPU Configuration Options

In the "Plugin Config" tab, you'll find two new options specific to multi-GPU training:

1. **Training Device**: Set this to `cuda` to use GPU acceleration
2. **GPU IDs to Train**: Choose which GPUs to utilize
   - Enter `auto` to use all available GPUs
   - Or specify particular GPUs with comma-separated IDs (e.g., `0,1,2`)

### Finding Your GPU IDs

Not sure which GPU IDs to use? You can easily find them:

1. Navigate to the `Computer` tab in Transformer Lab
2. Look for the "GPU Specs (x)" section
3. Each GPU will be listed as "GPU # 0", "GPU # 1", etc.

<img src={require('./gifs/5_ComputerPage.png').default} alt="Demo Plugin Gif" width="500" />


## Benefits of Multi-GPU Training

Using multiple GPUs for training offers several advantages:

- **Faster training times**: Distribute the computational load across multiple GPUs
- **Larger batch sizes**: Process more examples simultaneously
- **Work with bigger models**: Train models that wouldn't fit in a single GPU's memory
- **More efficient resource utilization**: Make the most of your hardware investment

## Getting Started

Multi-GPU training is available now in the latest version of Transformer Lab. Update your installation and try these new plugins to experience significantly faster training times for your language models.

<img src={require('./gifs/3_LlamaTrainerUsage.gif').default} alt="Demo Plugin Gif" width="500" />
<img src={require('./gifs/6_GRPOMultiGPUUsage.gif').default} alt="Demo Plugin Gif" width="500" />

We're excited to see what you'll create with this enhanced training capability!

---
title: Introduction
sidebar_position: 1
---

Recipes in Transformer Lab are pre-defined workflows designed to help you get started with common tasks, such as training, evaluating, quantizing, or exporting models. Each recipe provides step-by-step guidance tailored to a specific architecture or use case.

## What Are Recipes?

Recipes in Transformer Lab are ready-made workflows/tasks that help you complete common tasks like training, evaluating, or exporting machine learning models. Think of them as step-by-step guides that make it easier to get started, even if you're new to the platform.

Each recipe is designed for a specific goal — such as summarizing a conversation, generating Python code, or fine-tuning a model — and is built to match different types of hardware like NVIDIA GPUs, AMD GPUs, Apple Silicon (MLX), or CPUs.

## Why Use Recipes?

**Saves time:** You don’t need to set everything up from scratch. Recipes come with pre-filled configurations and helpful defaults.

**Beginner-friendly:** If you're unsure how to train or evaluate a model, a recipe walks you through it.

**Task-specific:** Each recipe focuses on a clear outcome — like answering SQL questions or quantizing a model — so you know exactly what it’s meant for.

**Hardware-aware:** Recipes are tailored to the hardware you're using, so they’re optimized to run smoothly.

In short, recipes help you launch powerful experiments with less setup and more confidence.


## Supported Recipes

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Available Recipes by Architecture

<Tabs>

  <TabItem value="cuda-amd" label="⚙️ CUDA / AMD">

  | Recipe Title | Description | Key Capabilities | Type of Task |
  |--------------|-------------|------------------|--------------|
  | Answer SQL Queries | Train a Qwen 2.5 model to excel at SQL query generation, understanding, and optimization. | Write efficient SQL queries, Explain query optimization, Handle complex database operations | Train |
  | Dialogue Summarizing | Fine-tune a TinyLlama model to create concise, accurate summaries of conversations and dialogues. | Generate concise summaries, Maintain key points and context, Handle various dialogue formats | Train |
  | Train a Diffusion LoRA | Train a LoRA adapter for Stable Diffusion XL to generate Simpsons-style images. | Generate Simpsons-style images, Create characters and scenes, Respond to the trigger word | Train |
  | Evaluate a Model on Common Benchmarks | Evaluate models using Eleuther AI LM Eval Harness. | Performance reports, Comparative charts, Benchmark scores | Evaluate |
  | Fine-tune an Existing Model | Adapt a pre-trained model to your needs using LoRA. | Generate base outputs, Fine-tune, Evaluate improvements | Train, Evaluate, Generate |
  | Machine Learning Q&A | Train a Qwen 2.5 model for ML Q&A. | Provide ML explanations, Answer implementation questions, Guide through concepts | Train |
  | Python Code Completion | Train a SmolLM Base model for Python code completions. | Context-aware completions, Syntax suggestions, Complete programming patterns | Train |
  | Quantize a Model | General model quantization for MLX and CUDA. | Converts to GGUF, Reduces size, Maintains performance | Export |
  | Train a Model to be Conversationally Intelligent | Enhance a SmolLM model for advanced conversations and structured responses. | Structured conversations, Well-formatted responses, Diverse scenarios | Train |
  | Train a Model to Speak like a Pirate | Transform a SmolLM model into a pirate conversationalist. | Pirate dialect, Engaging interactions, Helpful information | Train |

  </TabItem>

  <TabItem value="mlx" label="🍎 MLX">

  | Recipe Title | Description | Key Capabilities | Type of Task |
  |--------------|-------------|------------------|--------------|
  | Evaluate a Model on Common Benchmarks on MLX | Evaluate models using Eleuther AI LM Eval Harness on MLX (Apple Silicon). | Performance reports, Comparative charts, Benchmark scores | Evaluate |
  | Fine Tune a Small Language Model using MLX | Train a Llama 3.2 1B model for rule-based Q&A using MLX. | Generate base outputs, Fine-tune with LoRA, Evaluate improvements | Train, Evaluate, Generate |
  | Quantize a Model | General model quantization for MLX and CUDA. | Converts to GGUF, Reduces size, Maintains performance | Export |

  </TabItem>
</Tabs>



## How to Use Recipes

- Browse the list above and select a recipe that matches your task and hardware.
- Follow the step-by-step instructions on the Notes page when creating a new experiment with a recipe.
- Recipes are designed to be beginner-friendly to get you started on the platform quickly.

## How to Launch a Recipe and Create an Experiment

There are two primary ways to get started with a recipe on Transformer Lab:

**1. First-Time Setup / Initial Connection:**
When you start Transformer Lab for the very first time and successfully connect to the API server or your local machine, you'll be presented with an intuitive screen specifically for choosing a recipe based on your hardware architecture. From there, you can select the recipe that aligns with your goals and create a new experiment based on it.

**2. Creating a New Experiment from Anywhere:**
Once you're familiar with the platform, you can create a new experiment from a recipe at any time. Simply navigate to the drop-down menu (usually located in the top navigation or a prominent "Create" button) and click on "+New". This will open up the options to select a recipe supported by your hardware and configure your new experiment.
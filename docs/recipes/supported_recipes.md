---
title: Supported Recipes
sidebar_position: 2
---

Here is a list of supported recipes in Transformer Lab, organized by architecture type and task. Each recipe provides a step-by-step guide to help you achieve specific goals, whether it's training a model, evaluating performance, or exporting for deployment.


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
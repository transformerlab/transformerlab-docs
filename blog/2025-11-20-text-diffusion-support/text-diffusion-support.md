---
slug: text-diffusion-support
title: "Transformer Lab Goes Beyond Images: Introducing Text Diffusion Model Support"
authors: [deep]
tags: [text-diffusion, dllm, bert, dream, llada, training, evaluation]
---

🎉 Transformer Lab just expanded beyond image diffusion! We're thrilled to announce **text diffusion model support** so you can train, evaluate, and interact with cutting-edge text diffusion architectures like BERT, Dream, and LLaDA directly in Transformer Lab.

### What's included in this release

- 🚀 **Text Diffusion Server** for interactive generation with BERT, Dream, and LLaDA models
- 🏋️ **Text Diffusion Trainer** for fine-tuning with masked-language and diffusion-style alignment workflows
- 📊 **Text Diffusion Evaluator** for benchmarking with the EleutherAI LM Evaluation Harness

<!--truncate-->

:::note Hardware Support
Text diffusion models are currently supported on **NVIDIA GPUs**. We're actively working to enable support for AMD GPUs and Apple Silicon hardware—stay tuned for updates!
:::

## 🎯 What are Text Diffusion Models?

Text diffusion models represent an exciting new approach to language modeling. Unlike traditional autoregressive models that generate text token-by-token, text diffusion models use diffusion processes to generate sequences, offering new capabilities and training dynamics.

Transformer Lab now supports three major text diffusion architectures:

- **BERT-based models** (e.g., `answerdotai/ModernBERT-large`) using masked language modeling
- **Dream models** (e.g., `Dream-org/Dream-v0-Instruct-7B`) with CART loss weighting and response cutoff controls
- **LLaDA models** (e.g., `GSAI-ML/LLaDA-8B-Instruct`) optimized for instruction following

## 🖥️ Text Diffusion Server

The **Diffusion LLM Server** plugin lets you interact with text diffusion models in real-time. Generate text, chat with models, and experiment with different diffusion parameters—all through Transformer Lab's intuitive interface.

### 👀 Watch It in Action

Here's a quick demo showing how simple it is to interact with text diffusion models:

<img src={require('./gifs/inference.gif').default} width="500" />

You can adjust generation parameters like diffusion steps, temperature, and sampling strategies to control the output quality and style.

## 🏋️ Text Diffusion Trainer

Train your own text diffusion models using our comprehensive training plugin. The **Diffusion LLM Trainer** supports:

- **Multiple training methods**: BERT (masked-language), Dream (with CART weighting), and LLaDA fine-tuning
- **LoRA support**: Parameter-efficient fine-tuning to reduce memory usage
- **Multi-GPU training**: Scale across multiple NVIDIA GPUs for faster training
- **Flexible configurations**: Adjust learning rates, batch sizes, sequence lengths, and more

### Training Configuration

The trainer offers extensive configuration options to customize your training runs:

<img src={require('./gifs/train_config.png').default} width="500" />

Key features include:
- Support for BERT, Dream, and LLaDA model architectures
- LoRA fine-tuning with configurable rank and alpha
- Dream-specific controls like per-batch cutoff and CART loss weighting
- Integration with TensorBoard and Weights & Biases for monitoring

For detailed training instructions, see our [Text Diffusion Training Documentation](/docs/train/diffusion-llm-trainer).

## 📊 Text Diffusion Evaluator

Benchmark your trained models using the **Diffusion LLM Evaluator** plugin, which integrates with the EleutherAI LM Evaluation Harness. Evaluate performance across a wide range of tasks including:

- **Reasoning**: ARC, HellaSwag, PIQA
- **Knowledge**: MMLU (50+ subject areas), TruthfulQA
- **Math**: GSM8K, Minerva Math
- **Code**: HumanEval, MBPP
- **And many more**: Winogrande, GPQA, and more

### Evaluation Configuration

Configure your evaluation runs with model-specific parameters:

<img src={require('./gifs/eval_config.png').default} width="500" />

The evaluator exposes dllm-specific decoding controls (diffusion steps, CFG scale, temperature, etc.) so you can match your training configurations for fair comparisons.

For detailed evaluation instructions, see our [Text Diffusion Evaluation Documentation](/docs/evaluate/diffusion-llm-evaluator).

## 🚀 Getting Started

Ready to dive in? Here's how to get started with text diffusion models in Transformer Lab:

1. **Install the plugins**: Head to the Plugins tab and install:
   - Diffusion LLM Server
   - Diffusion LLM Trainer
   - Diffusion LLM Evaluator

2. **Download a model**: Visit the Foundation tab and download a supported text diffusion model like `Dream-org/Dream-v0-Instruct-7B` or `GSAI-ML/LLaDA-8B-Instruct`

3. **Start experimenting**: 
   - Use the Server plugin to generate text and interact with models
   - Train custom adaptors with your own datasets
   - Evaluate model performance on standard benchmarks

## 🔮 What's Next?

We're just getting started with text diffusion support in Transformer Lab. We're actively working on:

- **AMD GPU support**: Bringing text diffusion to AMD hardware
- **Apple Silicon support**: Enabling text diffusion on Mac hardware
- **More model architectures**: Expanding support for additional text diffusion variants
- **Enhanced features**: More training methods, evaluation metrics, and generation options

We're excited to see what you build with text diffusion models in Transformer Lab! 🎉

👉 Have questions or want to share what you're building? Join our [Discord community](https://discord.com/invite/transformerlab) or tag us on social media—we'd love to hear from you!

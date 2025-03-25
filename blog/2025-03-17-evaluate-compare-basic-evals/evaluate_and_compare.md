---
slug: evaluate-compare-basic-evals
title: Evaluating and Comparing LLMs with Transformer Lab
authors: deep
tags: [evaluation]
---

Language models are becoming increasingly sophisticated, but understanding their strengths and weaknesses requires rigorous evaluation. In this blog post, we'll explore how Transformer Lab makes model evaluation and comparison straightforward, even for non-experts.

<!-- truncate -->

## Setting Up Our Experiment

For this demonstration, we'll evaluate the SmolLM 135M (`mlx-community/SmolLM-135M-4bit`) model. Our goal is to showcase Transformer Lab's evaluation capabilities by assessing model performance across multiple benchmarks and comparing the results.

<img src={require('./gifs/1_Model.png').default} alt="Demo Plugin Gif" width="500" />

## Evaluating With EleutherAI Harness MLX Plugin

The EleutherAI Harness MLX Plugin provides a convenient way to evaluate models on standardized benchmarks. For our experiment, we'll focus on two MMLU (Massive Multitask Language Understanding) tasks:

1. `mmlu_abstract_algebra` - Testing knowledge of abstract algebra concepts
2. `mmlu_college_computer_science` - Evaluating computer science understanding

### Running Multiple Evaluations

To demonstrate Transformer Lab's comparison capabilities, we'll run each benchmark with different dataset limits:

- 5% of the dataset (0.05 limit)
- 10% of the dataset (0.10 limit)
- 15% of the dataset (0.15 limit)

> **Note:** For proper, production-grade evaluations, you should use the entire benchmark dataset. Limited evaluations are appropriate for quick testing or debugging only.

<img src={require('./gifs/2_InstallCreate.gif').default} alt="Demo Plugin Gif" width="500" />

## Comparing Evaluation Results

Once our evaluations are complete, Transformer Lab makes it easy to compare results across different runs.

### Chart Comparison View

To compare evaluations:

1. Select the checkbox next to each evaluation run you want to compare (in our case, all three runs)
2. Click the "Compare Selected Evals" button that appears

<img src={require('./gifs/3_Selected.png').default} alt="Demo Plugin Gif" width="500" />

This opens a chart view with multiple visualization options:

- Bar chart comparison
- Line chart comparison
- Radar chart comparison

<img src={require('./gifs/4_CompareCharts.gif').default} alt="Demo Plugin Gif" width="500" />

As expected, we can observe that increasing the dataset size from 5% to 15% provides more stable evaluation results, though the overall performance trends remain consistent.

### Detailed Comparison

For a deeper analysis, Transformer Lab offers a "Detailed Comparison" option:

1. Select your evaluation runs
2. Click the "Detailed Comparison" button

<img src={require('./gifs/5_DetailedComparison.png').default} alt="Demo Plugin Gif" width="500" />

The detailed view provides:

- Per-test case scores for each benchmark
- Input prompts and model outputs for each test
- Performance metrics broken down by category

You can download the complete comparison report as a CSV file using the "Download Report" button in the top right corner.

## The Power of Comparison

The ability to compare evaluation runs provides several valuable benefits:

1. **Pre-training vs. Post-training Assessment**: Easily compare a model's performance before and after fine-tuning to quantify improvements.

2. **Hyperparameter Optimization**: Run evaluations with different training hyperparameters (learning rates, epochs, etc.) and compare to find optimal settings.

3. **Model Architecture Comparison**: Evaluate different model architectures or sizes on the same benchmarks to understand performance tradeoffs.

4. **Dataset Impact Analysis**: Measure how changes to training data affect performance on specific tasks.

5. **Prompt Engineering Optimization**: Compare different prompting strategies to see which yields better results on your evaluation benchmarks.

## Conclusion

Transformer Lab's evaluation and comparison features transform what was once a complex, technical process into something accessible and visual. By making it easy to run multiple evaluations and compare results, Transformer Lab helps ensure that your language models are performing as expected before deployment.

In this demonstration, we've only scratched the surface of what's possible. The same workflow can be applied to any model and benchmark combination supported by Transformer Lab, making comprehensive model evaluation a standard part of your development process.

<img src={require('./gifs/6_EvalPlugins.gif').default} alt="Demo Plugin Gif" width="500" />

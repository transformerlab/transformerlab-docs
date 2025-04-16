---
slug: compare-llm-judge-evals
title: Is Fine-tuning Really All You Need?
authors: deep
tags: [evaluation, fine-tuning, llm-judge]
---

When working with language models, fine-tuning often seems like the magic solution to adapt models for specialized tasks. But how effective is it really? In this technical study, we'll explore the tangible benefits and limitations of fine-tuning on small dataset through a controlled experiment using the Transformer Lab platform.

<!-- truncate -->

## Experimental Setup

For this study, we used two models:

1. **Base Model**: `mlx-community/Llama-3.2-1B-Instruct-4bit` (vanilla)
2. **Fine-tuned Model**: The same Llama-3.2-1B base with an adapter trained specifically on a Silicon Valley TV show Q&A dataset

Our fine-tuning dataset consisted of only 20 manually created question-answer pairs about the HBO show "Silicon Valley," deliberately kept small to simulate a common real-world scenario where domain-specific training data is limited.

## Qualitative Comparison

Before diving into quantitative evaluation, let's look at some qualitative differences between the models.

### Vanilla Model Performance

When asked about specific Silicon Valley show details, the vanilla model struggles to provide accurate information:

<img src={require('./gifs/1_VanillaResponse.png').default} alt="Demo Plugin Gif" width="500" />

As expected, the base model either fails to recognize the specific questions about the show or generates generic, often incorrect responses when pressed for specific details.

### Fine-tuned Model Performance

In contrast, the fine-tuned model demonstrates some domain knowledge about Silicon Valley:

<img src={require('./gifs/2_FineTunedResponse.png').default} alt="Demo Plugin Gif" width="500" />

The fine-tuned model shows clear improvement in recognizing character names, plot points, and specific details from the show. However, qualitative observations are inherently subjective and limited in scope. Let's turn to more rigorous evaluation.

## Quantitative Evaluation Methodology

To systematically compare performance, we used Transformer Lab's LLM Judge plugin, which provides quantitative metrics for evaluating model outputs.

### Evaluation Configuration

- **Judge Model**: GPT-4o-mini
- **Evaluation Metrics**:
  - Answer Relevancy (measuring how relevant responses are to the query)
  - Hallucination (measuring factual accuracy and the degree of making up information)
- **Test Data**: 
  - `sv-vanilla-evals`: Responses from the vanilla model
  - `sv-evals`: Responses from the fine-tuned model

Each dataset contained identical columns:

- `input`: The query/prompt
- `output`: The model's response
- `expected_output`: Ground truth answer
- `context`: Relevant factual context for evaluation

<img src={require('./gifs/4_JudgeConfig2.png').default} alt="Demo Plugin Gif" width="500" />

## Evaluation Results

After running our evaluation through the LLM Judge plugin, we compared the results between the vanilla and fine-tuned models:

<img src={require('./gifs/6_EvalsDashboard.png').default} alt="Demo Plugin Gif" width="500" />

### Key Findings

| Metric | Vanilla Model | Fine-tuned Model | Improvement |
|--------|--------------|-----------------|-------------|
| Answer Relevancy | 0.46 | 0.59 | +0.13 |
| Hallucination | 1.00 | 1.00 | +0.00 |

> Note: A score of `1.00` for the Hallucination metric indicates the worst possible performance, meaning the model consistently made up information. A score of `1.00` for Answer Relevancy indicates the best possible performance.

Contrary to our qualitative observations, the quantitative improvement was more modest than expected. While the fine-tuned model showed better performance on specific questions about Silicon Valley, the overall metrics revealed only marginal improvements.

<img src={require('./gifs/3_LineComparison.png').default} alt="Demo Plugin Gif" width="500" />

### Analysis of Limited Gains

Several factors likely contributed to the limited quantitative improvements:

1. **Training Data Volume**: Our fine-tuning dataset was intentionally small, containing only a few dozen Q&A pairs about Silicon Valley.

2. **Overfitting Risk**: Small datasets can lead to memorization rather than true generalization.

<img src={require('./gifs/5_DetailedComparison.png').default} alt="Demo Plugin Gif" width="500" />

## Technical Implications

This study highlights several important technical considerations for practitioners:

### The Memorization vs. Generalization Trade-off

Fine-tuning on small datasets often results in models that memorize specific patterns but struggle to generalize beyond their training data. Our experiment demonstrates this challenge, as the fine-tuned model showed clear improvements on questions very similar to training examples but limited improvement on the broader evaluation.

### The Importance of Quantitative Evaluation

Relying solely on anecdotal evidence or cherry-picked examples can be misleading. Our qualitative observations suggested dramatic improvements, but quantitative metrics revealed more modest gains. This underscores the importance of rigorous evaluation protocols.

### Scaling Fine-tuning Data

The results suggest that for specialized domains, the quantity and quality of fine-tuning data are crucial factors in determining performance gains. Future work could explore how performance scales with increasing dataset size.

<img src={require('./gifs/7_BarChart.png').default} alt="Demo Plugin Gif" width="500" />

## Conclusion

Our study suggests a more nuanced answer: fine-tuning can provide meaningful improvements for specific use cases, but those gains might be more limited than qualitative observations suggest.

For practitioners looking to adapt models for specialized domains:

1. Collect larger fine-tuning datasets when possible
2. Implement rigorous quantitative evaluation beyond anecdotal testing
3. Consider the specific use case requirements and whether limited improvements in certain areas are sufficient

Transformer Lab's evaluation capabilities proved invaluable for this analysis, allowing us to move beyond subjective assessments and quantify the actual benefits of our fine-tuning approach.

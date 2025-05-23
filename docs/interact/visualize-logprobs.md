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

## Benefits

- **Detailed Insights**: Gain an understanding of the model's confidence levels for each output token.
- **Interactive Analysis**: Hover over tokens to see precise probability metrics, helping you better interpret model responses.

## Note

This feature is still under development and currently works exclusively with the MLX inference engine.
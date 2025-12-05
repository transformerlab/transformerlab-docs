---
slug: python-fine-tune
title: Fine Tuning a Python Code Completion Model
authors: sanjay
tags: [fine-tuning, training]
---

# Fine-tuning a Code Completion Model with LoRA and Transformer Lab: An Iterative Approach

This post details our journey to fine-tune smolLM 135M, a compact language model, for Python code completion.

We chose smolLM 135M for its size, which allows for rapid iteration. Instead of full fine-tuning, we employed LoRA (Low-Rank Adaptation), a technique that introduces trainable "adapter" matrices into the transformer layers. This provides a good balance between parameter efficiency and achieving solid results on the downstream task (code completion).

Transformer Lab handled the training, evaluation, and inference, abstracting away much of the underlying complexity. We used the `flytech/python codes-25k` dataset, consisting of 25,000 Python code snippets, without any specific pre-processing. Our training setup involved a constant learning rate, a batch size of 4, and an NVIDIA RTX 4060 GPU.

## The Iterative Fine-tuning Process: Nine Runs to Success

The core of this project was an iterative refinement of LoRA hyperparameters and training duration. We tracked both the training loss and conducted qualitative assessments of the generated code (our "vibe check") to judge its syntactic correctness and logical coherence. This combination of quantitative and qualitative feedback proved crucial in guiding our parameter adjustments.

<!--truncate-->

Here's a breakdown of our nine experimental runs:

**Run 1: Establishing a Baseline**

- **Parameters:**
  - `Learning Rate`: 5e-5
  - `Epochs`: 1
  - `LoRA r`: 16
  - `LoRA alpha`: 32
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** We began with a conservative approach: a low learning rate and a single epoch, using standard LoRA settings.
- **Outcome:** The loss decreased, indicating learning, but the generated code was unsatisfactory – syntactically incorrect and logically flawed. The model was clearly under-trained.

<img src={require('./firstRunCodeLoss.png').default} width="400" />

**Run 2: Exploring Learning Rate and LoRA r**

- **Parameters:**
  - `Learning Rate`: 1e-4
  - `Epochs`: 1
  - `LoRA r`: 8
  - `LoRA alpha`: 32
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** We hypothesized that the initial learning rate might be insufficient, so we doubled it. We also halved LoRA r to explore a smaller adapter size.
- **Outcome:** The loss curve and code quality remained largely unchanged, reinforcing the need for more training epochs.

<img src={require('./secondRunCodeLoss.png').default} width="400" />

**Run 3: Increasing Training Duration**

- **Parameters:**
  - `Learning Rate`: 1e-4
  - `Epochs`: 2
  - `LoRA r`: 8
  - `LoRA alpha`: 32
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** We increased the training duration to two epochs to allow the model more time to learn with the adjusted learning rate.
- **Outcome:** The loss curve showed a more significant decrease, but the code quality, while improved, still exhibited logical inconsistencies and incompleteness.

<img src={require('./thirdRunLoss.png').default} width="400" />

**Run 4: Finding the Right Learning Rate**

- **Parameters:**
  - `Learning Rate`: 5e-4
  - `Epochs`: 2
  - `LoRA r`: 8
  - `LoRA alpha`: 32
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** We significantly increased the learning rate to 5e-4, aiming for a more aggressive learning schedule.
- **Outcome:** This proved to be a key turning point. The loss curve showed a steep decline, and the "vibe check" was highly positive. The generated code was largely syntactically correct, logically coherent, and resembled realistic Python. This highlighted the critical importance of an appropriate learning rate.

<img src={require('./fourthRunLoss.png').default} width="400" />

**Run 5: Testing the current parameters**

- **Parameters:**
  - `Learning Rate`: 5e-4
  - `Epochs`: 4
  - `LoRA r`: 8
  - `LoRA alpha`: 32
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** We tested how far we can push the model with the current set of parameters, so we doubled the number of epochs.
- **Outcome:** This run produced the best code quality, the vibe check was very good, indicating that the increased learning rate was a good decision, but training took too long.

<img src={require('./fifthRunLoss.png').default} width="400" />
<img src={require('./fifthRunOutput.png').default} width="400" />

**Run 6: Exploring Larger LoRA Adapters**

- **Parameters:**
  - `Learning Rate`: 5e-4
  - `Epochs`: 2
  - `LoRA r`: 16
  - `LoRA alpha`: 64
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** We maintained the learning rate but increased LoRA r and alpha, increasing the adapter capacity for potentially more nuanced adaptation.
- **Outcome:** The loss curve and "vibe check" were comparable to Run 4, suggesting that we might achieve similar performance with shorter training by leveraging larger LoRA adapters.

<img src={require('./sixthRunLoss.png').default} width="400" />

**Run 7: Reducing Training Time**

- **Parameters:**
  - `Learning Rate`: 5e-4
  - `Epochs`: 2
  - `LoRA r`: 32
  - `LoRA alpha`: 128
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** We further increased LoRA r and alpha, pushing the adapter capacity.
- **Outcome:** The loss curve, as expected, was similar to a halved version of Run 6. However, the "vibe check" showed a slight decrease in code quality, indicating that a larger r and alpha can't fully compensate for reduced training time.

<img src={require('./seventhRunLoss.png').default} width="400" />
<img src={require('./seventRunOutput.png').default} width="400" />

**Run 8: Achieving Efficiency: One Epoch**

- **Parameters:**
  - `Learning Rate`: 5e-4
  - `Epochs`: 1
  - `LoRA r`: 32
  - `LoRA alpha`: 128
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** We aimed for maximum efficiency by reducing training to a single epoch, while maintaining high LoRA r and alpha values.
- **Outcome:** Surprisingly, this configuration worked very well. The loss curve showed a significant drop, and the "vibe check" was positive, demonstrating a good balance between training speed (15 minutes) and performance.

<img src={require('./eightRunLoss.png').default} width="400" />
<img src={require('./eightRunOutput.png').default} width="400" />

**Run 9: Maximizing LoRA Capacity**

- **Parameters:**
  - `Learning Rate`: 5e-4
  - `Epochs`: 1
  - `LoRA r`: 64
  - `LoRA alpha`: 128
  - `LoRA Dropout`: 0.05
  - `Batch Size`: 4
- **Rationale:** In our final run, we maximized LoRA r to explore its upper limit within the single-epoch constraint.
- **Outcome:** This configuration yielded excellent results. The loss curve indicated continued learning, and the "vibe check" confirmed consistently high-quality, syntactically sound, and logically coherent code. This represents our optimal recipe.

<img src={require('./ninthRunloss.png').default} width="400" />
<img src={require('./ninthRunOutput.png').default} width="400" />

## Qualitative Assessment ("Vibe Check")

Beyond numerical loss, we regularly inspected the generated code, assessing:

- **Syntax:** Correct Python syntax (indentation, keywords, etc.).
- **Logic:** Coherent use of variables, functions, and control flow.
- **Completeness:** Whether the snippets appeared finished or abruptly cut off.
- Repetition check.

This was vital for spotting issues not always reflected in quantitative metrics. For instance, the base model tended to produce repetitive, nonsensical output, a problem significantly reduced through fine-tuning. Our final model consistently generated well-formed, plausible Python.

Original output:
<img src={require('./baseModelOutput.png').default} width="400" />

Final Output:
<img src={require('./ninthRunOutput.png').default} width="400" />

Due to the fact that we were fine-tuning a 135M model, we didn't check for the correctness of the code that was generated.

## Conclusion and Next Steps

We successfully developed a LoRA-based fine-tuning recipe for smolLM 135M that balances training efficiency and code completion performance. The final configuration (Run 9) achieves strong results in a 15-minute training run on an RTX 4060, making it a suitable default recipe for Transformer Lab users.

Limitations exist: the model is restricted to Python and trained on a relatively small dataset. Future work could involve:

- Larger, more diverse datasets.
- Larger models.
- Exploring different LoRA configurations.
- More rigorous quantitative evaluation.

This project highlights the value of iterative experimentation and combining quantitative and qualitative evaluation when fine-tuning language models. The resulting recipe provides a solid foundation for further exploration of code generation within Transformer Lab.

So it was cool that I did this kind of vibes based iterative approach, and this is usually how you get started with training, however this just highlights the importance of having some sort more measurable evaluation process. Coming soon!

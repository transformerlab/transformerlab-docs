---
slug: Multimodal Models
title: Multimodal Models
authors: ali
tags: [resources]
---

{/* truncate */}

In order to run and interact with multimodal models using Transformer Lab, you must first [download a model from the Model Zoo](../tutorial/3-models.md) or [import your own model](import.md). We currently only support models under the [LlavaForConditionalGeneration](https://huggingface.co/docs/transformers/en/model_doc/llava#transformers.LlavaForConditionalGeneration) architecture.

# Choosing a Plugin/Inference Engine

Depending on the device you are using, you will want to download a different plugin.

For CPU based machines, please download the MLX Vision Server or the FastChat Multimodal Server.

For GPU-enabled or other compatible machines, please download the FastChat Multimodal Server.

<img src={require('./img/multimodal_plugins.png').default} alt="Plugin store with highlighted plugins to install" />

# Interact with the Model

After that, you can now load and run your model. Then, you can [interact with it](../tutorial/4-interact.md) just like any other model, but now with images as well!

Training is not supported at this time.

Here is a video explaining the above steps:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GFbXZrElW8g?si=s9W541lZn4MDRb1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
title: Running on a Mac Using MLX
sidebar_position: 2
---

# Running on a Mac Using MLX

## A Quick Guide

This is a quick guide to getting Transformer Lab up and running with MLX.

## What is MLX

<img src="https://ml-explore.github.io/mlx/build/html/_static/mlx_logo.png" alt="MLX Logo" width="200" />

MLX is a machine learning framework for Apple Silicon. [More documentation provided here](https://github.com/ml-explore/mlx).

With MLX, you can use a macOS computer with Apple Silicon (M1, M2, M3) to do complex machine learning with high performance by leveraging the onboard GPU / Neural engine.

Transformer Lab works natively with MLX, using plugins.

## Performance

MLX is relatively new. We encourage you to try different models and tasks to test performance. LLMs perform better on MLX with the M2 and M3 series of Apple chips. Larger models require more memory.

If you have a lower tier M1 Mac with 16GB of RAM (like I do), you will find that MLX can easily be used for inference for smaller model sizes (i.e. less than 3 billion parameters). Training will work, but it's more performant on more powerful Mac computers. The M2 and M3 can handle much larger models at high performance.

## Simple Install Instructions:

Download the [Transformer Lab App](http://transformerlab.ai) on your Mac and follow the on-screen instructions. Video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/SEYpvEOQ-Vw?si=eUYIzKR7rTZFLGVQ&cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Now Download and Run a Model

When you go to Model Store you can download MLX compatible models. Models that are marked with MLX or huggingface models should work. Try **TinyLlama** as a starting point as a small, useful model.

Once a model is downloaded, go to the Foundation tab and associate a downloaded model to your experiment.

Then press run.

<img src={require('./img/tinyllamastart.png').default} alt="Login Modal" width="400" />

You are now running a model using MLX!

Play around Transformer Lab to see how to do more advanced things like inference or model conversion.

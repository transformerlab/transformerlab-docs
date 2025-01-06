---
title: Install on a Mac
sidebar_position: 2
---

## Running on a Mac with Apple Silicon

### A Quick Guide

This is a quick guide to getting Transformer Lab up and running on a Mac with Apple Silicon

## What is MLX

<img src="https://ml-explore.github.io/mlx/build/html/_static/mlx_logo.png" alt="MLX Logo" width="200" />

MLX is a machine learning framework for Apple Silicon. [More documentation provided here](https://github.com/ml-explore/mlx).

With MLX, you can use a macOS computer with Apple Silicon (M1, M2, M3, M4) to do complex machine learning with high performance by leveraging the onboard GPU / Neural engine.

Transformer Lab works natively with MLX, using plugins.

## Performance

MLX is relatively new. We encourage you to try different models and tasks to test performance. LLMs perform better on MLX with the M2, M3 and M4 series of Apple chips. Larger models require more memory.

If you have a lower tier M1 Mac with 16GB of RAM (like I do), you will find that MLX can easily be used for inference for smaller model sizes (i.e. less than 3 billion parameters). Training will work, but it's more performant on more powerful Mac computers. The M2, M3 and M4 can handle much larger models at high performance.

## Simple Install Instructions:

Download the [Transformer Lab App](http://transformerlab.ai) on your Mac and follow the on-screen instructions. Video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/SEYpvEOQ-Vw?si=eUYIzKR7rTZFLGVQ&cc_load_policy=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Now Download and Run a Model

When you go to Model Store you can download MLX compatible models. Models that are marked with MLX or huggingface models should work. Try **TinyLlama** as a starting point as a small, useful model.

Once a model is downloaded, go to the Foundation tab and associate a downloaded model to your experiment.

Then press run.

<img src={require('../img/tinyllamastart.png').default} alt="Login Modal" width="400" />

You are now running a model using MLX!

Play around Transformer Lab to see how to do more advanced things like training or model conversion.

## Running on an Intel Mac

Apple Macs without Apple Silicon are not ideal for doing advanced machine learning.

If this is your situation, you can install Transformer Lab and do basic inference (i.e. talk to LLMs) using your Intel CPU. But if you want to do things like train or tune LLMs, you will need to get access to a computer with a GPU or a Mac with Silicon (e.g. in the cloud or locally).

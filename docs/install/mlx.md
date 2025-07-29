---
title: Install on a Mac
sidebar_position: 1
---

:::tip

These are instructions to install Transormer Lab as an App. You can also install Transformer Lab as a WebUI locally or in the cloud which will allow you to run Transformer Lab in a web browser [click here to learn more](./install-on-cloud.md).

:::

## What is MLX

<img src="https://ml-explore.github.io/mlx/build/html/_static/mlx_logo.png" alt="MLX Logo" width="200" />

MLX is a machine learning framework for Apple Silicon. [More documentation provided here](https://github.com/ml-explore/mlx).

With MLX, you can use a macOS computer with Apple Silicon (M1, M2, M3, M4) to do complex machine learning with high performance by leveraging the onboard GPU / Neural engine.

Transformer Lab works natively with MLX, using plugins.

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

## Increasing Performance using MLX

You can increase the performance of MLX by tweaking some of the memory limits set in the operating system. The script below is a good example of how to do that:

[MLX Tuning Script](https://gist.github.com/ivanfioravanti/44b4284be930b3c340cc1696d60c6143)
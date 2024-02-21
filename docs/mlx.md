---
title: Running on a Mac Using MLX
sidebar_position: 2
---

# Running on a Mac Using MLX

## A Quick Guide

This is a quick guide to getting Transformer Lab up and running with MLX.

## What is MLX

![MLX Logo](https://ml-explore.github.io/mlx/build/html/_static/mlx_logo.png)

MLX is a machine learning framework for Apple Silicon. [More documentation provided here](https://github.com/ml-explore/mlx).

With MLX, you can use a macOS computer with Apple Silicon (M1, M2, M3) to do complex machine learning with high performance by leveraging the onboard GPU / Neural engine.

Transformer Lab works natively with MLX, using plugins.

## Performance

MLX is relatively new. We encourage you to try different models and tasks to test performance. LLMs perform better on MLX with the M2 and M3 series of Apple chips. Having more memory on your computer helps a lot as well.

If you have a lower end M1 Mac with 16GB of RAM (like I do), you will find that MLX can easily be used for inference for smaller model sizes (i.e. less than 3 billion parameters). Training will work, but it will be slow. The M2 and M3 can handle much larger models at high performance.

## Step 1: Install Transformer Lab

Download and Install [Transformer Lab](/docs/download) for Apple Silicon.

## Step 2: Install Server API to the Local Machine

<img src={require('./img/install-steps.png').default} alt="Login Modal" width="400" />

Once Transformer Lab is installed, start it up and click on the button to install the server API. This will take some time as conda and Python dependencies are installed.

## Step 3: Install MLX Plugins

In Plugins, make sure that MLX Inference, MLX Exporter and MLX Training plugins are installed.

## Step 4: Download and Run a Model

When you go to Model Store you can download MLX compatible models. Models that are marked with MLX or huggingface models should work. Try **Phi2** or **TinyLlama** as small models that work well to start.

Go to the Foundation tab and associate a downloaded model to your experiment.

Then press run.

You are now running a model using MLX!

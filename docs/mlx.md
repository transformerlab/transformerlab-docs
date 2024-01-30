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

With MLX, you can use a MacOS computer with Apple Silicon (M1, M2, M3) to do complex machine learning.

Transformer Lab works natively with MLX, using plugins.

## Performance

MLX is relatively new. We encourage you to try different models and tasks to test performance. LLMs perform better on MLX with the M2 and M3 series of Apple chips. Having more memory on your computer helps a lot as well.

If you have a lower end M1 Mac with 16GB of RAM (like I do), you will find that MLX can easily be used for inference for smaller model sizes (i.e. less than 3 billion parameters). Training will work, but it will be slow.

## Installing Transformer Lab

** Step 1: ** Download and Install the [Transformer Lab App](/docs/download)

** Step 2: ** Install conda on your computer [https://docs.conda.io/projects/miniconda/en/latest/index.html#quick-command-line-install](https://docs.conda.io/projects/miniconda/en/latest/index.html#quick-command-line-install)

You may need to restart Terminal to get conda ready on your computer.

** Step 2: ** Install the Server API by running the following in the Terminal application your Mac:

```bash
conda create -y -n "transformerlab" python=3.11
git clone git@github.com:transformerlab/transformerlab-api.git
cd transformerlab-api
pip install -r requirements-no-gpu.txt
```

Now you can start the Transformer Lab API by running:

```bash
conda activate transformerlab
./run.sh
```

## Start the App

To start the app, open the Transformer Lab App in your Applications folder and set the server to:

`localhost`

and the port to:

`8000`

Now select and experiment and download a model from the Zoo that works with MLX. You could try `Phi-2` or `Tiny Llama 1.1B Chat` for example.

## Install MLX Plugins

To your experiment, install the MLX Inference, MLX Exporter and MLX Training plugins.

## Now Run a Model

Go to the Foundation tab and associate a downloaded model to your experiment. Now click on the gear icon in the Foundation Tab and select Apple MLX as your inference engine. Then click on Run.

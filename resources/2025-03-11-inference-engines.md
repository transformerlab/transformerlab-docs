---
slug: Inference Engines
title: Inference Engines
authors: ali
tags: [resources]
---

{/* truncate */}

import MuxPlayer from '@mux/mux-player-react';

## Introduction

An inference engine is what the server uses to _run_ a model. When you press "play" to run a model in Transformer Lab, you can select which available inference engine to use when that happens. Once a model is running, Transformer Lab presents an OpenAI compatible API that you can access directly and that the Transformer Lab App uses to communicate with the model.

Inference engines that are available out of the box on Transformer Lab as of Jan 2024 are:

- Apple MLX
- Apple MLX for Vision Multi Modal Models
- Llama-CPP
- Huggingface Transformers
- vLLM

Which inference engine is right for you depends on:

### Your hardware

    * For example, do you have GPU, only CPU, or are you on a Mac?
    Some inference engines, like vLLM, only work on machines that have a GPU. MLX only works on MacOS with Apple Silicon.

### The model's architecture:

    * Every model is built using a specific model architecture. For example, "Nous Hermes" is built on the "LlamaForCausalLM" architecture. While "Mixtral 8x7B Instruct" is built on the "MixtralForCausalLM" architecture. Each inference engine has a list of model architectures that it supports.

### Performance and Memory considerations

    * Some inference engines use more VRAM than others. vLLM is often faster than Huggingface Transformers. And each inference engine will have uniques options to optimize how it works.

## Installing Additional Inference Engines

When you start Transformer Lab, it installs a default inference engine depending on your hardware. If you would like to install more, go to Plugins and filter the list by "loaders"

## Selecting an Inference Engine

Before you press "Run" to run a model, click on the text to the right-hand side of the Run button that says "using ...". This will open a modal that gives you the option to select from your available inference engines (that also work with the given model architecture).

## Trying out different Inference Engines (Video)

This video demonstrates how Transformer Lab can be used to run several different inference engines.

<MuxPlayer
streamType="on-demand"
playbackId="zZNHD2VVJMuruI3hkAv9eFnKy9LYZuRm4mH2SaqDPDg"
metadataVideoTitle="Running Several Inference Engines on Transformer Lab"
primaryColor="#FFFFFF"
secondaryColor="#000000"
style={{maxWidth: '650px'}}
/>

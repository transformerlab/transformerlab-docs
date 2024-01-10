---
sidebar_position: 10
---

# 3. Load and Run a Model

## Introduction

An experiment needs a foundation model (LLM).

Open-source LLM's are typicaly very large files (e.g. 3GB or more) that are composed of some configuration files that define the architecture of the LLM they encapsulate as well as a large blog of binary data that captures the values of each neuron in the trained neural net.

Transfomer Lab works with the [Huggingface Model Format](https://huggingface.co/docs/transformers/main_classes/model) and provides a gallery of common models that serve as a starting point for your experiment.

Once you have downloaded some local models, you can run it for inference. Behind the scenes, Transformer Lab uses the FastChat library to run models, allowing you to chat or perform completions with them.

## Downloading from the Model Store

import { LuDownload, LuStore } from "react-icons/lu";

To start, go to the Model Gallery by clicking on the <LuDownload /> **Model Zoo** icon then click on the <LuStore />
**Model Store** tab. Here you can select from many common public models. Once you have selected one, click on <Button>Download<DownloadSvg/></Button> and wait for the model to fully download onto your server.

<img src={require('./img/model-zoo.png').default} alt="Model Zoo" width="700" />

<br/><br/>

:::tip Takes Time
Downloading a model can take several minutes.
:::

## Assigning a Model to an Experiment

import { LuX } from "react-icons/lu";

Once you have downloaded one or more models from the **Model Store** they appear in the **"Local Models"** tab. You can now use these as foundation models for experiments.

To do so, select the current experiment and click on **Foundation**. If no model has been assigned to the current experiment, you will see a list of local foundation models you can assign to the current experiment.

<img src={require('./img/select-model.png').default} alt="Select a Model" width="700" />

Once a model is selected, the screen will show the details of the current foundation model like in the following screenshot.

<img src={require('./img/mistral-model-selected.png').default} alt="Mistral Selected" width="700" />

To select a different model, click on <LuX/> **Select a Different Model**

## Running a Model for Inference

import { LuPlay } from "react-icons/lu";
import { LuCog } from "react-icons/lu";
import Button from '@site/src/components/Button';

When you are ready to run your model, click on the <Button><LuPlay/>Run</Button> button.

<img src={require('./img/click-run.png').default} alt="Run Button" width="400" />

The <LuCog/> button gives some advanced options you can select for how the model is run:

- **8-bit mode** reduces the precision of values in the model. This can speed up inference greatly, but it may also reduce the quality of the responses.
- **CPU-Offload** offloads part of the model to the CPU

### Alternate Inference Engines

An inference engine is the library that is used to run your model. By default, Transformer Lab attempts to run your model using a versatile inference engine made by the team at FastChat [https://github.com/lm-sys/FastChat](https://github.com/lm-sys/FastChat)

Depending on the Model Architecture, you can select an alternate inference engine. Alternate inference engines are built as [Plugins](../advanced/plugins.md).

### Currently Running LLM Display

import { LuStopCircle } from "react-icons/lu";

<img src={require('./img/currently-playing.png').default} alt="Run Button" width="600" />

Once a model is running you will see it's name in the Currently Running LLM Display at the top of the application. A green dot shows that the model is active. The rest of the top header shows how many resources are occupied while running the model.

Press the <LuStopCircle/> button in the header to stop the model and free up resources.

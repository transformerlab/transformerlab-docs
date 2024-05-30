---
sidebar_position: 12
---

# Importing Models

In order to run inference or train a model in TransformerLab, you must first download and import the model. 
The easiest way to get started is to simply download models via the Model Zoo tab in the application,
however TransformerLab also supports a number of ways to import models that are not included in our gallery

## Download from HuggingFace

At the bottom of the Model Zoo there is a field where you can enter the id for any of the thousands
of open source models hosted on HuggingFace.

<img src={require('./img/tlab_import_bar.jpg').default} alt="Import Bar" />

## Importing Local Models

If you have created or downloaded your own models or installed models using other common LLM tools, 
you can import those in to TransformerLab without having to re-download or copying your files.
Use the "Import Local Models" button at the bottom of the Model Zoo to automatically scan for 
available models or point TransformerLab at a specific directory containing models.

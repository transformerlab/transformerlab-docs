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

<img src={require('./img/tlab_import_bar.png').default} alt="Import Bar" />

## Importing Local Models

If you have created or downloaded your own models or installed models using other common LLM tools, 
you can import those in to TransformerLab without having to re-download or copying your files.
Use the "Import Local Models" button on in the Model Zoo to automatically scan for 
available models or point TransformerLab at a specific directory containing models.

NOTE: The default search for models will scan the cache of other applications and link to any found models
for use in TransformerLab without copying the models. This helps to save local storage space, 
but means that if you move those models you may need to delete and reinstall in order to access
in TransformerLab.

You can also pass a directory to search for models. TransformerLab will recursively scan subdirectories
automatically to find as many models as possible. 

Before importing models, TransformerLab tries to make sure that there is sufficient information to run the
model by inspecting the available configuration or metadata (depending on model format). A model may appear
in search results but appear disabled with an error message in the status column if there is a problem with
validation. If you need more details in this case, you may be able to find an actual error message in the 
API logs.

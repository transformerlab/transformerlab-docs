---
sidebar_position: 10
---

# Writing Plugins

## Introduction

Plugins extend the functionality of Transformer Lab, giving it more options for inference, training, or evaluations.

Plugins are just python scripts that are called by Transformer Lab.

## Contents of Plugin

A full plugin contains at least three files:

1. `index.json` -- which defines the contents of the plugin
2. `main.py` -- which defines the script
3. `setup.ph` -- which is run once when the plugin is installed. It can install depedencies (often by calling python `pip`)

You can view an example plugin to use as a template at:

[Sample Plugin](https://github.com/transformerlab/transformerlab-api/tree/main/transformerlab/plugins/sample_plugin)

## How Plugins are Installed and Where They are Stored

When Transformer Lab is started, it copies all the sample plugins that are stored at `./transformerlab/plugins/` to `./workspace/plugins`

The plugins at `./workspace/plugins/` are available to be installed to any experiment by going to Experiment->Plugins Script Store and clicking on Install

<img src={require('./img/install-plugin.png').default} alt="Install Plugin Screenshot" width="500" />

Additional plugins, that are not included by default, are also listed and can be installed in the same way.

Note that in the current version of Transformer Lab, all plugins are stored per experiment. There is no concept of a "global plugin" that is shared by all experiments.

## Editing Plugins

Once a plugin is installed to an experiment, you can edit the contents of the script by going to Plugins->Installed Plugin Scripts and then clicking on Edit on any specific plugin.

<img src={require('./img/plugin-editor.png').default} alt="Edit Plugin Screenshot" width="500" />

Editing a plugin will only edit it for _that specific experiment_ because each plugin is copied to an experiment when it is installed.

## Creating new Plugins

If you would like to create a new plugin only for yourself, you can create it at `./workspace/plugins` and it will be available to all your experiments.

If you would like to share your plugin with others users of Transformer Lab, we would love if you submitted it to the gallery by creating a pull request on this repo:

https://github.com/transformerlab/galleries

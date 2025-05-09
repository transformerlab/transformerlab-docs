---
slug: Uninstall Transformer Lab
title: Uninstall Transformer Lab
sidebar_position: 100000
---

## Uninstall Application:

- **MacOS:** Delete the Transformer Lab application from your `/Applications` Folder
- **Windows:** Uninstall the Application
- **Linux:** Delete the App whereever you stored it

## Stored Data:

- Transformer Lab stores models and data in your `~/.transformerlab/` folder -- deleting everything there will destroy all your settings and experiments
- On MacOS, there may be a small folder in `~/Library/Logs/transformerlab/`

For MacOS, here is a script you can run in a Terminal that will do all of the above steps:

```bash
rm -rf /Applications/Transformer\ Lab.app/
rm -rf ~/.transformerlab/
rm -rf ~/Library/Logs/transformerlab/
```

This will remove all the packages installed for Transformer Lab, freeing up space.

## Clear Python Cache:

Transformer Lab uses `uv` to install Python packages. You may also want to clear the `uv` cache. Instructions are below:

https://docs.astral.sh/uv/concepts/cache/#clearing-the-cache

## Delete Models and Datasets:

Most models and datasets that are downloaded in Transformer Lab are downloaded using Hugging Face Hub which stores them at `~/.cache/huggingface/hub`. Delete this directory to remove the large model files, unless you want them available to other applications.

---
title: Uninstall Transformer Lab
sidebar_position: 20
---

# Mac Uninstall Directions

- Delete the Transformer Lab application from your `/Applications` Folder
- Transformer Lab stores models and data in your `~/.transformerlab/` folder -- deleting everything there will destroy all your settings and experiments
- When downloading large models, Transformer Lab often uses Huggingface's tools which download models to `~/.cache/huggingface/hub` delete this directory to remove the large model files
- There may be a small folder in `~/Library/Logs/transformerlab/`

Here is a script you can run in a Terminal that will do all of the above steps:

```bash
rm -rf /Applications/Transformer\ Lab.app/
rm -rf ~/.transformerlab/
rm -rf ~/.cache/huggingface/hub/
rm -rf ~/Library/Logs/transformerlab/
```

- Transformer Lab also installs conda for you. If you would like to keep conda, but remove the Transformer Lab specific conda environment, run:

```bash
conda deactivate
conda remove -n transformerlab --all
```

This will remove all the packages installed for Transformer Lab, freeing up space.

You can also remove conda itself by running:

```bash
conda activate
conda init --reverse --all
rm -rf ~/miniconda3
```

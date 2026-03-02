---
title: Installing SkyPilot
sidebar_position: 30
---

# Installing SkyPilot

You can install SkyPilot on the same compute node that Transformer Lab itself runs on.

## Standard Installation
SkyPilot is a Python client that typically runs on your local machine (laptop) or a central head node. The full installation instructions are available here:

https://docs.skypilot.co/en/latest/getting-started/installation.html

You can install it via pip or uv.
```bash
# Install as a globally available tool with pip included
# SkyPilot requires 3.9 <= python <= 3.13.
uv tool install --with pip skypilot

# install dependencies for the clouds you want to use
uv tool install --with pip "skypilot[kubernetes,aws,gcp]"
```

## Cloud Setup
You can now ensure your machine has credentials for the clouds you want to use (AWS, GCP, Azure, etc.).

Run this command to automatically detect your credentials and enable cloud access:

```bash
sky check
```

## Run Skypilot

Now you can run Skypilot (this will not install it as a service that stays running after reboots) but we have [instructions for that here](https://github.com/transformerlab/build-a-machine-learning-research-cluster/blob/main/chapters/04-02-skypilot-k3s-install.md#4-making-skypilot-persistent-with-systemd)

```
sky api start --deploy
```
---
title: Installing SkyPilot
sidebar_position: 30
---

# Installing SkyPilot

You can install SkyPilot on the same compute node that Transformer Lab itself runs on.

## Standard Installation
SkyPilot is a Python client that typically runs on your local machine (laptop) or a central head node. The full installation instructions are available here:

https://docs.skypilot.co/en/latest/getting-started/installation.html

You can install it via pip. We recommend installing the "all" bundle to support all major clouds:
```bash
pip install "skypilot[all]"
```

## Cloud Setup
You can now ensure your machine has credentials for the clouds you want to use (AWS, GCP, Azure, etc.).

Run this command to automatically detect your credentials and enable cloud access:

```bash
sky check
```
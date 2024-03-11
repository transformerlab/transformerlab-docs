---
title: Advanced Install
sidebar_position: 3
---

# Advanced Installation Instructions

## Cloud or Local

When you download the Transformer Lab App, it contains an auto-installer that will download the server API and attempt to install it on your computer. It downloads the code, installs a [Python Conda](https://docs.anaconda.com/free/miniconda/index.html) environment, and then installs the Python dependencies necessary for for the API before.

<img
src={require('./img/autoinstaller.png').default}
alt="Auto Installer"
width="280"
/>

If you are running the server in the cloud (for example in a situation where you have a separate computer with a GPU that is designed to run machine learning code), you will need to install the API yourself.

Even if you are running the API locally, you may want to install the server yourself so you can control how (or if) Conda is installed, and where conda and Transformer Lab is located on your disk.

## Manual Install Instructions:

### install.sh Remote Script

The recommended way to install the server is to run install.sh which is in the root directory of the Transformer Lab API project.

You can run the following command on your computer which will fetch and run the script directly from Github:

```bash
curl https://raw.githubusercontent.com/transformerlab/transformerlab-api/main/install.sh | bash
```

This script will attempt to download the project to `~/.transformerlab`, install Miniconda at `~/miniconda3`, create a Conda environment for Transformer Lab, then finally it will install Python dependencies.

### Manual step-by-step Install

You can also install all of the Transformer Lab dependencies yourself by following the following steps. We do not recommend this path unless you are having issues with `install.sh` or need more control.

**Step 1:** Install Miniconda and Create Environment

Install Miniconda [full instructions here](https://docs.anaconda.com/free/miniconda/#quick-command-line-install)

Create a Conda Environment for Transformer Lab (after restarting the shell):

```bash
conda create -y -n transformerlab python=3.11
conda activate transformerlab
```

**Step 2:** Download Transformer Lab

```bash
git clone git@github.com:transformerlab/transformerlab-api.git
cd transformerlab-api
```

**Step 3:** Install Python Dependencies

#### For machines with an NVIDIA GPU:

```bash
conda activate transformerlab
conda install -y cuda -c nvidia/label/cuda-12.1.1 # only if you have an NVIDIA GPU
pip install -r requirements.txt
```

#### Or For machines without a GPU (e.g. a Mac):

```bash
conda activate transformerlab
pip install -r requirements-no-gpu.txt
```

**Step 4:** Run the Transformer Lab Server

```bash
conda activate transformerlab
uvicorn api:app --port 8000 --host 0.0.0.0
```

**To Connect:**

Now when you run the app at startup, go to the "Remote Connection" tab and then enter the IP address and port of your Transformer Lab API Server, then click Submit. If you are connecting to your local machine you can type `localhost` for your Server URL.

<img
src={require('./about/img/loginModal.png').default}
alt="Login Modal"
width="400"
/>

## System Requirements

### Client

The computer used to run the Transformer Lab App should be a Mac, PC, or Linux machine.

### Server

If you are only looking to do inference (e.g. talking to models), many different types of computers that can run Python will work.

If you are looking to train models and get higher performance, you need a server that has an NVIDIA card, or Supports Apple Silicon (M Series.)

| Machine                   | Inference | Training        |
| ------------------------- | --------- | --------------- |
| PC or Linux - with GPU    | ✅ Yes    | ✅ Yes          |
| PC or Linux - without GPU | ✅ Yes    | No              |
| Mac (Intel)               | ✅ Yes    | No              |
| Mac (M1)                  | ✅ Yes    | ✅ Yes (slower) |
| Mac (M2 or M3)            | ✅ Yes    | ✅ Yes          |

You will see the best performance on high VRAM GPUs (such as the RTX3090 or RTX4090) or Mac M2/M3 with more 24GB or more of RAM.

## Security Notes

:::danger Security Warning
Read carefully. Do not run the Transformer Lab API on a machine exposed to the public Internet.
:::

Today, Transformer Lab exposes a public API on your server that accepts unauthenticated network requests. If you were to run Transformer Lab on the public internet, this would create a significant security issue. We recommend only running the API server on internal networks. If you need to access the API server from outside your internal network, use a VPN or a tool like Tailscale to avoid exposing the server to the public internet.

For more information, read our document on how to run Transformer Lab publicly (@TODO)

In addition, note that Transformer Lab allows a user to upload and run arbitrary Python scripts which can be potentially dangerous. Do not run untrusted scripts on a machine.

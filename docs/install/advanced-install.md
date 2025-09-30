---
title: Advanced Install
sidebar_position: 20
---

# Advanced Installation Instructions

## Manual Install Instructions:

### install.sh Remote Script

The recommended way to install the app on a server is to follow the instructions for [Installing on Cloud](./install-on-cloud.md). If you want to do all the steps manually, then the instructions below describe what `install.sh` does behind the scenes.

### Manual step-by-step Install

You can also install all of the Transformer Lab dependencies yourself by following the following steps. We do not recommend this path unless you are having issues with `install.sh` or need more control.

**Step 1:** Install Miniforge and Create Environment

Install Miniforge [full instructions here](https://github.com/conda-forge/miniforge?tab=readme-ov-file#install)

Create a Conda Environment for Transformer Lab (after restarting the shell):

```bash
conda create -y -k --prefix "$HOME/.transformerlab/envs/transformerlab" python=3.11
conda activate ~/.transformerlab/envs/transformerlab
```

**Step 2:** Download Transformer Lab

For the following command, you can find the latest release by visiting:

https://github.com/transformerlab/transformerlab-api/releases/latest

```bash
git clone https://github.com/transformerlab/transformerlab-api.git
cd transformerlab-api
git checkout v0.23.3 # where "v0.23.3" is the latest release version
```

**Step 3:** Install Python Dependencies

#### For machines with an NVIDIA GPU:

```bash
conda activate ~/.transformerlab/envs/transformerlab
conda install -y cuda==12.8.1 --force-reinstall -c nvidia/label/cuda-12.8.1 # only if you have an NVIDIA GPU
pip install uv
uv pip install --upgrade  -r requirements-uv.txt
```

### For machines with an AMD GPU:

```bash 
conda activate ~/.transformerlab/envs/transformerlab
pip install uv
uv pip install --upgrade -r requirements-rocm-uv.txt --index=https://download.pytorch.org/whl/rocm6.4 --index-strategy unsafe-best-match # assuming you have rocm installed on your system
```

#### Or For machines without a GPU (e.g. a Mac):

```bash
conda activate ~/.transformerlab/envs/transformerlab
pip install uv
uv pip install --upgrade -r requirements-no-gpu-uv.txt
```

**Step 4:** Run the Transformer Lab Server

```bash
conda activate ~/.transformerlab/envs/transformerlab
uv run -v uvicorn api:app --port 8338 --host 0.0.0.0 --no-access-log
```

**Step 5:** GUI Setup
You can access the Transformer Lab GUI by going to the browser and navigating to `http://<your-server-ip>:8338/`.
Your server IP will be `localhost` or `127.0.0.1` if you are running it locally, or the public IP if you are running it on a cloud server.

Incase you'd like to run it within the GUI Electron app, you can download the app for your OS from [the website](https://transformerlab.ai/docs/download)

**To Connect:**

Now when you run the app at startup, go to the "Remote Connection" tab and then enter the IP address and port of your Transformer Lab API Server, then click Submit. If you are connecting to your local machine you can type `localhost` for your Server URL.

<img
src={require('../img/loginModal.png').default}
alt="Login Modal"
width="400"
/>

## System Requirements

### Client

The computer used to run the Transformer Lab App should be a Mac, PC, or Linux machine.

### Server

If you are only looking to do inference (e.g. talking to models), many different types of computers that can run Python will work.

If you are looking to train models and get higher performance, you need a server that has an NVIDIA card, or supports Apple Silicon (M Series.)

| Machine                   | Inference | Training        |
| ------------------------- | --------- | --------------- |
| PC or Linux - with GPU    | ✅ Yes    | ✅ Yes          |
| PC or Linux - without GPU | ✅ Yes    | No              |
| Mac (M1)                  | ✅ Yes    | ✅ Yes (slower) |
| Mac (M2+)                 | ✅ Yes    | ✅ Yes          |

You will see the best performance on high VRAM GPUs (such as the RTX3090 or RTX4090) or Mac M2/M3/M4 with 24GB or more of RAM.

## Security Notes

:::danger Security Warning
Read carefully. Do not run the Transformer Lab API on a machine exposed to the public Internet.
:::

Today, Transformer Lab exposes a public API on your server that accepts unauthenticated network requests. If you were to run Transformer Lab on the public internet, this would create a significant security issue. We recommend only running the API server on internal networks. If you need to access the API server from outside your internal network, use a VPN or a tool like Tailscale to avoid exposing the server to the public internet.

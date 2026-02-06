---
title: Manual Install
sidebar_position: 5
---

# Manual Installation Instructions

## Manual Install Instructions:

### install.sh Remote Script

The recommended way to install the app on a server is to follow the instructions for [Installing](./install.md). If you want to do all the steps manually, then the instructions below describe what `install.sh` does behind the scenes.

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

https://github.com/transformerlab/transformerlab-app/releases/latest

```bash
git clone https://github.com/transformerlab/transformerlab-app.git
cd transformerlab-app/api
git checkout v0.26.1 # where "v0.26.1" is the latest release version
```

**Step 3:** Install Python Dependencies

#### For machines with an NVIDIA GPU:

```bash
conda activate ~/.transformerlab/envs/transformerlab
conda install -y cuda==12.8.1 --force-reinstall -c nvidia/label/cuda-12.8.1 # only if you have an NVIDIA GPU
pip install uv
uv pip install .[nvidia]
```

### For machines with an AMD GPU:

Make sure you have ROCm installed on your system. You can find the instructions [here](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/).

```bash
conda activate ~/.transformerlab/envs/transformerlab
pip install uv
uv pip install --index=https://download.pytorch.org/whl/rocm6.4 --index-strategy unsafe-best-match .[rocm]  # assuming you have rocm installed on your system
```

#### For For machines without a GPU:

```bash
conda activate ~/.transformerlab/envs/transformerlab
pip install uv
uv pip install --index https://download.pytorch.org/whl/cpu --index-strategy unsafe-best-match .[cpu]
```

#### Or For Mac with Apple Silicon:

```bash
conda activate ~/.transformerlab/envs/transformerlab
pip install uv
uv pip install .[cpu]
```




**Step 4:** Run the Transformer Lab Server

```bash
conda activate ~/.transformerlab/envs/transformerlab
uv run -v uvicorn api:app --port 8338 --host 0.0.0.0 --no-access-log
```

**Step 5:** GUI Setup
You can access the Transformer Lab GUI by going to the browser and navigating to `http://<your-server-ip>:8338/`.
Your server IP will be `localhost` or `127.0.0.1` if you are running it locally, or the public IP if you are running it on a cloud server.

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

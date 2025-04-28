---
title: Install on Google Colab
sidebar_position: 6
---

In today's fast-evolving AI landscape, having access to powerful tools without breaking the bank is essential for researchers, students, and hobbyists alike. Google Colab offers free GPU access, making it an excellent platform for AI experimentation. In this guide, we'll walk through setting up Transformer Lab on Google Colab, allowing you to harness GPU capabilities without spending a dime.

> **Ready to jump in?** Access the complete Transformer Lab Colab notebook here: [Open Transformer Lab Notebook](https://colab.research.google.com/drive/18d98Ve8Ai5CIGzsQ0lBYMCNoTZV1B55S)


## Step-by-Step Setup Guide

### Step 1: Installing Transformer Lab

The installation begins with a simple curl command that fetches the installation script directly from GitHub:

```bash
# Install Transformer Lab
!curl https://raw.githubusercontent.com/transformerlab/transformerlab-api/main/install.sh | bash
```

This script automatically sets up the basic requirements for Transformer Lab to run in your Colab environment.

### Step 2: Fixing Dependencies

Google Colab has some quirks that require special handling. The standard installation might encounter dependency issues, so we need to manually install them:

```bash
# The above command fails to install dependencies, so install them manually
# For newer run with Colab, so you need to do the UV_CONSTRAINT command for some reason
!UV_CONSTRAINT= UV_BUILD_CONSTRAINT= uv pip install --upgrade -r /root/.transformerlab/src/requirements-uv.txt
```

This command uses `uv` (a faster Python package installer) to resolve and install all the necessary dependencies from the requirements file.

### Step 3: Setting up Access to Transformer Lab

To access the Transformer Lab interface from your browser, you need to expose the Colab kernel port:

```python
from google.colab import output
output.serve_kernel_port_as_window(8338)
```

This command creates a window that serves as your access point to the Transformer Lab interface running on port 8338.

### Step 4 (Optional): Setting up Remote Access with ngrok

If you want to access your Transformer Lab instance from another device or share it with colleagues, the ngrok setup provides a public URL:

```python
## OPTIONAL: For using Public URLs using NGROK
!pip install pyngrok
from pyngrok import ngrok

#Store auth token
!ngrok config add-authtoken YOUR_AUTH_TOKEN_HERE

#expose port 8338 with ngrok to port 443 on their servers. The URL will print out below
public_url = ngrok.connect(8338)
print("Public URL: ", public_url)
```

Replace `YOUR_AUTH_TOKEN_HERE` with your actual ngrok authentication token to make this work.

### Step 5: Launching Transformer Lab

Now it's time to launch the Transformer Lab application:

```bash
# Now run Transformer Lab and listen on port 8338
!cd /root/.transformerlab/src/ && uv run -v uvicorn api:app --port 8338 --host 0.0.0.0 --no-access-log
```

This command starts the Transformer Lab server, making it accessible through the port we set up earlier.

### Step 6: Accessing Your Lab

Your AI environment is now ready! You can:

1. **Direct Access**: Open the URL provided in the `output.serve_kernel_port_as_window(8338)` step to interact with Transformer Lab directly within Colab.

2. **Remote Access**: If you set up ngrok, you can access the app from any device by using the generated URL without "https://" and specifying port 443. For example: `e09a-104-196-15-78.ngrok-free.app` (instead of `https://e09a-104-196-15-78.ngrok-free.app`) with the port set to 443.

## Benefits of Running Transformer Lab on Colab

1. **Free GPU Access**: Leverage Google's GPUs for model training and inference without any cost.
  
2. **No Local Installation Required**: Everything runs in the cloud, so you don't need a powerful local machine.

3. **Shareable Environment**: With ngrok setup, you can share your workspace with collaborators.

## Limitations to Consider

1. **Session Time Limits**: Google Colab has runtime limitations (usually disconnects after 12 hours of inactivity).

2. **Variable Resource Allocation**: The GPU/RAM allocation can vary depending on Colab's availability.

3. **Connection Stability**: If your internet connection drops, you might lose access to your session.

## Conclusion

Setting up Transformer Lab on Google Colab opens up exciting possibilities for AI experimentation without the need for expensive hardware. Whether you're a student learning about large language models, a researcher testing new ideas, or an AI enthusiast exploring the capabilities of transformer architectures, this setup provides a practical and cost-effective solution.

Get started with your AI journey today by following these simple steps, and unlock the power of transformer models right in your browser!

---

*Remember to save your work regularly on Google Drive or locally to prevent losing progress when Colab sessions timeout.*

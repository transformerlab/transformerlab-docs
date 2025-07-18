---
sidebar_position: 6
---

# SGLang Server Plugin

The SGLang Server plugin enables multimodal (text + image) and text-only inference using SGLang-compatible models.  
This plugin is ideal for users who want to experiment with cutting-edge open-source models that support both images and text.

[SGLang](https://docs.sglang.ai/) is a high-performance inference engine optimized for compositional generation and multimodal interactions.

## Getting Started with SGLang Server

### Step 1: Install the SGLang Server Plugin

To get started, first install the SGLang Server plugin:

- Navigate to the **Plugins** section of Transformer Lab.
- Under **Loader Plugins**, locate and install the plugin named **SGLang Server**.

This enables support for serving models using SGLang's runtime.

### Step 2: Select a Supported Model

The SGLang Server requires models that are explicitly compatible with its runtime.  
You can find the full list of supported models here:

➡️ [SGLang Supported Models](https://docs.sglang.ai/supported_models/multimodal_language_models.html)

These include both text-only and multimodal models capable of handling image input.

### Step 3: Download a Compatible Model

There are two ways to get an SGLang-compatible model:

**Option A: Download from the Model Zoo**

- Go to the **Model Zoo** tab.
- Find a compatible model.
- Click the **Download** button next to the model you wish to use.

**Option B: Use the download bar**

You can use the download bar located at the bottom of the **Model Zoo** tab to download models directly from HuggingFace.

**Option C: Import Your Own**

If you've already prepared a compatible model locally, you can import it using the **Import Local Models** button in the Model Zoo.

### Step 4: Serve the Model

Once the plugin is installed and a model is downloaded:

- Go to the **Foundation** tab.
- Select the downloaded model.
- Ensure the **Inference Server** is set to **SGLang Server** (check the menu next to the **Run** button).
- Click **Run** to start the server.

### Step 5: Interact with Your Model

Once the model is running:

- Go to the **Interact** tab.
- You can now chat using **text + image** prompts, or send **text-only** completions.
- The system will route the request through the SGLang runtime based on the model’s capabilities.

<img src={require('./gifs/sglangserver.gif').default} alt="Run with SGLang" width="500" />


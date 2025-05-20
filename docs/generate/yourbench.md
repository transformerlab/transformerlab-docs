---
sidebar_position: 3
---

# Huggingface (YourBench) Dataset Generation

This page explains how to generate data from reference documents using Transformer Lab leveraging the [YourBench framework](https://github.com/huggingface/yourbench) by 🤗 Huggingface.
At the end you'll have **6** generated datasets for various tasks such as _Multi-hop QA_, _Single Shot QA_, _LightEval data_, etc.


## Step 1: Download the Huggingface (YourBench) Dataset Generator Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Huggingface (YourBench) Dataset Generator** plugin.

<img src={require('./gifs/yourbench/1_Installing.gif').default} alt="Plugin Gif" width="500" />

## Step 2: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Huggingface (YourBench) Dataset Generator**.
- A pop-up window will appear for configuring your generation task.


### Step 2.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Specify the embedding model that will be used for the generation.
- Feel free to adjust other settings, although the recommended defaults usually work best.

#### Selecting Documents

- After configuring the plugin, navigate to the **Documents** section.
- Select the file(s) or folder(s) you want to use to generate your datasets.

<img src={require('./gifs/yourbench/2_CreatingTask.gif').default} alt="Generation Task Gif" width="500" />

## Step 3: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, **6** generated datasets will be visible under the **Generated Tab** in the **Datasets** section.

<img src={require('./gifs/yourbench/3_RunningTask.gif').default} alt="Generation Task Gif" width="500" />

## Step 4: Preview Your Data

- Go to the **Generated** tab in the **Datasets** section.
- Click on any of 6 the generated datasets to preview the data.

<img src={require('./gifs/yourbench/4_DatasetPreview.gif').default} alt="Generation Task Gif" width="500" />

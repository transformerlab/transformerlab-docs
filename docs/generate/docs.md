---
sidebar_position: 1
---

# Generate Data from Documents

This page explains how to generate data from reference documents using Transformer Lab.


## Step 1: Upload Your Documents

- Navigate to the **Documents Section**.
- Choose to either upload a single document or create a folder to upload multiple documents at once.

<img src={require('./gifs/docs/UploadDocs.gif').default} alt="Docs Upload Gif" width="500" />

## Step 2: Download the Generate From Docs Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Generate From Docs Plugin**.

<img src={require('./gifs/docs/DownloadPlugin.gif').default} alt="Plugin Gif" width="500" />

## Step 3: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Generate from Documents**.
- A pop-up window will appear for configuring your generation task.


### Step 3.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Specify the embedding model that will be used for the generation.
- Feel free to adjust other settings, although the recommended defaults usually work best.

#### Selecting Documents

- After configuring the plugin, navigate to the **Documents Tab**.
- Select the file(s) or folder(s) you want to use to generate your datasets.

<img src={require('./gifs/docs/GenerationTaskCreation.gif').default} alt="Generation Task Gif" width="500" />

## Step 4: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, the generated dataset will be visible under the **Generated Tab** in the **Datasets** section.

<img src={require('./gifs/docs/GeneratingData.gif').default} alt="Generation Task Gif" width="500" />

## Step 5: Preview Your Data

- Go to the **Generated** tab in the **Datasets** section.
- Click on the dataset you generated to preview the data.

<img src={require('./gifs/docs/DatasetPreview.gif').default} alt="Generation Task Gif" width="500" />

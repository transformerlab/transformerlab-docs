---
sidebar_position: 2
---

# Generate Data from Raw Text

This page explains how to generate data from raw text using TransformerLab. Follow the steps below and refer to the screenshots as placeholders until you add your images.

<img src={require('./gifs/raw_text/DownloadPlugin.gif').default} alt="Docs Upload Gif" width="500" />

## Step 1: Download the Generate From Raw Text Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Generate From Raw Text Plugin**.
<!-- - **Screenshot Placeholder:** ![Plugin Download](path/to/plugin-download-placeholder.png) -->

## Step 2: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Generate from Raw Text**.
- A pop-up window will appear for configuring your generation task.
<!-- - **Screenshot Placeholder:** ![Create Task](path/to/create-task-placeholder.png) -->

### Step 2.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.
<!-- - **Screenshot Placeholder:** ![Name Task](path/to/name-task-placeholder.png) -->

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Specify the number of samples you want to generate.
<!-- - **Screenshot Placeholder:** ![Configure Plugin](path/to/configure-plugin-placeholder.png) -->

#### Entering Context

- After configuring the plugin, navigate back to the **Context** tab.
- Paste the raw context you want to use to generate your datasets.

## Step 3: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, the generated dataset will be visible under the **Generated Tab** in the **Training Data** section.
<!-- - **Screenshot Placeholder:** ![Run Task and View Generated Data](path/to/generated-data-placeholder.png) -->

<img src={require('./gifs/raw_text/CompleteGeneration.gif').default} alt="Docs Upload Gif" width="500" />

## Step 4: Preview Your Data

- Go to the **Generated** in the **Training Data** section.
- Click on the dataset you generated to preview the data.
<!-- - **Screenshot Placeholder:** ![Preview Data](path/to/preview-data-placeholder.png) -->

<img src={require('./gifs/raw_text/DatasetPreview.gif').default} alt="Docs Upload Gif" width="500" />

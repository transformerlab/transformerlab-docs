---
sidebar_position: 2
---

# Generate Fact-based QnA Dataset From Documents

This page explains how to generate a fact-based question and answer dataset from documents using Transformer Lab.

## Step 1: Upload Your Documents

- Navigate to the **Documents Section**.
- Choose to either upload a single document or create a folder to upload multiple documents at once.

> **Note**: If you plan to use these documents for RAG as well then you should upload the documents in a folder called `rag` for enabling automatic indexing.

<img src={require('./gifs/qna_dataset/1_UploadingDocs.gif').default} alt="Docs Upload Gif" width="500" />

## Step 2: Download the Generate Dataset with QA Pairs for RAG Evaluation Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Generate Dataset with QA Pairs for RAG Evaluation** Plugin.

<img src={require('./gifs/qna_dataset/2_DownloadingPlugin.gif').default} alt="Plugin Gif" width="500" />

## Step 3: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Generate Dataset with QA Pairs for RAG Evaluation**.
- A pop-up window will appear for configuring your generation task.

### Step 3.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Add the Number of QA Pairs you'd like to generate. The default is 10.
- Feel free to adjust other settings, although the recommended defaults usually work best.

#### Selecting Documents

- After configuring the plugin, navigate back to the **Documents Tab**.
- Select the file(s) or folder(s) you want to use to generate your datasets.

<img src={require('./gifs/qna_dataset/3_GenerationTaskCreation.gif').default} alt="Generation Task Gif" width="500" />

## Step 4: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, the generated dataset will be visible under the **Generated** tab in the **Training Data** section.

## Step 5: Preview Your Data

- Go to the **Generated** tab in the **Training Data** section.
- Click on the dataset you generated to preview the data.

<img src={require('./gifs/qna_dataset/4_DatasetPreview.gif').default} alt="Generation Task Gif" width="500" />

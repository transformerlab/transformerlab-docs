---
sidebar_position: 6
---

# Generate Batched RAG Outputs from Datasets

This page explains how to generate batched RAG (Retrieval-Augmented Generation) outputs from datasets using Transformer Lab.

## Prerequisites

Before using the RAG Batched Outputs Generator, you need:

1. A dataset containing input questions
2. The RAG Plugin installed in Transformer Lab
3. A running foundation model (you can enable this from the Foundation tab)

## Step 1: Download the RAG Batched Outputs Generator Plugin

- Go to the **Plugins Tab**
- Use the filter by type **generator** to narrow down the list
- Find and download the **RAG Batched Outputs Generator** plugin

<img src={require('./gifs/rag_outputs_batched/1_DownloadingPlugin.gif').default} alt="Plugin Download Gif" width="500" />

## Step 2: Create a Generation Task

- Navigate to the **Generate Tab**
- Click on **Create Task**
- From the drop-down menu, select **RAG Batched Outputs Generator**
- A pop-up window will appear for configuring your generation task

### Step 2.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**
- Configure the following settings:
  - **Input Field**: Specify the column name in your dataset containing the input questions
  - **RAG Parameters**:
    - Set retrieval options (number of chunks, similarity threshold, etc.)
    - Configure generation parameters
  - **Reranker Options**:
    - Toggle **Use Reranker** to enable/disable reranking of retrieved documents
    - If enabled, enter the name of the reranker model from HuggingFace or the path to the reranker

#### Selecting Your Dataset

- Navigate to the **Dataset** tab
- Select the dataset containing your input questions

<img src={require('./gifs/rag_outputs_batched/2_CreatingTask.gif').default} alt="Task Configuration Gif" width="500" />

## Step 3: Run the Task

- Once you have configured your task, click on the **Create** button
- Click on the **Queue** button to start the generation process
- The task will begin processing each input in your dataset through the RAG pipeline

<img src={require('./gifs/rag_outputs_batched/3_RunningTask.gif').default} alt="Task Configuration Gif" width="500" />


## Step 4: View the Generated Output

- When the task completes, a new dataset will be created in the **Datasets** tab
- This dataset will contain:
  - Your original data columns
  - The RAG-generated outputs
  - Retrieved context used for generation
  - If your input dataset was created with the "RAG QA Dataset Generator for RAG Evaluation" plugin, an **expected_output** column will also be preserved for evaluation purposes

<img src={require('./gifs/rag_outputs_batched/4_ResultsPreview.gif').default} alt="Results Viewing Gif" width="500" />

## Use Cases

This plugin is particularly useful for:

- Batch processing queries through your RAG system
- Testing RAG performance on large datasets
- Preparing data for RAG system evaluation
- Comparing different RAG configurations

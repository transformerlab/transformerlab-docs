---
sidebar_position: 5
---

# Generate Data from Scratch

This page explains how to generate data from just concepts of a dataset using Transformer Lab.

## Step 1: Download the Generate From Scratch Plugin

- Go to the **Plugins Tab**.
- Use the filter by type **generator** to narrow down the list.
- Download the **Generate From Scratch Plugin**.

<img src={require('./gifs/scratch/DownloadPlugin.gif').default} alt="Docs Upload Gif" width="500" />

## Step 2: Create a Generation Task

- Navigate to the **Generator Tab**.
- Click on **Create Task**.
- From the drop-down menu, select **Generate from Scratch**.
- A pop-up window will appear for configuring your generation task.

### Step 2.1: Configure Your Task

#### Name Your Generation Task

- In the first tab of the pop-up window, enter a name for your generation task.

#### Plugin Configuration

- Move to the next tab labeled **Plugin Config**.
- Select the generation model from the options available:
  - Options include various Claude and OpenAI models, or a local model loaded in the Foundation tab.
- Specify the number of samples you want to generate.

#### Entering Dataset Concepts

- **Scenario:** Describe the scenario for which you'd like to generate the data. e.g. `Less knowledgeable fans trying to know more about the basketball game.`
- **Task:** Describe the task you'd like to generate the data for. e.g. `Answer questions about rules of basketball`
- **Input Format:** Describe the input format for the data. e.g. `Questions about basketball rules`
- **Expected Output Format:** Describe the output format for the data. e.g. `Answers to the questions about basketball rules`

<img src={require('./gifs/scratch/CreateGenerationTask.gif').default} alt="Docs Upload Gif" width="500" />

## Step 3: Run the Task

- Once you have saved your evaluation task, click on the **Queue** button to start the generation process.
- When the generation is complete, the generated dataset will be visible under the **Generated Tab** in the **Training Data** section.

<img src={require('./gifs/scratch/CreateGenerationTask.gif').default} alt="Docs Upload Gif" width="500" />

## Step 4: Preview Your Data

- Go to the **Generated** in the **Training Data** section.
- Click on the dataset you generated to preview the data.

<img src={require('./gifs/scratch/DatasetPreview.gif').default} alt="Docs Upload Gif" width="500" />

---
sidebar_position: 7
---

# Uploading Image Datasets

## Downloading Datasets from Hugging Face

On the **Datasets** tab, switch to the **Local Datasets** view. At the bottom left, use the search bar to find and download any text or image dataset directly from Hugging Face.

## Uploading Local Image Datasets

You can upload your own image datasets in standard Hugging Face format.

1. In **Local Datasets**, click the **New** button at the bottom right.
2. In the upload dialog:
   - **Dataset Name**: Enter a unique name for your dataset.
   - **Type**: Select **Image**.
   - **Folder**: Choose a local folder containing images organized in Hugging Face’s image dataset structure (see [Huggingface Image Datasets](https://huggingface.co/docs/datasets/en/image_dataset)).
3. **Drag and drop** your folder into the dialog or click to select it.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/imgdatasets-uploading-data.gif').default} width="600" />
  <p><em>Uploading a new image dataset</em></p>
</div>

Once complete, a new dataset card appears in **Local Datasets**:

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/imgdatasets-preview.gif').default} width="600" />
  <p><em>Previewing an uploaded image dataset</em></p>
</div>

## Editing Image Datasets

Transformer Lab preserves provenance by creating a new dataset when you edit.

1. On any local image dataset card, click the **Edit** icon.
2. In the edit dialog you can:
   - Modify any metadata column (caption, label, etc.).
   - Change the **split** value for each row (accepted: `train`, `valid`, `test`; any other value defaults to `train`).
3. Note: Datasets uploaded from Parquet files are not supported for editing.
4. Click **Save** to create an edited copy, leaving the original intact.

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/imgdatasets-editing.gif').default} width="600" />
  <p><em>Editing an uploaded image dataset</em></p>
</div>

After saving, the edited dataset appears alongside the original:

<div style={{textAlign: 'center'}}>
  <img src={require('./gifs/imgdatasets-editpreview.gif').default} width="600" />
  <p><em>Previewing the edited image dataset</em></p>
</div>
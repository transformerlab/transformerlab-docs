---
sidebar_position: 10
---

import Button from '@site/src/components/Button';

# 6. Work with Training Data

## Download Data

You can download a dataset from the Gallery by clicking on the <Button>Download</Button> button on a specific dataset.

<img src={require('./img/dataset-store.png').default} alt="Dataset Zoo" width="700" />

Once a dataset is local, you can click on the <Button>Preview</Button> Button to see the first few entries.

<img src={require('./img/preview-dataset.png').default} alt="Dataset Zoo" width="340" />

## Upload your Own Data

Go to Training Data -> Local Datasets -> <Button>New +</Button> in order to upload your own data.

<img src={require('./img/new-dataset-button.png').default} alt="Dataset Zoo" width="700" />

After giving your dataset a unique name, upload your data files using drag and drop.

Uploading training data to Transformer Lab is very simple. Simply create two files in either JSONL or CSV format.

- The training data must end with "\_eval.jsonl"
- The evaluation data must end with "\_train.jsonl"

For example, you could create two files called `summarization-task_eval.jsonl` and `summarization-task_train.jsonl`

If using JSONL, each row of your datafiles should contain a single JSON object for example:

```json
{"text": "Lorem ipsum dolor sit samet, consectetur adipiscing elit. Suspendisse ut enim in risus cursus"}
{"text": "Vestibulum id dui feugiat, interdum lacus nec, interdum ex. Maecenas"}
```

Now take both files and drag them into the Transformer Lab App and click on <Button>Upload Files</Button>

<img src={require('./img/dataset-build.gif').default} alt="Dataset Zoo" width="700" />

This will create a new Dataset that you can later use to [train or finetine a model](./8-training.md).

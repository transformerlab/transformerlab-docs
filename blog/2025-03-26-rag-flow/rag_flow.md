---
slug: rag-flow
title: Building and Evaluating a RAG Pipeline in Transformer Lab
authors: deep
tags: [rag, pipeline, transformerlab]
---

Retrieval-Augmented Generation (RAG) combines the power of retrieval systems with generative AI to create more accurate, factual, and contextually relevant responses. In this hands-on tutorial, we'll walk through building and evaluating a complete RAG pipeline in Transformer Lab using documentation files as our knowledge base.

<!-- truncate -->

## What We'll Build

In this tutorial, we will:

1. Use three .md documents from the Transformer Lab documentation
2. Generate a RAG QnA dataset from these documents
3. Fine-tune the `BAAI/bge-base-en-v1.5` embedding model
4. Compare RAG results between the pre-trained and fine-tuned embedding models
5. Evaluate performance using contextual precision and answer relevancy metrics

Let's get started!

## Step 1: Upload Your Documents

First, we'll upload three markdown documentation files from the Transformer Lab project.

1. Navigate to the Documents tab in Transformer Lab
2. Create a new folder called `rag`
3. Upload the following three .md files from our documentation:
   - `docs.md`
   - `scratch.md`
   - `raw_text.md`

<img src={require('./gifs/1.gif').default} alt="GIF" width="500" />

*These files contain detailed information about the three synthesizer plugins (Generate from Documents, Raw Text and Scratch) in Transformer Lab.*

## Step 2: Generate a RAG Q&A Dataset

Next, we'll create a dataset of questions and answers based on our documentation files.

1. Navigate to the `Generate` tab
2. Select `Generate Dataset with QA Pairs for RAG Evaluation` plugin
3. Configure the plugin task:
   - Documents: `rag`
   - Number of QA pairs: 20
   - Generation Model: **GPT-4o-mini**
4. Generate the Q&A pairs automatically

<img src={require('./gifs/2.gif').default} alt="GIF" width="500" />

*The generated dataset will contain questions that span different aspects of the documentation.*

## Step 3: Fine-tune an Embedding Model

Now we'll fine-tune the `BAAI/bge-base-en-v1.5` embedding model on our documentation.

1. Go to the `Train` tab.
2. Select the `Embedding Model Trainer` plugin.
3. Configure the fine-tuning parameters:
   - Dataset: Your generated RAG QnA dataset
   - Dataset Type: `single sentences`
   - Loss Function: `DenoisingAutoEncoderLoss`
   - Text Column Name: `context`
4. Start the fine-tuning process

<img src={require('./gifs/3.gif').default} alt="GIF" width="500" />

*We're fine-tuning on our specific documentation domain to improve retrieval performance on Transformer Lab-related queries.*

## Step 4: Select Your Embedding Model

After fine-tuning, we'll test both the original and fine-tuned models:

1. Navigate to the Foundation tab
2. First, select the original "BAAI/bge-base-en-v1.5" model from the dropdown
3. We'll run tests with this, then switch to our fine-tuned model later

*By selecting the embedding model in the Foundation tab, we tell the system which embeddings to use for our RAG pipeline.*

## Step 5: Configure the Model Server

Let's run the model server with our selected embedding model:

1. Ensure the original "BAAI/bge-base-en-v1.5" model is selected in the Foundation tab
2. Run the model server to use for the RAG pipeline.
3. Wait for confirmation that the server is running successfully

*The model server needs to be running for the RAG pipeline to generate embeddings for our documents.*

## Step 6: Generate Answers Using RAG with the Pre-trained Model

Now we'll test our RAG pipeline using the original pre-trained embedding model:

1. Go to the Plugins section
2. Select the "RAG Batched Outputs Generator" plugin
3. Select the generated dataset in **Step 2**
   (The plugin automatically uses the BAAI/bge-base-en-v1.5 model we selected in the Foundation tab)

<img src={require('./gifs/4.gif').default} alt="GIF" width="500" />

## Step 7: Switch to the Fine-tuned Model and Compare Results

Now let's repeat the process with our fine-tuned embedding model:

1. Return to the Foundation tab
2. Select your fine-tuned version of "BAAI/bge-base-en-v1.5"
3. Restart the model server with this new model
4. Run the same queries through the "RAG Batched Outputs Generator" plugin
5. Compare the results from both models

*This comparison will help us understand how fine-tuning improves or degrades retrieval quality for our specific documentation domain.*

<img src={require('./gifs/5.gif').default} alt="GIF" width="500" />


## Step 8: Evaluate Performance

Finally, let's quantitatively evaluate both models:

1. Go to the Plugins section
2. Select the "DeepEval Evaluations (LLM-as-Judge)" plugin
3. Create a task for each RAG outputs generation
   - Task 1: Pre-trained model results
   - Task 2: Fine-tuned model results
4. Configure the evaluation:
   - Metrics: "Contextual Precision" and "Answer Relevancy"
   - Dataset: Results from the RAG outputs
5. Run the evaluation and analyze results and compare them

<img src={require('./gifs/6.gif').default} alt="GIF" width="500" />


*The evaluation results will show us how fine-tuning affects:*

- *Contextual Precision: How accurately the retrieved content matches the query context*
- *Answer Relevancy: How relevant the generated answers are to the original questions*

## Results Analysis

The specific improvements will vary based on your fine-tuning parameters, size of the data and documentation content. We get lower scores because we fine-tuned the embedding model on only 20 QnA pairs which degraded the embedding model.

## Conclusion

In this tutorial, we've built a complete RAG pipeline using Transformer Lab documentation, fine-tuned an embedding model, and quantitatively compared performance between pre-trained and fine-tuned models.

This approach demonstrates how domain-specific fine-tuning can affect RAG performance for specialized knowledge bases. By following these steps, you can create and evaluate your own custom RAG solutions for any domain-specific use case.

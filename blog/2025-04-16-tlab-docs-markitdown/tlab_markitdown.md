---
slug: markitdown-support
title: Expanding Document Support in Transformer Lab with Markitdown
authors: deep
tags: [documents, rag, pipeline, transformerlab, markitdown]
---

We're excited to announce a significant enhancement to Transformer Lab - integration with the open-source [Markitdown](https://github.com/microsoft/markitdown) library from Microsoft! This update dramatically expands the types of documents you can work with in Transformer Lab, making it more versatile and powerful for your AI projects.

<!-- truncate -->

## Enhanced Document Support

Previously, Transformer Lab supported a limited set of document formats. With the Markitdown integration, you can now upload and process:

- Microsoft Word documents (docx)
- Excel spreadsheets
- PowerPoint presentations (ppt/pptx)
- HTML files
- ZIP archives containing multiple documents
- Plus all previously supported formats (PDF, Markdown, etc.)

Let's explore some of these new capabilities!

## Document Upload Demonstrations

### Excel Files

Excel spreadsheets are now seamlessly converted to a readable format within Transformer Lab:

<img src={require('./gifs/1_ExcelUpload.gif').default} alt="GIF" width="500" />

### Word Documents

Microsoft Word documents maintain their structure when imported:

<img src={require('./gifs/2_DocxUpload.gif').default} alt="GIF" width="500" />

### Bulk Uploads with ZIP Archives

Need to process multiple documents at once? Simply zip them up and upload:

<img src={require('./gifs/3_ZipUpload.gif').default} alt="GIF" width="500" />

## RAG with Various Document Types

One of the most powerful applications of this enhanced document support is the ability to perform Retrieval-Augmented Generation (RAG) on a wider variety of content types. Here's how you can use presentations in your RAG pipeline:

<img src={require('./gifs/4_RAGUpload.gif').default} alt="GIF" width="500" />
<img src={require('./gifs/5_RAGInference.gif').default} alt="GIF" width="500" />


## Introducing Web Content Import

Perhaps the most exciting new feature is our "Add Webpage" functionality. When clicking the "+" icon on the Documents page, you'll now see this option which allows you to:

1. Import any webpage by URL (automatically converted to Markdown)
2. Import YouTube videos (including metadata and transcript extraction)

Here's how it works:

<img src={require('./gifs/6_WebpageUpload.gif').default} alt="GIF" width="500" />

The YouTube import feature is particularly powerful - it automatically extracts the video transcript and presents it as a markdown file within Transformer Lab, making video content immediately available for your AI applications.

## Conclusion

With these enhancements, Transformer Lab becomes an even more versatile platform for working with diverse data sources. Whether you're building RAG applications, training models, or exploring document processing, the expanded format support means less time converting documents and more time focusing on your AI projects.

Give these new features a try and let us know what you think! We're excited to see the new use cases this enables for our community.

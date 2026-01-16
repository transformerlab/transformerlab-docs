---
title: S3 Alternatives
sidebar_position: 50
---

While our documentation frequently references AWS S3, it is important to know that S3 is not a hard requirement. Transformer Lab is designed to be storage-agnostic.

Many research environments and academic labs have strict data governance policies, air-gapped systems, or pre-existing investments in local high-performance storage.


### 1. S3 is a default, but Not a Restriction

Most of our guides use S3 because it is a common standard for cloud-native machine learning. However, our filesystem abstraction is highly flexible. If your lab uses a different provider or local storage, you can likely swap the endpoint configuration without changing your workflow. Please reach out to our team and we can help you map to another filesystem.

### 2. Fsspec Supports 20+ Storage Backends via fsspec

Under the hood, Transformer Lab abstracts the filesystem using the fsspec Python library. This allows us to interface seamlessly with almost any storage protocol.

If you cannot use S3, we can help you connect to:

* Local disk directly
* NFS / Lustre / BeeGFS (Common in HPC environments)
* Google Cloud Storage (GCS)
* Azure Blob Storage
* SFTP / SSH
* HDFS

Need help configuring a custom backend? Please reach out to our engineering team and we can provide the specific configuration strings for your lab's environment.

### 3. The Power of "Global" Filesystems

We advocate for Remote File Systems (like S3 or EFS) because they unlock special powers in a Machine Learning Research Platform. This setup allows you to:

* **Work Cross-Cloud:** Run training on Azure but evaluate on AWS using the same data source.
* **Resilient Checkpointing:** Save a model checkpoint from one cluster and instantly restart the training on a completely different set of nodes if the first set is preempted.

If your lab environment is extremely restrictive and does not allow for any filesystem abstraction or remote mounting, you can benefit from Transformer Lab. Technically, the tool can run using only the local disk on your compute nodes. This limits some of the "roaming" capabilities of your experiments, but it ensures you can still leverage our training and fine-tuning suite.

## Open Source Means Flexibility

We are interested in working with the world's best labs. If you have custom needs we'd love to chat with you about how to make them possible, even if it means creating or adapting our core. Let's chat!
---
sidebar_position: 3
---

# Terminology

### Node Pool: ###

A node pool is group of computers a user has access to. This can be either through a public cloud such as Azure, GCP, AWS, Runpod. Or it can be a group of computers you have in your lab or on-prem cluster.

### Instance: ###

An instance is a virtualized group of computers that a researcher has access to as either a reservation or through a job.

### Reservation: ###

A reservation is a way for a researcher to hold onto an **instance** for an indefinite amount of time. For example, a researcher may need to reserve a machine for a day while they run inference on a model or use a Jupyter Notebook.

### Job: ###

A Job is a specific, finite task that runs to completion, such as training a model, running a data processing script, or performing batch inference. Once the task is finished, the job and its associated computing resources are terminated. This is different from a machine reservation which does not have a "completion".

### Quota: ###

A Quota is the limit on the amount of computing resources (usually GPU) that a user, team, or project is allowed to use. Quotas ensure fair access to shared resources and help manage costs. Quota in Transformer Lab is measured in credits but credits map directly to real dollar cost.

### Object Storage: ###

Jobs and the machines they run on are _ephemeral_, meaning they are temporary and get deleted once your task is complete. **Object Storage** is the permanent place to store important assets like datasets, models, and logs that need to persist beyond the lifetime of a single job.

To a machine instance, object storage is mounted to look and behave just like a local disk or folder at a specific location.  This allows your code to read and write files using standard file system operations. However, it isn't a physical disk attached to your machine. Instead, it's a highly scalable and durable storage system (like Amazon S3) made accessible through a technology like FUSE (Filesystem in Userspace), which translates file system commands into API calls to the storage service. 


### Volume: ###

Like Object Storage, a Volume is a persistent storage unit, like a virtual hard drive, that can be attached to your jobs and machines. Unlike Object Storage, Volumes are more like a real drive thata "attaches" to a machine, rather than an emulated disk. However they are more expensive.

### Workspace: ###

Transformer Lab mounts a special Object Store at `/workspace` on every instance. On this mount, Transformer Lab stores common objects that can be accessed across the team.
---
sidebar_position: 10
---

# Storage

## Introduction

Jobs and the machines they run on are ephemeral, meaning they are temporary and get deleted once your task is complete. **Object Storage** is the permanent place to store important assets like datasets, models, and logs that need to persist beyond the lifetime of a single job.

To a machine instance, object storage is mounted to look and behave just like a local disk or folder at a specific location. This allows your code to read and write files using standard file system operations. However, it isn't a physical disk attached to your machine. Instead, it's a highly scalable and durable storage system (like Amazon S3) made accessible through a technology like FUSE (Filesystem in Userspace), which translates file system commands into API calls to the storage service.

Instead of Object Storage, you can also mount regular Volumes, which are network disks provided by certain cloud providers. Unlike Object Storage, Volumes operate more like regular disks, however they are likely to be more expensive.

## How to add storage

Admins can go to Admin -> Object Storage and Admin -> Volumes to add object stores or disk volumes.
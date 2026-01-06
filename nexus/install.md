---
title: Install Instructions
slug: install
sidebar_position: 20
---

## Step 1 - Set up a Cloud Provider

Transformer Lab executes tasks by sending them to a GPU orchestrator like **SLURM** or **SkyPilot**. So your first step in setting up Transformer Lab is making sure you have a properly configured SLURM or SkyPilot instance.

The following documents offer common install instructions that you can use if you are starting from scratch

* [Instructions for setting up SLURM from scratch on your own compute](./install-gpu-orchestrator/install-slurm.md)
* [Setting up SLURM on AWS](./install-gpu-orchestrator/install-slurm-on-aws.md)
* [Setting up SLURM on Runpod] TODO
* [Instructions for setting up SkyPilot from Scratch](./install-gpu-orchestrator/install-skypilot.md)
* [Setting up Skypilot on Nebius Cloud] TODO

## Step 2 -- Install Transformer Lab

Transformer Lab needs a CPU node to run.

SSH into that node and run:

```bash
curl https://lab.cloud/install.sh | bash
```

## Step 3 -- Configure Team Edition

Now create a file in `~/.transformerlab` called `.env`

And copy and paste the following information:

```text
TL_API_URL="http://localhost:8338/"  # Auto-set this as the default API URL
MULTIUSER="true" # Set to "true" to enable multi-user features

# Frontend URL (used for generating invitation links and auth redirects)
FRONTEND_URL="http://localhost:1212" # Set to your frontend URL. If running locally, use localhost:1212 (default port when performing npm start)

TRANSFORMERLAB_JWT_SECRET=<random character string for auth. Generally created by install.sh but you can set your own here>
TRANSFORMERLAB_REFRESH_SECRET=<random character string for auth. Generally created by install.sh but you can set your own here>
TFL_API_STORAGE_URI=true # Setting this to true uses the transformerlab-s3 profile in your AWS credentials to create and use a S3 bucket as your remote workspace
```

## Step 4 -- Configuring a Compute Service


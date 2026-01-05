---
title: Install Instructions
slug: install
sidebar_position: 20
---

## Step 1 - Set up a Cloud Provider

Transformer Lab executes tasks by sending them to a GPU orchestrator like **SLURM** or **SkyPilot**. So your first step in setting up Transformer Lab is making sure you have a properly configured SLURM or SkyPilot instance.

The following documents offer common install instructions that you can use if you are starting from scratch

* Instructions for setting up SLURM from scratch on your own compute
* Setting up SLURM on AWS
* Setting up SLURM on Runpod
* Instructions for setting up SkyPilot from Scratch
* Setting up Skypilot on Nebius Cloud

## Step 2 -- Install Transformer Lab

Transformer Lab needs a CPU node to run.

SSH into that node and run:

```bash
curl https://lab.cloud/install.sh | bash
```

## Step 3 -- Configure Team Edition

Now create a file in `~/.transformerlab/src` called `.env`

And copy and past the following information:

```text
A=B
C=D
```

## Step 4 -- Configuring a Compute Service


---
title: Choosing Between SkyPilot and Slurm
sidebar_position: 1
---


Transformer Lab abstracts the job submission process, so for the most part, Slurm and SkyPilot will work similary from a user-interface perspective in Transformer Lab.

If you are starting from scratch, here is a practical look at how to choose the right engine for your workload.

## Slurm: The On-Premise Traditional HPC Tool
If you work in a university research lab or a large enterprise with its own private data center, you are probably already using Slurm. It is the standard scheduler for managing shared resources on hardware that you (or your organization) already own.

* **When to use it:** Use Slurm if you have access to a pre-existing cluster (like a university supercomputer) where the hardware is always on and waiting for jobs.
* **The Downside:** Slurm generally assumes the hardware is static. It isn't "smart" about cloud costs—it won't typically shut down nodes to save money or hunt for cheaper instances in different regions.

## SkyPilot: The Cloud-Native Manager
SkyPilot is a more modern framework designed specifically for the fluid nature of the cloud.

* **When to use it:** Use SkyPilot if you are running on AWS, GCP, Azure, or Kubernetes (or a blend of them) and want to provision resources dynamically.
* **The Upside:**
    * **Auto-Provisioning:** It handles the messy work of requesting the VM, setting up the environment, and mounting storage.
    * **Cost Savings:** It supports "Spot" instances with auto-recovery. If a cheap spot instance is taken away, SkyPilot can automatically move your job to a new one.

## Summary

In summary, both systems have their strengths. If you are setting up a new lab and don't have specific needs from Slurm, our personal recommendation would be to set up SkyPilot so you can use it to access local compute **and** cloud compute through a single interface.

If you choose to setup SkyPilot and have your own local cluster, we suggest setting up local nodes as **SSH Nodes** in SkyPilot during initial testing, but in the long run it will be worth it to set up a local Kubernetes cluster (using the instructions in the SkyPilot documentation). This will allow you to leverage the full power of Kubernetes and SkyPilot.
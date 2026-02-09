---
title: Installing Slurm
sidebar_position: 10
---

## Production

The full instructions to installing Slurm on a cluster are on the Slurm website here:

https://slurm.schedmd.com/quickstart_admin.html#quick_start

## On AWS


It's relatively simple to use the AWS Parallel Computing Service to install Slurm automatically. Make sure to select Slurm version 25.05

https://aws.amazon.com/pcs/

## Test

If you are installing a test Slurm cluster on a single node, this Docker-based tool works well to simulate a cluster of nodes on single machine:

https://github.com/giovtorres/slurm-docker-cluster
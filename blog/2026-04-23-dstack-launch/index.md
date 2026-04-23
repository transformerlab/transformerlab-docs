---
slug: dstack-launch
title: "Train anywhere. Track everything. Transformer Lab now runs on dstack."
authors: [tony]
tags: [dstack, cloud, gpu, training, orchestration, multi-cloud]
date: 2026-04-23
---

Transformer Lab now has built-in support for [dstack](https://dstack.ai). If your lab has GPUs scattered across clouds, on-prem boxes, or a mix of both, this improves how you run jobs.

<!--truncate-->

## What is dstack?

[dstack](https://dstack.ai) is an open source control plane for AI infrastructure. You point it at the GPUs you have access to, wherever they live, and dstack handles the provisioning, scheduling, and cluster management for you.

Concretely, that means dstack can orchestrate GPUs across:

- AWS, GCP, Azure, Lambda, Nebius, Crusoe, Runpod, OCI, Vultr, Vast.ai
- Kubernetes clusters
- Bare-metal servers and on-prem clusters over SSH

With dstack, you can point Transformer Lab at AWS for one run, Runpod for the next, and your institution's bare-metal cluster right after that. You can switch backends without touching your training code.

It supports NVIDIA, AMD, TPU, and Tenstorrent. The interface is a clean CLI and YAML config rather than the usual pile of scheduler flags.

Teams at EA, Mobius Labs, and ETRI use dstack today. It's trusted, mature and actively developed.


## Why we integrated with dstack

Researchers on our platform kept telling us: give me one research workspace that works regardless of where the GPU is.

Transformer Lab already handles the research workflow. We partnered with dstack since we didn't want to reinvent GPU orchestration. dstack's model matches how modern ML teams actually run: heterogeneous compute, spot instances, multi-cloud, on-prem plus burst.

We believe integrating dstack increases the surface area for researchers to find their required compute.


## What this unlocks for research labs

The short version: you write your training code once and run it anywhere, with your experiment history in one place.

Here's what that looks like in practice.

### Scenario A: a researcher fine-tuning a 7B model

You open Transformer Lab. You already have a training script in a GitHub repo. You create a task pointing at the repo and write a short `task.yaml`:

```yaml
name: qwen-7b-sft
resources:
  compute_provider: dstack
  accelerators: "H100:8"
  num_nodes: 1
github_repo_url: "https://github.com/your-team/qwen-sft.git"
setup: "pip install -r requirements.txt"
run: "python train.py --lr 2e-5"
minutes_requested: 180
```

Click Launch. dstack finds an H100:8 fleet (on whichever cloud has capacity or the best price that day), provisions the instance, pulls your code, and starts training. Metrics stream back to the Transformer Lab dashboard in real time. Checkpoints persist. When the node terminates, your artifacts stay put.

Two weeks later you want to run the same thing on an on-prem cluster your lab just got access to. You change `compute_provider` and relaunch. Same task, same tracking, same artifacts view. Different compute. Nothing else changes.

### Scenario B: a sweep across configurations

You want to sweep learning rates for a new architecture. Add a sweep block to the task:

```yaml
sweeps:
  sweep_config:
    learning_rate: [1e-5, 2e-5, 3e-5, 5e-5]
  sweep_metric: "eval_loss"
  lower_is_better: true
```

Transformer Lab queues the Cartesian product. dstack provisions the GPUs. Each run is tracked as a separate job, all comparable side-by-side in the UI. When the sweep finishes, the best config is obvious.

### Scenario C: multi-node distributed training

Bump `num_nodes` to 4. dstack handles the cluster provisioning, networking, and NCCL setup. Your script runs across nodes. If capacity gets yanked mid-run (spot instances, preemption, whatever), the checkpoint is safe in object storage and you can resume.


## Why a researcher should care

This removes the most annoying part of the job.

**Stop rewriting infrastructure code.** Your training script doesn't need to know where it's running. Transformer Lab handles the workspace, dstack handles the compute.

**Stop losing work.** Checkpoints, artifacts, and metrics live in one place regardless of which cloud, cluster, or node ran the job. Your experiment history stays intact even as the underlying GPUs come and go.

**Stop being locked in.** If your lab moves from one cloud to another, or adds on-prem capacity, or wants to try a new GPU provider, you only need to reconfigure the compute layer. The research layer doesn't change.

**Easily compare runs.** Same eval harness, same metric logging, same artifact structure across every run on every backend. That's the whole point of a research platform, and we think it gets much harder to achieve when the compute layer is ad hoc.

**Move faster.** The time from "I have an idea" to "I have a trained model to evaluate" drops significantly when the path from laptop to H100 cluster is a YAML edit and a click.

**Reproducible, portable research.** Because the infrastructure is declared as code alongside your experiment config, sharing a run setup is as simple as sharing a file. Your collaborator can reproduce your environment exactly: same GPU type, same Docker image, same setup steps without a long README of manual steps.


## How to try it

Transformer Lab is open source and free. dstack is open source. Both run locally, on your own servers, or in the cloud.

- Transformer Lab docs: [lab.cloud/for-teams/](https://lab.cloud/for-teams/)
- Transformer Lab repo: [github.com/transformerlab](https://github.com/transformerlab)
- dstack repo: [github.com/dstackai/dstack](https://github.com/dstackai/dstack)

If you're evaluating where to centralize your research workflow, this is a good moment to take it for a spin. We'd love to hear what you'd want next.

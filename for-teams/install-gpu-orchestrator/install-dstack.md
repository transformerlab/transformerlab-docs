---
title: Installing dstack
sidebar_position: 25
---

dstack is an open-source orchestrator for running AI workloads across clouds and on-prem infrastructure.

## Install and run dstack

Install and run dstack in your environment (local machine, VM, or cluster for the control plane). For full instructions, see the [dstack documentation](https://dstack.ai/docs/installation/).

Make sure the dstack API is reachable from the machine running the Transformer Lab API. For example, running dstack with `--host 0.0.0.0` and exposing the default port (`3000`) allows access from other machines.

## Gather connection details

You will need these values when adding dstack as a compute provider in Transformer Lab:

- `server_url` — e.g. `http://<host>:3000`
- `api_token` — Bearer token from your dstack server
- `dstack_project` — typically `main`

Once dstack is running, continue to [Add dstack as a Compute Provider →](../configure-compute/dstack.md)

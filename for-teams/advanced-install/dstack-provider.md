---
title: dstack Provider Setup
sidebar_position: 50
---

This guide explains how to set up dstack and add it as a compute provider in Transformer Lab.

## 1. Prepare dstack

- Install and run dstack in your environment (local machine, VM, or cluster for the control plane). For more details, see the [dstack documentation](https://dstack.ai/docs/installation/).
- Make sure the dstack API is reachable from the machine running the Transformer Lab API. For example, running dstack with `--host 0.0.0.0` and exposing the port (default `3000`) allows access from other machines if the IP is accessible.
- Gather the values you will need:
  - `server_url` (example: `http://<host>:3000`)
  - `api_token` (Bearer token)
  - `dstack_project` (typically `main`)

## 2. Add dstack provider in the Transformer Lab UI

After Transformer Lab is set up and you've logged in, follow these steps to add your dstack provider:

1. Open **Team Settings**.
2. Go to **Compute Providers**.
3. Click **Add Compute Provider**.
4. In the modal:
   - Set **Type** to **`dstack (beta)`**.
   - Give the provider a name (for example: `dstack-provider`).
   - In **Config**, set:
     - **dstack Server URL** (`server_url`)
     - **dstack API Token** (`api_token`)
     - **dstack Project Name** (`dstack_project`)
5. Click **Add Compute Provider**.

> Note: You can also add the provider through the Transformer Lab CLI with `lab provider add`

### Run health check

After the provider is listed in Team Settings:

1. Find your dstack provider in **Compute Providers**.
2. Click **Health**.
3. Confirm the provider reports as active.


## 3. dstack-specific behavior in Transformer Lab

- Transformer Lab maps one run/cluster to one dstack run.
- You can target a dstack fleet via `fleet_name` in yaml resources field.

## Troubleshooting and Tips

- **Setting up backends on dstack**: If you want to use a specific backend on dstack, please refer to this [dstack documentation](https://dstack.ai/docs/concepts/backends/) to set up the backend.
- **Provider check fails**: verify `server_url` reachability from the API host and confirm token validity.
- **Run creation fails**: Cross-check the availability of resources on your dstack dashboard, often found at `http://<dstack-server-url>/offers`
- **First launch failure**: When setting up a new dstack server, it expects you to also create a fleet, otherwise the first run will fail with no hardware offers being available. You dont need to always use this created fleet but first runs seem to fail without the presence of a fleet. To create a fleet, go to your dstack dashboard, navigate to the "Fleets" tab, and create a new fleet with the desired hardware configuration.
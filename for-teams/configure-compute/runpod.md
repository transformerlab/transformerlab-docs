---
title: Runpod
sidebar_position: 30
---

After [setting up a Runpod account and API key](../install-gpu-orchestrator/install-runpod.md) and starting Transformer Lab, follow these steps to add it as a compute provider.

## Add Runpod in Team Settings

1. Open **Team Settings** by clicking your username in the sidebar.
2. Go to **Compute Providers**.
3. Click **Add Compute Provider**.
4. In the modal:
   - Set **Type** to **runpod**.
   - Give the provider a name (e.g. `runpod-prov`).
   - Paste in your config (see example below).
5. Click **Add Compute Provider**.

> You can also add the provider via the CLI with `lab provider add`.

### Example config

```json
{
  "api_key": "<RUNPOD_API_KEY>",
  "api_base_url": "https://rest.runpod.io/v1"
}
```

![Add Runpod provider](../img/runpod-addprovider.gif)

## Run health check

After the provider is listed in Team Settings:

1. Find your Runpod provider in **Compute Providers**.
2. Click **Health**.
3. Confirm the provider reports healthy/connected.

![Runpod provider health check](../img/runpod-healthcheck.gif)

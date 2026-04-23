---
title: SkyPilot
sidebar_position: 10
---

After [installing SkyPilot](../install-gpu-orchestrator/install-skypilot.md) and starting Transformer Lab, follow these steps to add it as a compute provider.

![Add SkyPilot provider](../img/gifs/skypilot.gif)

## Add SkyPilot in Team Settings

1. Open **Team Settings** by clicking your username in the sidebar.
2. Go to **Compute Providers**.
3. Click **Add Compute Provider**.
4. In the modal:
   - Set **Type** to **Skypilot**.
   - Give the provider a name (e.g. `skypilot-prov`).
   - Fill in the **Server URL**, **User ID**, **User name**, **Docker image** (optional), **Default region** and **Zone** (optional) fields.
5. Click **Add Compute Provider**.

> You can also add the provider via the CLI with `lab provider add`.

## Run health check

After the provider is listed in Team Settings:

1. Find your SkyPilot provider in **Compute Providers**.
2. Click the "Check provider status" icon (heartbeat) next to your SkyPilot provider in the status column.
3. Confirm the provider reports healthy/connected.

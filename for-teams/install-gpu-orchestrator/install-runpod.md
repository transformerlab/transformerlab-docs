---
title: Installing Runpod Provider
sidebar_position: 20
---

Runpod is a cloud provider that offers on-demand GPU infrastructure. Transformer Lab can connect to Runpod using an API key that you can generate from your Runpod account.

## 1. Add the provider in Team Settings

1. Open **Team Settings**.
2. Go to **Compute Providers**.
3. Click **Add Compute Provider**.
4. In the modal:
   - Set **Type** to **runpod**.
   - Give the provider a name (for example: `runpod-main`).
   - In **Config**, set your Runpod API key from your Runpod account.
5. Click **Add Compute Provider**.

### Example Runpod config

```json
{
  "api_key": "<RUNPOD_API_KEY>",
  "api_base_url": "https://rest.runpod.io/v1",
}
```

![Add Runpod provider](../img/runpod-addprovider.gif)

## 2. Run health check

After the provider is listed in Team Settings:

1. Find your Runpod provider in **Compute Providers**.
2. Click **Health**.
3. Confirm the provider reports healthy/connected.

![Runpod provider health check](../img/runpod-healthcheck.gif)

## Related docs

- [Install Instructions](../install.md)
- [Task Quick Start](../running-a-task/quick-start.md)
- [Running an Interactive Service](../running-a-service.md)

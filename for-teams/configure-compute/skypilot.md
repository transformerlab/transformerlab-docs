---
title: SkyPilot
sidebar_position: 10
---

After [installing SkyPilot](../install-gpu-orchestrator/install-skypilot.md) and starting Transformer Lab, follow these steps to add it as a compute provider.

## Add SkyPilot in Team Settings

1. Open **Team Settings** by clicking your username in the sidebar.
2. Go to **Compute Providers**.
3. Click **Add Compute Provider**.
4. In the modal:
   - Set **Type** to **skypilot**.
   - Give the provider a name (e.g. `skypilot-prov`).
   - Paste in your config (see example below).
5. Click **Add Compute Provider**.

> You can also add the provider via the CLI with `lab provider add`.

### Example config

```jsonc
{
  // Replace with the IP/host of your SkyPilot server reachable by the API server
  "server_url": "http://localhost:46580",
  "default_env_vars": {
    // Obtain from the SkyPilot server at http://<skypilot-host>:46580/users
    "SKYPILOT_USER_ID": "<skypilot user id>",
    "SKYPILOT_USER": "<skypilot username>",
  },
  "default_entrypoint_command": "",
}
```

- Replace `localhost` with the IP/hostname where your SkyPilot server is running and reachable from the API machine.
- Retrieve `SKYPILOT_USER_ID` and `SKYPILOT_USER` from the SkyPilot server at `http://<skypilot-host>:46580/users`.

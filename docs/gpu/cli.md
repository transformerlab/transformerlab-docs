---
sidebar_position: 50
---

# CLI

Transformer Lab is fully accessible via our SDK.

## Installing the SDK:

```bash
pip install transformerlab[cli]
```

## Finding Commands:

The SDK is documented by typing:

```bash
lab
```


For example:

```bash
$ lab

 Usage: lab [OPTIONS] COMMAND [ARGS]...

 Transformer Lab CLI - Manage and interact with your AI models

╭─ Options ────────────────────────────────────────────────────────────╮
│ --help          Show this message and exit.                          │
╰──────────────────────────────────────────────────────────────────────╯
╭─ Commands ───────────────────────────────────────────────────────────╮
│ logout       Logout from your Transformer Lab account.               │
│ ssh          SSH into a specific instance, or say hello world if no  │
│              instance is provided.                                   │
│ hello                                                                │
│ version      Show the version of the CLI.                            │
│ instances    Manage your Transformer Lab instances                   │
│ node-pools   Manage your node pools                                  │
│ login        Login and authentication management                     │
╰──────────────────────────────────────────────────────────────────────╯
```
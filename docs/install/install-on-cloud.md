---
title: Install in the Cloud
sidebar_position: 5
---

## Connect to Remote Engine

Transformer Lab supports running the engine in the cloud (or on a machine that can be accessed on your network).

To do this, install Transfomrer Lab normally on a client machine in order to access the GUI. But instead of selecting "Local Connection" you should click on the "Remote Connection" tab and provide connection details.

<img
src={require('../about/img/loginModal.png').default}
alt="Login Modal"
width="400"
/>

## Starting a Remote Engine

To start a remote engine, SSH into your network device and run the following command:

```bash
curl https://raw.githubusercontent.com/transformerlab/transformerlab-api/main/install.sh | bash
```

This script will attempt to download the project to `~/.transformerlab`, install Miniconda at `~/.transformerlab/miniconda3`, create a Conda environment for Transformer Lab, then finally it will install Python dependencies.

**Run the Transformer Lab Server**

Now you can run the server:

```bash
cd ~/.transformerlab/src
./run.sh
```

For more advanced options, [see the advanced install article](./advanced-install.md).
---
title: Install on Linux
sidebar_position: 1
---

import Button from '@site/src/components/Button';

:::tip

These are instructions to install Transormer Lab as an App. You can also install Transformer Lab as a WebUI locally or in the cloud which will allow you to run Transformer Lab in a web browser [click here to learn more](./install-on-cloud.md).

:::

For most situations, you can just download Transformer Lab and it should work as is. But if you are setting up from scratch and haven't installed CUDA drivers (drivers for your GPU) the following instructions can help.

## What Distro

Transformer Lab should work on most distros of Linux. If you are getting started from scratch, we recommend installing [PopOS](https://pop.system76.com/) because it has great support for automatically installing NVIDIA drivers.

![PopOS Screenshot](./img/popos.webp)

## Step 1 - Ensure NVIDIA Drivers are Installed

If you installed PopOS you will have the option to select an NVIDIA enabled version of PopOS installed by default. You can test that NVIDIA support is successfully installed by running the following command in a command prompt and you should get output similar to what is shown below:

```bash
nvidia-smi
```

![nvidia-smi output](./img/nvidia-smi-output.png)

If this worked, congratulations, NVIDIA support for your Linux install is working and you can proceed with downloading and installing Transformer Lab.

If you need to install the nvidia drivers from scratch, there are instructions below for different versions of Linux:

- For PopOS: https://support.system76.com/articles/system76-driver/
- For Ubuntu: https://ubuntu.com/server/docs/nvidia-drivers-installation
- For everything else: https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html

## Step 2 - Download and Install Transformer Lab

Go to the Transformer Lab download page and click on the app image that is appropriate for your computer:

<a href="https://transformerlab.ai/docs/download">
    <Button>Download Transformer Lab</Button>
</a>

## Step 3 - Run the Installer

You can double click on the installer to run Transformer Lab.

![App Image](./img/downloads-transformerlab.png)

If you get an error that says "Could not display..."

![Could Not Display](./img/could-not-display-transformerlab-appimage.png)

You may need to change the permissions of the AppImage.

Right-click on the app then click on Properties -> Permissions -> then check "Allow Executing File as a Program"

![Allow Execute](./img/allow-execute-linux.png)

Now try running it again. Please be patient on the first install as a number of libraries must installed on the first run.

## Other Notes

If you are running a recent version of Ubuntu or an Ubuntu based disto, you may have to run the appimage with the --no-sandbox flag to allow the installer the ability to install.

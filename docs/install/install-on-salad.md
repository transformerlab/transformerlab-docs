---
title: Install on Salad.com
sidebar_position: 6
---

## 1. Setting Up a Container Group on Salad.com

To run Transformer Lab on Salad.com, you'll first need to set up a container group with the required hardware resources.

1. **Log in to Salad.com** and navigate to the Container Groups section.  

2. **Create a new container group** with your desired hardware (GPU recommended).  
    <img src={require('./gifs/install_on_salad/CreatingContainerGroup.gif').default} alt="GIF" width="500" />

3. **Select the base image** for your instance.
    <img src={require('./gifs/install_on_salad/SelectingUbuntuMachine.gif').default} alt="GIF" width="500" />

4. **Choose the hardware resources** for your container group. We recommend getting a GPU for optimal performance.  
    <img src={require('./gifs/install_on_salad/HardwareConfig.gif').default} alt="GIF" width="500" />

5. **Configure network rules** to allow inbound connections on port `8338` (TCP), so you can access the web interface.  
   <img src={require('./gifs/install_on_salad/ConnectionPortRules.gif').default} alt="GIF" width="500" />

6. **Start an instance** within your container group.  
   <img src={require('./gifs/install_on_salad/DeployContainer.gif').default} alt="GIF" width="500" />

7. **Navigate to Terminal** to access your container instance. Click on the `Running` instance and select `Terminal` tab to open a shell session.
   <img src={require('./gifs/install_on_salad/OpenTerminal.gif').default} alt="GIF" width="500" />

:::info
For detailed steps on creating container groups and configuring network rules, refer to the [Salad.com documentation](https://docs.salad.com/).
:::

---

## 2. Install Required Packages

Before installing Transformer Lab, make sure your container has the necessary tools installed. Run the following commands in your terminal:

```bash
apt-get update
apt-get install -y git curl wget
```

<img src={require('./gifs/install_on_salad/DownloadGit.gif').default} alt="GIF" width="500" />


## 3. Installing and Running Transformer Lab

Once your container instance is running and you have terminal access, follow these steps to install and start Transformer Lab:

### Installing the Server

SSH into your Salad container instance and run:

```bash
curl https://raw.githubusercontent.com/transformerlab/transformerlab-api/main/install.sh | bash
```

This script will:

- Download the project to `~/.transformerlab`
- Install Miniforge at `~/.transformerlab/miniforge3`
- Create a Conda environment for Transformer Lab
- Install Python dependencies

<img src={require('./gifs/install_on_salad/InstallingTLAB.gif').default} alt="GIF" width="500" />


:::note
If the installer on `main` is broken or you get an error related to ongoing development work, you can fetch the install file from the latest release using:

```bash
curl -s https://api.github.com/repos/transformerlab/transformerlab-api/releases/latest \
| grep '"tag_name":' \
| sed -E 's/.*"([^"]+)".*/\1/' \
| xargs -I {} curl -L https://raw.githubusercontent.com/transformerlab/transformerlab-api/{}/install.sh | bash
```

:::


### Running the Server

Start the Transformer Lab server:

```bash
cd ~/.transformerlab/src
./run.sh -h '::'
```

### Access the Web UI

In your browser, go to:

```md
<Access Domain Name (Open)>
```

Replace `<Access Domain Name (Open)>` (e.g. `https://helloworld-123456.salad.cloud`) with the URL provided in your container group on Salad.

You should see the Transformer Lab web interface.

<img src={require('./gifs/install_on_salad/RunningApp.gif').default} alt="GIF" width="500" />


## Advanced

For more advanced options, [see the advanced install article](./advanced-install.md).
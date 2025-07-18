---
title: Install on Remote Cloud Platforms
sidebar_position: 6
---

import Button from '@site/src/components/Button';

:::tip

These instructions will help you run Transformer Lab on remote cloud GPU platforms like Vast.ai and RunPod. This is perfect for accessing powerful GPUs without owning them locally.

:::

Running Transformer Lab on remote cloud platforms gives you access to high-performance GPUs at affordable hourly rates. Both Vast.ai and RunPod offer pre-configured templates that make getting started quick and easy.

## Vast.ai Setup

Vast.ai offers consumer GPUs that you can typically rent for less than $1/hour, making it an affordable option for running Transformer Lab.

### Step 1 - Access the Template

Click on our pre-configured Vast.ai template link:

<a href="https://cloud.vast.ai?ref_id=263642&template_id=471d322f5192457e82c10335eb634f4e" target="_blank">
    <Button>Open Transformer Lab Vast.ai Template</Button>
</a>

### Step 2 - Create Account and Add Funds

If you don't already have a Vast.ai account:

1. Create an account when prompted
2. Add funds to your account balance
3. You can usually rent instances for less than $1/hr for consumer GPUs

### Step 3 - Rent a GPU Instance

1. Once you open the template link, you'll see available GPU instances
2. Choose an instance based on your requirements and budget
3. Consider factors like:
   - GPU memory (VRAM) for your model size needs
   - Price per hour
   - Network speed
4. Click "Rent" on your chosen instance

### Step 4 - Wait for Startup

After renting the instance, wait for the startup process to complete. This typically takes a few minutes.

### Step 5 - Connect to Your Instance

1. Once startup is finished, you'll see your instance in your dashboard
2. Click on the IP address showing up in the instance details
3. Look for the "Open Ports" section to find the IP and port
4. Use these connection details in your local Transformer Lab desktop application

:::info Connection Details
You'll need the IP address and port number from the "Open Ports" section to connect your local Transformer Lab app to the remote instance.
:::

<img src={require('./img/vastai-connect-step.png').default} width="600" />

## RunPod Setup

RunPod provides another excellent option for running Transformer Lab on remote GPUs with their easy-to-use platform.

### Step 1 - Access the RunPod Template

Click on our pre-configured RunPod template link:

<a href="https://console.runpod.io/deploy?template=7k5ly1zp30&ref=4214yk35" target="_blank">
    <Button>Open Transformer Lab RunPod Template</Button>
</a>

### Step 2 - Create RunPod Account and Add Funds

If you don't already have a RunPod account:

1. Create an account when prompted
2. Add funds to your account balance

### Step 3 - Select and Configure Instance

1. Select an instance that meets your requirements
2. Consider your budget and performance needs
3. Set a custom pod name for easy identification
4. Click "Create" to deploy your pod

### Step 4 - Access Your Pod

1. Once deployed, navigate to the "Pods" section in your RunPod dashboard
2. You'll see your newly created pod listed
3. Wait for the pod status to show as "Running"

### Step 5 - Connect to Transformer Lab

1. Click the "Connect" button on your pod
2. Look for "HTTP Services" in the connection options
3. Click on the "Transformer Lab Port" option
4. This will open Transformer Lab in your browser

<img src={require('./img/runpod-connect-step.png').default} width="600" />


## Important Setup Notes

:::warning Initial Setup Time
For both platforms, once your pod is up and running, allow approximately 2 minutes for the initial setup to complete. This time is needed to install hardware-specific dependencies based on your selected GPU.
:::

### Monitoring Setup Progress

You can monitor the setup progress by:

1. Checking the container logs in your cloud platform dashboard
2. Waiting for the Transformer Lab interface to become fully responsive
3. Looking for confirmation messages that setup is complete

## Connecting Your Local App

Once your remote instance is running:

1. Open your local Transformer Lab desktop application or web app
2. Go to connection settings
3. Enter the IP address and port from your cloud instance
4. Test the connection to ensure everything is working properly

## Cost Optimization Tips

- **Vast.ai**: Look for "interruptible" instances for lower costs
- **RunPod**: Use "Spot" instances when available for significant savings
- **Both platforms**: Remember to stop/terminate instances when not in use to avoid unnecessary charges
- Monitor your usage and set spending limits if available

## Troubleshooting

### Connection Issues

- Ensure your local firewall allows outbound connections to the cloud instance
- Verify the IP address and port are correctly entered
- Check that the cloud instance is fully started and not still initializing

### Performance Issues

- Make sure you've selected an instance with sufficient GPU memory for your models
- Consider upgrading to a higher-tier instance if performance is inadequate
- Check network latency between your location and the cloud provider

### Setup Taking Too Long

- Initial hardware setup can take up to 2 minutes - be patient
- If setup takes longer than 5 minutes, try restarting the instance
- Check the container logs for any error messages

## Next Steps

Once connected to your remote instance, you can use Transformer Lab exactly as you would locally, with the added benefit of powerful cloud GPUs. Refer to other sections of this documentation for guidance on downloading models, training, and generating content.
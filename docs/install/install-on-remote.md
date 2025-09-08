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

Just add your credit card and visit this URL:

<a href="https://cloud.vast.ai?ref_id=263642&template_id=e84f7713686cb6588083e81b50128622" target="_blank">
    <Button>Open Transformer Lab Vast.ai Template</Button>
</a>

1. Create account and add funds when prompted
2. Select a GPU instance and click "Rent"
3. Wait for startup to complete (few minutes)
4. In your dashboard, find the IP and port in "Open Ports" section
5. Open that IP:port in your browser - Transformer Lab will be running there

<img src={require('./img/vastai-connect-step.png').default} width="600" />

## RunPod Setup

Just add your credit card and visit this URL:

<a href="https://console.runpod.io/deploy?template=7k5ly1zp30&ref=4214yk35" target="_blank">
    <Button>Open Transformer Lab RunPod Template</Button>
</a>

1. Create account and add funds when prompted
2. Select a GPU instance and click "Create"
3. Wait for pod to show "Running" status
4. Click "Connect" → "HTTP Services" → "Transformer Lab Port"

<img src={require('./img/runpod-connect-step.png').default} width="600" />


## Important Setup Notes

:::warning Initial Setup Time
For both platforms, once your pod is up and running, allow approximately 2 minutes for the initial setup to complete. This time is needed to install hardware-specific dependencies based on your selected GPU.
:::

:::info TensorBoard Access
Both platforms expose port 6006 for TensorBoard. When using TensorBoard in the app, edit the URL in the open tensorboard window that it's trying to access and paste your pod's port 6006 address instead (proxy URL for RunPod, same IP + random port assigned for vast.ai).
:::


## Troubleshooting

### Connection Issues

- Ensure your local firewall allows outbound connections to the cloud instance
- Verify the IP address and port are correctly entered
- Check that the cloud instance is fully started and not still initializing

### Performance Issues

- Make sure you've selected an instance with sufficient GPU memory for your models
- You can upgrade the provided template to higher memory if needed.
- Consider upgrading to a higher-tier instance if performance is inadequate
- Check network latency between your location and the cloud provider

## Next Steps

Once connected to your remote instance, you can use Transformer Lab exactly as you would locally, with the added benefit of powerful cloud GPUs. Refer to other sections of this documentation for guidance on downloading models, training, and generating content.
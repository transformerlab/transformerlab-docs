---
slug: amd-support
title: 🎉 Transformer Lab Now Works with AMD GPUs
authors: deep
tags: [transformerlab, amd, hardware, gpu]
---

## 🎉 Transformer Lab Now Works with AMD GPUs

We’re excited to announce that **Transformer Lab now supports AMD GPUs**! Whether you’re on Linux or Windows, you can now harness the power of your AMD hardware to run and train models with Transformer Lab.  
👉 Read the full installation guide [here](/docs/install/install-on-amd)

<!-- truncate -->

## The Journey: From Zero to AMD Hero

Adding AMD support wasn’t just a matter of flipping a switch. It was a journey that started with us buying AMD hardware from scratch, rolling up our sleeves, and diving deep into the world of ROCm, drivers, and the quirks of PyTorch on AMD.

### Building the AMD Test Rig

We started by assembling a dedicated AMD test machine. This meant researching compatible GPUs, motherboards, and ensuring our setup would be representative of what our users might have. Once the hardware was ready, we set out to make Transformer Lab run smoothly on it.

### The WSL & ROCm Challenge

One of the first hurdles was getting ROCm (AMD’s answer to CUDA) working on Windows via WSL. On paper, ROCm for WSL should “just work” but reality had other plans.

- **No GPU Metrics:** Unlike on native Linux, ROCm on WSL doesn’t support `rocm-smi` (the tool for monitoring GPU usage), because it relies on kernel-level access that WSL doesn’t provide. This meant we had to accept that GPU usage metrics wouldn’t be available on Windows for now.  
[See the official ROCm WSL limitations here.](https://rocm.docs.amd.com/projects/radeon/en/latest/docs/limitations.html#windows-subsystem-for-linux-wsl)

- **PyTorch Detection Woes:** Even after installing the latest ROCm drivers and the official PyTorch 2.7 ROCm wheel, PyTorch stubbornly refused to detect the AMD GPU under WSL. On Linux, it “just works” (with the correct wheels) but on WSL, it was a different story.

### The Breakthrough: Community to the Rescue

After hours of troubleshooting, we reached out to the official ROCm contributors. Through some helpful conversations, we discovered a workaround:

- **Manual Runtime Fix:** We had to manually delete a specific runtime binary inside the installed PyTorch package and create a symlink to the ROCm runtime provided by the system.  
[See the workaround steps here.](https://github.com/ROCm/ROCm/issues/4749)

  The good news? We now incorporate this fix automatically in Transformer Lab, so none of our users need to worry about it—everything just works out of the box!

This hack finally allowed PyTorch to recognize and use the AMD GPU on WSL!

### The Importance of Versioning

Along the way, we learned just how critical it is to have all your ROCm components—drivers, libraries, and PyTorch wheels—on exactly the right versions. A single mismatch could break the whole setup.

- [ROCm WSL Compatibility Matrix](https://rocm.docs.amd.com/projects/radeon/en/latest/docs/compatibility/wsl/wsl_compatibility.html)
- [ROCm Native Linux Compatibility Matrix](https://rocm.docs.amd.com/projects/radeon/en/latest/docs/compatibility/native_linux/native_linux_compatibility.html)

### The Bitsandbytes Setback

One casualty of the AMD transition was `bitsandbytes`, a popular library for efficient model training. Currently, there are open issues with building `bitsandbytes` on ROCm systems, so we had to adapt our trainers to work without it and rely on standard model training instead.  
[See the issue here.](https://github.com/bitsandbytes-foundation/bitsandbytes/issues/1608)


## Success: AMD Support for Linux & Windows

Despite the challenges, we’re proud to say that Transformer Lab now works on both Linux and Windows (via WSL) with AMD GPUs. We hope this opens up new possibilities for our users and the broader open-source community.

If you’re ready to get started, check out our [installation guide](/docs/install/install-on-amd). And if you run into any issues, don’t hesitate to reach out or contribute your own fixes!

---

_Happy experimenting, and we welcome our AMD friends to the Transformer Lab family!_

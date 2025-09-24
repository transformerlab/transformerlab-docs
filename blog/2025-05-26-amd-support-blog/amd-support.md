---
slug: amd-support
title: Transformer Lab Now Works with AMD GPUs
authors: deep
tags: [transformerlab, amd, hardware, gpu]
---

We're excited to announce that **Transformer Lab now supports AMD GPUs**! Whether you're on Linux or Windows, you can now harness the power of your AMD hardware to run and train models with Transformer Lab.  
👉 Read the full installation guide [here](/docs/local/install/install-on-amd)

## TL;DR

If you have an AMD GPU and want to do ML work, just follow our guide above and skip a lot of stress.

The journey for us to figure out how to build a reliable PyTorch workspace on AMD was... messy. And we've documented everything below.

<!-- truncate -->

### Selecting Hardware and Installing Distribution

#### Building Our AMD Test Rig

To properly support AMD GPUs, we built our own dedicated test machine from scratch. After researching AMD's consumer GPU lineup, we settled on the **Radeon RX 7900 XTX**—a high-performance consumer GPU that represents the sweet spot for serious AI enthusiasts. You can view our complete hardware configuration here: **[https://newegg.io/b594cf4](https://newegg.io/b594cf4)**. While assembling the hardware was straightforward, we quickly discovered that the real challenges lay in the software configuration ahead.

From a price perspective, the 24GB **Radeon RX 7900 XTX** comes out at about $1,800 CAD, while a 24GB consumer NVIDIA GPU costs $2,700 CAD.

<img src={require('./images/radeon.jpeg').default} width="400" />

#### Choosing the Right Linux Distribution

With our hardware ready, the next critical decision was selecting the appropriate Linux distribution for our AMD GPU testing. This ended up being messier than expected.

We started with **Pop!_OS**, a popular distribution known for its excellent GPU support and developer-friendly features. Pop!_OS seemed like a natural choice given System76's focus on hardware compatibility and their reputation for making GPU setup straightforward. Not when it comes to AMD and ROCm :)

The first red flag appeared when trying to install ROCm using AMD's official installation instructions. The official ROCm installation process from AMD's website wasn't well-suited for Pop!_OS, leading to dependency conflicts and version mismatches. Hoping to find a better path, we turned to System76's own documentation for ROCm installation: **[https://support.system76.com/articles/rocm/](https://support.system76.com/articles/rocm/)**

Unfortunately, following the Pop!_OS official ROCm installation guide resulted in errors when attempting to install the newer ROCm 6.4.

After a day or two of failed attempts and troubleshooting sessions, we had to abandon Pop!_OS and switched to **Ubuntu 24.04 LTS (Noble)**.

### Installing ROCm on Linux: The Right Way

#### The Quick Start Trap

Time to install ROCm. Our first instinct was to follow AMD's official "Quick Start" [installation guide](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html).

The quick start guide seemed straightforward and promised to get us up and running fast. However, after following the instructions, we discovered that while some ROCm components were installed, many core packages were missing. Most notably, essential tools like `rocm-smi` (the GPU monitoring utility equivalent to NVIDIA's `nvidia-smi`) were nowhere to be found. This incomplete installation left us with a partially functional ROCm setup that couldn't provide basic GPU usage metrics.

#### The AMDGPU Install Solution

After some research and a day of trial and error, we discovered that the more comprehensive approach was to use the AMDGPU install method: **[https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/amdgpu-install.html](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/amdgpu-install.html)**

This installation method proved to be much more stable and complete.

#### The Permission Problem: A Critical Discovery

One of the most important lessons we learned during this process was something that's rarely emphasized in CUDA installations but is absolutely critical for ROCm: **user permissions**. Unlike NVIDIA's CUDA, which typically works out of the box once drivers are installed, AMD GPUs require specific user group memberships to be accessible to non-root users.

We discovered that without proper permissions, AMD GPUs simply aren't visible to regular users, even with ROCm fully installed. The solution required adding the current user to both the `render` and `video` groups:

```bash
sudo usermod -a -G render $USER
sudo usermod -aG video $USER
```

After running these commands and logging out/back in (or rebooting), the AMD GPU finally became accessible to our user account. Without these permissions, users will experience the frustrating situation where ROCm appears to be installed correctly, but PyTorch and other applications can't detect or use the GPU hardware.

#### PyTorch Installation: The Easy Part

After the complexity of getting ROCm properly installed and configured, we were pleasantly surprised to find that installing PyTorch with ROCm support was refreshingly straightforward on Linux. Unlike the various installation hurdles we had encountered, this step actually lived up to its promise of being simple.

We used PyTorch's official ROCm index URL to install the latest ROCm-compatible build:

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.3
```

This direct approach ensured we got the correct PyTorch build with ROCm 6.3 support, avoiding any potential version mismatches or compatibility issues.

To verify that everything was working correctly, we used a simple Python verification process:

```python
import torch
print(torch.__version__)
# Should output something like: 2.7.0+rocm6.3

print(torch.cuda.is_available())
# Should return: True
```

The key thing to check is that `torch.__version__` includes the `+rocm6.3` suffix (or whatever ROCm version you're using), which confirms that the ROCm-enabled version of PyTorch was successfully installed.

Interestingly, even though we're using AMD GPUs, **PyTorch still uses the familiar `torch.cuda.is_available()` command to check for GPU availability**. This is because PyTorch wraps AMD's HIP backend under the CUDA interface for easier compatibility and developer convenience. This design choice means that most existing CUDA-based PyTorch code can work with AMD GPUs without modification, which is a significant advantage for developers transitioning from NVIDIA hardware.

#### GPU Monitoring: Finding the AMD Equivalent of pynvml

With ROCm and PyTorch successfully working on our Linux system, we needed to tackle another important piece of the puzzle: GPU monitoring and statistics. In the NVIDIA ecosystem, developers rely heavily on the `pynvml` (nvidia-ml-py) Python package to programmatically access GPU metrics like memory usage, temperature, and utilization. This capability is essential for monitoring model training, debugging performance issues, and providing users with real-time feedback about their GPU usage.

For AMD GPUs, we needed to find an equivalent solution that could provide similar functionality through Python. After some research, we discovered **pyrsmi**, AMD's Python package that serves as the equivalent to `pynvml` for ROCm systems.

```bash
pip install pyrsmi
```

The `pyrsmi` package provides Python bindings for AMD's ROCm SMI (System Management Interface), giving us programmatic access to GPU statistics and monitoring capabilities. Just like `pynvml` allows developers to query NVIDIA GPU information, `pyrsmi` enables us to retrieve comprehensive information about AMD GPUs, including:

- GPU utilization percentages
- Memory usage (used/total VRAM)

With ROCm, PyTorch, and GPU monitoring all working properly on our Linux system, we were able to successfully integrate AMD GPU support into Transformer Lab's plugin ecosystem and get the entire platform working smoothly with AMD GPUs in a Linux environment. This was a major milestone, but our journey was far from over—we still needed to tackle the most challenging part of this entire project: **getting ROCm working on Windows via WSL.**

<img src={require('./images/tlab-amd-support-meme.png').default} width="400" />

### Installing ROCm on WSL: So Many Tear-Filled Nights

Having successfully navigated the Linux installation process and learned valuable lessons about ROCm's quirks and requirements, we felt confident approaching the Windows WSL installation. After all, we had already figured out the proper installation methods, user permissions, and PyTorch setup. How different could WSL be?

Armed with our Linux experience, we started following a similar approach for installing ROCm on WSL, but this time we incorporated the specific modifications suggested in AMD's official WSL documentation: **[https://rocm.docs.amd.com/projects/radeon/en/latest/docs/install/wsl/install-radeon.html](https://rocm.docs.amd.com/projects/radeon/en/latest/docs/install/wsl/install-radeon.html)**

We carefully followed the WSL-specific instructions, which included some additional steps and considerations not present in the native Linux installation. The process seemed to go smoothly, and all the ROCm components appeared to install correctly without any obvious errors.

#### The Persistent False: When Everything Seems Right But Nothing Works

However, our confidence was quickly shattered when we reached the PyTorch verification step. Despite following all the documentation meticulously and ensuring that every component was properly installed, we encountered a frustrating and persistent problem: `torch.cuda.is_available()` consistently returned `False`.

This was particularly puzzling because:

- ROCm had installed without errors
- `rocm-smi` was not available (as expected in WSL due to kernel limitations), which already affected our ability to get GPU statistics and monitoring information
- The `rocminfo` command worked correctly, showing the AMD GPU was recognized by the ROCm stack
- All the installation steps had completed successfully
- PyTorch with ROCm support was properly installed (confirmed by the `+rocm6.3` suffix in the version)
- We had even installed the latest Adrenalin driver as recommended in AMD's WSL [compatibility documentation](https://rocm.docs.amd.com/projects/radeon/en/latest/docs/compatibility/wsl/wsl_compatibility.html), but this also did not resolve the issue

The loss of `rocm-smi` in WSL was already a significant limitation, as it meant we couldn't programmatically monitor GPU usage, temperature, or memory consumption like we could on native Linux. This would later impact our ability to provide real-time GPU metrics to users on Windows systems.

Yet, despite all these indicators suggesting a successful installation, PyTorch simply could not detect or access the AMD GPU through WSL. We had entered what would become the most challenging and time-consuming phase of our entire AMD support journey.

<img src={require('./images/this_is_fine_meme.jpg').default} width="400" />

#### The Journey to Find a Fix

Faced with this persistent `torch.cuda.is_available()` returning `False`, we began a systematic investigation to identify the root cause. Our first hypothesis centered around version compatibility issues, particularly given the rapid evolution of both PyTorch and ROCm versions.

##### Version Compatibility Investigation

Our initial suspicion was that the PyTorch version we had installed (2.7.0+rocm6.3) might be too new for WSL's current ROCm support capabilities. After diving into AMD's WSL compatibility documentation, we discovered that according to the official compatibility matrix, ROCm versions for WSL officially support PyTorch only up to version 2.4.

This discovery led us to believe we had found the smoking gun. Perhaps our success with PyTorch 2.7 on native Linux didn't translate to WSL, where the compatibility requirements might be more restrictive due to the additional abstraction layer and kernel limitations.

##### Community Outreach and Expert Consultation

Rather than continue troubleshooting in isolation, we decided to reach out to the official ROCm maintainers for guidance. We opened a detailed GitHub issue documenting our exact setup, installation steps, and the persistent detection problems: **[https://github.com/ROCm/ROCm/issues/4749](https://github.com/ROCm/ROCm/issues/4749)**

Engaging with the official maintainers served two purposes: we hoped to get expert guidance on solving our specific problem, and we wanted to ensure that if this was a broader WSL compatibility issue, it would be documented and potentially addressed in future ROCm releases.

##### Rolling Back to Supported Versions

Based on our version compatibility hypothesis and while waiting for community input, we decided to take a step back and work with officially supported software versions. Our strategy was straightforward: first establish a working baseline with the supported PyTorch 2.4, then gradually work our way up to newer versions once we had a functioning foundation.

We followed AMD's official [WSL PyTorch installation guide](https://rocm.docs.amd.com/projects/radeon/en/latest/docs/install/wsl/install-pytorch.html) for the supported version.

This guide specifically outlined the installation process for PyTorch 2.4 with ROCm support in WSL environments. We meticulously followed each step, ensuring that we were using the exact versions and procedures that AMD had tested and verified.

##### The Manual Library Fix Attempt

During our research, we also discovered a potential workaround mentioned in various community forums and the official instructions. The solution involved manually removing specific library files from PyTorch's Python package directory, particularly `libhsa-runtime64.so*` files that might be causing conflicts with the system-level ROCm installation.

This manual intervention was based on the theory that PyTorch might be shipping with its own version of certain ROCm libraries that could conflict with the system-installed ROCm components. By removing these files, PyTorch would be forced to use the system-level libraries, potentially resolving compatibility issues.

So we:

1. Located the PyTorch installation directory within our Python environment
2. Identified and removed the potentially conflicting `libhsa-runtime64.so*` files
3. Verified that PyTorch could still import without errors
4. Tested GPU detection again

##### The Continued Frustration

Unfortunately, even after downgrading to the officially supported PyTorch 2.4 and implementing the manual library removal workaround, we encountered the same persistent issue: `torch.cuda.is_available()` continued to return `False`. The GPU remained undetectable to PyTorch, despite all our systematic troubleshooting efforts.

This was particularly disheartening because we had now tried:

- The latest PyTorch version (2.7) that worked perfectly on native Linux
- The officially supported PyTorch version (2.4) specifically recommended for WSL
- Manual library fixes suggested by the community
- Multiple installation and reinstallation attempts
- Various driver and ROCm version combinations

At this point, it became clear that the issue was more fundamental than simple version mismatches or library conflicts. There was something deeper at play in the WSL environment that was preventing proper AMD GPU access, regardless of the specific software versions we used.

<img src={require('./images/spidermen-meme.png').default} width="400" />

#### The Breakthrough: Community Solutions to the Rescue

Internally, our team met and we decided to just not support WSL + AMD. On the same day we made this decision, the ROCm community helped us out! Our GitHub issue started generating responses from both official maintainers and community members who had faced similar challenges.

##### The Maintainer's Driver Downgrade Suggestion

One of the first responses we received came from an official ROCm maintainer who suggested that our issue might be related to having too recent an Adrenalin driver installed. The maintainer recommended downgrading to an older, more stable version that had been more extensively tested with the current ROCm WSL implementation.

We dutifully followed this advice, uninstalling our current Adrenalin driver and installing the recommended older version. However, after completing the driver downgrade and testing our PyTorch installation again, we encountered the same frustrating result: `torch.cuda.is_available()` still returned `False`.

##### The Community Hero: A Critical Symlink Discovery

The real breakthrough came from a community user who posted a detailed response to our GitHub issue: **[https://github.com/ROCm/ROCm/issues/4749#issuecomment-2887712969](https://github.com/ROCm/ROCm/issues/4749#issuecomment-2887712969)**

This community member had faced the exact same issue we were experiencing and discovered that AMD's official ROCm PyTorch WSL installation instructions were missing a critical symlink step. The problem, as they explained, was that certain ROCm libraries needed to be properly linked in a way that the official documentation didn't cover.

The missing symlink was causing PyTorch to be unable to properly interface with the ROCm runtime, even though all the individual components were correctly installed. This explained why `rocminfo` could detect our GPU (proving ROCm was working at the system level) while `torch.cuda.is_available()` returned `False` (indicating PyTorch couldn't access the ROCm backend).

##### Implementing the Symlink Fix

The solution was surprisingly straightforward once we knew what to do, but it would have been nearly impossible to discover without community knowledge sharing. This symlink step addressed a fundamental connectivity issue between PyTorch and ROCm that the official documentation had overlooked.

##### Beyond the Fix: Getting PyTorch 2.7 Working

Armed with the knowledge from the community fix, we decided to be a bit more adventurous. Rather than just implementing the exact solution as described, we tweaked the commands slightly and experimented with our original PyTorch 2.7 installation to see if the symlink fix would work with the newer version as well.

To our delight, not only did the symlink fix resolve the PyTorch 2.4 detection issue, but it also enabled PyTorch 2.7 to work properly in WSL! This was particularly exciting because it meant we could use the same PyTorch version across both our Linux and WSL installations, simplifying our development and testing processes.

After implementing the community-provided symlink fix and our minor modifications:

```python
import torch
print(torch.__version__)
# Now outputs: 2.7.0+rocm6.3

print(torch.cuda.is_available())
# Finally returns: True!
```

<img src={require('./images/success_kid.jpg').default} width="400" />

### The Bitsandbytes Challenge: A Simple Solution

With PyTorch finally detecting our AMD GPU on both Linux and WSL, we thought the hardest part of our journey was behind us. However, we quickly discovered one more hurdle: **bitsandbytes**, a popular library used for quantization and memory-efficient training techniques in some of our training plugins.

We attempted to build the official bitsandbytes from source for AMD GPUs but encountered build issues that prevented successful installation: **[https://github.com/bitsandbytes-foundation/bitsandbytes/issues/1608](https://github.com/bitsandbytes-foundation/bitsandbytes/issues/1608)**

Since bitsandbytes was only used as an optional dependency in a couple of our training plugins, we made the decision to modify those plugins to work without bitsandbytes rather than waiting for a working AMD-compatible version. This approach ensured that AMD users would have access to the full Transformer Lab experience without any feature limitations.

### What AMD GPU Users Can Actually Expect

After overcoming all the installation and compatibility challenges, the most important question remained: what can users actually expect when running Transformer Lab on AMD hardware? The excellent news is that **AMD GPU users can expect Transformer Lab to work identically to the CUDA version**.

#### Identical Functionality Across Hardware

Through our extensive development and testing process, we've ensured that Transformer Lab provides the same complete feature set on AMD GPUs as it does on NVIDIA hardware:

**Model Support**: All supported model architectures work equally well on AMD and NVIDIA hardware, with no differences in compatibility or capabilities.

**Training Features**: The full range of training options, including LoRA fine-tuning, full parameter training, and custom training recipes, work identically across both GPU ecosystems with plugins labeled appropriately for AMD support.

**Plugin Ecosystem**: The compatible plugins are labeled with the `amd` tag, indicating they have been tested and verified to work on AMD GPUs. Users can expect the same functionality as with NVIDIA plugins, with no compromises.

#### The One Windows/WSL Limitation

The only functional difference AMD users will encounter is on **Windows/WSL setups**: users won't be able to see real-time GPU usage information due to WSL's kernel limitations that prevent `rocm-smi` from functioning. This means:

**What Works**: All model training, inference, and plugin functionality operates normally
**What's Limited**: GPU usage monitoring, temperature, and memory consumption metrics aren't available in the Computer tab on Windows

**Linux Users**: Experience no limitations whatsoever—all features, including comprehensive GPU monitoring, work perfectly.

<img src={require('./images/tlab_hands.png').default} width="400" />

### Conclusion: The State of AMD Support

Our journey to add AMD GPU support to Transformer Lab has been one of the most technically challenging and educational projects we've undertaken. What started as a seemingly straightforward feature addition evolved into a deep exploration of GPU ecosystems, driver complexities, and the realities of developing for multiple hardware platforms.

#### What We've Learned

**AMD GPUs Are Ready for Serious ML Work**: Despite the setup challenges, AMD GPUs can deliver excellent performance for machine learning workloads. The RX 7900 XTX proved capable of handling everything from large language model inference to complex training workflows.

**The Ecosystem Is Rapidly Improving**: While we encountered various compatibility issues during our journey, the AMD ROCm ecosystem is evolving quickly. Many of the limitations we faced early in development have been addressed by subsequent ROCm updates and community contributions.

**Community Support Is Invaluable**: Some of our most critical breakthroughs came from community knowledge sharing rather than official documentation. The open-source machine learning community's willingness to share solutions and workarounds was essential to our success.

**Documentation Gaps Still Exist**: While AMD's documentation has improved significantly, there are still gaps and inconsistencies, particularly around WSL support and advanced configuration scenarios.

#### Looking Forward

For Transformer Lab users, our AMD support opens up new possibilities for model experimentation and training, regardless of their hardware choice. We're committed to continuing to improve this support and helping bridge the gap between different GPU ecosystems.

Whether you choose NVIDIA or AMD, the most important thing is that you can focus on what matters most: building, training, and deploying amazing machine learning models. Hardware should enable creativity, not limit it, and we're proud that Transformer Lab now supports both major GPU ecosystems.

---

**Ready to try AMD GPU support?** Check out our comprehensive installation guide: [/docs/install/install-on-amd](/docs/local/install/install-on-amd)

**Questions or issues?** Join our community discussions where we share tips, troubleshoot problems, and collaborate on making AMD GPU support even better.
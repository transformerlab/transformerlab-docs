---
slug: amd-support
title: 🎉 Transformer Lab Now Works with AMD GPUs
authors: deep
tags: [transformerlab, amd, hardware, gpu]
---

We're excited to announce that **Transformer Lab now supports AMD GPUs**! Whether you're on Linux or Windows, you can now harness the power of your AMD hardware to run and train models with Transformer Lab.  
👉 Read the full installation guide [here](/docs/install/install-on-amd)

This has been one of our most challenging technical journeys yet, involving everything from building custom hardware to diving deep into the intricacies of ROCm, WSL limitations, and PyTorch compatibility issues. What started as a simple feature request turned into a months-long adventure that taught us valuable lessons about AMD's ecosystem and the current state of GPU computing beyond NVIDIA.

## TL;DR - What You'll Learn in This Blog

In this detailed account of our AMD support journey, we'll cover:

- **Building a Custom AMD Test Rig**: The challenges of sourcing parts and assembling a representative AMD system from scratch
- **Installing ROCm on Linux**: The right installation methods, critical permission requirements, and PyTorch setup procedures  
- **WSL Installation Challenges**: Why Windows users face unique challenges with AMD GPU support and the community solutions we discovered
- **PyTorch Detection Issues**: The frustrating world of version compatibility and the critical symlink fixes required to make everything work
- **Community Solutions**: How open-source collaboration helped us solve critical blocking issues that official documentation missed
- **Library Compatibility**: How we handled bitsandbytes limitations and ensured full Transformer Lab functionality
- **What Users Can Actually Expect**: The excellent news that AMD GPU users get identical functionality to NVIDIA, with only minor monitoring limitations on Windows/WSL

<!-- truncate -->

## The Journey: From Zero to AMD Hero

Adding AMD support wasn't just a matter of flipping a switch. It was a journey that started with us buying AMD hardware from scratch, rolling up our sleeves, and diving deep into the world of ROCm, drivers, and the quirks of PyTorch on AMD. What began as a straightforward feature addition quickly evolved into a comprehensive exploration of an entirely different GPU ecosystem.

### Building the AMD Test Rig

#### The Challenge of Building Custom Hardware

Building any custom computer from scratch is always a challenging endeavor, but when you're targeting specific hardware for testing purposes, the complexity multiplies significantly. Unlike buying a pre-built system where components are guaranteed to work together, we needed to carefully research and select each component to ensure compatibility while staying representative of what our typical users might have.

#### Why We Chose to Build Our Own

Since AMD was clearly here to stay in the GPU market and we were committed to supporting our users across different hardware platforms, we made the strategic decision to invest in building our own dedicated AMD test machine. This wasn't just about having AMD hardware—it was about understanding the entire user experience from the ground up, from initial hardware selection to final software configuration.

#### The Parts Hunt

One of the first challenges we encountered was finding all the necessary components available in one place. Unlike the well-established supply chains for popular gaming builds, sourcing components for a specific AMD GPU testing rig required more research and patience. Our goal was clear: build a single AMD GPU system that would mirror what a typical Transformer Lab user might have at home or in their lab.

#### Choosing the Right GPU

After extensive research into AMD's consumer GPU lineup, we settled on the **Radeon RX 7900 XTX**. This card emerged as the sweet spot for our needs—it's a high-performance consumer GPU that represents the kind of hardware serious AI enthusiasts and researchers might realistically purchase. The 7900 XTX offers substantial compute power while remaining accessible to individual users rather than requiring enterprise-level investment.

#### Our Final Hardware Configuration

After some research, compatibility checking, and parts sourcing, we assembled our AMD test rig. You can view our complete hardware configuration and parts list here: **[https://newegg.io/b594cf4](https://newegg.io/b594cf4)**

This build represents a realistic AMD-based system that our users might have, giving us the perfect testbed to develop and validate our AMD support. Once the hardware was assembled and running, we set out to make Transformer Lab run smoothly on it—little did we know the software challenges that lay ahead.

#### Choosing the Right Linux Distribution

With our hardware ready, the next critical decision was selecting the appropriate Linux distribution for our AMD GPU testing. This choice would prove to be more important than we initially anticipated.

We started with **Pop!_OS**, a popular distribution known for its excellent GPU support and developer-friendly features. Pop!_OS seemed like a natural choice given System76's focus on hardware compatibility and their reputation for making GPU setup straightforward. However, we quickly discovered that not all Linux distributions are created equal when it comes to AMD's ROCm ecosystem.

The first red flag appeared when trying to install ROCm using AMD's official installation instructions. The official ROCm installation process from AMD's website wasn't well-suited for Pop!_OS, leading to dependency conflicts and version mismatches. Hoping to find a better path, we turned to System76's own documentation for ROCm installation: **[https://support.system76.com/articles/rocm/](https://support.system76.com/articles/rocm/)**

Unfortunately, following the Pop!_OS official ROCm installation guide resulted in errors when attempting to install the newer ROCm 6.4. The guide appeared to be designed for older ROCm versions and hadn't been updated to handle the latest release properly. After several failed attempts and troubleshooting sessions, it became clear that Pop!_OS, despite its many strengths, wasn't the ideal platform for our AMD GPU development work.

Learning from this experience, we made the decision to switch to **Ubuntu 24.04 LTS (Noble)**. Ubuntu's long-term support release provided the stability we needed, and more importantly, AMD's ROCm documentation and installation procedures are primarily tested and optimized for Ubuntu. This change proved to be the right call—the ROCm installation process on Ubuntu 24.04 was significantly smoother and more reliable.

This OS selection process taught us an important lesson: when working with specialized hardware and software stacks like ROCm, choosing a distribution that's explicitly supported and tested by the vendor can save hours of troubleshooting and frustration.

### Installing ROCm on Linux: The Right Way

With Ubuntu 24.04 LTS installed on our AMD test rig, the next challenge was getting ROCm properly installed and configured. This turned out to be more nuanced than we initially expected, and we learned some important lessons about the different installation methods available.

#### The Quick Start Trap

Our first instinct was to follow AMD's official "Quick Start" [installation guide](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html)

The quick start guide seemed straightforward and promised to get us up and running fast. However, after following the instructions, we discovered that while some ROCm components were installed, many core packages were missing. Most notably, essential tools like `rocm-smi` (the GPU monitoring utility equivalent to NVIDIA's `nvidia-smi`) were nowhere to be found. This incomplete installation left us with a partially functional ROCm setup that couldn't provide basic GPU usage metrics.

#### The AMDGPU Install Solution

After some research and trial-and-error, we discovered that the more comprehensive approach was to use the AMDGPU install method: **[https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/amdgpu-install.html](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/amdgpu-install.html)**

This installation method proved to be much more stable and complete. Unlike the quick start approach, the AMDGPU install properly installed all necessary libraries and tools, including the crucial `rocm-smi` utility for tracking GPU usage. The installation process was more thorough and ensured that all ROCm components were properly configured and integrated with the system.

#### The Permission Problem: A Critical Discovery

One of the most important lessons we learned during this process was something that's rarely emphasized in CUDA installations but is absolutely critical for ROCm: **user permissions**. Unlike NVIDIA's CUDA, which typically works out of the box once drivers are installed, AMD GPUs require specific user group memberships to be accessible to non-root users.

We discovered that without proper permissions, AMD GPUs simply aren't visible to regular users, even with ROCm fully installed. The solution required adding the current user to both the `render` and `video` groups:

```bash
sudo usermod -a -G render $USER
sudo usermod -aG video $USER
```

After running these commands and logging out/back in (or rebooting), the AMD GPU finally became accessible to our user account. This permission requirement is a significant difference from the NVIDIA ecosystem and caught us off guard initially.

This step is so critical that we now consider it an essential part of any AMD GPU setup process. Without these permissions, users will experience the frustrating situation where ROCm appears to be installed correctly, but PyTorch and other applications simply can't detect or use the GPU hardware.

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

Interestingly, even though we're using AMD GPUs, PyTorch still uses the familiar `torch.cuda.is_available()` command to check for GPU availability. This is because PyTorch wraps AMD's HIP backend under the CUDA interface for easier compatibility and developer convenience. This design choice means that most existing CUDA-based PyTorch code can work with AMD GPUs without modification, which is a significant advantage for developers transitioning from NVIDIA hardware.

#### GPU Monitoring: Finding the AMD Equivalent of pynvml

With ROCm and PyTorch successfully working on our Linux system, we needed to tackle another important piece of the puzzle: GPU monitoring and statistics. In the NVIDIA ecosystem, developers rely heavily on the `pynvml` (nvidia-ml-py) Python package to programmatically access GPU metrics like memory usage, temperature, and utilization. This capability is essential for monitoring model training, debugging performance issues, and providing users with real-time feedback about their GPU usage.

For AMD GPUs, we needed to find an equivalent solution that could provide similar functionality through Python. After some research, we discovered **pyrsmi**, AMD's Python package that serves as the equivalent to `pynvml` for ROCm systems.

```bash
pip install pyrsmi
```

The `pyrsmi` package provides Python bindings for AMD's ROCm SMI (System Management Interface), giving us programmatic access to GPU statistics and monitoring capabilities. Just like `pynvml` allows developers to query NVIDIA GPU information, `pyrsmi` enables us to retrieve comprehensive information about AMD GPUs, including:

- GPU utilization percentages
- Memory usage (used/total VRAM)

This discovery was crucial for maintaining feature parity between our NVIDIA and AMD GPU support in Transformer Lab. Users expect to see real-time GPU metrics during model training and inference, regardless of whether they're using NVIDIA or AMD hardware. With `pyrsmi`, we could provide the same level of monitoring and feedback that our NVIDIA users were accustomed to.

With ROCm, PyTorch, and GPU monitoring all working properly on our Linux system, we were able to successfully integrate AMD GPU support into Transformer Lab's plugin ecosystem and get the entire platform working smoothly with AMD GPUs in a Linux environment. This was a major milestone, but our journey was far from over—we still needed to tackle the most challenging part of this entire project: getting ROCm working on Windows via WSL.

### Installing ROCm on WSL: The Ultimate Challenge

Having successfully navigated the Linux installation process and learned valuable lessons about ROCm's quirks and requirements, we felt confident approaching the Windows WSL installation. After all, we had already figured out the proper installation methods, user permissions, and PyTorch setup. How different could WSL be?

Armed with our Linux experience, we started following a similar approach for installing ROCm on WSL, but this time we incorporated the specific modifications suggested in AMD's official WSL documentation: **[https://rocm.docs.amd.com/projects/radeon/en/latest/docs/install/wsl/install-radeon.html](https://rocm.docs.amd.com/projects/radeon/en/latest/docs/install/wsl/install-radeon.html)**

We carefully followed the WSL-specific instructions, which included some additional steps and considerations not present in the native Linux installation. The process seemed to go smoothly, and all the ROCm components appeared to install correctly without any obvious errors.

#### The Persistent False: When Everything Seems Right But Nothing Works

However, our confidence was quickly shattered when we reached the PyTorch verification step. Despite following all the documentation meticulously and ensuring that every component was properly installed, we encountered a frustrating and persistent problem: `torch.cuda.is_available()` consistently returned `False`.

This was particularly puzzling because:

- ROCm had installed without errors
- `rocm-smi` was not available (as expected in WSL due to kernel limitations), which already affected our ability to get GPU statistics and monitoring information
- `rocminfo` command worked correctly, showing the AMD GPU was recognized by the ROCm stack
- All the installation steps had completed successfully
- PyTorch with ROCm support was properly installed (confirmed by the `+rocm6.3` suffix in the version)
- We had even installed the latest Adrenalin driver as recommended in AMD's WSL [compatibility documentation](https://rocm.docs.amd.com/projects/radeon/en/latest/docs/compatibility/wsl/wsl_compatibility.html), but this also did not resolve the issue

The loss of `rocm-smi` in WSL was already a significant limitation, as it meant we couldn't programmatically monitor GPU usage, temperature, or memory consumption like we could on native Linux. This would later impact our ability to provide real-time GPU metrics to users on Windows systems.

Yet, despite all these indicators suggesting a successful installation, PyTorch simply could not detect or access the AMD GPU through WSL. We had entered what would become the most challenging and time-consuming phase of our entire AMD support journey.

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

We carefully implemented this fix:

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

#### The Breakthrough: Community Solutions to the Rescue

Just when we were beginning to think that reliable AMD GPU support in WSL might be impossible, help came from an unexpected source: the ROCm community itself. Our GitHub issue started generating responses from both official maintainers and community members who had faced similar challenges.

##### The Maintainer's Driver Downgrade Suggestion

One of the first responses we received came from an official ROCm maintainer who suggested that our issue might be related to having too recent of an Adrenalin driver installed. The maintainer recommended downgrading to an older, more stable version that had been more extensively tested with the current ROCm WSL implementation.

We dutifully followed this advice, carefully uninstalling our current Adrenalin driver and installing the recommended older version. The process was straightforward, and we were hopeful that this might be the missing piece of the puzzle. However, after completing the driver downgrade and testing our PyTorch installation again, we encountered the same frustrating result: `torch.cuda.is_available()` still returned `False`.

While the driver downgrade didn't solve our specific problem, it was valuable to learn that driver version compatibility can be a significant factor in ROCm WSL installations. This reinforced the importance of following not just the software installation guides, but also ensuring that the entire hardware-software stack is properly aligned.

##### The Community Hero: A Critical Symlink Discovery

The real breakthrough came from a community user who posted a detailed response to our GitHub issue: **[https://github.com/ROCm/ROCm/issues/4749#issuecomment-2887712969](https://github.com/ROCm/ROCm/issues/4749#issuecomment-2887712969)**

This community member had faced the exact same issue we were experiencing and discovered that AMD's official ROCm PyTorch WSL installation instructions were missing a critical symlink step. The problem, as they explained, was that certain ROCm libraries needed to be properly linked in a way that the official documentation didn't cover.

The missing symlink was causing PyTorch to be unable to properly interface with the ROCm runtime, even though all the individual components were correctly installed. This explained why `rocminfo` could detect our GPU (proving ROCm was working at the system level) while `torch.cuda.is_available()` returned `False` (indicating PyTorch couldn't access the ROCm backend).

##### Implementing the Symlink Fix

Following the community member's detailed instructions, we implemented the missing symlink configuration. The fix involved creating specific symbolic links that would allow PyTorch to properly locate and interface with the ROCm runtime libraries in the WSL environment.

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

##### The Power of Open Source Community

This breakthrough highlighted one of the most valuable aspects of working with open-source technologies: the power of community knowledge sharing. While official documentation and support channels are essential, sometimes the most practical solutions come from fellow developers who have fought the same battles and are willing to share their hard-won knowledge.

The fact that this critical fix came from a community member rather than official documentation also revealed an important gap in AMD's WSL installation guides. It showed us that the ROCm ecosystem, while powerful, still has some rough edges that require community collaboration to smooth out.

This experience reinforced our appreciation for open-source communities and the importance of contributing back when we encounter and solve problems. By documenting our entire journey in this blog post, we hope to help other developers avoid the same frustrations we experienced and get their AMD GPU setups working more quickly.

With the WSL detection issue finally resolved, we could move forward with integrating AMD GPU support into Transformer Lab's Windows workflow. However, our challenges weren't over yet—we still had to address some significant limitations in the broader AMD ecosystem that would affect our training capabilities.

### The Bitsandbytes Challenge: A Simple Solution

With PyTorch finally detecting our AMD GPU on both Linux and WSL, we thought the hardest part of our journey was behind us. However, we quickly discovered one more hurdle: **bitsandbytes**, a popular library used for quantization and memory-efficient training techniques in some of our training plugins.

We attempted to build the official bitsandbytes from source for AMD GPUs, but encountered build issues that prevented successful installation: **[https://github.com/bitsandbytes-foundation/bitsandbytes/issues/1608](https://github.com/bitsandbytes-foundation/bitsandbytes/issues/1608)**

Since bitsandbytes was only used as an optional dependency in a couple of our training plugins, we made the pragmatic decision to modify those plugins to work without bitsandbytes rather than waiting for a working AMD-compatible version. This approach ensured that AMD users would have access to the full Transformer Lab experience without any feature limitations.

### What AMD GPU Users Can Actually Expect

After overcoming all the installation and compatibility challenges, the most important question remained: what can users actually expect when running Transformer Lab on AMD hardware? The excellent news is that **AMD GPU users can expect Transformer Lab to work identically to the CUDA version**.

#### Identical Functionality Across Hardware

Through our extensive development and testing process, we've ensured that Transformer Lab provides the same complete feature set on AMD GPUs as it does on NVIDIA hardware:

**Model Support**: All supported model architectures work equally well on AMD and NVIDIA hardware, with no differences in compatibility or capabilities.

**Training Features**: The full range of training options, including LoRA fine-tuning, full parameter training, and custom training recipes, work identically across both GPU ecosystems with plugins labelled appropriately for AMD support.

**Plugin Ecosystem**: The compatible plugins are labelled with the `amd` tag, indicating they have been tested and verified to work on AMD GPUs. Users can expect the same functionality as with NVIDIA plugins, with no compromises.

#### The One Windows/WSL Limitation

The only functional difference AMD users will encounter is on **Windows/WSL setups**: users won't be able to see real-time GPU usage information due to WSL's kernel limitations that prevent `rocm-smi` from functioning. This means:

**What Works**: All model training, inference, and plugin functionality operates normally
**What's Limited**: GPU usage monitoring, temperature, and memory consumption metrics aren't available in the Computer tab on Windows

**Linux Users**: Experience no limitations whatsoever—all features, including comprehensive GPU monitoring, work perfectly.


### Conclusion: The State of AMD Support in 2025

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

**Ready to try AMD GPU support?** Check out our comprehensive installation guide: [/docs/install/install-on-amd](/docs/install/install-on-amd)

**Questions or issues?** Join our community discussions where we share tips, troubleshoot problems, and collaborate on making AMD GPU support even better.


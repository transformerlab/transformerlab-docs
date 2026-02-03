---
title: The "Apple Silicon" Shop
sidebar_position: 13
draft: true
---

# The Apple Silicon Shop: Don't Use Kubernetes

As far as we know, there is no good way to run kubernetes pods on MacOS that can grant access to the underlying GPU.

### The Problem: The "Air Gap" Between K8s and Metal

Kubernetes is a Linux-native technology. To run it on macOS, you must run it inside a Linux Virtual Machine (via Docker Desktop, OrbStack, or QEMU).

While these VMs can passthrough CPU and RAM efficiently, they **cannot** pass through the `AppleGPU` (Metal) interface in a way that Kubernetes understands.

* **No Device Plugin:** In the NVIDIA world, the `nvidia-device-plugin` lets a Pod request `nvidia.com/gpu: 1`. There is no equivalent `apple.com/gpu` plugin for Kubernetes because the underlying Linux VM cannot "see" the Metal API directly for compute tasks.
* **The Result:** Your K8s pods will run, but they will be CPU-only. Your expensive 76-core GPUs will sit idle while your LLM crawls at 2 tokens/sec.

To use the GPU on Apple Silicon, the process must run **natively on macOS** (or strictly within a hypervisor that supports full GPU paravirtualization *and* a matching driver, which is currently experimental/unstable for AI compute).

Therefore, you need an orchestrator that can bypass the container layer and talk directly to the host OS.

---

### Option 1: The Modern Choice (dstack)

If you are an ML Engineer or Data Scientist, **dstack** is currently the best way to pool Apple Silicon devices. Unlike Kubernetes, dstack does not force you into a containerized overlay network if you don't want one.

* **How it works:** You run a `dstack` server (control plane) on one machine. You then configure your other Macs as an **"SSH Fleet"**.
* **The Magic:** dstack SSHs into the Mac and runs your workload directly on the host shell. This means the code has full native access to `MPS` (Metal Performance Shaders).
* **Workflow:** You define your job in a `.dstack.yml` file. dstack finds a free Mac in your fleet, copies the code over, runs it, and streams the logs back to you.

**Pros:**

* **Zero Overhead:** No VM/Docker layer eating your RAM.
* **Native GPU Access:** PyTorch utilizes `mps` device directly.
* **Cloud-Like UX:** You get a nice CLI and UI to monitor jobs.

**Cons:**

* **Isolation:** Since it runs on the host shell, one bad job could mess up the environment (though dstack tries to use virtual environments).

### Option 2: The HPC Choice (Slurm)

If you are building a "University Lab" or a shared research cluster where multiple users need to queue jobs, **Slurm** is the gold standard. Believe it or not, Slurm runs natively on macOS.

* **How it works:** You compile Slurm from source on macOS (using Homebrew dependencies like `munge`).
* **Mac 1 (Master):** Runs `slurmctld` (Controller).
* **Mac 2-5 (Workers):** Run `slurmd` (Daemon).


* **The Magic:** You create a partition in `slurm.conf` called `apple_gpu`. Users submit jobs using `sbatch script.sh`. The script runs as a native process on the worker Mac, granting full access to the GPU.

**Pros:**

* **Fair Share:** Prevents one user from hogging all the Macs.
* **MPI Support:** Essential if you are trying to run **llama.cpp** distributed across multiple Macs via MPI (which scales surprisingly well on Apple Silicon due to the high bandwidth interconnect).
* **Standardization:** If you know HPC, you know Slurm.

**Cons:**

* **Maintenance:** You are now a Linux Sysadmin managing config files, munge keys, and user permissions manually.
* **Complexity:** Setting up Slurm on macOS is not "plug and play."

---

### Verdict: Which one for your Shop?

| Feature | **dstack** | **Slurm** |
| --- | --- | --- |
| **Best For** | Single user or small team of ML Engineers | Multi-user Research Lab or MPI Jobs |
| **Setup Time** | 10 Minutes | 2-4 Hours |
| **GPU Access** | Native (via SSH) | Native (via Process) |
| **Learning Curve** | Low (YAML) | High (Config files) |
| **Containerization** | Optional (Can use venv) | No (Runs on Host) |

**The Recommendation:**

* Start with **dstack**. It gives you the "cluster feel" without the headache.
* Switch to **Slurm** only if you need to run distributed inference (MPI) across multiple Macs or if you need complex queuing logic for many users.
---
title: Airgapped Systems
sidebar_position: 60
---

# Deploying Transformer Lab in Airgapped & Secure Environments

Research environments with strict security requirements—including "airgapped" systems without internet connectivity—present unique challenges for modern software. At Transformer Lab, we don't expect you to change your security posture for us. Instead, we’ve built our platform to be infrastructure-agnostic, ensuring it respects the boundaries of your internal network.

---

### Does Transformer Lab require an internet connection or external tunneling?
**No.** While we provide integrated helpers (like ngrok) for easy tunneling in open environments, **tunneling is not a requirement.**

* **Existing Protocols:** If your nodes are restricted from the internet, we configure the system to present researchers with your lab’s **approved connection protocols** (e.g., internal SSH, VPN, or local network hops).
* **Zero External Dependencies:** The platform is designed to function entirely within your perimeter.

### How does the orchestrator interact with our existing compute cluster?
Our orchestrator is designed to be lightweight and transparent. It interacts with your hardware by **running SLURM commands directly.**

* **The Rule of Thumb:** If a user on your system can manually submit a SLURM command from the terminal, Transformer Lab will work. 
* **Native Integration:** Because we use your native scheduler, your existing job accounting, resource limits, and auditing logs remain the "source of truth."

### Is the software auditable and can it run on our own hardware?
**Yes.** Transformer Lab is **open source**. 

* **Full Control:** You can audit the entire codebase to satisfy security reviews.
* **Local Execution:** The tool is designed to be installed and run on any compute node inside your network. Your data never leaves your infrastructure because the tool never leaves your infrastructure.

### How do we handle installation without access to PyPI or external mirrors?
We understand that airgapped systems are inherently more difficult to set up because modern Python tooling often expects an active network connection to fetch dependencies. 

* **Working with your Tooling:** We don't force a one-size-fits-all install. We will work with your team to set up the platform using the **package managers you have already approved** (such as internal Artifactory mirrors, Conda environments, or localized wheel files).
* **Collaborative Setup:** Our engineers are experienced in navigating these constraints and can provide the specific asset lists required for offline installation.

---

> ### A Note to Lab Administrators
> We recognize the vital importance of data sovereignty in high-stakes research. We view our platform as a guest in your environment, and we aim to be a "good citizen" that follows your rules. Every lab has a different network architecture, and we are ready to adapt to yours.

**Please reach out to our team.** We would be happy to walk you through the architecture and guide you on how to make Transformer Lab a helpful, secure asset for your researchers.

---

**Would you like me to draft a technical "Installation Requirements" document that your IT or SysAdmin team can use to vet the platform?**
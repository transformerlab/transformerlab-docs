---
sidebar_position: 5
---
# Red Teaming Evaluations

This plugin helps you evaluate Language Models (LLMs) for vulnerabilities and weaknesses through red teaming techniques. It systematically tests for various security concerns including bias, misinformation, PII leakage, and unauthorized access attempts.

## Steps to Use the Plugin

### 1. Download the Plugin

- **Step:** Go to the `Plugins` tab.
- **Instruction:** Download the `Red Teaming Evaluations` Plugin.

<img src={require('./gifs/red-teaming/1_InstallPlugin.gif').default} alt="GIF Animation" width="500" />

### 2. Create a New Evaluation Task

- **Step:** Go to the `Evaluate` tab.
- **Instruction:** Click on the `Add Task` button.
- A pop-up will appear where you configure your evaluation task.
- **Tabs:**
  - **Introduction Tab:** Provides details about the plugin.
  - **Name Tab:** Set the name for your task.


### 3. Configure Plugin Settings

- **Tab:** *Plugin Config*
- **Vulnerability Testing Areas:**
  - `Bias Detection`: Select bias categories to test:
    - Gender
    - Race
    - Religion
    - Political bias
  - `Misinformation`: Test for:
    - Factual errors
    - Unsupported claims
    - Expertise misrepresentation
  - `PII Leakage`: Evaluate protection against:
    - Database access
    - Direct leakage
    - Session leaks
    - Social manipulation
  - `Personal Safety`: Check handling of:
    - Self-harm content
    - Bullying
    - Unsafe practices
    - Dangerous challenges
  - `Toxicity`: Test responses to:
    - Profanity
    - Insults
    - Threats
    - Mockery
  - `Robustness`: Assess vulnerability to:
    - Prompt hijacking
    - Input overreliance
  - `Unauthorized Access`: Test security against:
    - SQL Injection
    - Shell Injection
    - Debug Access
    - SSRF (Server-Side Request Forgery)
    - RBAC bypasses
    - BOLA (Broken Object Level Authorization)
    - BFLA (Broken Function Level Authorization)
  - `Illegal Activity`: Detection of content related to:
    - Weapons
    - Drugs
    - Cybercrime
  - `Graphic Content`: Test handling of sensitive material
  - `Intellectual Property`: Check for protection of:
    - Copyright
    - Trademark
    - Patent information

<!-- <img src={require('./gifs/red-teaming/3_SelectingVulnerabilities.gif').default} alt="GIF Animation" width="500" /> -->

- **Attack Enhancement Methods:**
  - Select multiple enhancement methods from a single dropdown:
    - `Encoding Techniques` (BASE64, ROT13, LEETSPEAK)
    - `Jailbreak Patterns` (Crescendo, Linear, and Tree approaches)
    - `Advanced Methods` (Gray box attacks, Prompt injection, Multilingual attacks)
    - `Specialized Probing` (Math problems, Prompt probing)

<img src={require('./gifs/red-teaming/2_CreatingTask.gif').default} alt="GIF Animation" width="500" />

- **Test Parameters:**
  - **Judge Model:** Select which LLM will evaluate the results
  - **Number of Attacks:** Define how many attacks per vulnerability to test
  - **Target Details:** Specify the purpose and system prompt of your target model

<img src={require('./gifs/red-teaming/3_RunningTask.gif').default} alt="GIF Animation" width="500" />

### 5. Run and View the Evaluation Task

- **Step:** Click on the `Queue` button.
- **Instruction:** The evaluation task will run on your dataset.
- **Outcome:** You can view a detailed report showing vulnerabilities detected, attack success rates, and recommended mitigations.

<img src={require('./gifs/red-teaming/4_Outputs.gif').default} alt="GIF Animation" width="500" />
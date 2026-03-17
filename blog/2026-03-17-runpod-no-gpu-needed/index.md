---
slug: runpod-no-gpu-needed
title: "No GPU? No Problem. Running ML Experiments with RunPod and Transformer Lab"
authors: [tony]
tags: [runpod, cloud, gpu, training, tasks, getting-started]
---

Getting access to to the right hardware is one of the biggest barriers to machine learning experimentation.
GPUs are expensive, hard to find, and even harder to share across a team. Big cloud hosting providers have complex interfaces, pricing models, and want to lock you into their tooling.

Using RunPod with Transformer Lab changes that. You can spin up GPU-backed experiments quickly from the comfort of your own system.

<!--truncate-->

## Why RunPod?

RunPod is a GPU cloud that's become popular in the ML community because it's cost-effective, and fast and easy to get started. You pay for what you use, and there are GPUs available on-demand ranging from RTX 4090s all the way up to H100s. For experimentation and one-off fine-tuning runs, it hits a sweet spot.

When you connect RunPod to Transformer Lab, you unlock the ability to iteratively work

the platform treats those cloud GPUs the same way it would treat a local machine — you can run training tasks, evaluations, and inference jobs through the same UI, and all the results and artifacts land in your workspace automatically.

---

## Step 1: Create a RunPod Account

Head to [runpod.io](https://www.runpod.io) and sign up.
Once you're in, add a payment method and deposit some credits. RunPod works on a prepaid credit system. But since we will only be paying for GPUs while they are being used, even an initial
deposit of $10 will go a long way.

---

## Step 2: Generate a RunPod API Key

Transformer Lab connects to RunPod through their REST API, so you need an API key.

1. In the RunPod console, click your **profile icon** in the top-right corner.
2. Go to **Settings → API Keys**.
3. Click **+ API Key**, give it a name (something like `transformerlab`), and hit **Create**.
4. **Copy the key immediately** — you won't be able to see it again after you navigate away.

> **📸 Screenshot opportunity:** The RunPod API Keys settings page with the "Create" button highlighted, and then the copy-your-key dialog.

Keep that key somewhere handy. You'll paste it into Transformer Lab in a minute.

---

## Step 3: Install Transformer Lab for Teams

Install [Transformer Lab For Teams](https://lab.cloud/for-teams/install) on your local system. If you have your Runpod API key you can skip Step 1, and use it when adding a compute provider in Step 5.

---

## Step 4: Pick a Task from the Task Gallery

Now that you've got cloud GPUs connected and a workspace ready, you're ready to run a task!

Transformer Lab has a **Task Gallery** full of pre-built experiments you can run with a click. It's a great way to get your bearings without having to configure everything from scratch.

In the left sidebar, click **Tasks Gallery**. You'll see a grid of tasks including things like fine-tuning runs, evaluation benchmarks, and dataset generation jobs. For a first run, you can try a smaller job like a **LoRA fine-tuning** task on a small model.

> **📸 Screenshot opportunity:** The Task Gallery grid showing a variety of available tasks, with one highlighted.

---

## Step 5: Run your first Task

1. Navigate to \*_Tasks_ on the sidebar.
2. Your new task should be at the top of the Tasks list. Click on **Queue** to prepare your task to run.
3. In the task configuration dialog, set the **Compute Provider** to the Runpod provider you setup. You can change Accelerator, but for a small fine-tune, an RTX 3090/4090 pod is more than enough.
4. Review the hyperparameters to see if there is anything you want to tweak.
5. When you are ready, hit **Submit**.

> **📸 Screenshot opportunity:** The task configuration/run dialog, with RunPod selected as the provider and the workspace set.

---

## Step 6: Watch It Go

After submitting, you'll be taken to the **Task Queue** view where you can watch your job progress in real-time. Transformer Lab spins up a RunPod pod in the background, runs the task, and streams the logs back to you.

When the task finishes, the output artifacts — model checkpoints, eval results, whatever the task produces — will appear in your local workspace automatically.

> **📸 Screenshot opportunity:** The Task Queue showing the job running with live log output.

Total time from submitting to seeing results: usually 10–20 minutes for a small fine-tuning run, depending on the dataset and model size you picked.

---

## What Just Happened?

To recap: you created a RunPod account, generated an API key, installed Transformer Lab, set up a local workspace, connected RunPod as a compute provider, and ran a real ML experiment from the Task Gallery — all without touching a single line of infrastructure code.

That's kind of the point. The goal of Transformer Lab is to make the logistics of ML research invisible so you can focus on the actual research.

---

## What's Next?

A few things worth exploring from here:

- **Build a custom task** — if you have your own training script, you can wrap it in a Transformer Lab task and run it on RunPod with the same workflow.
- **Set up experiment tracking** — Transformer Lab integrates with Weights & Biases and other trackers, so your runs are automatically logged.
- **Try a hyperparameter sweep** — once you've got one task running, you can add a sweep on top of it with a single config change.

If you have questions or run into anything, drop by the [GitHub repo](https://github.com/transformerlab/transformerlab-app) or join the community.

Happy training. ☁️

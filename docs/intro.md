---
title: Getting Started
sidebar_position: 1
---

# Introduction

## What is Transformer Lab?

<img src={require('/img/flask.png').default} alt="Login Modal" width="80" />

Transformer Lab is a free, open-source LLM workspace. With Transformer Lab, you can easily finetune, evaluate, and interact with opensource LLMs.

<img src={require('/img/screenshot01.png').default} alt="Login Modal" width="500" />

Transformer Lab works best for users with access to a GPU (local or in the cloud).

Researchers and engineers can use Transformer Lab to execute on experiments and track their results.

Folks in the LLM ecosystem can build plugins for Transformer Lab to extend it's functionality in new ways.

### What can I do with Transformer Lab?

With Transformer Lab, you can:

1. **Download** LLMs
2. **Chat** with LLMs
3. Calculate **embeddings**
4. **Create datasets** for training LLMs
5. **Download datasets** for training LLMs
6. **Finetune and Train** LLMs

And more. The best way to learn about how you can use Transfomer Lab is to watch an end-to-end tutorial video or read our guide on finetuning LLama2 using Transformer Lab.

## Getting Started

### Video Tutorial

The easiest way to learn to use Transformer Lab is to watch the [5 Minute Getting Started Video](https://youtu.be/S-Ea5XAztPA).

<iframe width="560" height="315" src="https://www.youtube.com/embed/S-Ea5XAztPA?si=5OrDiZSQF74UN-za" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Install and Run

**Step 1:** Install and Run the Transformer Lab Server API on your server.

Download:

```bash
git clone transfomerlab/transformerlab-api
cd transformerlab-api
```

Install Dependencies

```bash
./init.sh
```

Now Run Transformer Lab:

```bash
python3 api.py --host 0.0.0.0
```

**Step 2:** Download the [Transformer Lab App](http://transformerlab.ai) on your local computer

**Step 3:** At startup, enter the IP address and port of your Transformer Lab Server, then click Submit.

<img
src={require('./about/img/loginModal.png').default}
alt="Login Modal"
width="400"
/>

**Step 4**: 🎉

## System Requirements

### Client

The computer used to run the Transformer Lab App should be a Mac, PC, or Linux machine.

### Server

If you are only looking to do inference (e.g. talking to models), many different types of computers that can run Python will work.

If you are looking to train models and get higher performance, you need a server that has an NVIDIA card.

## Security Notes

:::danger Security Warning
Read carefully. Do not run the Transformer Lab API on a machine exposed to the public Internet.
:::

Today, Transformer Lab exposes a public API on your server that accepts unauthenticated network requests. If you were to run Transformer Lab on the public internet, this would create a significant security issue. We recommend only running the API server on internal networks. If you need to access the API server from outside your internal network, use a VPN or a tool like Tailscale to avoid exposing the server to the public internet.

For more information, read our document on how to run Transformer Lab publically (@TODO)

Additionally, note that Transformer Lab allows a user to upload and run arbitrary Python scripts which can be potentially dangerous. Do not run untrusted scripts on a machine.

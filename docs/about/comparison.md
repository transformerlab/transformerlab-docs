---
sidebar_position: 1
---

# Comparing Transformer Lab

## Introduction

Are you looking to work with LLMs using a GUI and curious about what tools to use? Here is our rough guide.

## Comparison Matrix

There are a number of great tools out there that allow you to work with Local LLMs. Below is a rough matrix of features:

| Tool                | Open Source | llama-cpp | PyTorch | Apple MLX | Chat with LLMs | Finetune | Evaluate | Large Community | Focus       |
| ------------------- | ----------- | --------- | ------- | --------- | -------------- | -------- | -------- | --------------- | ----------- |
| **Ollama**          | ✅          | ✅        | ❌      | ❌        | ✅             | ❌       | ❌       | ✅              | Developers  |
| **LMStudio**        | ❌          | ✅        | ❌      | ❌        | ✅             | ❌       | ❌       | ✅              | Developers  |
| **oobabooga**       | ✅          | ❌        | ✅      | ❌        | ✅             | ✅       | ❌       | ✅              | Hackers     |
| **Transformer Lab** | ✅          | ✅        | ✅      | ✅        | ✅             | ✅       | ✅       | ❌              | Researchers |

## General Advice

If you are looking to chat with LLMs locally, and possibly want to integrate with them, the easiest and best tool is [Ollama](https://ollama.com/). It is super easy to install, well supported, and has a great community. LMStudio is beautiful as well, though not open source; it's worth downloading.

If you are looking to go one level deeper, with the plan of training or finetuning LLMs, then oobabooga and Transformer Lab may be what you are looking for.

## Understanding llama-cpp

llama-cpp is the underlying platform for a lot of the opensource user-friendly tools for talking with LLMs. It was originally popular because it allowed people to run LLMs on their CPU only (without a GPU which not everyone has access to). Furthermore, being packaged as compiled C, it can run on multiple platforms in the form of an easy-to-use binary.

llama-cpp is a growing platform. Every month it can do thing that were not possible before. For example, llama-cpp recently added GPU support so it can run faster on machines that _do_ have access to a GPU.

However, the big disadvantage to llama-cpp as a core platform is that it is not as flexible as the tools that most researchers use to build LLMs from scratch or train them at scale. llama-cpp is focused on making LLMs accessible to end-machines but it is limited in what it can do. For example, though training and finetuning examples have been offered for llama-cpp, we wouldn't recommend it as a core platform for those tasks.

While Transformer Lab supports llama-cpp, it is not a requirement.

Our advice is that if you are just getting started, working with a tool built on llama-cpp will be much easier to get up and running on your local machine.

## Links:

- [Ollama](https://olama.ai)

* [LMStudio](http://lmstudio.ai)

* [oobabooga text-generation-webui](https://github.com/oobabooga/text-generation-webui)

* [Transformer Lab](https://transformerlab.ai)

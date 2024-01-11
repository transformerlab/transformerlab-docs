---
sidebar_position: 100
---

# Frequently Asked Questions

#### Can I Run this on a Mac?

The App can run on a mac. But the part of Transformer Lab that does all the work is the API server and that must run on a machine with a GPU (Linux or Windows). We plan on adding Mac support (via MLX) in the upcoming weeks. Please stay tuned on Twitter for more Mac Updates.

#### How can I write my own Plugin?

Plugin information is defined here: [Plugins](./advanced/plugins.md) . Feel free to chat with us on [Discord](https://discord.gg/transformerlab) to discuss your idea and we can offer feedback.

#### How Do I add More Models to the Gallery?

Instructions [here](https://github.com/transformerlab/galleries)

#### Where are Models Stored on My Disk?

Most of the time, when you download a model, it is stored by HugggingFace's library which places models in the:

`~/.cache/huggingface/hub/`

Directory. If you are running out of space you can safely delete directories in there, or you can use their CLI tool: [https://huggingface.co/docs/huggingface_hub/guides/cli](https://huggingface.co/docs/huggingface_hub/guides/cli)

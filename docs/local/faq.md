---
sidebar_position: 100
---

# Frequently Asked Questions

#### Can I Run this on a Mac?

Yes, using [MLX](/docs/local/install/mlx).

#### How can I write my own Plugin?

Plugin information is defined here: [Plugins](/docs/local/plugins/intro) . Feel free to chat with us on [Discord](https://discord.gg/transformerlab) to discuss your idea and we can offer feedback.

#### How Do I add More Models to the Gallery?

Instructions [here](https://github.com/transformerlab/galleries)

#### Where are Models Stored on My Disk?

Most of the time, when you download a model, it is stored by [HugggingFace's Hub library](https://huggingface.co/docs/huggingface_hub/en/guides/download) which places models in the:

`~/.cache/huggingface/hub/`

Directory. If you are running out of space you can safely delete directories in there, or you can use their CLI tool: [https://huggingface.co/docs/huggingface_hub/guides/cli](https://huggingface.co/docs/huggingface_hub/guides/cli)

Models that are not Huggingface models (such as ones you make yourself) are by default stored in ~/.transformerlab/workspace/models

If you would like to the Huggingface models in a different directory, for example if you are running out of space on your main drive, this article offers instructions on how to move the directory elsewhere:

https://stackoverflow.com/questions/63312859/how-to-change-huggingface-transformers-default-cache-directory/72703148#72703148

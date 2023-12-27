---
sidebar_position: 10
---

import Button from '@site/src/components/Button';

# 4. Interact with a Model 💬

Once you have loaded a model for inference, and it is shown in the currently running model bar in the header, you can start interacting with it.

Out of the box, Transformer Lab supports:

- Chat
- Text Completions
- Processing Embeddings

## Chat

Many models, especially Chat or Instruction tuned ones, support sending data to the model in the format of a chat.

Internally, a chat is just a pre-formated completion sent to the model in a per-model format.

Transformer Lab provides a user interface that allows you to send messages to the LLM in this format, and it uses the FastChat library to format the chat in the right format appropriate for each type of model.

<img src={require('../img/chat.png').default} alt="Model Zoo" width="700" />

From this screen you can send new messages, as well as edit the temperature and other settings of the model.

## Completions

Click on the completions button to switch from Chat mode to Completions mode:

<img src={require('./img/click-completions.png').default} alt="Model Zoo" width="160" />

From this page, click on the <Button>Generate ></Button> Button to ask the LLM to execute a completion.

<img src={require('./img/generate.png').default} alt="Generations" width="600" />

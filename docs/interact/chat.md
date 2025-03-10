---
sidebar_position: 1
---
# Chat and Completions

After running a model in the Foundation tab, you can interact with it using the Interact tab, which offers both Chat and Completions interfaces.

<img src={require('./gifs/rag/2_RunningModel.gif').default} alt="Plugin GIF" width="500" />


## Chat Interface

Many models, especially those that are Chat or Instruction tuned, support sending data in the format of a conversation.

Internally, a chat is just a pre-formatted completion sent to the model in a per-model format. Transformer Lab uses the FastChat library to format the chat appropriately for each type of model.

To use the Chat interface:

1. Navigate to the Interact tab
2. Select "Chat" from the dropdown menu

<img src={require('./gifs/chat/1_Chat.gif').default} alt="Plugin GIF" width="500" />

### Features

- **System Message**: Set a system message to provide initial context or instructions to the model
- **Message History**: View and continue your conversation history
- **Generation Parameters**:
  - Temperature: Control the randomness of the output (higher values = more random)
  - Maximum Length: Set the maximum number of tokens for the response
  - Top P: Control diversity via nucleus sampling
  - Frequency Penalty: Reduce repetition by penalizing tokens based on their frequency

## Completions Interface

The Completions interface allows you to provide a text prompt and have the model generate a continuation.

To use the Completions interface:

1. Navigate to the Interact tab
2. Select "Completions" from the dropdown menu

<img src={require('./gifs/chat/2_Completions.gif').default} alt="Plugin GIF" width="500" />

### Features

- Input your prompt and click the Generate button
- Same generation parameters as Chat:
  - Temperature
  - Maximum Length
  - Top P
  - Frequency Penalty

## When to Use Each Interface

- **Chat**: Better for conversational interactions, multi-turn dialogues, and when you need to maintain context
- **Completions**: Better for single-turn text generation, creative writing, and code completion
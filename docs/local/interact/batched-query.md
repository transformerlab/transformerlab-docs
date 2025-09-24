---
sidebar_position: 14
---
# Batched Query

The Batched Query interface allows you to send multiple requests to the model in one go. You can define a batch of chats (multi-turn conversations) or a batch of completion texts.

## How It Works

For **Chats**:

- Create a batch by defining multiple conversations.
- Each conversation can have multiple turns, with each message indicating the sender's role (e.g., user, system, assistant).
- Send the batch, and the system will process each conversation accordingly.

For **Completions**:

- Provide a batch of texts for which you want completions.
- Each text in the batch is processed individually.

## Generation Settings

You can adjust the following generation parameters for the entire batch:

- **Temperature**
- **Maximum Length**

## Using Batched Query

1. **Select the Batch Type**: Choose whether you are sending a batch of chats or a batch of completion texts.
2. **Define Your Batch**:
   - For chats: Input multi-turn conversations and define message roles.
   - For completions: Provide multiple text prompts.
3. **Set Generation Parameters**: Adjust Temperature and Maximum Length as needed.
4. **Send**: Click the generate button to process the batch.

<img src={require('./gifs/BatchedQuery.gif').default} alt="Batched Query GIF" width="500" />

Explore the Batched Query interface to efficiently process multiple interactions with the model in one request!

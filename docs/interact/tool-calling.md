---
sidebar_position: 3
---
# Tool Calling

The Tool Calling interface is a work-in-progress feature designed to integrate formal function calls within your interactions. Currently, it supports basic functions like `add`, `subtract`, `multiply`, `divide`, and `get_weather`.

## How It Works

After triggering a tool call, the interface will process your request by

1. Parsing the input question.
2. Recognizing and mapping it to one of the supported functions.
3. Displaying the tool call request alongside the generated response.

## Using the Tool Calling Interface

To use the Tool Calling interface:

1. **Navigate** to the Interact tab.
2. **Select** "Tool Calling" from the dropdown menu.

<img src={require('./gifs/ToolCalling.gif').default} alt="Tool Calling GIF" width="500" />

## Features

- **Tool Call Display**: View both the tool call request and the response.
- **Function Support**: Currently supports:
  - `add`
  - `subtract`
  - `multiply`
  - `divide`
  - `get_weather`
- **Generation Parameters**: Similar to the Chat interface, you can adjust:
  - Temperature
  - Maximum Length
  - Top P
  - Frequency Penalty

## How to Interact

- **Ask a Question**: Type your question or command related to any of the supported functions.
- **Send**: Click the send button to initiate the tool call.
- **View Output**: The interface will display the formatted tool call and the resulting response.

### Example Interaction

For instance, if you ask, "What is the weather in San Francisco?" the interface will:

- Parse the request into a function call: `get_weather(location="San Francisco")`
- Display both the function call and the computed result.

## Future Enhancements

As this interface is still under development, future releases may include:

- Custom functions support
- More dynamic function mapping
- Improved agentic interactions

Keep exploring and providing feedback as we continue to improve the Tool Calling interface!
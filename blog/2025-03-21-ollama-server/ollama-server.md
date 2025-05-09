---
slug: ollama-server
title: Integration with Ollama using the Ollama Python SDK
authors: tony
tags: [transformerlab]
---

# Integration with Ollama using the Ollama Python SDK

Transformer Lab has recently added an [Ollama Server](/docs/interact/ollama) plugin which allows users to run inference through Ollama on their local machine.

<!--truncate-->

## Getting Started

Ollama is written in the Go programming language. This has several benefits, but perhaps most notably, it has made Ollama easy to distribute cross-platform and very easy for its users to install. But with python becoming the de facto language of choice for so many cutting edge AI libraries and applications (like Transformer Lab), it means there hasn't been a simple direct way to write programs that integrate these applications with Ollama. Fortunately for us, Ollama has released the [Ollama python library](https://github.com/ollama/ollama-python) to help address this!

Let me walk through our process of building a plugin in Transformer Lab using this python library...

### Setting up Ollama python library

Our application instructs the user to first [download and install Ollama](https://ollama.com/) on their system. After that, our application installs ollama's python library (using `pip install ollama`)

We can now start using Ollama from within our app by importing the `ollama` package. Getting a chat going is straightforward:

```
from ollama import chat

response = chat(model='llama3.2', messages=[
  {
    'role': 'user',
    'content': 'What is the capital of Canada?',
  },
])
print(response['message']['content'])
```

Note that the response comes back in the form of a ChatResponse object, which wraps a Message object.
The documentation on these classes is minimal, but it was easy enough to look directly at the code in
[_types.py](https://github.com/ollama/ollama-python/blob/main/ollama/_types.py) in Ollama's github.
Fortunately, their github page also comes with a pretty thorough set of [examples](https://github.com/ollama/ollama-python/tree/main/examples), where you'll see that most things can be done in a few lines of code.

### Streaming responses

While it's convenient to type a prompt into the command line and get your response in a single output, Transformer Lab needs to be able to stream responses. Streaming allows us to create a UI in our application that shows progress to the user, and streaming is also the standard way that our OpenAI-compatible API responds.

Fortunately, Ollama supports streaming as a parameter that you can pass to the `generate` and `chat` functions:

```
stream = chat(
    model='gemma3',
    messages=[{'role': 'user', 'content': 'Write me a long story about happy robots.'}],
    stream=True,
)

for chunk in stream:
  print(chunk['message']['content'], end='', flush=True)
```

Getting Ollama installed and returning chats was very easy. But there were a few details we needed to figure out in order to get a working plugin published for our users.

## Building the Ollama Server plugin

### Running Transformer Lab Model In Ollama - Take 1: Modelfiles

Downloading a model from Ollama's model library is a single command in their application (e.g. `ollama pull llama3.2`). But we need to be able to run models from Transformer Lab's model library (by default, these are found at `~/.transformerlab/workspace/models`). So we will need to somehow "import" our models into Ollama, and we want to do that without copying files since these models are often many gigabytes in size!

The Ollama API and python library both have a way of creating a model in Ollama based on files on your hard drive, but it involves copying your files into Ollama in a special way first (details [here](https://github.com/ollama/ollama/blob/main/docs/api.md#create-a-model-from-gguf)). Ideally, we'd like to avoid managing these blobs in their system (more on that shortly) and, more importantly, we don't want to make copies of our files.

Ollama also supports importing models from your hard drive by using something called Modelfiles. To do this, you first create a file called `Modelfile` in the same directory as your GGUF file, and populate it with a path to the GGUF file. Ollama's Modelfile format also allows you to set a number of parameters for how to run the model, but for now let's just worry about getting our model file into Ollama so it can be run.  

The most basic version of `Modelfile` has a single line with a path to your GGUF file like this:

```
FROM /Users/username/.transformerlab/workspace/models/llama3.2.gguf
```

This works well but is not supported by the python library (at least not as far as I can tell). Instead, this can be done with a simple system call like `ollama create <model_name> -f /path/to/Modelfile`. This is pretty simple but it turns out it also suffers from the same issue: Duplicating model files!

### Running Transformer Lab Model In Ollama - Take 2: Symlinks

So, there are multiple ways to import into Ollama but all of them require making a copy of your model file. So how can we get around this?

Ollama stores its models in its own cache which by default can be found at `~/.ollama/models`. When you load a model into Ollama from your hard drive, it makes its own copy of the modelfiles in its cache in a directory called `blobs`, where the files can be found with names in a format like `sha256-<long_string_of_hex_digits>` (the string of hex digits is the output of calculating `hashlib.sha256()` on the contents of the file). It also creates a manifest file in a separate `manifests` directory with metadata needed to run the model.

Fortunately, Ollama checks and only creates blobs if they don't already exist. So we can use a bit of a hack to prevent model file copying: create a symlink in the `blobs` directory with the name Ollama is expecting by emulating the sha256 format Ollama uses internally!

### Loading models

Transformer Lab has a concept of "Starting" and "Stopping" a model, which is essentially loading the model parameters into memory and starting a model worker thread. Ollama also supports this although slightly indirectly.

Ollama automatically loads a model into memory the first time you use it so that users don't need to do it themselves. We can take advantage of this and load a model by calling Ollama's `generate` command without a prompt:

```
load_model = self.model.generate(
    model=<model_name>
)
```

Now when you make a subsequent call to `generate` the model will already be loaded into memory. You can also see details of the loaded model by printing `load_model` in the above code.

### Unloading models

By default, the way Ollama works is that it keeps a model in memory and only unloads it from memory if there has been no activity for some amount of time (default 5 minutes). Today, Transformer Lab maintains this behaviour to stay consistent with Ollama. But this is different than the way most models work in Transformer Lab and might cause confusion for users.

We could change this to make models stay in memory by using the `keep_alive` parameter. We could potentially set a longer `keep_alive` (or -1 to set forever) to prevent the model from unloading, and also forcibly unload a model by setting this to 0 when the user clicks "Stop". This can be done by:

```
self.model.generate(model=<model_name>, keep_alive=0)
```

## Conclusion

After making these changes to the Ollama Server plugin we now have everything we need to serve and run a model in Transformer Lab. Although this plugin requires the user to install Ollama first, we've found that the benefit of having a robust and simple installation process has made that a better experience overall. This has also made it much easier for us to stay up-to-date on support for latest models, as Ollama routinely has support for major models on release or shortly after.
 
Going forward, the Ollama Server plugin is our recommended way to use GGUF models in Transformer Lab today.
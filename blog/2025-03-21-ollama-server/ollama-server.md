---
slug: ollama-server
title: Integration with Ollama using the Ollama Python SDK
authors: tony
tags: [transformerlab]
---

# Integration with Ollama using the Ollama Python SDK

Transformer Lab has recently added an [Ollama Server](/docs/interact/ollama) plugin which allows users to run inference through Ollama on their local machine. If you aren't already familiar with Ollama or GGUF models, or if you want to know more about why this is important for us to support, I've included more background [at the end of this article](#background).

## Getting Started

Ollama is written in the Go programming language. This has several benefits, but perhaps most notably, it has made Ollama easy to distribute cross-platform and very easy for its users to install. But with python becoming the defacto language of choice for so many cutting edge AI libraries and applications (like Transformer Lab), it means there hasn't been a simple direct way to write programs that integration these applications with Ollama. Fortunately for us, Ollama has released the [Ollama python library](https://github.com/ollama/ollama-python) to help address this!

Let me walk through our process of building a plugin in Transformer Lab using this python library...

### Setting up Ollama python library

The first step is to [download and install Ollama](https://ollama.com/) on your system. After that, installing the Ollama python library is a one liner:

```
pip install ollama
```

You can now start using Ollama from within your python programs by importing the `ollama` package. Getting a chat going is straightforward:

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

Note that the resposne comes back in the form of a ChatResponse object, which wraps a Message object.
The documentation on these classes is minimal, and your best bet is to look directly at the code in
[_types.py](https://github.com/ollama/ollama-python/blob/main/ollama/_types.py) in their github.
Fortunately, their github page also comes with a pretty thorough set of [examples](https://github.com/ollama/ollama-python/tree/main/examples), where you'll see that most things can be done in a a few lines of code.

### Streaming responses

While it's convenient to type a prompt into the command line and get your resopnse in a single output, Transformer Lab needs to be able stream responses. Streaming allows us to create a UI in our application that shows progress to the user, and streaming is also the standard way that our OpenAI-compatible API responds.

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

Fortunately, Ollama checks and only creates blobs if they don't already exist. So we can use a bit of a hack to prevent model file copying: create a symlink in the `blobs` directory with the name Ollama is expecting! We can do this and point the symlink to the Transformer Lab cache. But it means we will have to do this check every time before running the model (or risk having a surprise copy if the model file in Transformer Lab changes for any reason).

### Loading models

Transformer Lab has a concept of "Starting" and "Stopping" a model, which is essentially loading the model parameters into memory and starting a model worker thread. Ollama also supports this although silghtly indirectly.

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
 
The Ollama Server plugin is our recommended way to use GGUF models in Transformer Lab today.

## Background

### What is Ollama?

Ollama is the most popular open-source application for running inference on local LLMs. It is available across platforms and its simple setup makes it one of the fastest ways to get up and running quickly if you want to chat with an LLM.

It is built on top of the [llama.cpp](https://github.com/ggml-org/llama.cpp) library which enables running LLMs on a wide range of hardware, locally and in the cloud, using a format called GGUF. 
GGUF models are commonly available on platforms like Hugging Face, and you can even convert models from other formats to GGUF using Transformer Lab!

An important benefit of using GGUF-formatted models is that you can take advantage of both both CPU and GPU prcoessing. This allows a user to run models larger than their available video card memory, or even if they do not have a video card at all!

### Why is supporting GGUF in Transformer Lab important?

One of the key objectives for Transformer Lab is to be able to support a wide range of platforms and users.  GGUF is the most popular way to run inference both locally and in the cloud, and through applications like Ollama, users are able to run LLMs on their computer even without access to a GPU. For Transformer Lab users who do have advanced hardware or who are building models using traditional formats like Safetensors, GGUF is still an important tool.  A common final step when builing an LLM is to convert the model into GGUF in order to distribute for efficient inference hosting.

### Why not just build directly on llama.cpp?

Since Ollama is built on llama.cpp it might seem more flexible if we just integrated with llama.cpp directly. In fact, this is what Transformer Lab did initially! But as Transformer Lab was adopted by a broader set of users across diverse permutations of hardware/GPU/OS, we found it increasingly difficult to maintain a consistant install experience for all users, and struggled to ensure we were optimally configured on every system.

Ollama not only makes installation and setup a lot easier, as one of the most popular open-source applications it has a wide user base and is a well-tested platform. Many of our users want to use Transformer Lab and Ollama in tandem.


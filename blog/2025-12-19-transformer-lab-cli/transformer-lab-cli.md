---
slug: transformer-lab-cli
title: "Introducing Transformer Lab CLI"
authors: [josh]
tags: [cli, training, evaluation]
---

## Introducing Transformer Lab CLI

Machine learning researchers need tools that meet them where they're at. They need flexible and configurable tools to manage their workflows, and more than ever they need tools that they can script and automate.

That's why today we are introducing Transformer Lab CLI, a command line interface for managing your Transformer Lab operations. 


## Installation [TODO: update instructions]

To install Transformer Lab CLI you need to install npm [if you haven't already](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Run:

```
npm install
npm run build
npm link
```

Now you should have a Transformer Lab installed on your system. To verify, run `lab --version`, and ensure that you see a valid version number.

## Creating Tasks and Running Them

A task is a reproducible snapshot of your code (a Git Repo, branch, and commit) paired with the configuration needed to run it (initialization, hardware setup, and environment).

To see an example of what a task may look like, refer to our example repo [here](https://github.com/transformerlab/transformerlab-examples/tree/main/new-task-test). You can clone this repo if you want to follow along. Each task needs a file called task.json, which we will describe in detail later.

First log in to Transformer Lab. Run `lab login` and paste in your Transformer Lab API token. This token can be generated in your user settings page.

Now make sure you have a Compute Provider configured (e.g., AWS, GCP, or a local runner) in the web UI. Refer to our documentation for this step [here](lab.cloud/docs) [TODO: we need documentation on compute setup].

Once you have a machine you need to prepare your code. To run our example repo, do the following:

```git clone https://github.com/transformerlab/transformerlab-examples/
cd transformerlab-examples/new-task-test

lab task add .
```

The CLI will ask you a few configuration questions, and if all goes well, Transformer Lab will bundle the latest version of your code along with your run configuration. You can find the task id with `lab task list` and then run with `lab task run <TASK_ID>`. 

You can see which jobs you have queued on the provider with `lab job list`. If you want to examine the logs of a job you can run `lab job logs <JOB_ID>`.

## Configuring a Task

While you can enter configuration options interactively, the best practice is to create a task.json file.

Here is what a sample file might look like:

```bash 
{
  "title": "Fake Train Task",
  "name": "fake-task",
  "command": "python ~/new-task-test/train.py",
  "cpus": "2",
  "memory": "4",
  "setup": "uv pip install transformerlab wandb",
  "env_vars": {
    "WANDB_PROJECT": "my-training-project",
    "PYTHONUNBUFFERED": "1"
  },
  "description": "A fake task to support new things"
}
```

Pay close attention to the `setup` and the `command` fields, as these configure 
## Transformer Lab CLI Keeps Your Experiments on Track

While creating a task Transformer Lab CLI automatically keep track of your GitHub history, ensuring that each run of your task can be tied to a specific commit in your repo. This means that you can try out new things and cross-reference result without losing track of your different run configurations. Because your experiments are tied to your git commits none of your history gets lost.

## Conclusion

That's all for now. There's a lot more we have in store and we look forward to expanding the feature set of our CLI in the coming months! As always, let us know what you think and if there are any new features that would make your life easier! Happy holidays!

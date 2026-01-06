---
title: Running a Task
sidebar_position: 30
---

## What is a Task

A task is a description of work you would like to execute on nodes. ML Researchers can write a task in any format that can run on a node (usually as a Python script) and then submit a Task in the form of YAML that tells Transformer Lab what resources are needed and how to run the task.

## Starting a Simple Task

Here is an example of a very simple task:

<figure>
![Task YAML](./img/screenshot-task-yaml.png)
<figcaption>Example Task YAML</figcaption>
</figure>

In this dummy example, the Task describes the following things:

* The helpful name for the task is called "my-task"
* The task requires a single compute node that has 2 CPUs and 4 GB of memory
* Before the task is run, run `pip install wandb`
* The actual task is just a simple "Hello World" example where the bash echo command outputs "hello"

## Queuing a Task Template

It will be great
---
sidebar_position: 30
---

# Run a Distributed Job

## Introduction

A Job is a specific, finite task that runs to completion, such as training a model, running a data processing script, or performing batch inference. Once the task is finished, the job and its associated computing resources are terminated. This is different from a machine reservation which does not have a "completion".

## Submitting a Job

Submitting a job in Lattice is identical to requesting an instance. But when a task is submitted as a job, Transformer Lab will deprovision the machine once the process that defines the job is complete.

In addition, jobs will be queued if there are not enough resources to fullfill the request immediately.

---
sidebar_position: 20
---

# Reserve an Instance

:::info

Full documentation is coming in the upcoming days. Until then, please reach out through discord or our signup form.

:::

## Introduction

A reservation is a way for a researcher to hold onto an **instance** for an indefinite amount of time. For example, a researcher may need to reserve a machine for a day while they run inference on a model or use a Jupyter Notebook.

An instance can be a single node (e.g. one machine with 1xH100) or a group of nodes (e.g. 4 x 8xH100s) depending on what is requested.

## When to use a Reservation

The typical path for a researcher is to tweak a script using a reservation, then deploy it at scale using Jobs.

Reservations are typically easier to work with when in development because reservations act like regular virtual machines: a researcher requests an instance and they have access to it for as long as they want until they release it. A researcher can directly SSH into a reservation, run a Jupyter Notebook on it, or run VSCode Remote.

## How to Reserve an Instance (GUI)

At lab.cloud, go to nodepools and click on request an instance and fill out the relevant fields.

## How to Reserve an Instance (CLI)

Run lab.cloud CLI and type: `lab instances request` and pass a YAML config file describing your request.

You can then run `lab instances list` to see the status of your reservations.


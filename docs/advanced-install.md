---
title: Advanced Install
sidebar_position: 3
---

# Advanced Installation Instructions

## Cloud or Local

You can download the Transformer Lab app and follow the on-screen instructions to do a local installation. This will automatically fetch the Transformer Lab API and install and run it for you.

There may be situations where you would like to install the API yourself, either on a cloud server that you connect to, or even locally. In this case, follow the instructions below:

## Manual Install Instructions:

**Step 1:** Install and Run the Transformer Lab API Server on your machine learning computer or cloud instance.

Download:

```bash
git clone git@github.com:transformerlab/transformerlab-api.git
cd transformerlab-api
```

Install Dependencies

```bash
./init.sh
```

Now Run Transformer Lab:

```bash
./run.sh
```

**Step 2:** Download the [Transformer Lab App](http://transformerlab.ai) on your local computer

**Step 3:** At startup, go to the "Remote Connection" tab and then enter the IP address and port of your Transformer Lab API Server, then click Submit.

<img
src={require('./about/img/loginModal.png').default}
alt="Login Modal"
width="400"
/>

**Step 4**: 🎉 You now have the app talking to a remote (or local host) connected by HTTP.

## System Requirements

### Client

The computer used to run the Transformer Lab App should be a Mac, PC, or Linux machine.

### Server

If you are only looking to do inference (e.g. talking to models), many different types of computers that can run Python will work.

If you are looking to train models and get higher performance, you need a server that has an NVIDIA card.

## Security Notes

:::danger Security Warning
Read carefully. Do not run the Transformer Lab API on a machine exposed to the public Internet.
:::

Today, Transformer Lab exposes a public API on your server that accepts unauthenticated network requests. If you were to run Transformer Lab on the public internet, this would create a significant security issue. We recommend only running the API server on internal networks. If you need to access the API server from outside your internal network, use a VPN or a tool like Tailscale to avoid exposing the server to the public internet.

For more information, read our document on how to run Transformer Lab publically (@TODO)

Additionally, note that Transformer Lab allows a user to upload and run arbitrary Python scripts which can be potentially dangerous. Do not run untrusted scripts on a machine.

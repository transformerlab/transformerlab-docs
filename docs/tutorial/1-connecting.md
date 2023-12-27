---
sidebar_position: 10
---

import { LuLink2 } from "react-icons/lu";

# 1. Connect to a Server

The Transformer Lab GUI needs to connect to a Transformer Lab Server in order to get stated.

<img src={require('./img/connect.png').default} alt="Connect Gif" width="350" />

To connect to a running server, provide the **Server URL (or IP address)** and **port** and click on **"Connect"**

If the connection is successful, you will see the "Let's start your next Experiment!" landing page.

<img src={require('./img/lets-start.png').default} alt="Let's Start" width="600" />

On the top of the page you will see a blue link <LuLink2 /> icon which indidates the status of the connection and the amount of resources being used on the server:

<img src={require('./img/resource-bar.png').default} alt="Resource Bar" />

The blue link indicates the server is active and connected

A definition of the other sections is below:

1. **CPU**: CPU usage
2. **RAM**: CPU memory usage
3. **VRAM**: GPU memory usage
4. **GPU**: GPU load

:::warning Watch your VRAM
Keep a careful eye on the VRAM usage. VRAM is usually the most common limiting factor for working with large models -- especially training. If your VRAM runs out during a task (this is usually reported as a "CUDA OOM" error), the entire task will likely fail.
:::

---
title: Build a Machine Learning Research Platform from Scratch
sidebar_position: 10
hide_table_of_contents: true
draft: true
---

We wrote this article as advice for a ML research lab that is starting from scratch and wants to build their own infrastructure using the best tooling possible. Whether you are a small startup, a university research group, or an enterprise R&D team, the goal is the same: give your researchers maximum compute with minimum friction.

**A Note on Complexity:** *The ML infrastructure space is exploding. Between the hardware choices, orchestration layers, and scheduling algorithms, there are thousands of possible permutations. It is impossible to cover every single option. Instead, this guide highlights the "golden paths"—proven starting points used by the community and academia that strike the best balance between performance, cost, and maintainability.*

### Which Scenario Describes You?

To make this guide practical, we have broken it down into "mini-guides" based on your starting scale and environment. Find the scenario that matches your lab today:

* [The "Under-the-Desk" Server](./under-the-desk-server.md) — 1 powerful GPU workstation shared by a team
* [The "Closet Cluster"](./closet-cluster.md) — 2–5 networked machines
* [The "Apple Silicon" Shop](./apple-silicon-shop.md) — Mac Studios and MacBook Pros with M-series chips
* [The "University Cluster" (Mid-Scale)](./university-cluster.md) — 10–100 nodes
* [The "Supercomputer" (Large-Scale)](./supercomputer.md) — 1000+ nodes with specialized networking
* [The "Cloud Purist" (Single Cloud)](./cloud-purist.md) — Committed to one provider (AWS, GCP, Azure)
* [The "Arbitrageur" (Multi-Cloud)](./arbitrageur.md) — Multiple clouds for cost optimization
* [The "Hybrid" Lab](./hybrid-lab.md) — On-prem hardware + cloud burst capacity
* [The "Fortress" (Air-Gapped / High-Security)](./fortress.md) — Disconnected networks for sensitive research
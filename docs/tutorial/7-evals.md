---
sidebar_position: 10
---

# 7. Evaluate Models

Evaluation in Transformer Lab is implemented very simply in the current version.

<img src={require('./img/evaluate-listing.png').default} alt="Evaluate Listing" width="700" />

Evaluations are implemented as [Plugins](../advanced/plugins.md) and so you must first install an applicable Plugin of type "evaluator" before you are able to access the ability to run an evaluation.

Out of the box, Transformer Lab has an implementation of [Eleuther Labs's lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) available as a plugin.

Once installed you can create a new evaluation and select an appropriate evaluation metric.

Clicking on "Evaluate" will run the evaluator.

Clicking on "Output" will allow you to see the final output where scoring is listed.

<img src={require('./img/evaluate-output.png').default} alt="Evaluate Listing" width="700" />

In the example above, the "anli_r3" evaluation was run and it resulted in an accuracy metric of 0.3233

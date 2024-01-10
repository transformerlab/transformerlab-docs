---
sidebar_position: 10
---

import Button from '@site/src/components/Button';

# 8. Train and Finetune

<img src={require('./img/training-screen.png').default} alt="Training" width="700
" />

When it is time to train or finetune a model, you can go to the **Train** section of the application.

## Training Templates

The top section of the screen shows "Training Templates" which are instructions that you can send to Transformer Lab that indicate the training program you would like to schedule.

### Create a New Training Template

To create a new Training Template click on the <Button>New</Button> Button and then fill out the information the modal:

<img src={require('./img/training-modal.png').default} alt="Training Modal" width="400" />

1. Template Name is the friendly name you will use to remember this template
2. Selects the specific training Plugin Script you'd like to use (first ensure you have some installed to your project)
3. Sets the dataset used to train your model
4. Sets the template format in which to format the data. We use the Python String Templating format https://docs.python.org/3/library/string.html#template-strings
5. Sets additional parameters specified by any specific plugin. For example for a LoRA trainer, LoRA parameters will be set here.

## Running a Training Job

Once you have created a Training Template, click on "Queue" to schedule the a Training Job. Once the server has completed any previous jobs, it will begin the training job. Plugins may display a progress bar until they Complete.

## Viewing Tensorboard and Output

The <Button>Tensorboard</Button> button displays real-time tensorboard output of the job.

<img src={require('./img/training-tensorboard.png').default} alt="Tensorboard" width="600" />

You can click on <Button>Output</Button> button at any time to see the currently running status of the job's output. This can also be used to debug Training Jobs.

---
title: Running an Interactive Service
sidebar_position: 50
---

## What is an Interactive Service

You don't just have to run jobs. You can also run services. Interactive services allow you to launch and access environments like VSCode, Jupyter Notebook, SSH, vLLM Server, or Ollama Server directly from the Nexus interface.

## Prerequisites

Before running an interactive service, ensure you have a Compute Provider set up and active.

1. Navigate to Team Settings and set up a Compute Provider.
   ![Compute Provider Setup](img/screenshot-addprovider.png)

2. Make sure the provider is active by clicking on the health button.
   ![Provider Health Check](img/screenshot-providershealth.png)

## Steps to Run an Interactive Service

1. Go to the Interact page in Nexus.

2. Click on the "New" button to create a new interactive service.
   ![Interact Page New Button](img/interact-page-new.png)

3. Select the type of interactive service you want to launch: VSCode, Jupyter Notebook, SSH, vLLM Server, or Ollama Server.
   ![Select Service Type](img/select-service-type.png)

4. Configure the service:
   - Enter a name for the service.
   - Select the Compute Provider to use.
   - Specify the resources: CPU, memory, and GPUs.
   - For certain services, provide additional inputs such as model_name for vLLM Server or ngrok auth token for services that launch a tunnel.
   ![Service Configuration](img/service-configuration.png)

5. Click "Launch" to start the service.

6. Once launched, a card will appear for the service. Click the "Interactive Setup" button on the card.
   ![Service Card Interactive Setup](img/service-card-interactive-setup.png)

7. Follow the provided URL or steps to access the service.
   ![Access Service](img/access-service.png)

---
title: Run a Jupyter Notebook
sidebar_position: 10
---

## Running a Jupyter Notebook Service

Interactive services in Nexus allow you to launch environments like Jupyter Notebook directly from the interface. This guide walks you through running a Jupyter Notebook service.

## Prerequisites

Before running a Jupyter Notebook service, ensure you have a Compute Provider set up and active.

1. Navigate to Team Settings and set up a Compute Provider.
   ![Compute Provider Setup](img/compute-provider-setup.png)

2. Make sure the provider is active by clicking on the health button.
   ![Provider Health Check](img/provider-health-check.png)

## Steps to Run a Jupyter Notebook Service

1. Go to the Interact page in Nexus.

2. Click on the "New" button to create a new interactive service.
   ![Interact Page New Button](img/interact-page-new.png)

3. Select "Jupyter Notebook" as the type of interactive service to launch.
   ![Select Jupyter Notebook](img/select-service-type.png)

4. Configure the service:
   - Enter a name for the service.
   - Select the Compute Provider to use.
   - Specify the resources: CPU, memory, and GPUs.
   - Provide any additional inputs if required (e.g., ngrok auth token for tunneling).
   ![Jupyter Configuration](img/service-configuration.png)

5. Click "Launch" to start the Jupyter Notebook service.

6. Once launched, a card will appear for the service. Click the "Interactive Setup" button on the card.
   ![Service Card Interactive Setup](img/service-card-interactive-setup.png)

7. Follow the provided URL or steps to access the Jupyter Notebook.
   ![Access Jupyter Notebook](img/access-service.png)
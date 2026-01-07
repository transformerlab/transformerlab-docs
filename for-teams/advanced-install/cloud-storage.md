---
title: Cloud Storage
sidebar_position: 37
---

## Where Does Transformer Lab Store Files

Transformer Lab can store files locally or in the cloud. By default, files are stored locally, but you can configure cloud storage for better scalability and collaboration.

## Configuring Cloud Storage

### AWS S3 Storage

To use AWS S3 as remote storage:

1. Set `TFL_API_STORAGE_URI=true` in your `.env` file.

2. Configure AWS credentials for the `transformerlab-s3` profile. See the [main install instructions](../install.md#setting-up-aws-credentials-for-s3-storage) for details.

### Google Cloud Storage (GCS)

To use Google Cloud Storage instead of AWS S3:

1. Set `TFL_API_STORAGE_URI=true` in your `.env` file.

2. Set `REMOTE_WORKSPACE_HOST=gcp` in the same `.env` file.

3. Optionally, set `GCP_PROJECT` to specify the Google Cloud project. If not set, it defaults to `transformerlab-workspace`.

4. Configure Google Cloud credentials:

   #### Using gcloud CLI (Recommended)

   If you have the Google Cloud CLI installed, authenticate and set the project:

   ```bash
   gcloud auth application-default login
   gcloud config set project transformerlab-workspace  # or your project name
   ```

   #### Manual Configuration

   Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to the path of your service account key JSON file:

   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-key.json"
   ```

   You can obtain a service account key from the Google Cloud Console under IAM & Admin > Service Accounts.

   Ensure the service account has the necessary permissions for Cloud Storage operations (Storage Admin or equivalent).

## Storage Behavior

When cloud storage is enabled:

- Workspaces and models are stored in the cloud bucket
- Local storage is still used for temporary files and caching
- Multiple users can share the same cloud storage for collaboration


If you have any issues setting up cloud storage, please don't hesitate to reach out to the Transformer Lab support team for assistance.

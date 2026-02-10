---
title: Setting up OAuth Providers
sidebar_position: 11
---

You can configure Transformer Lab to use OAuth providers like Google and GitHub for authentication.

## Authentication Providers

```bash
GOOGLE_OAUTH_ENABLED="true"
GOOGLE_OAUTH_CLIENT_ID="your-google-oauth-client-id.apps.googleusercontent.com"
GOOGLE_OAUTH_CLIENT_SECRET="your-google-oauth-client-secret"

# To get Github client id and secret:
# Go to Github profile -> settings -> developer settings -> oauth app
GITHUB_OAUTH_ENABLED="true"
GITHUB_OAUTH_CLIENT_ID="your_github_client_id"
GITHUB_OAUTH_CLIENT_SECRET="your_github_client_secret"
```
---
title: Setting up Authentication
sidebar_position: 20
---
import TOCInline from '@theme/TOCInline';


Transformer Lab supports several authentication methods. Enable one or more of the following providers by setting environment variables in the Transformer Lab `.env` file.

<TOCInline toc={toc} />

## Email Authentication

Email-based authentication is enabled by default. To control it explicitly:

```bash
EMAIL_AUTH_ENABLED="true"
```

If you enable email authentication, you must also [set up SMTP](email.md) so that the server can send confirmation emails during registration.

## Google OAuth

To obtain a client ID and secret, create an OAuth 2.0 app in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

Then set this in your `.env` file:

```bash
GOOGLE_OAUTH_ENABLED="true"
GOOGLE_OAUTH_CLIENT_ID="your-google-oauth-client-id.apps.googleusercontent.com"
GOOGLE_OAUTH_CLIENT_SECRET="your-google-oauth-client-secret"
```

## GitHub OAuth

To obtain a client ID and secret, create an OAuth app under **GitHub → Settings → Developer settings → OAuth Apps**.

Then set this in your `.env` file:

```bash
GITHUB_OAUTH_ENABLED="true"
GITHUB_OAUTH_CLIENT_ID="your_github_client_id"
GITHUB_OAUTH_CLIENT_SECRET="your_github_client_secret"
```

## OIDC / OpenID Connect (Any IdP)

You can add one or more generic OIDC providers (e.g., Okta, Keycloak, Auth0, Azure AD, or any OpenID Connect–compliant identity provider).

For each provider, set the following variables, replacing `N` with an index (`0`, `1`, `2`, …):

- **`OIDC_N_DISCOVERY_URL`** – The IdP's OpenID discovery endpoint (e.g., `https://your-idp.example.com/.well-known/openid-configuration`).
- **`OIDC_N_CLIENT_ID`** – OAuth 2.0 client ID registered with the IdP.
- **`OIDC_N_CLIENT_SECRET`** – OAuth 2.0 client secret registered with the IdP.
- **`OIDC_N_NAME`** *(optional)* – Label shown on the login button (e.g., "Company SSO"). Defaults to "OpenID #1", "OpenID #2", etc.

Example for a single provider:

```bash
OIDC_0_DISCOVERY_URL="https://your-idp.example.com/.well-known/openid-configuration"
OIDC_0_CLIENT_ID="your-client-id"
OIDC_0_CLIENT_SECRET="your-client-secret"
OIDC_0_NAME="Company SSO"
```

In your IdP's app configuration, set the **redirect / callback URI** to:

`<API_BASE_URL>/auth/oidc-0/callback`

For additional providers, increment the index (`oidc-1`, `oidc-2`, and so on). The login page displays a "Continue with &lt;name&gt;" button for each configured provider.

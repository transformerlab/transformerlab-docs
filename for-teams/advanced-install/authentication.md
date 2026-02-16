---
title: Setting up Authentication
sidebar_position: 20
---

Transformer Lab supports several authentication methods. You can enable one or more by setting environment variables:

- **Email** – enabled by default
- **Google OAuth**
- **GitHub OAuth**
- **OIDC / OpenID Connect** – any compliant IdP (e.g. Okta, Keycloak, Auth0, Azure AD)

## Email Authentication

Email-based authentication is enabled by default. To explicitly control it:

```bash
EMAIL_AUTH_ENABLED="true"
```

If you enable email authentication, you should [set up email](email.md) so that the server can confirm email addresses as part of the registration flow.

## Google OAuth

```bash
GOOGLE_OAUTH_ENABLED="true"
GOOGLE_OAUTH_CLIENT_ID="your-google-oauth-client-id.apps.googleusercontent.com"
GOOGLE_OAUTH_CLIENT_SECRET="your-google-oauth-client-secret"
```

## GitHub OAuth

To get a GitHub client ID and secret, go to **GitHub profile → Settings → Developer settings → OAuth Apps**.

```bash
GITHUB_OAUTH_ENABLED="true"
GITHUB_OAUTH_CLIENT_ID="your_github_client_id"
GITHUB_OAUTH_CLIENT_SECRET="your_github_client_secret"
```

## OIDC / OpenID Connect (any IdP)

You can add one or more **generic OIDC providers** (e.g. Okta, Keycloak, Auth0, Azure AD, or any OpenID Connect–compliant identity provider) using environment variables.

For each provider, set (with index `0`, `1`, `2`, …):

- **`OIDC_N_DISCOVERY_URL`** – Full URL to the IdP's OpenID discovery document (e.g. `https://your-idp.example.com/.well-known/openid-configuration`).
- **`OIDC_N_CLIENT_ID`** – OAuth2 client ID from the IdP.
- **`OIDC_N_CLIENT_SECRET`** – OAuth2 client secret from the IdP.
- **`OIDC_N_NAME`** (optional) – Display name on the login button (e.g. "Company SSO"). Defaults to "OpenID #1", "OpenID #2", etc.

Example for a single provider:

```bash
OIDC_0_DISCOVERY_URL="https://your-idp.example.com/.well-known/openid-configuration"
OIDC_0_CLIENT_ID="your-client-id"
OIDC_0_CLIENT_SECRET="your-client-secret"
OIDC_0_NAME="Company SSO"
```

In your IdP's app configuration, set the **redirect / callback URI** to:

`<API_BASE_URL>/auth/oidc-0/callback`

For a second provider use `oidc-1`, then `oidc-2`, and so on. The login page will show a "Continue with &lt;name&gt;" button for each configured OIDC provider.

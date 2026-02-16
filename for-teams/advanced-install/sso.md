---
title: Setting up SSO
sidebar_position: 10
---

You can configure Transformer Lab to connect to your SSO provider.

## OIDC / OpenID Connect (any IdP)

You can add one or more **generic OIDC providers** (e.g. Okta, Keycloak, Auth0, Azure AD, or any OpenID Connect–compliant identity provider) using environment variables.

For each provider, set (with index `0`, `1`, `2`, …):

- **`OIDC_N_DISCOVERY_URL`** – Full URL to the IdP’s OpenID discovery document (e.g. `https://your-idp.example.com/.well-known/openid-configuration`).
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

In your IdP’s app configuration, set the **redirect / callback URI** to:

`<API_BASE_URL>/auth/oidc-0/callback`

For a second provider use `oidc-1`, then `oidc-2`, and so on. The login page will show a "Continue with &lt;name&gt;" button for each configured OIDC provider.
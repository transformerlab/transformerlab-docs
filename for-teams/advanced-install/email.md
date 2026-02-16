---
title: Connecting to Email SMTP
sidebar_position: 10
---

You can configure Transformer Lab to have access to email so that it can send invites and signup confirmation emails as part of the Auth workflow.

## Enabling Email

In order to use Transformer Lab with email as way to authorize users (versus using Gmail or another provider), Transformer Lab needs the ability to send emails.

Most computers that you run Transformer Lab are not good for sending emails because internet providers will treat messages sent from a random computer as spam.

So to enable proper email sending set the following .env variables in the api env:

```bash
SMTP_SERVER="smtp.example.com"
SMTP_PORT="587"
SMTP_USERNAME="your_email@example.com"
SMTP_PASSWORD="your_email_password"
EMAIL_FROM="your_email@example.com"

EMAIL_METHOD="smtp"
```
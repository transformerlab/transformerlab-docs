---
title: Connecting to Email SMTP
sidebar_position: 10
---

You can configure Transformer Lab to send invite and signup confirmation emails as part of the team invite workflow.

## Enabling Email

To use email-based user authorization (instead an external auth provider), Transformer Lab needs the ability to send emails.

Note that most computers running Transformer Lab are not suitable for sending emails directly, because internet providers will treat messages sent from an unknown server as spam.

To enable email sending, set the following environment variables in the API `.env` file:

```bash
SMTP_SERVER="smtp.example.com"
SMTP_PORT="587"
SMTP_USERNAME="your_email@example.com"
SMTP_PASSWORD="your_email_password"
EMAIL_FROM="your_email@example.com"

EMAIL_METHOD="smtp"
```
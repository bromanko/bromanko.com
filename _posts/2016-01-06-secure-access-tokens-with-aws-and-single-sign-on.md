---
title: Secure Access Tokens with AWS and Single Sign-On
excerpt: At Earnest, we’re big fans of single sign-on (SSO). SSO is great because it provides a single set of authentication credentials to access multiple services. Administrators can easily assign (and take away) access to services and enhance security by requiring multi factor authentication challenges for services that don’t have such. If it’s a service someone at Earnest uses, we want it covered via SSO.
date: '2016-01-06'
---

At [Earnest](https://meetearnest.com/), we’re big fans of single sign-on (SSO). SSO is great because it
provides a single set of authentication credentials to access multiple services. Administrators can easily assign (and take away) access to services and enhance security by requiring multi factor authentication challenges for services that don’t have such. If it’s a service someone at Earnest uses, we want it covered via SSO.

We’re also avid users of Amazon Web Services. AWS provides a SAML 2.0 identity system that ties in nicely with our SSO needs. It works as expected for the web console — allowing our team to log in directly from their SSO dashboard without a second set of credentials.

However, folks on our team often find themselves needing to do more than just access AWS via the web console. Tools like the AWS CLI, Terraform or our own applications need to authenticate as well. Traditional IAM Users have the ability to generate access tokens for these purposes. Unfortunately, SAML-based SSO logins are done via Roles — and you can’t generate access tokens for a Role.

We found ourselves with a question. How can we combine the benefits of SAML-based SSO with the need for
access tokens? Amazon’s answer is the [AWS Security Token Service](http://docs.aws.amazon.com/STS/latest/APIReference/Welcome.html).

The Security Token Service allows you to authenticate via a SAML provider and request a short-lived access token that can be used wherever you might typically use an IAM access token. The security benefits here are great.

* STS tokens are only valid for a maximum of one hour. This reduces surface area in cases where a key is compromised.
* Authentication and authorization are performed using your SAML identity provider and provisioned roles. You get all the same provisioning/de-provisioning benefits.
* Support for multi-factor authentication challenges.

All we needed to do was integrate our SAML-based SSO provider (Okta) with the AWS API.
Amazon provides a [few](http://blogs.aws.amazon.com/security/post/Tx1LDN0UBGJJ26Q/How-to-Implement-Federated-API-and-CLI-Access-Using-SAML-2-0-and-AD-FS)
[examples](http://blogs.aws.amazon.com/security/post/TxU0AVUS9J00FP/How-to-Implement-a-General-Solution-for-Federated-API-CLI-Access-Using-SAML-2-0) of
this online, but do to technical challenges neither worked properly with Okta. So, we expanded the general idea to
support Okta (with multi-factor authentication via TOTP).

The result is a user-friendly CLI for authenticating, generating an STS access token, and updating your local environment within seconds. It’s a big security enabler

![Generating AWS STS tokens via Okta SSO](/img/posts/2016-01-06-secure-access-tokens-with-aws-and-single-sign-on/aws-sts-generation.gif)
*Generating AWS STS tokens via Okta SSO*

### How it Works

The process of authenticating with Okta (and many SAML SSO providers) is only possible via form-based authentication. We’re using headless browser automation
(via the excellent [Nightmare](http://www.nightmarejs.org/)) to emulate a form-based sign-on.

1. Prompt user for SSO-provider username and password
1. Use a headless browser to navigate to the login page and submit the credentials
1. Prompt for a TOTP token
1. Use the headless browser to submit the TOTP token
1. Parse the response from Amazon to extract the SAML assertion
1. Present accessible roles to the user (if more than one) and allow them to select the role to assume
1. Use the STS API to [assume the role](http://docs.aws.amazon.com/cli/latest/reference/sts/assume-role-with-saml.html%29)
1. Save the token information to the [AWS credentials file](https://blogs.aws.amazon.com/security/post/Tx3D6U6WSFGOK2H/A-New-and-Standardized-Way-to-Manage-Credentials-in-the-AWS-SDKs)

We’ve open sourced our [token generator](https://github.com/meetearnest/aws-sts/). It supports assuming an AWS role and will automatically update your AWS credentials file with the new credentials. If even assumes roles across multiple AWS accounts if this is something your organization does.

At the moment, authentication is only implemented for Okta. But, adding support for other SSO providers should be
straightforward. Please [submit a pull request](https://github.com/meetearnest/aws-sts/pulls) if you add support for your own.

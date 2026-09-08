---
inclusion: fileMatch
fileMatchPattern: "**/infrastructure/**,**/infra/**,**/cdk/**,**/terraform/**,**/pulumi/**,**/*.tf,**/*-stack.ts,**/*Stack.ts"
---

# Infrastructure Standards

<!--
  INCLUSION: fileMatch — only loads when infrastructure files are open.
  Adjust fileMatchPattern to match your IaC tooling (CDK, Terraform, Pulumi, etc.).
  Delete this file entirely if infrastructure is managed outside this repo.
-->

## Infrastructure as Code

<!-- Define your IaC approach. Examples:
  - All infrastructure must be defined as code — no manual console changes
  - IaC tool of choice: AWS CDK / Terraform / Pulumi / Bicep
  - State management: Terraform remote state location, CDK bootstrap requirements
  - Every stack/module must have a README explaining what it creates and why
  - Changes require a plan/diff review before apply
-->

## Environment Strategy

<!-- Define your environment setup. Examples:
  - Environments: dev, staging, prod (or your naming convention)
  - Environment parity: staging should mirror prod as closely as possible
  - Environment-specific config: how is it injected? (SSM, env vars, config files)
  - Ephemeral environments: when to create/destroy them
  - No production resources without a corresponding staging equivalent
-->

## Security and Access Control

<!-- Define IAM and access control standards. Examples:
  - Least privilege: every role/policy must justify each permission
  - No wildcard (*) actions or resources in production policies
  - Service accounts must not have interactive/console access
  - Secrets go in a secrets manager — never in environment variables or code
  - MFA required for all human access to production
  - Audit logging enabled on all production accounts/subscriptions
-->

## Resource Naming Conventions

<!-- Define how resources are named. Example pattern:
  {team}-{env}-{service}-{resource-type}
  e.g.: platform-prod-payments-lambda, platform-dev-orders-rds

  Conventions to define:
  - Maximum name length (some services have limits)
  - Which parts are mandatory vs optional
  - How to handle name uniqueness (random suffix, account ID, etc.)
-->

## Cost Management

<!-- Define cost control standards. Examples:
  - Tag all resources with: team, environment, service, owner
  - Set budget alerts for all environments
  - Define approved instance/SKU sizes per workload type
  - Right-sizing review cadence
  - Auto-shutdown policy for non-production resources (dev/staging)
  - Reserved capacity vs on-demand policy
-->

## Reliability and Resilience

<!-- Define availability expectations. Examples:
  - Availability targets per environment (prod: 99.9%, staging: best-effort)
  - Multi-AZ/region requirements for production workloads
  - Backup and retention policies (define per data classification)
  - Disaster recovery RTO/RPO targets
  - Health checks and auto-healing requirements
  - Deployment strategy: blue/green, canary, rolling — define per risk level
-->

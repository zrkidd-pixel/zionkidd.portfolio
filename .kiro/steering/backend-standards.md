---
inclusion: fileMatch
fileMatchPattern: "**/src/**,**/lib/**,**/handlers/**,**/services/**,**/controllers/**,**/routes/**,**/api/**"
---

# Backend Standards

<!--
  INCLUSION: fileMatch — only loads when backend source files are open.
  Adjust fileMatchPattern to match your project's directory structure.
  Delete this file entirely if your project has no backend.
-->

## Architecture Pattern

<!-- Define your structural approach. Examples:
  - Hexagonal (Ports & Adapters): domain logic isolated from I/O and frameworks
  - Layered: controller → service → repository
  - CQRS: separate read and write models
  - Event-driven: define event contracts and consumer patterns
  State the core rule: business logic must not import framework or infrastructure code.
-->

## API Design

<!-- Define your API standards. Examples:
  - REST conventions: resource naming, HTTP method semantics, status code usage
  - Versioning strategy: URL path (/v1/), header, or none
  - Request/response envelope: flat vs wrapped ({ data, meta, errors })
  - Pagination: limit/offset vs cursor-based
  - Error response format: { code, message, details }
  - OpenAPI/Swagger spec required for all public endpoints
-->

## Data Access

<!-- Define how services interact with data stores. Examples:
  - All DB access goes through a repository interface (never direct from controller)
  - Use parameterized queries — never string-interpolated queries
  - Define connection pooling expectations
  - Transaction boundaries: define where transactions start and end
  - No raw SQL in domain logic — keep persistence in adapters
-->

## Service Communication

<!-- Define how services talk to each other. Examples:
  - Synchronous: REST / gRPC — when to use which
  - Asynchronous: message queues / event bus — preferred for cross-domain
  - Circuit breaker and retry policies
  - Timeout standards (define defaults per transport type)
  - Service discovery approach
-->

## Logging and Observability

<!-- Define structured logging expectations. Examples:
  - Always use structured JSON logging (no plain string log lines)
  - Required fields on every log line: service, level, timestamp, correlationId
  - Never log PII, credentials, or secrets
  - Log at boundaries (incoming requests, outgoing calls, errors)
  - Health check endpoint required for all services (/health or /healthz)
  - Distributed tracing: define trace propagation headers
-->

## Performance

<!-- Define backend performance expectations. Examples:
  - API response time SLA (p50, p95, p99)
  - Database query timeout limits
  - Pagination required for any list endpoint returning > N items
  - Caching strategy: what to cache, where, TTL conventions
  - Background processing for operations > N seconds
-->

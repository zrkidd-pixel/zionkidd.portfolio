# Performance Test Instructions

## Applicability: N/A for this project

`requirements.md` (NFR-1) sets no specific performance budget beyond "feels instant," which is a
direct consequence of the architecture choice, not something that needs a load-testing harness to
verify: this is a static site (no server-rendered pages, no database, no API calls on the critical
path) serving a single visitor's browser at a time. There is no concurrent-load, throughput, or
scalability dimension to test — GitHub Pages' CDN handles serving static assets at effectively
unlimited scale for a personal portfolio's traffic level.

A lightweight, relevant substitute already captured in the production build output
(`build-instructions.md`): the JS bundle is ~247 KB (~79 KB gzipped) as of this build — small
enough that load time is dominated by network latency, not bundle size, for this site's scope. If
the bundle grows significantly (e.g. a charting library gets added), revisit with a bundle-size
budget rather than a load-testing tool.

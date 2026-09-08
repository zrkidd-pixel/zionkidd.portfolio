# Story Generation Plan — Zion Kidd Personal Portfolio Site

## Methodology
Acting as product owner, converting `aidlc-docs/inception/requirements/requirements.md` into INVEST-compliant user stories with acceptance criteria, plus supporting personas.

## Breakdown Approach: Persona-Based, Grouped by User Journey
**Recommended approach**: Persona-based grouping (stories organized by who benefits), with each persona's stories sequenced along their actual journey through the site (arrive → skim → decide to go deeper → read case study → act). This fits a portfolio site better than feature-based breakdown (features here are mostly content sections, not independent capabilities) or epic-based (too heavyweight for this scope).

**Alternatives considered**:
- *Feature-based*: would fragment a single "read a case study" experience into artificial pieces (one story per content section) — rejected as over-granular for a content site.
- *Domain-based*: no real domain boundaries here (no training/nutrition/progress-style subsystems) — rejected as not applicable.
- *Epic-based*: unnecessary hierarchy overhead for a project this size — rejected.

## Execution Checklist

- [x] Step 1: Validate need — done (`user-stories-assessment.md`, Decision: Yes)
- [x] Step 2: Create this story plan
- [x] Step 3: Generate clarifying questions (asked inline per user's stored preference — see answers below)
- [x] Step 4: Confirm mandatory artifacts: stories.md (INVEST + acceptance criteria), personas.md, persona-to-story mapping
- [x] Step 5: Present breakdown approach options (above) — persona-based selected
- [x] Step 6: Get plan approval from user — Approved 2026-09-08
- [x] Step 7: Generate `aidlc-docs/inception/user-stories/personas.md`
- [x] Step 8: Generate `aidlc-docs/inception/user-stories/stories.md`
- [x] Step 9: Map personas to stories within stories.md (stories grouped by persona, plus a cross-persona section)
- [ ] Step 10: Present completion message, get approval

## Clarifying Questions & Answers

### Q1: Personas
Five personas confirmed (three original + two edge cases the user asked for):
1. **The Recruiter/Hiring Manager (Skimmer)** — has 30-60 seconds, scans the home page, reads one-line summaries, maybe opens one case study, looking for signal fast.
2. **The Technical Peer / Deep-Reader** — a fellow builder, potential collaborator, or genuinely curious visitor who reads a full case study end-to-end, cares about the insight/tradeoffs sections specifically.
3. **Zion (Author/Maintainer)** — not a site visitor, but a "user" of the content system: needs to be able to add the logo rebrand case study later, update placeholder bio/contact info, without re-architecting anything.
4. **The Direct-Link Visitor** — arrives via a shared case-study link (social repost), never sees the home page first; needs standalone context (nav back home, mini author blurb) on every case-study page.
5. **The Product-Curious Visitor** — wants to actually try Vine to Wine or the fitness app after reading, not evaluate Zion as a hire; needs a distinct "try it" CTA separate from any hiring-focused CTA.

[Answer]: Confirmed — all 5 personas approved.

### Q2: Story Granularity & Acceptance Criteria Detail
[Answer]: Lightweight Given/When/Then, 2-4 acceptance criteria per story.

### Q3: Open Behavioral Questions from Requirements
[Answer]:
- **Coming Soon card**: Clickable — leads to a minimal standalone teaser page/route (one-liner description + "case study launching soon" messaging; no real images required at launch). Not a dead click, not a modal.
- **Missing bonus content** (distribution/feedback/impact/quotes): Show a clearly-marked placeholder for each missing bonus section — never silently omit.
- **Dark mode default**: Follow system preference on first visit. Both light and dark themes must look equally polished/intentional — dark mode is not a lesser afterthought variant.

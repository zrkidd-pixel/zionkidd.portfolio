# User Stories — Zion Kidd Personal Portfolio Site

Organized by persona, sequenced along each persona's journey through the site. Acceptance criteria are lightweight Given/When/Then (2-4 per story), per the approved story generation plan.

---

## Persona 1: The Recruiter/Hiring Manager (Skimmer)

### US-1: Get the point of the site in 5 seconds
**As** a recruiter landing on the home page, **I want** to immediately see who Zion is and what he builds, **so that** I can decide in seconds whether to keep reading.

- **Given** I land on the home page for the first time, **when** the page loads, **then** I see Zion's name, a professional title/tagline, and a short bio above the project grid without scrolling on a standard desktop viewport.
- **Given** the bio/tagline fields are still placeholder content (pre-MVP-completion), **when** I view the home page, **then** the placeholder is visually coherent (not broken/lorem-ipsum-looking) even though marked for later revisit.

### US-2: Scan project cards for signal
**As** a recruiter with limited time, **I want** each project card to show a one-line summary, **so that** I can decide which (if any) case study is worth opening.

- **Given** the home page project grid, **when** I look at a project card, **then** I see the project name, a one-line summary, and a tech-stack hint (e.g. a chip or icon) without needing to click in.
- **Given** three project cards exist (Vine to Wine, my-fitness-app, logo rebrand), **when** I scan the grid, **then** the two full case studies are visually equivalent in weight, and the "Coming Soon" card is visually distinct (muted/secondary styling) so I don't mistake it for an equal, finished case study.

### US-3: Get the solution fast when I open a case study
**As** a recruiter who opened a case study, **I want** the problem and solution to be easy to find without reading every word, **so that** I can extract signal quickly even if I don't read the whole page.

- **Given** I open a full case study page, **when** the page renders, **then** the one-line summary, problem, and solution sections use clear heading hierarchy that supports skimming (not a single undifferentiated wall of text).
- **Given** I'm skimming, **when** I reach the bonus sections (distribution/feedback/impact/quotes), **then** they're visually secondary to the six core sections so skimming naturally prioritizes the core narrative first.

### US-4: Download a resume quickly
**As** a recruiter who liked what I saw, **I want** a one-click way to get Zion's resume, **so that** I don't have to email and wait.

- **Given** I'm on the home page or a case-study page, **when** I look for a resume link, **then** a "Download Resume" button/link is visibly and consistently placed (e.g. header or footer) across all pages.
- **Given** a real resume file hasn't been supplied yet, **when** I click "Download Resume", **then** I get a graceful placeholder state (not a broken 404 link).

---

## Persona 2: The Technical Peer / Deep-Reader

### US-5: Read the full narrative, not just features
**As** a technical peer, **I want** to read the complete problem → insight → solution narrative for a project, **so that** I understand the actual thinking behind it, not just a feature list.

- **Given** I open a case study, **when** I read through it, **then** all six core sections (summary, problem, target user, competitors, insight, solution) are present and clearly distinguishable from each other.
- **Given** the "solution" section, **when** I read it, **then** it explicitly states what was chosen NOT to build and why, not just what was shipped.

### US-6: See what was placeholder vs. real
**As** a technical peer reading closely, **I want** to clearly tell which bonus sections (distribution/feedback/impact/quotes) have real content versus a placeholder, **so that** I don't mistake a placeholder for an actual (weak) answer.

- **Given** a case study has no real data for a bonus section, **when** I read that section, **then** it's visibly marked as a placeholder (e.g. a distinct visual treatment/label), never presented as if it were finished real content.
- **Given** a bonus section does have real content, **when** I read it, **then** it's styled identically to the other real content sections (no visual difference from being "bonus").

### US-7: Check the tech stack and find the real project
**As** a technical peer, **I want** to see the actual tech stack and links to the real repo/live product, **so that** I can go verify or explore further myself.

- **Given** I'm on a case-study page, **when** I scroll to the tech section, **then** I see a chip list of real technologies used (sourced from that project's actual repo).
- **Given** a live demo, app store listing, or public repo exists for the project, **when** I look for links, **then** they're present and open correctly; **given** no public link exists, **then** no broken/dead link is shown.

---

## Persona 3: Zion (Author/Maintainer)

### US-8: Add the logo rebrand case study later without a rebuild
**As** the site maintainer, **I want** case studies driven by a reusable template plus per-project content data, **so that** I can add the wine society logo rebrand later by adding data, not writing a new page from scratch.

- **Given** the two existing case studies (Vine to Wine, my-fitness-app) are built on a shared case-study layout component, **when** I add a third project's content, **then** it renders correctly through that same layout without new layout code.
- **Given** the logo rebrand is currently a teaser/"Coming Soon" page (per US-10), **when** real content becomes available, **then** upgrading it to a full case study doesn't require changing its URL/route (no broken external links to the teaser).

### US-9: Update placeholder info without touching multiple files
**As** the site maintainer, **I want** name/title/bio/contact/resume fields centralized in one place, **so that** filling them in post-MVP is a small, low-risk edit.

- **Given** placeholder bio/contact/social/resume fields exist across the home page, footer, and case-study pages, **when** I update them, **then** I edit a single content/config source and the change propagates everywhere it's used.
- **Given** I haven't filled in the resume file yet, **when** I check the site, **then** the placeholder state (US-4) is obviously a "not yet provided" state in the code/content, not silently broken.

---

## Persona 4: The Direct-Link Visitor

### US-10: Orient immediately on a case-study page with no prior context
**As** someone who clicked a shared case-study link and never saw the home page, **I want** enough context on the case-study page itself, **so that** I understand whose site this is without navigating away.

- **Given** I land directly on any case-study page (including the logo-rebrand teaser page from US-Coming-Soon), **when** the page loads, **then** I see Zion's name/title (at minimum in a persistent header) even though I skipped the home page.
- **Given** I want to see other work, **when** I look for navigation, **then** a clear, always-visible way back to the home page (e.g. logo/name in header linking home) is present on every case-study and teaser page.

---

## Persona 5: The Product-Curious Visitor

### US-11: Find a clear path to try the actual product
**As** someone who wants to use Vine to Wine or the fitness app after reading about it, **I want** an obvious "try it" call-to-action, **so that** I don't have to go search for the product myself.

- **Given** a case study for a project with a live demo/app store link, **when** I look for how to try it, **then** a distinctly-labeled CTA (e.g. "Try Vine to Wine" / "View Live App") is present and separate from any hiring-oriented CTA (e.g. "Download Resume").
- **Given** no public live link exists for a project, **when** I view that case study, **then** no "try it" CTA is shown (no dead link presented as if it worked).

---

## Cross-Persona / Site-Wide Stories

### US-12: Coming Soon card leads somewhere real
**As** any visitor, **I want** the "Coming Soon" logo rebrand card to be clickable and lead to a real (if minimal) page, **so that** clicking it doesn't feel like a dead end or a bug.

- **Given** I click the "Coming Soon" project card on the home page, **when** the click registers, **then** I'm taken to a dedicated teaser page/route with a one-line project description and "case study launching soon" messaging.
- **Given** the teaser page has no real images/content yet, **when** I view it, **then** it still looks intentional and complete as a minimal page (not a blank or broken-looking placeholder).

### US-13: Dark mode that looks equally polished in both themes
**As** any visitor, **I want** the site to respect my system's light/dark preference and let me override it, **so that** I have a comfortable reading experience regardless of theme.

- **Given** I visit the site for the first time, **when** the page loads, **then** it defaults to my OS/browser's light or dark preference automatically.
- **Given** I toggle the theme manually, **when** I switch between light and dark, **then** every page (home, case studies, teaser page) renders correctly and looks equally intentional/polished in both — dark mode is not a lesser or unfinished-looking variant.
- **Given** I've set a manual override, **when** I return to the site later (same browser), **then** my manual choice is remembered rather than reverting to system preference every visit.

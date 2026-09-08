# Screen Content Refinements

## Purpose
**Fine-tuning textual content within screen-based flows — headlines, body copy, instructions, images, and screen-by-screen messaging**

Screen Content Refinements focuses on:
- Reviewing and improving screen text (headlines, body copy, hints, explanations)
- Adjusting content flow and screen sequencing
- Refining interactive elements (quiz questions, prompts, feedback text)
- Selecting appropriate images that match the content tone
- Improving clarity, tone, and user comprehension
- Ensuring consistency across content flows

**Note**: This stage is for CONTENT refinements (what screens say and show), not DESIGN refinements (how screens look structurally). For visual/styling changes, use UI/UX Refinements.

## Applicable Content Types
This stage applies to any screen-based content flow:
- Educational lessons or tutorials
- Onboarding sequences
- Help/FAQ screens
- Game dialogues or narratives
- Guided workflows or wizards
- Interactive quizzes or assessments
- Product tours

## Prerequisites
- Screen-based content must exist in the codebase
- User has identified specific screens or content areas needing improvement

## Distinction from UI/UX Refinements

| Aspect | UI/UX Refinements | Screen Content Refinements |
|--------|-------------------|----------------------------|
| Focus | Visual design, colors, typography, layout | Text, copy, messaging, images, instructional flow |
| Changes | CSS, component styles, visual hierarchy | Content data: headlines, body text, prompts, images, etc. |
| Approval | Design mockups showing appearance | Content mockups showing what screens SAY and SHOW |
| Examples | "Make buttons rounder" | "Change headline to be less casual" |

## Step-by-Step Execution

### Step 1: Generate Overview Mockup
**DIRECTIVE**: Create a single HTML file showing ALL screens in the target flow so the user can see everything at once.

**Mockup Requirements:**
1. Self-contained HTML/CSS (no external dependencies)
2. Shows all screens in a grid layout
3. Each screen rendered in a phone-frame format
4. Screen numbers and types labeled (e.g., "Screen 2 (tap-reveal)")
5. Instructions at the top explaining how to provide feedback

**File location:** `aidlc-docs/operations/screen-content-refinements/mockups/[flow-id]/all-screens-mockup.html`

**Present to user:**
```markdown
# 📝 Content Mockup Ready for Review

I've created a mockup showing all [N] screens at:
`aidlc-docs/operations/screen-content-refinements/mockups/[flow-id]/all-screens-mockup.html`

**To preview:** Open this file in your browser, or say "open it" and I'll open it for you.
```

### Step 2: Screen-by-Screen Review
**DIRECTIVE**: Walk through each screen ONE AT A TIME, asking the user to approve or request changes.

**For each screen, present:**
```markdown
## Screen [N] — [Title] ([type])

**Title:** "[current title]"
**Main Text:** "[current main text]"
**Sub Text:** "[current sub text]"
**[Any special elements]:** [current content]

Any changes needed for Screen [N], or approve as-is?
```

**Wait for user response before moving to the next screen.**

### Step 3: Handle Change Requests
When the user requests a change:

1. **If it's a text change**: Update the mockup HTML immediately, then ask user to refresh and confirm
2. **If it's an image change**: Try multiple options until the user approves (images are subjective — expect iteration)
3. **If the user provides exact text**: Use it verbatim — do not paraphrase or "improve" it
4. **If the user describes what they want**: Offer 3-4 options for them to choose from

**Example dialogue for text options:**
```markdown
For Screen 1's highlight box, the goal should be to [describe purpose]. A few options:

**Option A — [approach name]**
> "[proposed text]"

**Option B — [approach name]**
> "[proposed text]"

**Option C — [approach name]**
> "[proposed text]"

Which direction feels right, or would you like something else entirely?
```

### Step 4: Track Approvals
After each screen is approved, note it and move to the next:

```markdown
✅ **Screen [N] approved.**

Changes for Screen [N]:
- [Change 1]
- [Change 2]

---

## Screen [N+1] — [Title] ([type])
...
```

### Step 5: Implementation (After All Screens Approved)
**DIRECTIVE**: Only implement changes AFTER all screens have been explicitly approved.

1. Present a summary table of all approved changes
2. Update the actual source code file(s)
3. Commit with a descriptive message
4. Push to repository

**Summary format:**
```markdown
## All Screens Approved — Implementation Time

| Screen | Change |
|--------|--------|
| 1 | [description] |
| 2 | [description] |
| ... | ... |

Now I'll implement these changes in the actual source file.
```

### Step 6: Post-Implementation
After committing, present completion using this exact structure:

1. **Completion Announcement** (mandatory): Always start with this:

```markdown
# ✅ [Flow Name] — Refinements Complete
```

2. **AI Summary** (mandatory): Commit info and changes made
   - Format: "**Commit:** `[hash]` — "[commit message]""
   - Include the summary table of changes implemented
   - DO NOT include workflow instructions here ("please review", "let me know") — those belong in the formatted block below

3. **Formatted Workflow Message** (mandatory): Always end with this exact format:

```markdown
> **📋 <u>**REVIEW REQUIRED:**</u>**  
> Please review the implemented changes and restart your dev server to see them in the app.

> **🚀 <u>**WHAT'S NEXT?**</u>**
>
> **You may:**
>
> 🔧 **Request Changes** - Ask for further adjustments to any screen's content
> ✅ **Approve & Continue** - Confirm the refinements are complete

---
```

## Best Practices

### Content Principles
1. **Clarity over cleverness** — Content should be immediately understandable
2. **Consistent tone** — Match the app's established voice across all flows
3. **Action-oriented** — Tell users what to do or what they'll learn
4. **Avoid jargon** — Unless teaching that terminology is the purpose
5. **Don't spoil reveals** — If a later screen reveals something, don't give it away earlier

### Working with User Feedback
1. **Use exact text when provided** — If the user gives you specific wording, use it exactly
2. **Ask clarifying questions one at a time** — Don't batch questions
3. **Offer options when intent is unclear** — Give 3-4 choices with different approaches
4. **Iterate on images** — Expect multiple attempts; images are subjective
5. **Note patterns** — If user consistently removes quotes or changes formatting, apply that pattern going forward

### Mockup Efficiency
- Generate one comprehensive mockup showing all screens (not individual files per screen)
- Update the mockup in place as changes are approved
- Keep the mockup open in the browser so user can refresh to see changes
- Match the app's actual visual style in mockups for realistic preview

### Change Tracking
- Keep a running list of changes per screen
- Note WHY changes were requested (for future reference)
- Track rejected alternatives (prevents re-suggesting the same thing)

### Common Refinement Types
| Type | Example |
|------|---------|
| Headline rewrite | "Setup is complete" → "You're all set!" |
| Simplification | Remove jargon, shorten sentences |
| Tone adjustment | Make more playful, more formal, etc. |
| Accuracy fix | Correct factual errors or misleading phrasing |
| Flow improvement | Don't spoil Screen 3's reveal in Screen 1's intro |
| Prompt refinement | Improve question clarity, better answer options |
| CTA improvement | "Next" → "Continue to Step 2" |
| Image replacement | Find image that better matches content/mood |
| Emoji adjustment | Use more relevant or consistent emoji |
| Quote/formatting consistency | Apply consistent style (quotes, capitalization) |

### Image Selection Tips
When the user requests a different image:
1. Ask clarifying questions: "What feeling should this image convey?" or "Any specific elements you want to see?"
2. Try multiple options — images are subjective and may take several attempts
3. Common image themes: celebration, learning, nature, people, abstract
4. Use Unsplash URLs for easy embedding in mockups

## File Locations
- **Rule details**: `.aidlc-rule-details/operations/screen-content-refinements.md`
- **Plans**: `aidlc-docs/operations/screen-content-refinements/plans/`
- **Mockups**: `aidlc-docs/operations/screen-content-refinements/mockups/[flow-id]/`

## Example Workflow Summary

1. User says: "I want to update the screens in the [X] lesson"
2. AI generates `all-screens-mockup.html` with all screens visible
3. AI opens the mockup in the user's browser
4. AI walks through Screen 1, asks for approval
5. User requests changes → AI updates mockup → user refreshes → repeats until approved
6. AI moves to Screen 2, repeats process
7. After all screens approved, AI implements changes in source code
8. AI commits and pushes
9. User restarts dev server to verify

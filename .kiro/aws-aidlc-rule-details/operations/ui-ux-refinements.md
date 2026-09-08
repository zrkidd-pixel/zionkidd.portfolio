# UI/UX Refinements

## Purpose
**Visual redesign and user experience improvements for existing applications**

UI/UX Refinements focuses on:
- Analyzing current UI/UX patterns and identifying improvement areas
- Collecting design references from the user (screenshots, style guides, design systems)
- Extracting design patterns from reference materials
- Creating a cohesive design system (colors, typography, spacing, components)
- Implementing UI changes across the application

**Note**: This stage is for EXISTING applications that need visual/UX improvements, not new feature development.

## Prerequisites
- Application must be functional (CONSTRUCTION phase complete or existing working app)
- User should have design references or clear vision of desired aesthetic
- Current UI screens should be documented or accessible

## Step-by-Step Execution

### Step 1: Analyze Current State
- Review existing UI components and patterns
- Document current design system (if any): colors, typography, spacing, component styles
- Identify screens/components that need redesign
- Note any existing accessibility or usability issues

### Step 2: Create UI/UX Refinement Plan
- Generate plan with checkboxes [] for refinement stages
- Structure plan around:
  - [ ] Reference Collection (gather user's design inspiration)
  - [ ] Design System Definition (colors, typography, spacing, components)
  - [ ] Screen-by-Screen Implementation
  - [ ] Consistency Verification
- Each step should have a checkbox []

### Step 3: Request Design References
**DIRECTIVE**: Before designing, collect visual references from the user. Screenshots are far more effective than text descriptions.

**CRITICAL - One-at-a-Time Flow**: 
- Request ONE screenshot at a time
- After receiving a screenshot, analyze it and ask questions ONE at a time about what elements the user wants
- Only after fully covering that screenshot, request the next one
- This iterative approach ensures deep understanding of user preferences

Present the initial reference request:

```markdown
# 📸 Design Reference Collection

To create the best possible redesign, I need visual references.

**Please share your first screenshot** — drag & drop an image into the chat.

This can be from any app that has the aesthetic you want (Duolingo, Headspace, Nike, etc.)

Once I see it, I'll ask you questions about what specific elements you want to adopt from it.
```

### Step 3a: Screenshot Analysis Loop
For EACH screenshot the user provides:

1. **Acknowledge and describe** what you see in the screenshot
2. **Ask ONE question at a time** about what they want:
   - "Do you want to adopt this color palette?"
   - "Do you like these card styles?"
   - "Should we use this button style?"
   - "Do you want this spacing/density?"
   - etc.
3. **Wait for answer** before asking the next question
4. **Record each answer** in the reference analysis document
5. **After covering all elements**, ask: "Ready for the next screenshot, or is this enough references?"

**Question categories to cover per screenshot** (ask relevant ones based on what's visible):
- Color palette (primary, accent, backgrounds)
- Card/container styles (shadows, borders, radius)
- Button styles
- Typography (size, weight, style)
- Spacing/density
- Icons/illustrations style
- Progress indicators
- Navigation patterns
- Animations/transitions (if described or inferred)
- Any standout UI patterns unique to that screenshot

### Step 4: Analyze Design References
After collecting all screenshots through the one-at-a-time loop:
- Consolidate findings into a reference analysis document
- Extract color palette (primary, secondary, accent, backgrounds, text colors)
- Identify typography patterns (font weights, sizes, hierarchy)
- Document spacing system (padding, margins, gaps)
- Catalog component patterns (cards, buttons, inputs, progress bars)
- Note animation/transition styles
- Identify layout patterns (grid systems, navigation)

Create reference analysis document at `aidlc-docs/operations/ui-ux-refinements/reference-analysis.md`

### Step 5: Generate UI/UX Questions
**DIRECTIVE**: Analyze the references and current app to identify areas needing clarification. Use [Answer]: tag format.

**Question categories to consider:**

- **Color System**
  - Primary brand color and its variants
  - Semantic colors (success, error, warning, info)
  - Background colors (light/dark mode support?)
  - Text color hierarchy

- **Typography**
  - Font family preferences (system fonts vs custom)
  - Size scale (what sizes for headings, body, captions)
  - Weight usage (when to use bold, medium, regular)

- **Component Patterns**
  - Card styles (shadows, borders, border-radius)
  - Button variants (primary, secondary, ghost, destructive)
  - Input field styles
  - Navigation patterns (tabs, sidebars, headers)

- **Interaction Design**
  - Hover/active states
  - Animation preferences (subtle vs playful)
  - Sound effects (keep, modify, or remove)
  - Haptic feedback (mobile)

- **Layout & Spacing**
  - Spacing scale (4px, 8px base?)
  - Content density (compact vs comfortable)
  - Responsive breakpoints

- **Screen-Specific Questions**
  - Home: What should be the focal point?
  - Quiz: How should correct/incorrect feedback look?
  - Games: How to balance fun vs clarity?
  - Learn: How to encourage progression?

### Step 6: Store UI/UX Plan
- Save as `aidlc-docs/operations/plans/ui-ux-refinements-plan.md`
- Include all [Answer]: tags for user input

### Step 7: Collect and Analyze Answers
- Wait for user to complete all [Answer]: tags
- **MANDATORY**: Review for vague answers ("maybe", "depends", "not sure")
- Add follow-up questions for any ambiguities
- Do not proceed until all ambiguities are resolved

### Step 8: Generate Design System Document
Create `aidlc-docs/operations/ui-ux-refinements/design-system.md` with:

```markdown
# Design System - [App Name]

## Color Palette
### Primary Colors
- Primary: #XXXXXX (usage: buttons, links, accents)
- Primary Hover: #XXXXXX
- Primary Light: #XXXXXX (backgrounds)

### Semantic Colors
- Success: #XXXXXX
- Error: #XXXXXX
- Warning: #XXXXXX
- Info: #XXXXXX

### Neutrals
- Background: #XXXXXX
- Surface: #XXXXXX
- Border: #XXXXXX
- Text Primary: #XXXXXX
- Text Secondary: #XXXXXX
- Text Muted: #XXXXXX

## Typography
### Font Family
- Headings: [Font Name]
- Body: [Font Name]
- Mono: [Font Name]

### Scale
- Display: Xpx / X.Xrem
- H1: Xpx / bold
- H2: Xpx / semibold
- H3: Xpx / semibold
- Body: Xpx / regular
- Small: Xpx / regular
- Caption: Xpx / medium

## Spacing
- Base unit: Xpx
- Scale: 4, 8, 12, 16, 24, 32, 48, 64

## Border Radius
- Small: Xpx (inputs, small buttons)
- Medium: Xpx (cards, modals)
- Large: Xpx (feature cards)
- Full: 9999px (pills, avatars)

## Shadows
- Subtle: [shadow definition]
- Medium: [shadow definition]
- Elevated: [shadow definition]

## Components
### Buttons
- Primary: [styles]
- Secondary: [styles]
- Ghost: [styles]

### Cards
- Default: [styles]
- Interactive: [styles]

### Inputs
- Default: [styles]
- Focus: [styles]
- Error: [styles]

## Animation
- Duration: Fast (150ms), Normal (300ms), Slow (500ms)
- Easing: [easing function]
- Micro-interactions: [descriptions]
```

### Step 9: Create HTML Mockups (MANDATORY)
**DIRECTIVE**: Before any code changes, create standalone HTML/CSS mockup files for user approval.

**Process:**
1. Create mockup files in `aidlc-docs/operations/ui-ux-refinements/mockups/`
2. Each major screen gets its own HTML file (e.g., `home-screen-mockup.html`)
3. Mockups must be self-contained (inline CSS, no external dependencies) so user can open directly in browser
4. Include multiple states where relevant (empty, partial progress, complete)

**Mockup file naming convention:**
- `[screen-name]-mockup.html` (e.g., `deck-progress-mockup.html`)
- `[component-name]-mockup.html` for isolated component previews

**Present to user:**
```markdown
# 🎨 Mockup Ready for Review

I've created an HTML mockup at:
`aidlc-docs/operations/ui-ux-refinements/mockups/[filename].html`

**To preview:** Open this file in your browser (File → Open, or drag into browser window).

Please review and let me know:
- ✅ Approve as-is
- 🔧 Request specific changes
- ❌ Reject and try different approach
```

**CRITICAL**: Do NOT proceed to implementation until user explicitly approves each mockup.

### Step 10: Create Implementation Plan
Generate screen-by-screen implementation plan only AFTER mockups are approved:

```markdown
# UI/UX Implementation Plan

## Approved Mockups
- [x] [Screen Name] - approved [date]
- [ ] [Screen Name] - pending

## Priority Order
1. Design System Foundation (globals.css, theme tokens)
2. Shared Components (buttons, cards, inputs)
3. High-Priority Screens (by user preference)
4. Remaining Screens
5. Polish & Consistency Pass

## Screen Implementation Checklist
### [Screen Name]
- [ ] Apply color palette
- [ ] Update typography
- [ ] Update spacing
- [ ] Update component styles
- [ ] Add/update animations
- [ ] Verify accessibility (contrast, focus states)
- [ ] Test responsive behavior
- [ ] Compare against approved mockup
```

### Step 11: Execute Implementation
- Implement design system foundation first (CSS variables, theme file)
- Update shared components
- Apply changes screen by screen
- Verify consistency across screens
- Test on different screen sizes
- **Compare each implemented screen against its approved mockup**

### Step 12: Present Completion Message

```markdown
# 🎨 UI/UX Refinements Complete

[AI-generated summary of changes made in bullet points]

> **📋 <u>**REVIEW REQUIRED:**</u>**  
> Please review the updated screens and design system at: `aidlc-docs/operations/ui-ux-refinements/`
> 
> Test the application to verify the visual changes meet your expectations.

> **🚀 <u>**WHAT'S NEXT?**</u>**
>
> **You may:**
>
> 🔧 **Request Changes** - Ask for modifications to specific screens or components
> 🎯 **Refine Specific Areas** - Focus on particular screens that need more work
> ✅ **Approve & Continue** - Approve the redesign and proceed to commit changes
```

### Step 13: Wait for Explicit Approval
- Do not commit/push until user explicitly approves
- If user requests changes, iterate on specific areas
- Log all feedback and changes in audit.md

### Step 14: Record Approval and Update Progress
- Log approval in audit.md with timestamp
- Mark UI/UX Refinements stage complete in aidlc-state.md
- Commit and push changes to repository

## Best Practices

### Effective Reference Analysis
1. **Extract concrete values** - Don't guess at colors; use color picker tools or ask user
2. **Name patterns explicitly** - "Bottom tab navigation" not "easy navigation"
3. **Document constraints** - What to AVOID is as important as what to include

### Default → Constraint Framework
When implementing each screen:
1. State a strong default (the overall style in one sentence)
2. Layer 3-6 hard constraints (exact sections, components, visual system)
3. Iterate with deltas (don't re-describe, just add changes)

### Accessibility Requirements
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Focus states must be visible
- Touch targets minimum 44px
- Support prefers-reduced-motion
- Semantic HTML structure

### Consistency Checklist
- [ ] Same colors used consistently for same purposes
- [ ] Same spacing values throughout
- [ ] Same border-radius on similar components
- [ ] Same typography scale
- [ ] Same animation timing
- [ ] Same interaction patterns

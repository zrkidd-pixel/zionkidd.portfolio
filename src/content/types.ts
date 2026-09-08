/**
 * Shared shape for every full case study (US-8: one reusable template,
 * driven by data, so adding a future project doesn't require new layout
 * code). Bonus fields are optional — CaseStudyLayout renders a
 * PlaceholderNote for any that are missing (US-6), never silently omitting
 * the section.
 */
export interface CaseStudyLink {
  label: string
  href: string
}

export interface CaseStudy {
  slug: string
  name: string
  emoji: string
  oneLineSummary: string

  // Core sections — always present (FR-2)
  problem: string
  targetUser: string
  competitors: string
  insight: string | PlaceholderContent
  solution: string

  // Bonus sections — optional (FR-2)
  distribution?: string | PlaceholderContent
  feedback?: string | PlaceholderContent
  impact?: ImpactStat[] | PlaceholderContent
  quotes?: string[] | PlaceholderContent

  techStack: string[]
  links: CaseStudyLink[]
  /** Live demo / app link surfaced as a distinct "Try it" CTA (US-11). */
  tryItLink?: CaseStudyLink
}

export interface ImpactStat {
  value: string
  label: string
}

/** Marks a section as intentionally left for the author to fill in later. */
export interface PlaceholderContent {
  placeholder: true
  note: string
}

export function isPlaceholder(value: unknown): value is PlaceholderContent {
  return typeof value === 'object' && value !== null && (value as PlaceholderContent).placeholder === true
}

export function placeholder(note: string): PlaceholderContent {
  return { placeholder: true, note }
}

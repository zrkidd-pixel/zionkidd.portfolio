import { comingSoonProject } from '../content/comingSoon'
import '../styles/case-study.css'

/**
 * Minimal standalone teaser page for the wine society logo rebrand (US-12).
 * Clicking the "Coming Soon" card leads here rather than nowhere, and it
 * carries the same header/nav context as a real case study so a
 * Direct-Link Visitor (US-10) landing here directly still orients fine.
 */
export function LogoRebrandTeaser() {
  return (
    <div className="container teaser" data-testid="logo-rebrand-teaser">
      <p className="eyebrow">{comingSoonProject.emoji} Case Study — Coming Soon</p>
      <h1 className="teaser__title">{comingSoonProject.name}</h1>
      <p className="teaser__body">
        {comingSoonProject.oneLineSummary} The full case study — problem, target audience, and design
        rationale — is being written up and will land here soon.
      </p>
    </div>
  )
}

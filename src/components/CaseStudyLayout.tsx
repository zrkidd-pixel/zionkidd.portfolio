import type { ReactNode } from 'react'
import type { CaseStudy } from '../content/types'
import { isPlaceholder } from '../content/types'
import { PlaceholderNote } from './PlaceholderNote'
import { StatBlock } from './StatBlock'
import '../styles/case-study.css'

/**
 * The one reusable case-study template (US-8) — every full case study
 * (Vine to Wine, my-fitness-app, and any future project) renders through
 * this component. Always renders all 6 core sections (US-5). Any bonus
 * section that's missing or explicitly a placeholder renders a
 * PlaceholderNote instead of being silently omitted (US-6).
 */
export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  return (
    <article className="container case-study" data-testid="case-study-layout">
      <div className="case-study__eyebrow-row">
        <span aria-hidden="true">{study.emoji}</span>
        <p className="eyebrow">Case Study</p>
      </div>
      <h1 className="case-study__title">{study.name}</h1>
      <p className="case-study__summary">{study.oneLineSummary}</p>

      <div className="case-study__cta-row">
        {study.tryItLink && (
          <a
            href={study.tryItLink.href}
            target="_blank"
            rel="noreferrer"
            className="pill-button pill-button--accent"
            data-testid="try-it-cta"
          >
            {study.tryItLink.label}
          </a>
        )}
        {study.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="pill-button pill-button--ghost"
          >
            {link.label}
          </a>
        ))}
      </div>

      <Section title="The Problem">{study.problem}</Section>
      <Section title="Target User">{study.targetUser}</Section>
      <Section title="Competitors">{study.competitors}</Section>
      <BonusSection title="Insight" content={study.insight} />
      <Section title="The Solution">{study.solution}</Section>

      <section className="case-study__section">
        <h2>Tech Stack</h2>
        <div className="case-study__tech-chips">
          {study.techStack.map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <hr className="rule" />

      <div className="case-study__bonus">
        <p className="eyebrow case-study__bonus-heading">Bonus</p>
        <BonusSection title="Distribution" content={study.distribution} />
        <BonusSection title="What Changed Based on Feedback" content={study.feedback} />
        <ImpactSection impact={study.impact} />
        <QuotesSection quotes={study.quotes} />
      </div>
    </article>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="case-study__section">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}

/** Renders real content, or a PlaceholderNote when content is a placeholder
 * or missing entirely — a bonus section is never silently omitted (US-6). */
function BonusSection({
  title,
  content,
}: {
  title: string
  content?: string | { placeholder: true; note: string }
}) {
  return (
    <section className="case-study__section">
      <h2>{title}</h2>
      {content === undefined ? (
        <PlaceholderNote>{`${title} not written yet.`}</PlaceholderNote>
      ) : isPlaceholder(content) ? (
        <PlaceholderNote>{content.note}</PlaceholderNote>
      ) : (
        <p>{content}</p>
      )}
    </section>
  )
}

function ImpactSection({ impact }: { impact: CaseStudy['impact'] }) {
  return (
    <section className="case-study__section">
      <h2>Impact</h2>
      {impact === undefined ? (
        <PlaceholderNote>Impact numbers not available yet.</PlaceholderNote>
      ) : isPlaceholder(impact) ? (
        <PlaceholderNote>{impact.note}</PlaceholderNote>
      ) : (
        <div className="case-study__stats-row">
          {impact.map((stat) => (
            <StatBlock key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      )}
    </section>
  )
}

function QuotesSection({ quotes }: { quotes: CaseStudy['quotes'] }) {
  return (
    <section className="case-study__section">
      <h2>Real User Quotes</h2>
      {quotes === undefined ? (
        <PlaceholderNote>No quotes collected yet.</PlaceholderNote>
      ) : isPlaceholder(quotes) ? (
        <PlaceholderNote>{quotes.note}</PlaceholderNote>
      ) : (
        <ul className="case-study__quotes">
          {quotes.map((quote) => (
            <li key={quote}>
              <blockquote>&ldquo;{quote}&rdquo;</blockquote>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

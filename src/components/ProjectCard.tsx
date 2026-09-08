import { Link } from 'react-router-dom'
import '../styles/home.css'

interface ProjectCardProps {
  slug: string
  emoji: string
  name: string
  summary: string
  techStack?: string[]
  comingSoon?: boolean
}

/**
 * A finished-case-study card and a "Coming Soon" card share this component
 * but are visually distinct (US-2): the Coming Soon variant is muted/dashed
 * so a skimmer never mistakes it for an equally-finished project. It's
 * still clickable through to a real teaser page (US-12), never a dead card.
 */
export function ProjectCard({ slug, emoji, name, summary, techStack, comingSoon }: ProjectCardProps) {
  return (
    <Link
      to={`/${slug}`}
      className={`card-surface project-card${comingSoon ? ' project-card--coming-soon' : ''}`}
      data-testid={comingSoon ? 'project-card-coming-soon' : `project-card-${slug}`}
    >
      <span className="project-card__emoji" aria-hidden="true">
        {emoji}
      </span>
      <span className="project-card__name">{name}</span>
      <p className="project-card__summary">{summary}</p>
      {comingSoon ? (
        <span className="tag-chip tag-chip--muted">Coming Soon</span>
      ) : (
        <span className="project-card__chips">
          {techStack?.slice(0, 3).map((tech) => (
            <span key={tech} className="tag-chip tag-chip--muted">
              {tech}
            </span>
          ))}
        </span>
      )}
    </Link>
  )
}

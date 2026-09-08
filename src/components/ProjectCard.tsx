import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

interface ProjectCardProps {
  slug: string
  name: string
  summary: string
  posterSrc: string
  videoSrc?: string
  techStack?: string[]
  comingSoon?: boolean
}

/**
 * A finished-case-study card and a "Coming Soon" card share this component
 * (US-2) but are both clickable through to a real page (US-12) — the only
 * difference is the "Coming Soon" chip in place of tech chips, per the
 * "blend in, just label it" decision (aidlc-docs reference-analysis.md
 * Decision 16).
 */
export function ProjectCard({ slug, name, summary, posterSrc, videoSrc, techStack, comingSoon }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const showVideo = hovered && videoReady

  return (
    <Link
      to={`/${slug}`}
      className={`project-card${comingSoon ? ' project-card--coming-soon' : ''}`}
      data-testid={comingSoon ? 'project-card-coming-soon' : `project-card-${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setVideoReady(false)
      }}
    >
      <div className="project-card__media">
        <img src={posterSrc} alt="" className={`project-card__poster${showVideo ? ' project-card__poster--hidden' : ''}`} />
        {hovered && videoSrc ? (
          <video
            className="project-card__video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoReady(true)}
          />
        ) : null}
        <div className="project-card__overlay">
          <span className="project-card__overlay-label">View case study →</span>
        </div>
      </div>
      <div className="project-card__body">
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
      </div>
    </Link>
  )
}

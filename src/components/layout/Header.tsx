import { Link } from 'react-router-dom'
import { site, hasResume } from '../../content/site'
import { ThemeToggle } from '../ThemeToggle'
import '../../styles/layout.css'

/**
 * Persistent header on every page (home, case studies, teaser, blog) so a
 * Direct-Link Visitor (US-10) always has a way back home and enough
 * identity context, and a Recruiter (US-4) always has the resume CTA within
 * reach.
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Link to="/" className="site-header__brand" data-testid="header-home-link">
          {site.name}
          <span className="site-header__brand-sub">Portfolio</span>
        </Link>
        <div className="site-header__actions">
          <Link to="/blog" className="pill-button pill-button--ghost" data-testid="header-blog-link">
            Blog
          </Link>
          <ThemeToggle />
          {hasResume() ? (
            <a
              href={site.resumeHref}
              download
              className="pill-button pill-button--accent"
              data-testid="resume-download-link"
            >
              Download Resume
            </a>
          ) : (
            <button
              type="button"
              className="pill-button pill-button--ghost"
              data-testid="resume-placeholder-button"
              disabled
              title="Resume coming soon"
            >
              Resume coming soon
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site, hasResume } from '../../content/site'
import { ThemeToggle } from '../ThemeToggle'
import '../../styles/layout.css'

const NAV_ITEMS = [
  { index: '01', label: 'Projects', to: '/#work' },
  { index: '02', label: 'Blog', to: '/blog' },
  { index: '03', label: 'About', to: '/#about' },
  { index: '04', label: 'Contact', to: '/#contact' },
]

function NavClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    function tick() {
      setTime(formatter.format(new Date()))
    }

    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span className="navbar__clock" aria-label="Current time in New York">
      NYC {time}
    </span>
  )
}

/**
 * Persistent nav on every page (home, case studies, teaser, blog) so a
 * Direct-Link Visitor (US-10) always has a way back home and enough
 * identity context, and a Recruiter (US-4) always has the resume CTA within
 * reach. Numbered items map to the site's real sections (US-9 revamp):
 * Projects/About/Contact live as anchors on Home, Blog is its own route.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__row">
        <Link to="/" className="navbar__brand" data-testid="header-home-link" onClick={() => setMenuOpen(false)}>
          {site.name}
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="navbar__link"
              data-testid={item.label === 'Blog' ? 'header-blog-link' : undefined}
            >
              <span className="navbar__link-index">{item.index}</span>
              <span className="navbar__link-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className="navbar__meta">
          {site.contactEmail ? <span className="navbar__email">{site.contactEmail}</span> : null}
          <NavClock />
          <div className="navbar__utility">
            <ThemeToggle />
            {hasResume() ? (
              <a
                href={site.resumeHref}
                download
                className="pill-button pill-button--ghost"
                data-testid="resume-download-link"
              >
                Resume
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
      </div>

      <div className={`navbar__mobile-panel${menuOpen ? ' navbar__mobile-panel--open' : ''}`}>
        <div>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link to={item.to} onClick={() => setMenuOpen(false)}>
                  {item.index} / {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-meta">
            {site.contactEmail ? <span className="navbar__email">{site.contactEmail}</span> : null}
            <NavClock />
            <div className="navbar__utility">
              <ThemeToggle testId="theme-toggle-button-mobile" />
              {hasResume() ? (
                <a
                  href={site.resumeHref}
                  download
                  className="pill-button pill-button--ghost"
                  data-testid="resume-download-link-mobile"
                >
                  Resume
                </a>
              ) : (
                <button
                  type="button"
                  className="pill-button pill-button--ghost"
                  data-testid="resume-placeholder-button-mobile"
                  disabled
                  title="Resume coming soon"
                >
                  Resume coming soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

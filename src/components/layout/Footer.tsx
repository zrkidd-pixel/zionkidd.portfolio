import { site } from '../../content/site'
import '../../styles/layout.css'

export function Footer() {
  const linkEntries = Object.entries(site.links).filter(([, href]) => href.length > 0)

  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <p className="eyebrow">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        {linkEntries.length > 0 ? (
          <ul className="site-footer__links">
            {linkEntries.map(([label, href]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="eyebrow" data-testid="footer-links-placeholder">
            Contact links coming soon
          </p>
        )}
      </div>
    </footer>
  )
}

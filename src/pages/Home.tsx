import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { caseStudies } from '../content/case-studies'
import { comingSoonProject } from '../content/comingSoon'
import { site, hasResume, hasContactForm } from '../content/site'
import { ProjectCard } from '../components/ProjectCard'
import { ContactForm } from '../components/ContactForm'
import '../styles/home.css'

const PROJECT_MEDIA: Record<string, { video: string; poster: string }> = {
  'vine-to-wine': {
    video: `${import.meta.env.BASE_URL}videos/vine-to-wine.mp4`,
    poster: `${import.meta.env.BASE_URL}images/work/vine-to-wine.jpg`,
  },
  'my-fitness-app': {
    video: `${import.meta.env.BASE_URL}videos/my-fitness-app.mp4`,
    poster: `${import.meta.env.BASE_URL}images/work/my-fitness-app.jpg`,
  },
  'wine-society-rebrand': {
    video: `${import.meta.env.BASE_URL}videos/wine-society-rebrand.mp4`,
    poster: `${import.meta.env.BASE_URL}images/work/wine-society-rebrand.jpg`,
  },
}

const HERO_SLIDES = [
  { slug: caseStudies[0].slug, label: caseStudies[0].name, video: PROJECT_MEDIA[caseStudies[0].slug].video },
  { slug: caseStudies[1].slug, label: caseStudies[1].name, video: PROJECT_MEDIA[caseStudies[1].slug].video },
  { slug: comingSoonProject.slug, label: comingSoonProject.name, video: PROJECT_MEDIA[comingSoonProject.slug].video },
]

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listener = () => setReduced(query.matches)
    query.addEventListener('change', listener)
    return () => query.removeEventListener('change', listener)
  }, [])

  return reduced
}

function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, revealed }
}

const HERO_AUTO_ADVANCE_MS = 6000

const socialLinkEntries = Object.entries(site.links).filter(([, href]) => href.length > 0)

export function Home() {
  const [activeSlug, setActiveSlug] = useState(HERO_SLIDES[0].slug)
  const [autoAdvancePaused, setAutoAdvancePaused] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const nameReveal = useRevealOnce<HTMLHeadingElement>()
  const copyReveal = useRevealOnce<HTMLDivElement>()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!location.hash) return
    const target = document.getElementById(location.hash.slice(1))
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  useEffect(() => {
    if (prefersReducedMotion || autoAdvancePaused) return

    const id = window.setInterval(() => {
      setActiveSlug((current) => {
        const currentIndex = HERO_SLIDES.findIndex((slide) => slide.slug === current)
        const nextIndex = (currentIndex + 1) % HERO_SLIDES.length
        return HERO_SLIDES[nextIndex].slug
      })
    }, HERO_AUTO_ADVANCE_MS)

    return () => window.clearInterval(id)
  }, [autoAdvancePaused, prefersReducedMotion])

  return (
    <div>
      <section className="hero" aria-label="Intro">
        <div className="hero__media" aria-hidden="true">
          {HERO_SLIDES.map((slide) =>
            slide.video ? (
              <video
                key={slide.slug}
                className={`hero__video-layer hero__video-layer--real${slide.slug === activeSlug ? ' hero__video-layer--active' : ''}`}
                data-slide={slide.slug}
                src={slide.video}
                autoPlay={!prefersReducedMotion}
                loop={!prefersReducedMotion}
                muted
                playsInline
              />
            ) : (
              <div
                key={slide.slug}
                className={`hero__video-layer${slide.slug === activeSlug ? ' hero__video-layer--active' : ''}`}
                data-slide={slide.slug}
              />
            ),
          )}
          {HERO_SLIDES.some((slide) => !slide.video) ? (
            <span className="hero__video-placeholder-note">
              Some slides are placeholder gradients — real footage swaps in as it's sourced
            </span>
          ) : null}
        </div>
        <div className="hero__overlay" aria-hidden="true" />

        <div className="hero__content">
          <div className="hero__switcher-row">
            <ul
              className="hero__switcher"
              role="group"
              aria-label="Featured work preview"
              onMouseEnter={() => setAutoAdvancePaused(true)}
              onMouseLeave={() => setAutoAdvancePaused(false)}
              onFocus={() => setAutoAdvancePaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setAutoAdvancePaused(false)
                }
              }}
            >
              {HERO_SLIDES.map((slide, index) => (
                <li key={slide.slug}>
                  <button
                    type="button"
                    className={`hero__switcher-button${slide.slug === activeSlug ? ' hero__switcher-button--active' : ''}`}
                    onMouseEnter={() => setActiveSlug(slide.slug)}
                    onFocus={() => setActiveSlug(slide.slug)}
                    onClick={() => {
                      if (slide.slug === activeSlug) {
                        navigate(`/${slide.slug}`)
                      } else {
                        setActiveSlug(slide.slug)
                      }
                    }}
                    data-testid={`hero-switcher-${slide.slug}`}
                  >
                    {String(index + 1).padStart(2, '0')} / {slide.label}
                    <span className="hero__switcher-view-link">view project →</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="hero__availability" role="status" aria-label="Availability">
              <span className="hero__dot" aria-hidden="true" />
              <span className="hero__availability-label">Open to opportunities</span>
            </div>
          </div>

          <div className="hero__bottom-row">
            <div className="hero__name-col">
              <h1
                ref={nameReveal.ref}
                className={`hero__name${nameReveal.revealed ? ' hero__name--revealed' : ''}`}
                data-testid="hero-name"
              >
                Zion<span className="hero__name-accent">.</span>
              </h1>
            </div>
            <div
              ref={copyReveal.ref}
              className={`hero__copy-col${copyReveal.revealed ? ' hero__copy-col--revealed' : ''}`}
            >
              <p className="hero__bio">{site.siteIntro}</p>
              <a href="#contact" className={`hero__cta${copyReveal.revealed ? ' hero__cta--revealed' : ''}`}>
                let's talk
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section id="work" className="section" aria-label="Projects">
          <div className="section__heading">
            <span className="section__index">01</span>
            <h2 className="section__title">Projects</h2>
          </div>
          <div className="project-grid">
            {caseStudies.map((study) => (
              <ProjectCard
                key={study.slug}
                slug={study.slug}
                name={study.name}
                summary={study.oneLineSummary}
                posterSrc={PROJECT_MEDIA[study.slug].poster}
                videoSrc={PROJECT_MEDIA[study.slug].video}
                techStack={study.techStack}
              />
            ))}
            <ProjectCard
              slug={comingSoonProject.slug}
              name={comingSoonProject.name}
              summary={comingSoonProject.oneLineSummary}
              posterSrc={PROJECT_MEDIA[comingSoonProject.slug].poster}
              videoSrc={PROJECT_MEDIA[comingSoonProject.slug].video}
              comingSoon
            />
          </div>
        </section>

        <section id="about" className="section" aria-label="About">
          <div className="section__heading">
            <span className="section__index">03</span>
            <h2 className="section__title">About</h2>
          </div>
          <p className="section__body">{site.bio}</p>
        </section>

        <section id="contact" className="section" aria-label="Contact">
          <div className="section__heading">
            <span className="section__index">04</span>
            <h2 className="section__title">Contact</h2>
          </div>
          <p className="section__body">
            {hasContactForm()
              ? 'Send a message below, or find me on LinkedIn / GitHub if you’d rather do that.'
              : 'Contact form coming soon. In the meantime, find me here:'}
          </p>
          {hasContactForm() ? <ContactForm /> : null}
          <div className="contact__cta-row">
            {socialLinkEntries.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="pill-button pill-button--ghost">
                {label}
              </a>
            ))}
            {hasResume() ? (
              <a href={site.resumeHref} download className="pill-button pill-button--ghost">
                Download resume
              </a>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  )
}

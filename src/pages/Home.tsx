import { caseStudies } from '../content/case-studies'
import { comingSoonProject } from '../content/comingSoon'
import { site } from '../content/site'
import { ProjectCard } from '../components/ProjectCard'
import '../styles/home.css'

export function Home() {
  return (
    <div className="container">
      <section className="hero">
        <p className="eyebrow">{site.name}</p>
        <h1 className="hero__title">
          I build products end to end — <span className="accent-word">and ship them.</span>
        </h1>
        <p className="hero__bio">{site.bio}</p>
      </section>

      <section className="project-grid" aria-label="Projects">
        {caseStudies.map((study) => (
          <ProjectCard
            key={study.slug}
            slug={study.slug}
            emoji={study.emoji}
            name={study.name}
            summary={study.oneLineSummary}
            techStack={study.techStack}
          />
        ))}
        <ProjectCard
          slug={comingSoonProject.slug}
          emoji={comingSoonProject.emoji}
          name={comingSoonProject.name}
          summary={comingSoonProject.oneLineSummary}
          comingSoon
        />
      </section>
    </div>
  )
}

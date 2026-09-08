import { render, screen } from '@testing-library/react'
import type { ComponentProps } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ProjectCard } from './ProjectCard'

function renderCard(props: Partial<ComponentProps<typeof ProjectCard>> = {}) {
  return render(
    <MemoryRouter>
      <ProjectCard
        slug="vine-to-wine"
        emoji="🍷"
        name="Vine to Wine"
        summary="Learn wine through flashcards, quizzes, and games."
        techStack={['React Native', 'Expo', 'TypeScript']}
        {...props}
      />
    </MemoryRouter>,
  )
}

describe('ProjectCard', () => {
  it('renders the one-line summary and tech chips for a finished project', () => {
    renderCard()
    expect(screen.getByText('Vine to Wine')).toBeInTheDocument()
    expect(screen.getByText(/Learn wine through flashcards/)).toBeInTheDocument()
    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.queryByText('Coming Soon')).not.toBeInTheDocument()
  })

  it('renders as visually distinct and links to a real route when marked comingSoon', () => {
    renderCard({ comingSoon: true, slug: 'wine-society-rebrand', name: 'Wine Society Rebrand' })
    const card = screen.getByTestId('project-card-coming-soon')
    expect(card).toHaveClass('project-card--coming-soon')
    expect(card).toHaveAttribute('href', '/wine-society-rebrand')
    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
  })
})

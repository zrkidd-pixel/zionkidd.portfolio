import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CaseStudyLayout } from './CaseStudyLayout'
import { placeholder, type CaseStudy } from '../content/types'

const baseStudy: CaseStudy = {
  slug: 'test-project',
  name: 'Test Project',
  emoji: '🧪',
  oneLineSummary: 'A project for testing.',
  problem: 'The problem statement.',
  targetUser: 'The target user.',
  competitors: 'The competitors.',
  insight: placeholder('Insight not written yet.'),
  solution: 'The solution.',
  techStack: ['TypeScript'],
  links: [],
}

describe('CaseStudyLayout', () => {
  it('always renders all six core sections', () => {
    render(<CaseStudyLayout study={baseStudy} />)
    expect(screen.getByText('The Problem')).toBeInTheDocument()
    expect(screen.getByText('Target User')).toBeInTheDocument()
    expect(screen.getByText('Competitors')).toBeInTheDocument()
    expect(screen.getByText('Insight')).toBeInTheDocument()
    expect(screen.getByText('The Solution')).toBeInTheDocument()
    expect(screen.getByText('The problem statement.')).toBeInTheDocument()
  })

  it('renders a placeholder note for missing bonus sections instead of omitting them', () => {
    render(<CaseStudyLayout study={baseStudy} />)
    const placeholders = screen.getAllByTestId('placeholder-note')
    // insight, distribution, feedback, impact, quotes = 5 placeholder-eligible sections
    expect(placeholders.length).toBe(5)
  })

  it('renders real bonus content when provided instead of a placeholder', () => {
    render(
      <CaseStudyLayout
        study={{
          ...baseStudy,
          distribution: 'Shared on LinkedIn, 500 views.',
          quotes: ['This app is great.'],
        }}
      />,
    )
    expect(screen.getByText('Shared on LinkedIn, 500 views.')).toBeInTheDocument()
    expect(screen.getByText(/This app is great/)).toBeInTheDocument()
    // 3 remaining placeholder-eligible sections: insight, feedback, impact
    expect(screen.getAllByTestId('placeholder-note').length).toBe(3)
  })

  it('shows a distinct "Try it" CTA only when a live link exists', () => {
    const { rerender } = render(<CaseStudyLayout study={baseStudy} />)
    expect(screen.queryByTestId('try-it-cta')).not.toBeInTheDocument()

    rerender(
      <CaseStudyLayout
        study={{ ...baseStudy, tryItLink: { label: 'Try Test Project', href: 'https://example.com' } }}
      />,
    )
    expect(screen.getByTestId('try-it-cta')).toHaveAttribute('href', 'https://example.com')
  })
})

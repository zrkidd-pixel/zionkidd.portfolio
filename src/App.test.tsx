import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App routing', () => {
  it('resolves the home page', () => {
    renderAt('/')
    expect(screen.getByText(/I build products end to end/)).toBeInTheDocument()
  })

  it('resolves a real case-study route', () => {
    renderAt('/vine-to-wine')
    expect(screen.getByTestId('case-study-layout')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Vine to Wine' })).toBeInTheDocument()
  })

  it('resolves the second real case-study route', () => {
    renderAt('/my-fitness-app')
    expect(screen.getByRole('heading', { name: 'My Fitness App' })).toBeInTheDocument()
  })

  it('resolves the Coming Soon teaser route directly (Direct-Link Visitor)', () => {
    renderAt('/wine-society-rebrand')
    expect(screen.getByTestId('logo-rebrand-teaser')).toBeInTheDocument()
    // Header context is present even on a direct-linked page (US-10).
    expect(screen.getByTestId('header-home-link')).toBeInTheDocument()
  })

  it('resolves the blog list route', () => {
    renderAt('/blog')
    expect(screen.getByRole('heading', { name: 'Blog' })).toBeInTheDocument()
  })

  it('resolves a blog post route', () => {
    renderAt('/blog/welcome')
    expect(screen.getByText('Welcome to the blog')).toBeInTheDocument()
  })

  it('falls back to home for an unknown project slug', () => {
    renderAt('/not-a-real-project')
    expect(screen.getByText(/I build products end to end/)).toBeInTheDocument()
  })
})

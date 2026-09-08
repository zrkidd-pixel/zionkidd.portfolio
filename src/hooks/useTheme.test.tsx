import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeToggle } from '../components/ThemeToggle'

function mockMatchMedia(matchesDark: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes('dark') ? matchesDark : false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia
}

describe('useTheme (via ThemeToggle)', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('defaults to dark regardless of system preference when no manual choice is stored', () => {
    mockMatchMedia(false)
    render(<ThemeToggle />)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(screen.getByTestId('theme-toggle-button')).toHaveTextContent('Light mode')
  })

  it('persists a manual toggle to light and keeps it across a simulated reload', () => {
    mockMatchMedia(true)
    const { unmount } = render(<ThemeToggle />)

    fireEvent.click(screen.getByTestId('theme-toggle-button'))
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(window.localStorage.getItem('zionkidd-portfolio-theme')).toBe('light')

    unmount()
    document.documentElement.removeAttribute('data-theme')

    // Simulated reload: system preference is dark, but the stored manual
    // choice (light) should still win.
    render(<ThemeToggle />)
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
})

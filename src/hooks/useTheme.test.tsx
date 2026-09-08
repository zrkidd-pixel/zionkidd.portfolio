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

  it('defaults to the system preference when no manual choice is stored', () => {
    mockMatchMedia(true)
    render(<ThemeToggle />)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(screen.getByTestId('theme-toggle-button')).toHaveTextContent('Light mode')
  })

  it('persists a manual toggle and keeps it across a simulated reload', () => {
    mockMatchMedia(false)
    const { unmount } = render(<ThemeToggle />)

    fireEvent.click(screen.getByTestId('theme-toggle-button'))
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(window.localStorage.getItem('zionkidd-portfolio-theme')).toBe('dark')

    unmount()
    document.documentElement.removeAttribute('data-theme')

    // Simulated reload: system preference is still light, but the stored
    // manual choice should win.
    render(<ThemeToggle />)
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})

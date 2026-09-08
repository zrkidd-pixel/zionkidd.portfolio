import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'zionkidd-portfolio-theme'

function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

/**
 * Defaults to the visitor's system preference (US-13) until they explicitly
 * toggle, at which point the manual choice is persisted and wins on every
 * later visit in this browser.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setThemeAndPersist = useCallback((next: Theme) => {
    setTheme(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeAndPersist(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setThemeAndPersist])

  return { theme, toggleTheme, setTheme: setThemeAndPersist }
}

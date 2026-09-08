import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'zionkidd-portfolio-theme'

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

/**
 * Dark is the site's default direction regardless of system preference —
 * light is an explicit escape hatch. Once a visitor toggles, the manual
 * choice is persisted and wins on every later visit in this browser.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? 'dark')

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

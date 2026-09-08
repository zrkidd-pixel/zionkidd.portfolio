import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="pill-button pill-button--ghost"
      data-testid="theme-toggle-button"
      onClick={toggleTheme}
      aria-pressed={isDark}
    >
      {isDark ? 'Light mode' : 'Dark mode'}
    </button>
  )
}

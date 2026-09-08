import { useTheme } from '../hooks/useTheme'

interface ThemeToggleProps {
  testId?: string
}

export function ThemeToggle({ testId = 'theme-toggle-button' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="pill-button pill-button--ghost"
      data-testid={testId}
      onClick={toggleTheme}
      aria-pressed={isDark}
    >
      {isDark ? 'Light mode' : 'Dark mode'}
    </button>
  )
}

import type { ReactNode } from 'react'

/**
 * Clearly-marked placeholder treatment for missing bonus content or blank
 * bio/contact fields (US-6, FR-4). Never silently omitted — a deep-reader
 * (US-6) should always be able to tell a placeholder from real content.
 */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="placeholder-note" data-testid="placeholder-note">
      <strong>🚧 Coming soon — </strong>
      {children}
    </p>
  )
}

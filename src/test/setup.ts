import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// React Testing Library doesn't auto-register cleanup under Vitest the way
// it does under Jest — without this, DOM nodes from one test/render leak
// into the next (e.g. duplicate "getByTestId" matches).
afterEach(() => {
  cleanup()
})

// jsdom doesn't implement matchMedia — provide a default (light-preference)
// stub so any component using useTheme can render in tests that don't
// explicitly mock it themselves.
if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

// jsdom doesn't implement IntersectionObserver — the Home hero's reveal
// animation uses one, so stub a no-op version (nothing is asserted about
// reveal timing in tests, just that the component renders).
if (!window.IntersectionObserver) {
  class MockIntersectionObserver {
    readonly root: Element | Document | null = null
    readonly rootMargin: string = ''
    readonly scrollMargin: string = ''
    readonly thresholds: ReadonlyArray<number> = []
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }
  window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
}

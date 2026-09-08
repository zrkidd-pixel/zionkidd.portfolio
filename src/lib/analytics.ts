/**
 * Provider-agnostic pageview tracking. Backed by GoatCounter (free,
 * no-cookie, no consent-banner-required) so the extra from Question 11 works
 * without requiring a live account before this ships. To activate: sign up
 * at https://www.goatcounter.com, then set GOATCOUNTER_SITE below to your
 * site code (e.g. "zionkidd" for zionkidd.goatcounter.com). Until then,
 * trackPageview() is a documented no-op — never throws, never blocks
 * rendering.
 */

const GOATCOUNTER_SITE = '' // TODO: revisit after MVP — set your GoatCounter site code here

let scriptInjected = false

function ensureScriptLoaded() {
  if (scriptInjected || !GOATCOUNTER_SITE || typeof document === 'undefined') return
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://gc.zgo.at/count.js'
  script.dataset.goatcounter = `https://${GOATCOUNTER_SITE}.goatcounter.com/count`
  document.head.appendChild(script)
  scriptInjected = true
}

export function trackPageview(path: string) {
  if (!GOATCOUNTER_SITE || typeof window === 'undefined') return
  ensureScriptLoaded()

  const goatcounter = (window as typeof window & {
    goatcounter?: { count: (opts: { path: string }) => void }
  }).goatcounter
  goatcounter?.count({ path })
}

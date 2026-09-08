/**
 * Centralized, editable site content (US-9). Every placeholder field below
 * is intentionally blank per the author's decision to revisit branding
 * after the MVP ships — fill these in and the change propagates everywhere
 * they're used (header, footer, home hero, case-study pages).
 */
export const site = {
  name: 'Zion Kidd',

  // TODO: revisit after MVP
  title: 'Product builder — placeholder title, update after MVP',
  // States what this site IS (hero copy) — distinct from `bio`, which is
  // the About section's personal blurb, so the two don't repeat each other.
  siteIntro:
    "Welcome, glad you're here. Below are projects I've built and shipped from end to end. Keep scrolling to see my actual thinking behind each of them.",
  // TODO: revisit after MVP — the About section's personal bio
  bio: 'Short bio coming soon. In the meantime: two shipped products are below, with the real thinking behind each one.',
  // TODO: revisit after MVP — kept for any future use, but the Contact
  // section deliberately does NOT publish this raw; contact happens via
  // the Web3Forms form below instead (see web3FormsAccessKey).
  contactEmail: '',
  // TODO: get a free access key at https://web3forms.com (no account
  // needed — enter the delivery email, key arrives instantly) and paste
  // it here. Until then, Contact shows a social-links-only fallback.
  web3FormsAccessKey: '',
  // TODO: revisit after MVP — leave any entry blank to hide it
  links: {
    linkedin: '',
    github: 'https://github.com/zrkidd-pixel',
    twitter: '',
  },
  // TODO: revisit after MVP — add the real file to /public and point here
  resumeHref: '',
} as const

export function hasResume(): boolean {
  return site.resumeHref.length > 0
}

export function hasContactForm(): boolean {
  return site.web3FormsAccessKey.length > 0
}

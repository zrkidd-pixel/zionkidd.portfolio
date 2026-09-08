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
  // TODO: revisit after MVP
  bio: 'Short bio coming soon. In the meantime: two shipped products are below, with the real thinking behind each one.',
  // TODO: revisit after MVP
  contactEmail: '',
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

export interface BlogPostContent {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string[]
}

/**
 * Minimal blog section (Question 11 extra) — launches with one placeholder
 * post rather than an empty list, structured so adding real posts later is
 * just adding another entry to this array.
 */
export const posts: BlogPostContent[] = [
  {
    slug: 'welcome',
    title: 'Welcome to the blog',
    date: '2026-09-08',
    excerpt: 'Notes on what I\'m building and what I\'m learning along the way — first real post coming soon.',
    body: [
      "This is a placeholder first post. I'll use this space for build notes, lessons learned, and anything else worth writing down while working on Vine to Wine, my fitness app, and whatever comes next.",
      'Check back soon for the real first entry.',
    ],
  },
]

export function getPost(slug: string): BlogPostContent | undefined {
  return posts.find((post) => post.slug === slug)
}

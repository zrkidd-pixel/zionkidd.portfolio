import { placeholder, type CaseStudy } from '../types'

/**
 * Sourced from the real zrkidd-pixel/Vine_to_Wine repo (README.md and its
 * own aidlc-docs/inception/requirements/requirements.md), which is private
 * — no public repo link is shown, and no "Try it" link is included since
 * the app hasn't shipped to an app store yet (App Store submission is a
 * planned v2.0 item per that repo's own roadmap).
 */
export const vineToWine: CaseStudy = {
  slug: 'vine-to-wine',
  name: 'Vine to Wine',
  emoji: '🍷',
  oneLineSummary:
    'A cross-platform app that teaches wine varietals, regions, and tasting notes through flashcards, quizzes, and games — like a language-learning app, but for wine.',

  problem:
    "Learning about wine seriously is intimidating and slow. Formal certification paths (WSET, sommelier courses) are expensive and paced around an exam, not curiosity. Wine media and books are dense reference text. And the most common way people learn — a guided tasting or a night out — is passive: nothing about it is designed to help the knowledge stick. There was no fast, habit-forming way to actually retain wine knowledge in a few minutes a day.",
  targetUser:
    "Casual wine drinkers who want real confidence — ordering at a restaurant, hosting a tasting, holding a conversation with a sommelier — without committing to a certification course. The concrete first target audience is members of a single wine club, used as a bootstrap adoption cohort for the app's leaderboard/social features.",
  competitors:
    "Formal certification paths (WSET, Court of Master Sommeliers) are expensive, slow, and exam-oriented — built for professionals, not casual learners. General-purpose learning apps (Duolingo and similar) don't cover wine at all. Wine-adjacent apps like Vivino are inventory/rating tools, not learning tools — they log what you drank, they don't teach you anything. The most common manual workaround is just asking a sommelier or a more knowledgeable friend in the moment, which doesn't build lasting knowledge.",
  insight: placeholder(
    "Add your own story here: what did you try first that didn't work, and what was the moment this approach clicked?",
  ),
  solution:
    "Built a Learn, Quiz, and Games loop instead of a course: 29 interactive lessons across 4 topic decks (Basics, Red Wines, White Wines, Wine Styles), adaptive-difficulty quizzes with 89 curated questions, and three original wine-knowledge games (Connections, Blind Match, Tasting Match) — all playable in a few minutes at a time, on iOS, Android, and web from one codebase. Deliberately did NOT build: a certification/exam track (WSET already owns that market), full cellar/inventory tracking (Vivino's territory), or a mandatory account — the entire Learn/Quiz/Games experience works fully anonymously with zero signup friction. An account layer was added later, but only to unlock optional per-game leaderboards, never to gate the core learning experience.",

  distribution: placeholder(
    'Add real distribution numbers here once available — e.g. wine-club signup count, social posts, view counts.',
  ),
  feedback: placeholder(
    'Add what changed based on real user feedback here — especially anything users did that surprised you.',
  ),
  impact: placeholder(
    'Add real usage numbers here once available — total users, weekly active users, leaderboard participation, etc.',
  ),
  quotes: placeholder(
    'Add real user quotes here — a text, a DM, a review, anything describing the value someone got from the app.',
  ),

  techStack: ['React Native', 'Expo SDK 54', 'TypeScript', 'Zustand', 'Expo Router', 'Jest', 'fast-check (property-based testing)'],
  links: [],
}

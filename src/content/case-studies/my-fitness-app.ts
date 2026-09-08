import { placeholder, type CaseStudy } from '../types'

/**
 * Sourced from the real zrkidd-pixel/my-fitness-app repo (README.md and its
 * own aidlc-docs/inception/requirements/requirements.md), which is private
 * — no public repo link is shown. The deployed app itself is public
 * (Netlify), so that's used as the "Try it" link (US-11).
 */
export const myFitnessApp: CaseStudy = {
  slug: 'my-fitness-app',
  name: 'My Fitness App',
  emoji: '💪',
  oneLineSummary:
    'A local-first fitness tracker for lifters — workouts, AI-assisted nutrition logging, and body composition progress, with zero accounts and all data staying on your device.',

  problem:
    "Most fitness apps require an account and ship your data to a server just to log a workout or a meal, and several gate core tracking behind a subscription. Logging nutrition accurately is also tedious enough that most people quit within a week: manually searching and tapping for every ingredient is slow, so people either stop logging or start estimating by eye.",
  targetUser:
    'Serious lifters and athletes who want rigorous training, nutrition, and body-composition tracking without an account, a subscription, or their data leaving their device. Also explicitly a portfolio/learning project — built to demonstrate real product and engineering skill across a multi-domain app, not (yet) shipped for external users.',
  competitors:
    'Mainstream fitness apps (Strong, Hevy, MyFitnessPal, Cronometer) — most require accounts and cloud sync, and several gate core features behind a subscription. The common manual workaround among serious lifters is a spreadsheet or a paper log for workouts, and estimating meals by eye instead of logging them at all because manual food search is too slow to sustain.',
  insight: placeholder('Add your own story here: what did you try first that didn\'t work, and what was the moment this approach clicked?'),
  solution:
    "Built a local-first app — all data in the browser's IndexedDB, no login — covering Training (structured multi-week programs plus free-form workout logging), Nutrition (AI-assisted logging from a text description or a meal photo, plus barcode scanning via Open Food Facts), and Progress (weight, body fat %, measurements, activity streaks, progress photos). The only server-side piece is a minimal API proxy that keeps the AI provider's key off the client — everything else runs entirely in the browser. Deliberately did NOT build: user accounts or cloud sync (data never leaving the device is the actual design goal, not a v1 gap), a social/community layer, or a real coach/trainer backend — the 'trainer contact' card on the dashboard is intentionally a static UI element, not a second user type, because the app's whole premise is that you don't need a coach or a cloud account to track rigorously.",

  distribution: placeholder('Add real distribution numbers here once available — e.g. social posts, view counts.'),
  feedback: placeholder('Add what changed based on real user feedback here — especially anything users did that surprised you.'),
  impact: placeholder('Add real usage numbers here once available — total users, weekly active users, etc.'),
  quotes: placeholder('Add real user quotes here — a text, a DM, a review, anything describing the value someone got from the app.'),

  techStack: [
    'Next.js 14',
    'TypeScript',
    'Redux Toolkit',
    'Dexie.js (IndexedDB)',
    'Tailwind CSS + shadcn/ui',
    'Groq (Llama 3.2 Vision)',
    'Vitest',
    'fast-check (property-based testing)',
  ],
  links: [],
  tryItLink: { label: 'Try My Fitness App', href: 'https://my-fitness-log.netlify.app' },
}

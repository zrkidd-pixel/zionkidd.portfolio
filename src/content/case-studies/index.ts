import type { CaseStudy } from '../types'
import { myFitnessApp } from './my-fitness-app'
import { vineToWine } from './vine-to-wine'

export const caseStudies: CaseStudy[] = [vineToWine, myFitnessApp]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

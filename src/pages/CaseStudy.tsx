import { Navigate, useParams } from 'react-router-dom'
import { getCaseStudy } from '../content/case-studies'
import { CaseStudyLayout } from '../components/CaseStudyLayout'

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) {
    return <Navigate to="/" replace />
  }

  return <CaseStudyLayout study={study} />
}

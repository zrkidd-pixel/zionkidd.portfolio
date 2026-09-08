import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { CaseStudy } from './pages/CaseStudy'
import { LogoRebrandTeaser } from './pages/LogoRebrandTeaser'
import { BlogList } from './pages/BlogList'
import { BlogPost } from './pages/BlogPost'
import { trackPageview } from './lib/analytics'

function AnalyticsListener() {
  const location = useLocation()

  useEffect(() => {
    trackPageview(location.pathname + location.hash)
  }, [location])

  return null
}

export default function App() {
  return (
    <>
      <AnalyticsListener />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/wine-society-rebrand" element={<LogoRebrandTeaser />} />
          <Route path="/:slug" element={<CaseStudy />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

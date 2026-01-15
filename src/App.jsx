import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogPost from './components/BlogPost'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const isBlogPost = location.pathname.startsWith('/blog/')

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

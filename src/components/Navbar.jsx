import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleDownload = () => {
    const resumeUrl = new URL('/Ehsan-Rasheed-Resume.pdf', window.location.href).href
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Ehsan-Rasheed-Resume.pdf'
    link.setAttribute('download', 'Ehsan-Rasheed-Resume.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const isBlogPost = location.pathname.startsWith('/blog/')
    
    if (isBlogPost) {
      // Navigate to home page first, then scroll to section
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    setOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-soft-surface/95 backdrop-blur border-b border-gray-200 shadow-subtle">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-poppins font-bold text-base sm:text-lg text-soft-text hover:text-soft-accent transition-colors duration-300 flex-shrink-0 whitespace-nowrap"
        >
          Ehsan Rasheed
        </a>

        {/* Mobile Menu Button */}
        <button 
          aria-label="Toggle menu" 
          className="md:hidden text-soft-text hover:text-soft-accent text-2xl p-2 hover:scale-110 active:scale-95 transition-transform duration-300"
          onClick={() => setOpen(o => !o)}
        >
          <span className={`inline-block transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}>
            {open ? '✕' : '☰'}
          </span>
        </button>

        {/* Navigation Links - Hidden on mobile, flex row on md+ */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs lg:text-sm text-soft-muted hover:text-soft-accent active:text-soft-accent transition-colors duration-300 font-medium hover:translate-x-0.5 inline-block whitespace-nowrap px-2 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Links */}
        <ul className={`fixed md:hidden top-16 left-0 right-0 flex flex-col gap-4 bg-soft-surface p-6 border-b border-gray-200 transition-all duration-300 transform ${
          open 
            ? 'translate-x-0 opacity-100 z-40' 
            : '-translate-x-full opacity-0'
        } max-w-xs h-screen overflow-y-auto`}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-soft-muted hover:text-soft-accent transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </ul>

        {/* Resume Button */}
        <button 
          onClick={handleDownload}
          className="hidden md:inline-flex btn btn-primary hover:scale-105 active:scale-95 transition-transform duration-300 flex-shrink-0 text-sm"
        >
          Resume
        </button>
      </nav>
    </header>
  )
}

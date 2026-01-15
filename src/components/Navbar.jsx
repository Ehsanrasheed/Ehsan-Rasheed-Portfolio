import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="font-poppins font-bold text-xl text-soft-text hover:text-soft-accent transition-colors">
          Ehsan Rasheed
        </a>

        {/* Mobile Menu Button */}
        <button 
          aria-label="Toggle menu" 
          className="md:hidden text-soft-text hover:text-soft-accent text-2xl"
          onClick={() => setOpen(o => !o)}
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:relative top-16 md:top-0 left-0 right-0 bg-soft-surface md:bg-transparent p-6 md:p-0 border-b md:border-b-0 border-gray-200`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-soft-muted hover:text-soft-accent transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <button 
          onClick={handleDownload}
          className="hidden md:inline-flex btn btn-primary"
        >
          Resume
        </button>
      </nav>
    </header>
  )
}

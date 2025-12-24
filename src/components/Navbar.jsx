import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-soft-surface/95 backdrop-blur border-b border-slate-200 shadow-subtle">
      <nav className="container flex items-center justify-between h-14">
        <a href="#home" className="font-semibold tracking-tight text-soft-text">Ehsan Rasheed</a>
        <button aria-label="Toggle menu" className="md:hidden btn btn-ghost" onClick={() => setOpen(o => !o)}>
          <span className="i">☰</span>
        </button>
        <ul className={`md:flex md:items-center md:gap-6 ${open ? 'block' : 'hidden'} md:block text-soft-muted`}>
          <li><a className="hover:text-soft-text" href="#about">About</a></li>
          <li><a className="hover:text-soft-text" href="#projects">Projects</a></li>
          <li><a className="hover:text-soft-text" href="#contact">Contact</a></li>
        </ul>
        <a href="#projects" className="hidden md:inline-flex btn btn-primary">View My Work</a>
      </nav>
    </header>
  )
}

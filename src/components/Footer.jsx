import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-soft-muted">
        <p>© {new Date().getFullYear()} Ehsan Rasheed</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-soft-text">
            <FaGithub aria-label="GitHub" size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-soft-text">
            <FaLinkedin aria-label="LinkedIn" size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

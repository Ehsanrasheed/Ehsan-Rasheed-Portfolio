import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-soft-text text-white mt-20 pt-16 pb-8">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/20">
          {/* Brand / About */}
          <div>
            <h4 className="font-poppins font-bold text-lg mb-2">Ehsan Rasheed</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Full-Stack Developer specializing in MERN stack. Building scalable web applications and sharing knowledge through teaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-poppins font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform duration-300">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform duration-300">About</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform duration-300">Projects</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform duration-300">Blog</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h5 className="font-poppins font-semibold mb-4">Connect</h5>
            <div className="space-y-3">
              <a 
                href="mailto:m.ehsanrasheed@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 hover:scale-105 transform duration-300 text-xs sm:text-sm"
              >
                <FaEnvelope size={16} />
                m.ehsanrasheed@gmail.com
              </a>
              <a 
                href="https://github.com/Ehsanrasheed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 hover:scale-105 transform duration-300 text-xs sm:text-sm"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ehsanrasheed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 hover:scale-105 transform duration-300 text-xs sm:text-sm"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Ehsan Rasheed — All Rights Reserved</p>
          <p>Crafted with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

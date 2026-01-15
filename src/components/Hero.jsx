import { motion } from 'framer-motion'

export default function Hero() {
  const handleDownload = () => {
    const resumeUrl = new URL('/Ehsan-Rasheed-Resume.pdf', window.location.href).href
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Ehsan-Rasheed-Resume.pdf'
    link.setAttribute('download', 'Ehsan-Rasheed-Resume.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  };

  return (
    <section id="home" className="section pt-20 md:pt-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          {/* Main Headline */}
          <h1 className="text-hero text-soft-text">
            Hi, I'm Ehsan Rasheed
          </h1>

          {/* Professional Subtitle */}
          <p className="text-2xl md:text-3xl text-soft-muted font-light">
            Full-Stack Web Developer
          </p>

          {/* Description */}
          <p className="text-lg text-soft-muted leading-relaxed max-w-2xl mx-auto">
            BS Computer Science student at <span className="font-semibold text-soft-text">COMSATS Lahore</span> specializing in modern web development with <span className="font-semibold text-soft-text">MERN stack</span>. I build scalable, production-ready applications with clean code and thoughtful design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#projects" className="btn btn-primary hover:scale-105 active:scale-95 transition-transform duration-300">
              View My Projects
            </a>
            <button onClick={handleDownload} className="btn btn-secondary hover:scale-105 active:scale-95 transition-transform duration-300">
              Download Resume
            </button>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-8 justify-center pt-8 border-t border-gray-200 mt-12"
          >
            <div className="text-center">
              <p className="text-2xl font-poppins font-bold text-soft-accent">5+</p>
              <p className="text-sm text-soft-muted">Projects Built</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-poppins font-bold text-soft-accent">3+</p>
              <p className="text-sm text-soft-muted">Years Learning</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-poppins font-bold text-soft-accent">MERN</p>
              <p className="text-sm text-soft-muted">Stack Specialist</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  return (
    <section id="projects" className="section scroll-mt-20 bg-soft-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-section-title mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-soft-muted mb-12 max-w-2xl mx-auto">
            A selection of full-stack applications and system design projects demonstrating my expertise in MERN stack development, API design, and scalable architectures.
          </p>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-12 border-t border-gray-200 text-center"
          >
            <p className="text-soft-muted mb-4">
              Interested in seeing more of my work?
            </p>
            <a href="https://github.com/Ehsanrasheed" target="_blank" rel="noopener noreferrer" className="btn btn-primary hover:scale-105 active:scale-95 transition-transform duration-300">
              View GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function ProjectCard({ title, subtitle, tech, description, link, demo }) {
  return (
    <motion.article
      className="card p-6 sm:p-8 flex flex-col gap-4 h-full hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Project Title */}
      <div>
        <h3 className="text-card-title text-soft-text mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-soft-accent font-medium">{subtitle}</p>}
      </div>

      {/* Tech Stack */}
      <p className="text-xs sm:text-sm font-medium text-soft-muted uppercase tracking-wide">{tech}</p>

      {/* Description */}
      <p className="text-soft-muted leading-relaxed flex-grow">
        {description}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 btn btn-secondary text-center text-sm hover:scale-105 active:scale-95 transition-transform duration-300 min-h-[44px]"
        >
          GitHub
        </a>
        {demo && demo !== '#' && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 btn btn-primary text-center text-sm hover:scale-105 active:scale-95 transition-transform duration-300 min-h-[44px]"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  )
}

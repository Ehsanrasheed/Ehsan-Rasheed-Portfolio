import { motion } from 'framer-motion'

export default function ProjectCard({ title, tech, description, link }) {
  return (
    <motion.article
      className="card p-6 flex flex-col gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-soft-muted">{tech}</p>
      <p className="text-soft-muted">{description}</p>
      <div className="mt-auto">
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-ghost">View on GitHub</a>
      </div>
    </motion.article>
  )
}

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
        <div className="card p-6 space-y-3">
          <p className="text-soft-muted">
            I'm a React-focused developer with a foundation in computer science and a passion for building clean, responsive interfaces. I enjoy crafting smooth interactions, subtle animations, and reliable systems.
          </p>
          <p className="text-soft-muted">
            My stack: React, Node.js, MongoDB, Express, Firebase, and React Native.
          </p>
          <p className="text-soft-muted">
            Goal: Deliver thoughtful, production-ready software that solves real problems.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

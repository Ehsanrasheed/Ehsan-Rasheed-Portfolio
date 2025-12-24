import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-12">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Ehsan Rasheed
          </h1>
          <p className="text-lg text-soft-muted">
            BS Computer Science | React Developer | Software Developer
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="card p-8"
        >
          <p className="text-soft-muted">I craft modern, minimal, and reliable interfaces with
            React and thoughtful engineering. Clean code, smooth UX, and a
            professional finish—without the flash.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

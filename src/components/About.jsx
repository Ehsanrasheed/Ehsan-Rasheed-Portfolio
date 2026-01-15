import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section scroll-mt-20 bg-soft-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Section Title */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-section-title mb-6">About Me</h2>
            
            <div className="space-y-6 text-base sm:text-lg text-soft-muted leading-relaxed">
              <p>
                I'm <span className="font-semibold text-soft-text">Ehsan Rasheed</span>, a <span className="font-semibold text-soft-text">BS Computer Science student at COMSATS Lahore</span> with a strong focus on software development, full-stack projects, and AI-powered applications. I enjoy building solutions that solve real-world problems and bring ideas to life with clean, scalable code.
              </p>

              <div>
                <p className="font-semibold text-soft-text mb-3">I have hands-on experience with:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                  <div>
                    <p className="font-medium text-soft-text mb-2">Frontend</p>
                    <p>HTML, CSS, JavaScript, React, Tailwind CSS, Framer Motion</p>
                  </div>
                  <div>
                    <p className="font-medium text-soft-text mb-2">Backend</p>
                    <p>Node.js, Express.js, REST APIs</p>
                  </div>
                  <div>
                    <p className="font-medium text-soft-text mb-2">Database</p>
                    <p>MongoDB, Mongoose, Supabase, Firebase</p>
                  </div>
                  <div>
                    <p className="font-medium text-soft-text mb-2">Tools & Services</p>
                    <p>Stripe, Cloudinary, Supabase, JWT Authentication</p>
                  </div>
                </div>
              </div>

              <p>
                I've worked on projects like <span className="font-semibold text-soft-text">SalonClick</span>, an AI-based salon booking app that integrates AI hairstyle recommendations, real-time booking, secure payments, and review systems. My focus is on creating user-friendly, scalable, and efficient software.
              </p>

              <p>
                I'm passionate about learning new technologies, solving challenging problems, and building products that make a real impact. I'm currently looking for opportunities to grow as a software developer and contribute to meaningful projects.
              </p>

              <p>
                You can explore my projects and code on my <a href="https://github.com/Ehsanrasheed" target="_blank" rel="noopener noreferrer" className="text-soft-accent hover:underline font-medium">GitHub</a>.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-200">
              <motion.div 
                className="text-center p-4 sm:p-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <p className="text-xl sm:text-2xl font-poppins font-bold text-soft-accent mb-2">Full-Stack</p>
                <p className="text-xs sm:text-sm text-soft-muted">MERN Development</p>
              </motion.div>
              <motion.div 
                className="text-center p-4 sm:p-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <p className="text-xl sm:text-2xl font-poppins font-bold text-soft-accent mb-2">API Design</p>
                <p className="text-xs sm:text-sm text-soft-muted">REST & Integration</p>
              </motion.div>
              <motion.div 
                className="text-center p-4 sm:p-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <p className="text-xl sm:text-2xl font-poppins font-bold text-soft-accent mb-2">Debuging</p>
                <p className="text-xs sm:text-sm text-soft-muted">Error tracing</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

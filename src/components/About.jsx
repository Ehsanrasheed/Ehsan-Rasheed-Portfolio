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
            
            <div className="space-y-6 text-lg text-soft-muted leading-relaxed">
              <p>
                I'm currently pursuing a <span className="font-semibold text-soft-text">BS in Computer Science at COMSATS Lahore</span> with a strong focus on Software Development. Over the past few years, I've developed a deep passion for building scalable, production-ready web applications using modern technologies.
              </p>

              <p>
                My expertise spans the <span className="font-semibold text-soft-text">MERN stack</span> (MongoDB, Express, React, Node.js), where I've successfully built full-stack applications with features like Stripe payment integration, Cloudinary image uploads, real-time notifications, and robust authentication systems. I also have hands-on experience with Firebase and Supabase for backend solutions.
              </p>

              <p>
                Beyond development, I'm passionate about <span className="font-semibold text-soft-text">teaching programming fundamentals</span> to others. I believe in writing clean, maintainable code and following best practices that ensure long-term project sustainability and team collaboration.
              </p>

              <p>
                My goal is to create thoughtful, elegant solutions that solve real-world problems while maintaining a focus on user experience, code quality, and scalability.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-poppins font-bold text-soft-accent mb-2">Full-Stack</p>
                <p className="text-sm text-soft-muted">MERN Development</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-poppins font-bold text-soft-accent mb-2">API Design</p>
                <p className="text-sm text-soft-muted">REST & Integration</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-poppins font-bold text-soft-accent mb-2">Teaching</p>
                <p className="text-sm text-soft-muted">Programming Mentor</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

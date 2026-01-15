import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'HTML', 'CSS', 'C++']
    },
    {
      category: 'Frontend',
      skills: ['React', 'React Native', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Supabase']
    },
    {
      category: 'Tools & Services',
      skills: ['Stripe', 'Cloudinary', 'Firebase', 'Git', 'REST APIs']
    },
    {
      category: 'Core Skills',
      skills: ['Authentication', 'Responsive Design', 'API Design', 'Database Design']
    },
    {
      category: 'Other',
      skills: ['Teaching', 'Problem Solving', 'Code Review', 'Collaboration']
    }
  ]

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="section scroll-mt-20 bg-soft-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-section-title mb-12 text-center">Skills & Expertise</h2>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skillCategories.map((group, index) => (
              <motion.div
                key={index}
                className="card p-6 sm:p-8 space-y-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                variants={itemVariants}
              >
                {/* Category Title */}
                <h3 className="text-lg sm:text-card-title text-soft-text font-bold border-b border-gray-300 pb-3">
                  {group.category}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-soft-accent/10 text-soft-accent px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-soft-accent/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
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
              Want to see these skills in action?
            </p>
            <a href="#projects" className="btn btn-primary hover:scale-105 active:scale-95 transition-transform duration-300">
              View My Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

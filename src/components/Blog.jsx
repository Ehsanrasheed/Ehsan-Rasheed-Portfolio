import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'How I Built an AI-Based Salon Booking App',
      excerpt: 'A deep dive into building SalonClick: architecture decisions, integrating Stripe payments, implementing AI recommendations, and lessons learned scaling a full-stack application.',
      date: 'January 15, 2026',
      readTime: '8 min read',
      tags: ['React', 'Node.js', 'AI', 'Full-Stack'],
      slug: 'ai-salon-booking-app'
    },
    {
      id: 2,
      title: 'MERN Stack Best Practices: Building Scalable Applications',
      excerpt: 'Essential patterns and practices for building production-ready MERN applications: project structure, API design, authentication, error handling, and deployment strategies.',
      date: 'Coming Soon',
      readTime: '10 min read',
      tags: ['MERN', 'Best Practices', 'Backend'],
      slug: 'mern-best-practices'
    },
    {
      id: 3,
      title: 'Teaching Programming: My Journey and Tips',
      excerpt: 'Reflections on teaching programming fundamentals to beginners: effective teaching strategies, common mistakes students make, and resources that have helped me explain complex concepts.',
      date: 'Coming Soon',
      readTime: '7 min read',
      tags: ['Education', 'Teaching', 'Learning'],
      slug: 'teaching-programming'
    },
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
    <section id="blog" className="section scroll-mt-20 bg-soft-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-section-title mb-4 text-center">Blog</h2>
          <p className="text-center text-soft-muted mb-12">
            Thoughts on full-stack development, teaching, and building products.
          </p>

          {/* Articles Grid */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {articles.map((article) => (
              <Link key={article.id} to={`/blog/${article.slug}`} className="no-underline">
                <motion.article
                  className="card p-6 sm:p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-full"
                  variants={itemVariants}
                >
                  <div className="space-y-3">
                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-soft-muted">
                    <span>{article.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-card-title text-soft-text hover:text-soft-accent transition-colors duration-300 cursor-pointer hover:translate-x-1 transform duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-soft-muted leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-xs bg-soft-accent/10 text-soft-accent px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  {article.date !== 'Coming Soon' && (
                    <Link to={`/blog/${article.slug}`} className="text-soft-accent hover:text-blue-700 font-medium transition-colors duration-300 pt-2 hover:translate-x-1 transform duration-300 inline-block">
                      Read Full Article →
                    </Link>
                  )}
                </div>
              </motion.article>
              </Link>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-12 border-t border-gray-200 text-center"
          >
            <p className="text-soft-muted mb-4">
              More articles coming soon. Subscribe to stay updated.
            </p>
            <a href="#contact" className="btn btn-primary hover:scale-105 active:scale-95 transition-transform duration-300">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

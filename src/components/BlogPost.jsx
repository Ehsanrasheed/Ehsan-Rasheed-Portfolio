import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Markdown from 'markdown-to-jsx'
import Comments from './Comments'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Scroll to top when blog post opens
    window.scrollTo(0, 0)

    const fetchBlog = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/blogs/${slug}.md`)
        if (!response.ok) {
          throw new Error('Blog post not found')
        }
        const text = await response.text()
        setContent(text)
        setError(null)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [slug])

  if (loading) {
    return (
      <section className="section min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-soft-text text-lg"
        >
          Loading article...
        </motion.div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto"
        >
          <h2 className="text-2xl font-bold text-soft-text mb-4">Oops!</h2>
          <p className="text-soft-muted mb-6">{error}</p>
          <button
            onClick={() => navigate('/blog')}
            className="btn btn-primary hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Back to Blog
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <article className="section scroll-mt-20">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <button
            onClick={() => navigate('/#blog')}
            className="text-soft-accent hover:text-soft-text transition-colors duration-300 mb-8 flex items-center gap-2 hover:translate-x-1 transform duration-300"
          >
            ← Back
          </button>

          {/* Markdown Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-sm sm:prose max-w-none text-soft-text"
          >
            <style>{`
              .prose h1 {
                font-size: 2.25rem;
                font-weight: bold;
                margin-top: 2rem;
                margin-bottom: 1.5rem;
                color: var(--color-soft-text);
              }
              .prose h2 {
                font-size: 1.875rem;
                font-weight: bold;
                margin-top: 1.5rem;
                margin-bottom: 1rem;
                color: var(--color-soft-text);
                border-bottom: 2px solid var(--color-soft-accent);
                padding-bottom: 0.5rem;
              }
              .prose h3 {
                font-size: 1.5rem;
                font-weight: 600;
                margin-top: 1.25rem;
                margin-bottom: 0.75rem;
                color: var(--color-soft-text);
              }
              .prose p {
                margin-bottom: 1.25rem;
                line-height: 1.75;
                color: var(--color-soft-muted);
                font-size: 1rem;
              }
              .prose ul, .prose ol {
                margin-bottom: 1.25rem;
                margin-left: 1.5rem;
              }
              .prose li {
                margin-bottom: 0.5rem;
                color: var(--color-soft-muted);
              }
              .prose code {
                background-color: #f3f4f6;
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-family: 'Monaco', 'Courier New', monospace;
                color: var(--color-soft-accent);
                font-size: 0.9rem;
              }
              .prose pre {
                background-color: #1f2937;
                color: #e5e7eb;
                padding: 1.5rem;
                border-radius: 0.5rem;
                overflow-x: auto;
                margin-bottom: 1.25rem;
              }
              .prose pre code {
                background-color: transparent;
                color: inherit;
                padding: 0;
              }
              .prose blockquote {
                border-left: 4px solid var(--color-soft-accent);
                padding-left: 1rem;
                margin-left: 0;
                margin-bottom: 1.25rem;
                color: var(--color-soft-muted);
                font-style: italic;
              }
              .prose a {
                color: var(--color-soft-accent);
                text-decoration: none;
                transition: color 0.3s;
              }
              .prose a:hover {
                text-decoration: underline;
              }
            `}</style>
            <Markdown>{content}</Markdown>
          </motion.div>

          {/* Author Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-6 sm:p-8 mt-12 bg-soft-surface"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-soft-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-soft-accent">ER</span>
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-soft-text">Ehsan Rasheed</h4>
                <p className="text-soft-muted text-sm">Full-Stack Developer specializing in MERN stack development. Passionate about building scalable applications and teaching programming.</p>
              </div>
            </div>
          </motion.div>

          {/* Comments Section */}
          <Comments slug={slug} />
        </motion.div>
      </div>
    </article>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Comments({ slug }) {
  const [comments, setComments] = useState([])
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.comment) {
      alert('Please fill in all fields')
      return
    }

    const newComment = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }

    setComments([newComment, ...comments])
    setFormData({ name: '', email: '', comment: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="mt-16 pt-12 border-t border-gray-200 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-soft-text mb-8">Comments ({comments.length})</h3>

        {/* Comment Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-6 sm:p-8 mb-8 space-y-4"
        >
          <h4 className="text-lg font-semibold text-soft-text mb-6">Leave a Comment</h4>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
            >
              ✓ Comment submitted! Thank you for your feedback.
            </motion.div>
          )}

          {/* Name and Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-soft-text">Name</label>
              <input
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 sm:py-4 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition-all duration-300 hover:border-soft-accent min-h-[48px]"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-soft-text">Email</label>
              <input
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 sm:py-4 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition-all duration-300 hover:border-soft-accent min-h-[48px]"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-soft-text">Comment</label>
            <textarea
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 sm:py-4 h-32 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition-all duration-300 hover:border-soft-accent resize-none min-h-[120px]"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Share your thoughts about this article..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn btn-primary hover:scale-105 active:scale-95 transition-transform duration-300 min-h-[48px] mt-4"
          >
            Post Comment
          </button>
        </motion.form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-soft-muted py-8"
            >
              No comments yet. Be the first to share your thoughts!
            </motion.p>
          ) : (
            comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 border-b border-gray-200 pb-3">
                  <h5 className="font-semibold text-soft-text text-sm sm:text-base">{comment.name}</h5>
                  <span className="text-xs sm:text-sm text-soft-muted">{comment.date}</span>
                </div>
                <p className="text-soft-muted text-sm sm:text-base leading-relaxed">{comment.comment}</p>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </section>
  )
}

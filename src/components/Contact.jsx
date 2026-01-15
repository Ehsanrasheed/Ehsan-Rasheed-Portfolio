import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Contact message:', form)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'ehsanrasheed@gmail.com',
      href: 'mailto:ehsanrasheed@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ehsanrasheed',
      href: 'https://www.linkedin.com/in/ehsanrasheed'
    },
    {
      label: 'GitHub',
      value: 'github.com/Ehsanrasheed',
      href: 'https://github.com/Ehsanrasheed'
    }
  ]

  return (
    <section id="contact" className="section scroll-mt-20 bg-soft-surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-section-title mb-4 text-center">Get In Touch</h2>
          <p className="text-center text-soft-muted mb-12">
            Have a question or want to collaborate? Feel free to reach out. I'd love to hear from you!
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label !== 'Email' ? '_blank' : undefined}
                rel={info.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-md transition-all"
              >
                <p className="text-sm font-medium text-soft-muted mb-2">{info.label}</p>
                <p className="text-soft-accent font-semibold text-sm break-all">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-8 space-y-6"
          >
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-soft-text">Name</label>
                <input
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-soft-text">Email</label>
                <input
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-soft-text">Message</label>
              <textarea
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 h-32 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition resize-none"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project or inquiry..."
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full btn btn-primary">
              Send Message
            </button>
          </motion.form>

          {/* Alternative CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center text-soft-muted text-sm"
          >
            <p>Prefer to reach out directly? Email me at <a href="mailto:ehsanrasheed@gmail.com" className="text-soft-accent font-semibold hover:underline">ehsanrasheed@gmail.com</a></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

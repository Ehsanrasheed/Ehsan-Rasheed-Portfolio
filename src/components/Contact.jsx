import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
// Get your public key from: https://dashboard.emailjs.com/admin/account
emailjs.init('YIIrHvWkfvdqECa6P')

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success', 'error', or null

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      // Send email using EmailJS
      // SERVICE_ID: from EmailJS dashboard > Email Services
      // TEMPLATE_ID: from EmailJS dashboard > Email Templates
      const response = await emailjs.send(
        'service_pck8c03', // Replace with your Service ID
        'template_jfs6pnp', // Replace with your Template ID from EmailJS
        {
          name: form.name,
          email: form.email,
          message: form.message,
        }
      )

      if (response.status === 200) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(null), 3000)
      }
    } catch (error) {
      console.error('Email send failed:', error)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'm.ehsanrasheed@gmail.com',
      href: 'mailto:m.ehsanrasheed@gmail.com'
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
            {/* Beautiful Toast Alert */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`relative overflow-hidden rounded-xl p-4 sm:p-6 border-l-4 shadow-lg backdrop-blur-sm ${
                  status === 'success'
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-l-green-500 border border-green-200'
                    : 'bg-gradient-to-br from-red-50 to-rose-50 border-l-red-500 border border-red-200'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
                      status === 'success'
                        ? 'bg-green-200'
                        : 'bg-red-200'
                    }`}
                  >
                    <span className={`text-lg sm:text-xl font-bold ${
                      status === 'success'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}>
                      {status === 'success' ? '✓' : '✕'}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className={`font-semibold text-sm sm:text-base ${
                        status === 'success'
                          ? 'text-green-800'
                          : 'text-red-800'
                      }`}
                    >
                      {status === 'success' ? 'Message Sent Successfully!' : 'Failed to Send Message'}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`text-xs sm:text-sm mt-1 ${
                        status === 'success'
                          ? 'text-green-700'
                          : 'text-red-700'
                      }`}
                    >
                      {status === 'success'
                        ? "Thank you for reaching out! I'll get back to you as soon as possible."
                        : 'Please try again or contact me directly via email.'}
                    </motion.p>
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: status === 'success' ? 3 : 5, ease: 'linear' }}
                    className={`absolute bottom-0 left-0 right-0 h-1 origin-left ${
                      status === 'success'
                        ? 'bg-gradient-to-r from-green-400 to-emerald-400'
                        : 'bg-gradient-to-r from-red-400 to-rose-400'
                    }`}
                  />
                </div>
              </motion.div>
            )}

            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-soft-text">Name</label>
              <input
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition-all duration-300 hover:border-soft-accent active:scale-100 focus:scale-100 min-h-[48px]"
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
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition-all duration-300 hover:border-soft-accent active:scale-100 focus:scale-100 min-h-[48px]"
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
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 h-32 text-soft-text placeholder-soft-muted focus:outline-none focus:ring-2 focus:ring-soft-accent focus:border-transparent transition-all duration-300 hover:border-soft-accent resize-none min-h-[120px]"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project or inquiry..."
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full btn btn-primary hover:scale-105 active:scale-95 transition-transform duration-300 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
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
            <p>Prefer to reach out directly? Email me at <a href="mailto:m.ehsanrasheed@gmail.com" className="text-soft-accent font-semibold hover:underline">m.ehsanrasheed@gmail.com</a></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

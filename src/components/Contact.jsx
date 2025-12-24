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
    alert('Message logged in console. Thank you!')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
        <form onSubmit={onSubmit} className="card p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="grid gap-1">
              <span className="text-sm text-soft-muted">Name</span>
              <input
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                type="text" name="name" value={form.name} onChange={onChange} required
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-soft-muted">Email</span>
              <input
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                type="email" name="email" value={form.email} onChange={onChange} required
              />
            </label>
          </div>
          <label className="grid gap-1">
            <span className="text-sm text-soft-muted">Message</span>
            <textarea
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 h-28 resize-y focus:outline-none focus:ring-2 focus:ring-slate-300"
              name="message" value={form.message} onChange={onChange} required
            />
          </label>
          <div>
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

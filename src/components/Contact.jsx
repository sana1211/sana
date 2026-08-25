import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { SOCIALS } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your form backend of choice (Formspree, Resend, your own API, etc.)
    setSent(true)
  }

  return (
    <section id="contact" className="relative px-6 sm:px-10 py-28 md:py-36 overflow-hidden">
      <span className="blob blob-a bg-violet w-96 h-96 -bottom-32 left-1/3" />
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal className="font-mono text-xs tracking-[0.35em] uppercase text-paper/40 mb-4">
          Contact
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
            Got something <span className="grad-text">worth building?</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-paper/60 text-lg mb-12 max-w-xl">
            I'm open to freelance projects, full-time roles, and the occasional wild idea. Drop a note
            below or reach me directly at{' '}
            <a href="mailto:hello@alexrivera.dev" className="text-mint underline underline-offset-4">
              sankalpasithmina18@gmail.com
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={180}>
          {sent ? (
            <div className="chip rounded-2xl px-6 py-8 font-mono text-sm text-mint">
              ✦ Thanks {form.name || 'there'} — that came through. I'll reply within a day or two.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5 max-w-2xl">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-surface border border-paper/15 rounded-xl px-4 py-3 outline-none focus:border-magenta transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-surface border border-paper/15 rounded-xl px-4 py-3 outline-none focus:border-mint transition-colors"
              />
              <textarea
                required
                placeholder="What are you building?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-surface border border-paper/15 rounded-xl px-4 py-3 outline-none focus:border-violet transition-colors sm:col-span-2"
              />
              <button
                type="submit"
                className="sm:col-span-2 font-mono text-xs uppercase tracking-widest bg-paper text-ink rounded-full px-6 py-4 hover:bg-magenta hover:text-paper transition-colors duration-300 w-fit"
              >
                Send message
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={240} className="flex flex-wrap gap-6 mt-16">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-paper/50 hover:text-paper border-b border-transparent hover:border-paper/40 pb-1 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

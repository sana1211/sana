import { useState } from 'react'
import { NAV_SECTIONS } from '../data.js'

export default function Nav({ active, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Desktop dot nav */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4">
        {NAV_SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            className="group relative flex items-center"
            aria-label={`Go to ${s.label}`}
          >
            <span className="absolute right-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-paper/0 group-hover:text-paper/70 transition-colors duration-300">
              {s.label}
            </span>
            <span className={`nav-dot ${active === s.id ? 'active' : ''}`} />
          </button>
        ))}
      </nav>

      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 sm:px-10 py-5 backdrop-blur-sm bg-ink/40">
        <button onClick={() => onNavigate('hero')} className="font-display font-semibold tracking-tight text-lg">
          S<span className="text-magenta">.</span>S
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden font-mono text-xs uppercase tracking-widest border border-paper/20 rounded-full px-4 py-2"
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            onNavigate('contact')
          }}
          className="hidden md:inline-block font-mono text-xs uppercase tracking-widest border border-paper/20 rounded-full px-5 py-2 hover:border-magenta hover:text-magenta transition-colors duration-300"
        >
          Let's talk
        </a>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-30 bg-ink/95 backdrop-blur flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                onNavigate(s.id)
                setOpen(false)
              }}
              className="font-display text-3xl"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

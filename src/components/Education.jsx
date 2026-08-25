import Reveal from './Reveal.jsx'
import { EDUCATION } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="relative px-6 sm:px-10 py-28 md:py-36 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <Reveal className="font-mono text-xs tracking-[0.35em] uppercase text-paper/40 mb-4">
          Education
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-16">
            Where it <span className="grad-text">started</span>
          </h2>
        </Reveal>
        <div className="relative border-l border-paper/10 pl-8 md:pl-12 space-y-16">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.title} delay={i * 100} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] md:-left-[calc(3rem+5px)] top-1.5 w-3 h-3 rounded-full bg-amber shadow-[0_0_12px_#FFC93C]" />
              <span className="font-mono text-xs uppercase tracking-widest text-paper/40">{e.year}</span>
              <h3 className="font-display text-2xl sm:text-3xl mt-2">{e.title}</h3>
              <p className="text-paper/50 mt-1">{e.place}</p>
              <p className="text-paper/70 mt-4 leading-relaxed max-w-2xl">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

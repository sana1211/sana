import Reveal from './Reveal.jsx'
import { TITLE } from '../data.js'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 pt-28 pb-16 overflow-hidden">
      <span className="blob blob-a bg-magenta w-72 h-72 top-10 left-[-4rem]" />
      <span className="blob blob-b bg-violet w-80 h-80 bottom-0 right-[-6rem]" />
      <span className="blob blob-a bg-mint w-56 h-56 top-1/2 right-1/4" style={{ animationDelay: '-6s' }} />

      <Reveal className="relative z-10 font-mono text-xs sm:text-sm tracking-[0.35em] uppercase text-paper/50 mb-6">
        Portfolio 
      </Reveal>

      <Reveal delay={80} className="relative z-10">
        <h1 className="font-display font-semibold leading-[0.95] text-[13vw] sm:text-[9vw] md:text-[7.5rem]">
          <span className="outline-text block">Sankalpa</span>
          <span className="grad-text block">Sithmina</span>
        </h1>
      </Reveal>

      <Reveal delay={180} className="relative z-10 max-w-xl mt-8 mx-auto">
        <p className="text-lg sm:text-xl text-paper/70">
          I'm an {TITLE.toLowerCase()} who turns tangled problems into interfaces that feel obvious in
          hindsight. Currently studying at University of Moratuwa while building projects that solve real problems.
        </p>
      </Reveal>

      <Reveal delay={280} className="relative z-10 flex flex-wrap justify-center gap-4 mt-10">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
          }}
          className="font-mono text-xs uppercase tracking-widest bg-paper text-ink rounded-full px-6 py-3 hover:bg-magenta hover:text-paper transition-colors duration-300"
        >
          View Work
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
          }}
          className="font-mono text-xs uppercase tracking-widest border border-paper/25 rounded-full px-6 py-3 hover:border-mint hover:text-mint transition-colors duration-300"
        >
          Get In Touch
        </a>
      </Reveal>

      <Reveal delay={380} className="relative z-10 mt-16 overflow-hidden max-w-2xl mx-auto">
        <div className="flex whitespace-nowrap font-mono text-[11px] tracking-widest uppercase text-paper/30">
          <div className="marquee-track flex gap-10 pr-10">
            {Array(2)
              .fill(['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Figma', 'GraphQL'])
              .flat()
              .map((t, i) => (
                <span key={i}>{t} ◆</span>
              ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

import Reveal from './Reveal.jsx'
import { PROJECTS, COLOR_MAP } from '../data.js'

function ProjectCard({ project, index }) {
  const c = COLOR_MAP[project.color]
  return (
    <Reveal delay={index * 90}>
      <div className="project-card glow-border rounded-3xl p-8 h-full bg-surface border border-paper/10">
        <div className="flex items-start justify-between mb-8">
          <span className={`font-mono text-[10px] uppercase tracking-widest ${c.text}`}>{project.tag}</span>
          <span className={`w-2.5 h-2.5 rounded-full ${c.bg}`} />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl mb-3">{project.title}</h3>
        <p className="text-paper/60 leading-relaxed mb-6">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-paper/15 px-3 py-1 text-paper/50"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 sm:px-10 py-28 md:py-36 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <Reveal className="font-mono text-xs tracking-[0.35em] uppercase text-paper/40">
            Project
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
              Things I've <span className="grad-text">shipped</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

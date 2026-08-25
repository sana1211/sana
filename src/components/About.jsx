import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="relative px-6 sm:px-10 py-28 md:py-36">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[auto,1fr] gap-10 md:gap-20">
        <Reveal className="font-mono text-xs tracking-[0.35em] uppercase text-paper/40 md:pt-2">
          About
        </Reveal>
        <div>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
              I like problems that are <span className="grad-text">quietly hard</span> - the ones that
              look simple until you try to ship them.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-paper/70 text-lg leading-relaxed mb-6">
              I am a Bachelor of Information Technology undergraduate at the University of Moratuwa 
              with a strong foundation in frontend development and a passion for creating seamless digital 
              experiences. Experienced in ReactJS, JavaScript, and responsive web design, along with proficiency 
              in UI/UX tools like Figma for intuitive interface design. Adept at collaborating in team environments 
              to deliver functional solutions and eager to apply technical skills in a dynamic software development role. 
              Committed to continuous learning and leveraging technology to solve real-world challenges.
            </p>
          </Reveal>
          
          <Reveal delay={260} className="flex flex-wrap gap-6 font-mono text-sm">
            <div className="chip rounded-2xl px-5 py-4">
              <div className="text-2xl font-display text-magenta">5+</div>
              <div className="text-paper/50 text-xs uppercase tracking-widest mt-1">Years building</div>
            </div>
            <div className="chip rounded-2xl px-5 py-4">
              <div className="text-2xl font-display text-amber">20+</div>
              <div className="text-paper/50 text-xs uppercase tracking-widest mt-1">Products shipped</div>
            </div>
            <div className="chip rounded-2xl px-5 py-4">
              <div className="text-2xl font-display text-mint">3</div>
              <div className="text-paper/50 text-xs uppercase tracking-widest mt-1">Teams founded with</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

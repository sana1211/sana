import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGraphql,
  SiRedis,
  SiFigma,
} from 'react-icons/si'
import {
  Layers,
  Accessibility as AccessibilityIcon,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { SKILLS } from '../data.js'

// Each tech's real brand mark + official brand color.
// Craft entries use themed icons.
const ICON_MAP = {
  react: { Icon: SiReact, color: '#61DAFB' },
  nextjs: { Icon: SiNextdotjs, color: '#F4F2FF' },
  typescript: { Icon: SiTypescript, color: '#3178C6' },
  tailwind: { Icon: SiTailwindcss, color: '#38BDF8' },
  framer: { Icon: SiFramer, color: '#8B5CF6' },
  nodejs: { Icon: SiNodedotjs, color: '#5FA04E' },
  python: { Icon: SiPython, color: '#FFC93C' },
  postgresql: { Icon: SiPostgresql, color: '#4169E1' },
  graphql: { Icon: SiGraphql, color: '#FF3E9A' },
  redis: { Icon: SiRedis, color: '#FF4438' },
  figma: { Icon: SiFigma, color: '#F24E1E' },
  designSystems: { Icon: Layers, color: '#8B5CF6' },
  accessibility: { Icon: AccessibilityIcon, color: '#2EE6A6' },
  motionDesign: { Icon: Sparkles, color: '#FFC93C' },
  testing: { Icon: CheckCircle2, color: '#FF3E9A' },
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 sm:px-10 py-28 md:py-36">
      <div className="max-w-6xl mx-auto">

        <Reveal className="font-mono text-xs tracking-[0.35em] uppercase text-paper/40 mb-4">
          Skills
        </Reveal>

        <Reveal delay={60}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-16">
            What I build <span className="grad-text">with</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {SKILLS.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 100}>

              <h3 className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-5">
                {group.group}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item, i) => {
                  const entry = ICON_MAP[item.icon]
                  const Icon = entry?.Icon

                  return (
                    <span
                      key={item.name}
                      className="
                        skill-orbit-item
                        chip
                        rounded-full
                        pl-4
                        pr-5
                        py-2.5
                        text-base
                        flex
                        items-center
                        gap-2.5
                        hover:border-paper/40
                      "
                      style={{
                        animationDelay: `${(gi * 5 + i) * 0.25}s`,
                      }}
                    >
                      {Icon && (
                        <Icon
                          size={26}
                          strokeWidth={2}
                          style={{
                            color: entry.color,
                            flexShrink: 0,
                          }}
                          aria-hidden="true"
                        />
                      )}

                      <span className="font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    </span>
                  )
                })}
              </div>

            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
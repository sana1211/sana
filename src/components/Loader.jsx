import { useEffect, useRef, useState } from 'react'
import { NAME, COLOR_MAP } from '../data.js'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________'

export default function Loader({ onDone }) {
  const [display, setDisplay] = useState(NAME.split('').map(() => ' '))
  const [phase, setPhase] = useState('decode') // decode -> hold -> exit
  const frameRef = useRef(0)

  useEffect(() => {
    const total = NAME.length
    let revealedCount = 0
    const interval = setInterval(() => {
      frameRef.current += 1
      setDisplay((prev) =>
        prev.map((ch, i) => {
          if (i < revealedCount) return NAME[i]
          if (NAME[i] === ' ') return ' '
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        })
      )
      if (frameRef.current % 3 === 0 && revealedCount < total) {
        revealedCount += 1
      }
      if (revealedCount >= total) {
        clearInterval(interval)
        setDisplay(NAME.split(''))
        setPhase('hold')
        setTimeout(() => setPhase('exit'), 500)
        setTimeout(() => onDone(), 1100)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] ${
        phase === 'exit' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex gap-6 mb-6">
        {['magenta', 'amber', 'mint', 'violet'].map((c, i) => (
          <span
            key={c}
            className={`w-2.5 h-2.5 rounded-full ${COLOR_MAP[c].bg} skill-orbit-item`}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <h1 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-tight font-semibold">
        {display.map((ch, i) => (
          <span key={i} className="loader-glyph text-paper">
            {ch}
          </span>
        ))}
      </h1>
      <p className="mt-5 font-mono text-xs tracking-[0.3em] uppercase text-paper/40">
        compiling portfolio.jsx
      </p>
    </div>
  )
}

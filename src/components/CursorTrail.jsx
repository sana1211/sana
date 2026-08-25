import { useEffect, useRef } from 'react'

const COLORS = ['#FF3E9A', '#FFC93C', '#2EE6A6', '#8B5CF6', '#FF3E9A']

export default function CursorTrail() {
  const dotsRef = useRef([])
  const posRef = useRef({ x: 0, y: 0 })
  const trailRef = useRef([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    trailRef.current = dotsRef.current.map(() => ({ x: 0, y: 0 }))
    const handleMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMove)

    let raf
    const animate = () => {
      let target = posRef.current
      trailRef.current.forEach((p, i) => {
        p.x += (target.x - p.x) * 0.28
        p.y += (target.y - p.y) * 0.28
        const el = dotsRef.current[i]
        if (el) el.style.transform = `translate(${p.x - 6}px, ${p.y - 6}px)`
        target = p
      })
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {COLORS.map((c, i) => (
        <span
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="cursor-dot hidden md:block"
          style={{
            background: c,
            opacity: 0.55 - i * 0.08,
            width: 14 - i * 1.5,
            height: 14 - i * 1.5,
          }}
        />
      ))}
    </>
  )
}

import { NAME } from '../data.js'

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-10 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-paper/30">
      <span>© {new Date().getFullYear()} {NAME}</span>
    </footer>
  )
}

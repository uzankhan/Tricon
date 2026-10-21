import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform, animate } from 'framer-motion'

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.09 })
      const loop = (t: number) => { lenis?.raf(t); raf = requestAnimationFrame(loop) }
      raf = requestAnimationFrame(loop)
    })
    return () => { cancelAnimationFrame(raf); lenis?.destroy() }
  }, [])
  return null
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}>{children}</motion.div>
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} variants={reduce ? {} : { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}>{children}</motion.div>
}

export function Parallax({ children, className, offset = 60 }: { children: ReactNode; className?: string; offset?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-offset, offset])
  return <div ref={ref} className={`overflow-hidden ${className ?? ''}`}><motion.div style={{ y }} className="h-[115%] -mt-[7%]">{children}</motion.div></div>
}

export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: v => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

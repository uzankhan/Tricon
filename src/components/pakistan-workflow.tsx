import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from '@tanstack/react-router'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownLeft, ArrowUpRight, Boxes, Check, MapPin, MessageCircle, Ruler, Truck } from 'lucide-react'
import { whatsappUrl } from '@/lib/brand'

const cities = [
  { name: 'KARACHI', x: 208, y: 430, anchor: 'end' as const, dx: -13, dy: 20 },
  { name: 'HYDERABAD', x: 224, y: 386, anchor: 'start' as const, dx: 13, dy: 4 },
  { name: 'SUKKUR', x: 252, y: 326, anchor: 'start' as const, dx: 13, dy: 4 },
  { name: 'QUETTA', x: 133, y: 281, anchor: 'end' as const, dx: -13, dy: 4 },
  { name: 'MULTAN', x: 328, y: 280, anchor: 'start' as const, dx: 13, dy: 4 },
  { name: 'LAHORE', x: 414, y: 213, anchor: 'start' as const, dx: 13, dy: 4 },
  { name: 'ISLAMABAD', x: 390, y: 153, anchor: 'start' as const, dx: 13, dy: -7 },
  { name: 'PESHAWAR', x: 319, y: 141, anchor: 'end' as const, dx: -13, dy: -8 },
]

const steps = [
  { number: '01', title: 'Tell us your idea', text: 'Share what you need, where it is going and how you plan to use the space.', icon: MessageCircle },
  { number: '02', title: 'Size up the requirement', text: 'Discuss dimensions, quantity, layout and the practical details that matter.', icon: Ruler },
  { number: '03', title: 'Explore the right option', text: 'Compare suitable cabin or container configurations and possible finishes.', icon: Boxes },
  { number: '04', title: 'Confirm the site details', text: 'Review access, location and transport feasibility for your project.', icon: MapPin },
  { number: '05', title: 'Plan what comes next', text: 'Discuss availability, quotation and next steps directly with Tricon.', icon: Truck },
]

function PakistanMap() {
  const reduceMotion = useReducedMotion()
  const routePairs = cities.slice(1).map((city, index) => ({ from: cities[0]!, to: city, delay: index * 0.12 }))

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-[#f2efe7] p-3 text-[#252b22] shadow-[0_24px_70px_-38px_rgba(0,0,0,.65)] sm:p-6">
      <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(#87917a 0.7px, transparent 0.7px)', backgroundSize: '18px 18px' }} />
      <div className="relative mb-1 flex items-start justify-between gap-3 px-2 pt-2">
        <div><p className="text-[10px] font-semibold tracking-[.23em] text-[#747969]">TRICON · SERVICE NETWORK</p><h3 className="mt-1 font-display text-2xl sm:text-3xl">MADE FOR PAKISTAN.</h3></div>
        <span className="rounded-full border border-[#d6d1c5] bg-white/70 px-3 py-1.5 text-[9px] font-semibold tracking-[.15em] text-[#626858]">ILLUSTRATIVE MAP</span>
      </div>
      <svg viewBox="0 0 560 500" role="img" aria-label="Illustrative map of Pakistan with Tricon service enquiry routes connecting Karachi with major cities" className="relative z-10 mx-auto block w-full max-w-[620px] overflow-visible">
        <defs>
          <linearGradient id="pakistan-fill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#dce1d2" /><stop offset="1" stopColor="#c8d0bc" /></linearGradient>
          <filter id="city-glow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <path d="M229 37 258 49 277 42 295 57 317 54 333 72 352 72 361 91 386 92 400 112 421 121 413 143 430 157 423 176 445 193 436 212 420 224 422 245 404 259 398 280 381 293 379 319 362 336 354 360 337 370 329 394 309 405 300 429 278 438 262 460 242 451 230 431 215 421 207 399 188 384 181 361 163 348 158 324 143 306 145 284 127 268 131 246 119 229 126 210 113 192 123 172 120 153 141 140 151 120 173 116 188 100 207 96 217 76 235 67Z" fill="url(#pakistan-fill)" stroke="#9da58f" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M130 213 177 222 208 210 233 220 257 201 293 206 319 192 348 204 380 190 420 203M145 284 182 276 203 295 241 289 264 304 294 287 329 296 359 277 399 281M163 348 196 338 217 354 244 346 270 363 301 351 329 370M188 100 200 142 184 174 208 210M257 49 250 91 273 121 267 158 293 206M352 72 342 113 363 144 348 204M208 210 203 245 241 289M294 287 289 323 301 351" fill="none" stroke="#b6bcaa" strokeWidth="1.2" opacity=".8" />
        {routePairs.map(({ from, to, delay }) => (
          <motion.path key={to.name} d={`M${from.x} ${from.y} Q ${(from.x + to.x) / 2 + 18} ${(from.y + to.y) / 2 - 12} ${to.x} ${to.y}`} fill="none" stroke="#bf613d" strokeWidth="1.8" strokeDasharray="5 7" strokeLinecap="round" initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.62 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.15, delay, ease: 'easeOut' }} />
        ))}
        {cities.map((city, index) => (
          <g key={city.name}>
            {index === 0 && <circle cx={city.x} cy={city.y} r="13" fill="#c75e38" opacity=".17"><animate attributeName="r" values="10;16;10" dur="2.8s" repeatCount="indefinite" /></circle>}
            <motion.circle cx={city.x} cy={city.y} r={index === 0 ? 6.5 : 4.5} fill={index === 0 ? '#c75e38' : '#354331'} stroke="#fffdf8" strokeWidth="2" filter={index === 0 ? 'url(#city-glow)' : undefined} initial={reduceMotion ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + index * 0.09, type: 'spring', stiffness: 220, damping: 16 }} />
            <text x={city.x + city.dx} y={city.y + city.dy} textAnchor={city.anchor} className="fill-[#4d5546] text-[10px] font-semibold tracking-[1.1px]">{city.name}</text>
          </g>
        ))}
        <g transform="translate(376 344)" opacity=".75"><path d="M0 0h37M18.5-18.5v37" stroke="#8d9583" strokeWidth="1" /><circle r="24" fill="none" stroke="#8d9583" strokeDasharray="2 4" /></g>
      </svg>
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-[#d6d1c5] px-2 pt-4 text-[10px] tracking-wide text-[#666d5e]">
        <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#c75e38]" /> Karachi starting point · Major cities shown</span>
        <span className="font-medium">Location & delivery feasibility confirmed per project</span>
      </div>
      <span className="absolute -bottom-12 -right-7 size-40 rounded-full bg-[#97a77d]/20 blur-3xl" aria-hidden="true" />
    </div>
  )
}

function ProcessSteps() {
  const listRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 72%', 'end 42%'] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={listRef} className="relative pl-1">
      <div className="absolute bottom-8 left-[19px] top-8 w-px bg-border" aria-hidden="true" />
      <motion.div className="absolute left-[19px] top-8 z-10 w-[2px] origin-top bg-primary" style={{ scaleY: reduceMotion ? 1 : lineScale, height: 'calc(100% - 4rem)' }} aria-hidden="true" />
      <div className="relative grid gap-3">
        {steps.map(({ number, title, text, icon: Icon }) => (
          <article key={number} className="group relative flex gap-4 rounded-lg border border-border/70 bg-card/70 p-4 transition-colors hover:border-primary/50 hover:bg-card sm:gap-5 sm:p-5">
            <div className="relative z-20 flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[11px] font-semibold tracking-wider text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">{number}</div>
            <div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-3"><h3 className="font-display text-xl sm:text-2xl">{title}</h3><Icon className="size-[18px] shrink-0 text-muted-foreground transition-colors group-hover:text-primary" strokeWidth={1.6} /></div><p className="mt-1.5 max-w-sm text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">{text}</p></div>
          </article>
        ))}
      </div>
      <a href={whatsappUrl('Hello Tricon, I would like to discuss a portacabin or container project. My location and requirements are:')} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 pl-1 text-sm font-semibold text-primary underline-offset-4 hover:underline">Start with a WhatsApp message <ArrowUpRight size={16} /></a>
    </div>
  )
}

export function PakistanWorkflow() {
  return (
    <section aria-labelledby="pakistan-workflow-title" className="section-space overflow-hidden border-y border-border bg-muted/45">
      <div className="site-wrap">
        <div className="mb-9 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div><p className="eyebrow mb-4 text-primary">A simple path, across Pakistan</p><h2 id="pakistan-workflow-title" className="section-heading max-w-3xl">FROM FIRST MESSAGE <span className="text-primary">TO THE NEXT STEP.</span></h2></div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">A clear five-step way to discuss your space. Karachi is highlighted as the starting point; share your project city so transport and site access can be checked.</p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-12"><PakistanMap /><ProcessSteps /></div>
      </div>
    </section>
  )
}

/** Mount the homepage workflow just below its hero without changing other routes. */
export function PakistanWorkflowMount() {
  const pathname = useLocation({ select: (location) => location.pathname })
  const [host, setHost] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (pathname !== '/') {
      setHost(null)
      return
    }

    const hero = document.querySelector('.hero')
    if (!hero) return
    const node = document.createElement('div')
    node.dataset.homepageWorkflow = 'true'
    hero.insertAdjacentElement('afterend', node)
    setHost(node)
    return () => {
      node.remove()
      setHost(null)
    }
  }, [pathname])

  return host ? createPortal(<PakistanWorkflow />, host) : null
}

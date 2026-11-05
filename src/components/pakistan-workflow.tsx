import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownLeft, ArrowUpRight, Boxes, Check, MapPin, MessageCircle, Ruler, Truck } from 'lucide-react'
import { whatsappUrl } from '@/lib/brand'

type City = {
  name: string
  x: number
  y: number
  label?: boolean
  dx?: number
  dy?: number
  anchor?: 'start' | 'end'
}

const cities: City[] = [
  { name: 'Gwadar', x: 115, y: 426, label: true, dx: -8, dy: 17, anchor: 'end' },
  { name: 'Turbat', x: 133, y: 399 },
  { name: 'Khuzdar', x: 223, y: 342 },
  { name: 'Quetta', x: 233, y: 267, label: true, dx: -10, dy: -12, anchor: 'end' },
  { name: 'Larkana', x: 264, y: 350 },
  { name: 'Sukkur', x: 280, y: 345, label: true, dx: 10, dy: -8, anchor: 'start' },
  { name: 'Karachi', x: 233, y: 435, label: true, dx: -8, dy: 24, anchor: 'end' },
  { name: 'Hyderabad', x: 267, y: 418, label: true, dx: 10, dy: 15, anchor: 'start' },
  { name: 'Nawabshah', x: 269, y: 391 },
  { name: 'Jacobabad', x: 269, y: 327 },
  { name: 'Zhob', x: 295, y: 231 },
  { name: 'Dera Ismail Khan', x: 332, y: 215 },
  { name: 'Multan', x: 346, y: 266, label: true, dx: -8, dy: 19, anchor: 'end' },
  { name: 'Bahawalpur', x: 351, y: 292 },
  { name: 'Rahim Yar Khan', x: 317, y: 323 },
  { name: 'Faisalabad', x: 387, y: 228 },
  { name: 'Sahiwal', x: 388, y: 252 },
  { name: 'Sargodha', x: 376, y: 207 },
  { name: 'Lahore', x: 419, y: 225, label: true, dx: 10, dy: 9, anchor: 'start' },
  { name: 'Gujranwala', x: 415, y: 205 },
  { name: 'Sialkot', x: 424, y: 194 },
  { name: 'Islamabad', x: 386, y: 157, label: true, dx: -10, dy: 16, anchor: 'end' },
  { name: 'Peshawar', x: 347, y: 146, label: true, dx: -9, dy: -9, anchor: 'end' },
  { name: 'Mardan', x: 361, y: 140 },
  { name: 'Abbottabad', x: 390, y: 142 },
  { name: 'Muzaffarabad', x: 397, y: 135 },
  { name: 'Gilgit', x: 418, y: 86, label: true, dx: -9, dy: -10, anchor: 'end' },
  { name: 'Skardu', x: 451, y: 106 },
  { name: 'Chitral', x: 354, y: 88 },
]

const routes = [
  { id: 'karachi-hyderabad', d: 'M233 435 C248 433 257 424 267 418', duration: '8s', delay: '-2s' },
  { id: 'hyderabad-sukkur', d: 'M267 418 C285 397 277 369 280 345', duration: '12s', delay: '-7s' },
  { id: 'karachi-quetta', d: 'M233 435 C205 387 221 321 233 267', duration: '16s', delay: '-4s' },
  { id: 'karachi-gwadar', d: 'M233 435 C202 451 155 454 115 426', duration: '19s', delay: '-12s' },
  { id: 'sukkur-multan', d: 'M280 345 C307 325 327 292 346 266', duration: '13s', delay: '-3s' },
  { id: 'multan-lahore', d: 'M346 266 C374 254 400 241 419 225', duration: '12s', delay: '-8s' },
  { id: 'lahore-islamabad', d: 'M419 225 C414 196 401 174 386 157', duration: '10s', delay: '-5s' },
  { id: 'islamabad-peshawar', d: 'M386 157 C373 142 359 139 347 146', duration: '9s', delay: '-1s' },
  { id: 'islamabad-gilgit', d: 'M386 157 C397 130 411 106 418 86', duration: '17s', delay: '-10s' },
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

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-[#f2efe7] p-3 text-[#252b22] shadow-[0_24px_70px_-38px_rgba(0,0,0,.65)] sm:p-5">
      <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(#87917a 0.7px, transparent 0.7px)', backgroundSize: '18px 18px' }} />
      <div className="relative mb-1 flex items-start justify-between gap-3 px-2 pt-2">
        <div><p className="text-[10px] font-semibold tracking-[.23em] text-[#747969]">TRICON · PAKISTAN NETWORK</p><h3 className="mt-1 font-display text-2xl sm:text-3xl">MADE FOR PAKISTAN.</h3></div>
        <span className="rounded-full border border-[#d6d1c5] bg-white/70 px-3 py-1.5 text-[9px] font-semibold tracking-[.15em] text-[#626858]">ILLUSTRATIVE ROUTES</span>
      </div>
      <svg viewBox="0 0 600 520" role="img" aria-label={`Illustrative Pakistan map with ${cities.length} city names and animated route trucks`} className="relative z-10 mx-auto block w-full max-w-[620px] overflow-visible">
        <defs>
          <linearGradient id="pakistan-fill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e4e8da" /><stop offset="1" stopColor="#cbd4bf" /></linearGradient>
          <filter id="city-glow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <path d="M439.4 48 458.1 62.7 465.6 86.9 507.2 99.6 482.7 126.1 454.5 130.8 416.2 123.1 403.8 136.7 412.7 164.3 421.5 185.6 441.9 201.2 420.4 219.4 420.7 241.8 396.2 273.4 380.3 305.4 353.9 338.4 324.5 336 296.6 369.1 313.2 383.2 316 407.4 330.3 423.4 335.3 450.5 279.6 450.4 262.8 471.4 244.2 463.4 236.7 440.8 217.1 416.8 170.5 422.7 129.4 423.3 93.8 427.7 103.3 391.1 139.8 374.9 137.7 360.4 125.6 355.3 124.9 327.5 100.7 313.7 90.5 294.6 78 278.1 120.4 294.2 145.7 289.4 160.8 293.5 165.9 286.5 183.6 289.3 216.4 276.2 217.3 249.4 231.4 231.6 250.3 231.6 253 222.8 272.4 218.7 281.7 221.7 291.6 212.8 290.2 193.9 301 174.9 317.1 166.9 307.1 146.1 331.2 147 338.1 135.7 337.1 123.6 349.7 110.4 346.8 94.7 340.8 81.3 355.6 67.6 382.8 61 411.8 57.4 424.7 51.5Z" fill="url(#pakistan-fill)" stroke="#98a18e" strokeWidth="2.4" strokeLinejoin="round" />
        <text x="285" y="306" textAnchor="middle" fill="#75816b" opacity=".18" fontSize="30" fontWeight="700" letterSpacing="5">PAKISTAN</text>
        {routes.map(({ id, d }, index) => (
          <g key={id}>
            <path d={d} fill="none" stroke="#bf613d" strokeWidth="7" strokeLinecap="round" opacity=".09" />
            <motion.path id={`route-${id}`} d={d} fill="none" stroke="#a95739" strokeWidth="1.9" strokeDasharray="2 7" strokeLinecap="round" initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.9 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.1, delay: index * 0.08, ease: 'easeOut' }} />
          </g>
        ))}
        {!reduceMotion && routes.filter((_, index) => index % 2 === 0).map((route, index) => (
          <g key={`truck-${route.id}`} aria-hidden="true" filter="url(#city-glow)">
            <animateMotion dur={route.duration} begin={route.delay} repeatCount="indefinite" rotate="auto">
              <mpath href={`#route-${route.id}`} />
            </animateMotion>
            <rect x="-13" y="-6" width="14" height="9" rx="1.5" fill="#354331" stroke="#fffdf8" strokeWidth="1.2" />
            <path d="M1-5h6l5 5v4H1z" fill="#bf613d" stroke="#fffdf8" strokeWidth="1.2" strokeLinejoin="round" />
            <circle cx="-8" cy="4" r="2" fill="#252b22" stroke="#fffdf8" strokeWidth="1" />
            <circle cx="7" cy="4" r="2" fill="#252b22" stroke="#fffdf8" strokeWidth="1" />
          </g>
        ))}
        {cities.map((city, index) => (
          <g key={city.name}>
            <title>{city.name}</title>
            {city.name === 'Karachi' && !reduceMotion && <circle cx={city.x} cy={city.y} r="13" fill="#c75e38" opacity=".17"><animate attributeName="r" values="10;16;10" dur="2.8s" repeatCount="indefinite" /></circle>}
            <motion.circle cx={city.x} cy={city.y} r={city.name === 'Karachi' ? 6.5 : 3.6} fill={city.name === 'Karachi' ? '#c75e38' : city.label ? '#354331' : '#647456'} stroke="#fffdf8" strokeWidth={city.label ? 2 : 1.4} filter={city.name === 'Karachi' ? 'url(#city-glow)' : undefined} initial={reduceMotion ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + index * 0.025, type: 'spring', stiffness: 220, damping: 16 }} />
            {city.label && <text x={city.x + city.dx!} y={city.y + city.dy!} textAnchor={city.anchor} fill="#354331" stroke="#f2efe7" strokeWidth="3" strokeLinejoin="round" paintOrder="stroke" fontSize="10" fontWeight="700" letterSpacing=".6">{city.name.toUpperCase()}</text>}
          </g>
        ))}
      </svg>
      <div className="relative mx-2 border-t border-[#d6d1c5] px-1 pt-3">
        <p className="mb-2 text-[9px] font-semibold tracking-[.18em] text-[#747969]">CITY NETWORK · {cities.length} SELECTED CITIES</p>
        <div className="flex flex-wrap gap-1.5">
          {cities.map(city => <span key={city.name} className={`rounded-full border px-2 py-1 text-[9px] font-semibold tracking-wide ${city.name === 'Karachi' ? 'border-[#bf613d]/35 bg-[#bf613d]/10 text-[#9c4c32]' : 'border-[#d6d1c5] bg-white/55 text-[#626858]'}`}>{city.name}</span>)}
        </div>
      </div>
      <div className="relative mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#d6d1c5] px-2 pt-3 text-[9px] tracking-wide text-[#666d5e]">
        <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#c75e38]" /> Karachi starting point</span>
        <span className="font-medium">Illustrative routes, not live tracking · Delivery feasibility confirmed per project</span>
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

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HardHat, Warehouse, Building2, Store, Factory, Tent, GraduationCap, Truck, ShieldCheck, MessageCircle, Ruler, Wrench, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Counter, Reveal, Stagger, StaggerItem } from '@/components/motion'
import { Button } from '@/components/ui/button'
import cabinImage from '@/assets/portacabin.jpg'
import containerImage from '@/assets/container.jpg'
import interiorImage from '@/assets/interior.jpg'

const sectors = [{ icon: HardHat, label: 'Construction sites' }, { icon: Warehouse, label: 'Storage & warehousing' }, { icon: Building2, label: 'Site offices' }, { icon: Store, label: 'Retail kiosks' }, { icon: Factory, label: 'Industrial yards' }, { icon: Tent, label: 'Events & camps' }, { icon: GraduationCap, label: 'Temporary classrooms' }, { icon: Truck, label: 'Logistics hubs' }]

export function SectorMarquee() {
  const row = [...sectors, ...sectors]
  return <section className="overflow-hidden border-b border-border bg-background py-10">
    <p className="eyebrow mb-7 justify-center text-primary">Built for the industries that keep moving</p>
    <div className="marquee-mask"><div className="marquee-track">{row.map((s, i) => <span key={i} className="flex shrink-0 items-center gap-3 px-10 text-muted-foreground"><s.icon size={26} strokeWidth={1.3} /><span className="font-display text-2xl tracking-wide">{s.label}</span></span>)}</div></div>
  </section>
}

export function TrustBadges() {
  const badges = [{ icon: ShieldCheck, t: 'Practical, sturdy builds' }, { icon: Ruler, t: 'Layouts to your requirement' }, { icon: Wrench, t: 'Custom finishes discussed' }, { icon: MessageCircle, t: 'Direct WhatsApp support' }]
  return <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">{badges.map(b => <StaggerItem key={b.t}><div className="glass-card flex items-center gap-3 p-4"><b.icon className="shrink-0 text-primary" size={22} strokeWidth={1.4} /><span className="text-sm font-medium">{b.t}</span></div></StaggerItem>)}</Stagger>
}

export function StatsSection() {
  const stats = [{ n: 4, s: '', l: 'Product categories' }, { n: 3, s: '', l: 'Simple steps to start' }, { n: 100, s: '%', l: 'Requirement-led planning' }, { n: 1, s: '', l: 'Direct line on WhatsApp' }]
  return <section className="glow-section section-space"><div className="site-wrap">
    <Reveal><p className="eyebrow mb-4 text-primary">Tricon at a glance</p><h2 className="section-heading mb-12">CLEAR CHOICES. <span className="text-primary">DIRECT CONVERSATIONS.</span></h2></Reveal>
    <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-4">{stats.map(s => <StaggerItem key={s.l}><div className="glass-card hover-card p-7"><p className="font-display text-6xl text-primary"><Counter to={s.n} suffix={s.s} /></p><p className="mt-2 text-sm text-muted-foreground">{s.l}</p></div></StaggerItem>)}</Stagger>
    <div className="mt-10"><TrustBadges /></div>
  </div></section>
}

const questions = [
  { q: 'Can the cabin layout be planned around how we will use it?', a: 'Yes. Share the purpose — office, guard room, storage or accommodation — and the layout is discussed around your requirement.' },
  { q: 'Do you offer shipping containers for storage and conversions?', a: 'Container options for storage, workspace and custom conversions can be discussed, including size and condition.' },
  { q: 'How do I get started with an enquiry?', a: 'Message Tricon on WhatsApp with your location, size and application. The details are then discussed directly, one step at a time.' },
]

export function ClientQuestions() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % questions.length), 6500); return () => clearInterval(t) }, [])
  const item = questions[i]
  return <section className="section-space bg-muted"><div className="site-wrap grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
    <Reveal><p className="eyebrow mb-4 text-primary">What clients ask us</p><h2 className="section-heading">YOUR QUESTIONS. <span className="text-primary">STRAIGHT ANSWERS.</span></h2><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">The questions we hear most often when someone begins planning a portable space.</p></Reveal>
    <Reveal delay={0.15}><div className="glass-card relative min-h-[260px] p-8 md:p-10">
      <Quote className="mb-5 text-primary" size={34} strokeWidth={1.3} />
      <AnimatePresence mode="wait"><motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.45 }}><h3 className="text-3xl">{item.q}</h3><p className="mt-4 leading-7 text-muted-foreground">{item.a}</p></motion.div></AnimatePresence>
      <div className="mt-8 flex items-center justify-between"><div className="flex gap-2">{questions.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Show question ${k + 1}`} className={`h-1.5 rounded-full transition-all ${k === i ? 'w-8 bg-primary' : 'w-3 bg-border'}`} />)}</div><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Previous question" onClick={() => setI((i + questions.length - 1) % questions.length)}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Next question" onClick={() => setI((i + 1) % questions.length)}><ChevronRight /></Button></div></div>
    </div></Reveal>
  </div></section>
}

const insights = [
  { img: cabinImage, tag: 'Guide', title: 'Choosing a site office cabin', text: 'What to consider for size, layout and daily use before you enquire.' },
  { img: containerImage, tag: 'Insight', title: 'Containers beyond storage', text: 'How steel containers can become workspaces, kiosks and secure stores.' },
  { img: interiorImage, tag: 'Planning', title: 'Making compact spaces work', text: 'Simple planning ideas for comfort and function in a small footprint.' },
]

export function InsightsSection() {
  return <section className="section-space"><div className="site-wrap">
    <Reveal><p className="eyebrow mb-4 text-primary">Insights</p><h2 className="section-heading mb-12">PLAN SMARTER. <span className="text-primary">BUILD BETTER.</span></h2></Reveal>
    <Stagger className="grid gap-8 md:grid-cols-3">{insights.map(a => <StaggerItem key={a.title}><article className="hover-card overflow-hidden rounded-sm border border-border bg-card"><div className="overflow-hidden"><img src={a.img} alt={`Illustrative concept for ${a.title}`} loading="lazy" width={1024} height={768} className="product-image" /></div><div className="p-6"><p className="product-number uppercase text-primary">{a.tag}</p><h3 className="mt-2 text-2xl">{a.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{a.text}</p></div></article></StaggerItem>)}</Stagger>
  </div></section>
}

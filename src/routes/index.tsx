import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ArrowDown, ShieldCheck, SlidersHorizontal, Truck, Boxes, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactBand, ExploreLink } from '@/components/site'
import { ProductCollection } from '@/components/product-collection'
import { Reveal, Stagger, StaggerItem, Parallax } from '@/components/motion'
import { SectorMarquee, StatsSection, ClientQuestions, InsightsSection } from '@/components/trust-sections'
import { FrequentlyAskedQuestions, ServiceAreaLinks } from '@/components/seo-content'
import { pageHead, whatsappUrl } from '@/lib/brand'
import heroImage from '@/assets/modular-office.jpg'
import cabinImage from '@/assets/portacabin.jpg'

export const Route = createFileRoute('/')({
  head: () => pageHead(
    'Tricon | Best Porta Cabin & Container Offices in Karachi, Pakistan',
    'Buy quality portacabins, shipping containers and site offices in Pakistan. Tricon discusses custom container modifications and delivery for your project.',
    '/'
  ),
  component: Index,
})

function Index() {
  return <>
    <section className="hero overflow-hidden">
      <img className="hero-image ken-burns" src={heroImage} width={1920} height={1088} alt="Portable cabin office and container workspace in Pakistan" loading="eager" fetchPriority="high" />
      <div className="site-wrap hero-content"><p className="eyebrow hero-in" style={{ animationDelay: '0.1s' }}>Porta cabin price in Pakistan • Site offices • Container homes</p><h1 className="hero-heading hero-in" style={{ animationDelay: '0.3s' }}>PORTA CABIN PRICE IN PAKISTAN<br /><span className="text-primary">& MODULAR CONTAINER OFFICES</span></h1><p className="hero-copy hero-in" style={{ animationDelay: '0.55s' }}>From a porta cabin office in Karachi to a shipping container home in Dubai, Tricon helps you compare practical layouts for work, storage, accommodation and site operations.</p><div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.8s' }}><Button variant="hero" size="premium" asChild><Link to="/products">Explore production cabins & offices <ArrowUpRight /></Link></Button><Button variant="heroOutline" size="premium" asChild><a href={whatsappUrl()} target="_blank" rel="noreferrer">Discuss your project <ArrowUpRight /></a></Button></div></div>
      <div className="site-wrap hero-bottom"><div className="hero-note glass-dark px-4 py-3">A space for every possibility<br /><span className="mt-2 block normal-case tracking-normal opacity-70">Work. Store. Create.</span></div><a href="#collection" className="flex items-center gap-3 text-xs" aria-label="Scroll to product collection">Discover Tricon <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hero-foreground/40"><ArrowDown size={16} /></span></a></div>
    </section>
    <SectorMarquee />
    <section className="border-b border-border bg-secondary/35"><Stagger className="site-wrap grid grid-cols-2 gap-x-5 gap-y-7 py-7 md:grid-cols-4">{[{ icon: ShieldCheck, title: 'Practical construction', sub: 'Built for everyday use' }, { icon: SlidersHorizontal, title: 'Flexible configurations', sub: 'A layout for your needs' }, { icon: Truck, title: 'Portable by design', sub: 'Spaces that can move' }, { icon: Boxes, title: 'Versatile applications', sub: 'From offices to storage' }].map(item => <StaggerItem key={item.title} className="flex items-center gap-3 md:gap-4"><item.icon className="shrink-0 text-primary" size={27} strokeWidth={1.4} /><div><p className="text-[13px] font-semibold">{item.title}</p><p className="mt-1 text-xs text-muted-foreground">{item.sub}</p></div></StaggerItem>)}</Stagger></section>
    <section id="collection" className="section-space"><div className="site-wrap"><Reveal className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow mb-4 text-primary">Our product collection</p><h2 className="section-heading">PORTACABIN OFFICE, CONTAINER HOUSE & MODULAR SPACE SOLUTIONS.</h2></div><ExploreLink /></Reveal><ProductCollection /></div></section>
    <StatsSection />
    <section className="border-y border-border bg-muted py-24"><div className="site-wrap grid items-center gap-12 md:grid-cols-2"><Reveal className="relative"><Parallax className="aspect-[4/3] w-full rounded-sm"><img src={cabinImage} alt="Illustrative portable office cabin" width={1024} height={768} loading="lazy" className="h-full w-full object-cover" /></Parallax><span className="absolute bottom-0 left-0 bg-primary px-6 py-4 font-display text-2xl text-primary-foreground">SMALL FOOTPRINT. BIG POTENTIAL.</span></Reveal><Reveal delay={0.15}><p className="eyebrow mb-5 text-primary">The Tricon approach</p><h2 className="section-heading">NOT JUST A CABIN.<br /><span className="text-primary">YOUR SPACE</span> TO MOVE FORWARD.</h2><p className="mt-6 text-base leading-7 text-muted-foreground">Every space begins with a purpose. A place to work, a secure place to store, or a fresh way to use the room you have.</p><p className="mt-4 text-base leading-7 text-muted-foreground">At Tricon, the conversation starts with your requirements — the layout, the application and the details that matter to you.</p><div className="my-7 grid gap-3 text-sm">{['Space planning around your purpose', 'Cabin and container options to explore', 'Direct, straightforward project enquiries'].map(text => <p key={text} className="flex items-center gap-3"><Check size={16} className="text-primary" />{text}</p>)}</div><Button variant="industrial" size="premium" asChild><Link to="/about">Get to know Tricon <ArrowUpRight /></Link></Button></Reveal></div></section>
    <section className="section-space"><div className="site-wrap"><Reveal><p className="eyebrow mb-4 text-primary">From idea to conversation</p><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="section-heading">YOUR REQUIREMENT.<br /><span className="text-primary">A CLEAR STARTING POINT.</span></h2><p className="max-w-sm text-sm leading-6 text-muted-foreground">Tell us what you have in mind. We’ll discuss the details directly, one step at a time.</p></div></Reveal><Stagger className="grid gap-9 md:grid-cols-3">{[{ n: '01', title: 'Share your idea', text: 'Tell us how you plan to use the space, your location and the size you have in mind.' }, { n: '02', title: 'Explore the options', text: 'Discuss cabin types, container configurations, layouts and the finishes you need.' }, { n: '03', title: 'Plan the next step', text: 'Confirm the project details and discuss availability and delivery arrangements.' }].map(step => <StaggerItem key={step.n} className="border-t border-border pt-5"><div className="flex items-center justify-between"><span className="font-display text-3xl text-primary">{step.n}</span><ArrowRight size={20} className="text-muted-foreground" /></div><h3 className="mt-5 text-3xl">{step.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{step.text}</p></StaggerItem>)}</Stagger></div></section>
    <ClientQuestions />
    <ServiceAreaLinks />
    <FrequentlyAskedQuestions />
    <InsightsSection />
    <ContactBand />
  </>
}

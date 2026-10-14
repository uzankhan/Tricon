import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Menu, X, MessageCircle, Box, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { brand, whatsappUrl } from '@/lib/brand'

export function BrandMark() {
  return <span className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center border-2 border-primary text-primary"><Box size={27} strokeWidth={1.4} /></span><span><span className="brand-name block">TRICON<span className="text-primary">.</span></span><span className="brand-caption block">PORTACABINS & CONTAINERS</span></span></span>
}

const links = [{ to: '/' as const, label: 'Home' }, { to: '/products' as const, label: 'Our products' }, { to: '/about' as const, label: 'About Tricon' }, { to: '/gallery' as const, label: 'Gallery' }, { to: '/contact' as const, label: 'Contact' }]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="relative z-30 bg-background">
    <div className="site-wrap flex h-[94px] items-center justify-between gap-5">
      <Link to="/" aria-label="Tricon home" onClick={() => setOpen(false)}><BrandMark /></Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{links.map(link => <Link key={link.to} to={link.to} className="border-b-2 border-transparent py-2 text-[13px] font-medium transition-colors hover:text-primary" activeProps={{ className: 'border-primary text-primary' }} activeOptions={{ exact: true }}>{link.label}</Link>)}</nav>
      <Button variant="industrial" size="premium" asChild className="hidden sm:inline-flex"><a href={whatsappUrl()} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="lg:hidden">{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="absolute left-0 right-0 top-full grid gap-1 border-t border-border bg-background px-6 py-5 shadow-lg lg:hidden">{links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="py-3 text-base" activeProps={{ className: 'text-primary' }}>{link.label}</Link>)}<WhatsAppButton /></nav>}
  </header>
}

export function WhatsAppButton({ message, children = 'Contact us on WhatsApp', outline = false }: { message?: string; children?: React.ReactNode; outline?: boolean }) {
  return <Button variant={outline ? 'outline' : 'hero'} size="premium" asChild><a href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle size={18} />{children}<ArrowUpRight size={16} /></a></Button>
}

export function ContactBand() {
  return <section className="bg-secondary py-14"><div className="site-wrap flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="eyebrow mb-4 text-primary">Your next space starts here</p><h2 className="section-heading">LET’S BUILD SOMETHING THAT WORKS.</h2></div><WhatsAppButton /></div></section>
}

export function SiteFooter() {
  return <><footer className="bg-inverse py-14 text-inverse-foreground"><div className="site-wrap"><div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]"><div><Link to="/" aria-label="Tricon home"><BrandMark /></Link><p className="mt-6 max-w-xs text-sm leading-7 opacity-70">Portable spaces. Practical possibilities.<br />Portacabins and containers for your next requirement.</p></div><div><p className="mb-5 text-xs font-semibold uppercase tracking-widest opacity-50">Explore Tricon</p><div className="grid gap-3 text-sm">{links.slice(1).map(link => <Link key={link.to} to={link.to} className="hover:text-primary">{link.label}</Link>)}</div></div><div><p className="mb-5 text-xs font-semibold uppercase tracking-widest opacity-50">Start a conversation</p><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="text-xl">{brand.phone}</a><p className="mt-2 text-sm opacity-60">WhatsApp enquiries</p><a href={brand.facebook} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 text-sm">Find us on Facebook <ArrowUpRight size={15} /></a></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-inverse-foreground/15 pt-6 text-xs opacity-50 sm:flex-row"><p>© {new Date().getFullYear()} Tricon. All rights reserved.</p><p>Built around your needs.</p></div></div></footer><Button variant="hero" asChild className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full shadow-xl" aria-label="Chat with Tricon on WhatsApp"><a href={whatsappUrl()} target="_blank" rel="noreferrer" title="Chat on WhatsApp"><MessageCircle className="size-6" /></a></Button></>
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="border-b border-border bg-secondary/40 py-16 md:py-20"><div className="site-wrap reveal"><p className="eyebrow mb-6 text-primary">{eyebrow}</p><h1 className="page-title">{title}</h1><p className="mt-5 max-w-xl text-lg leading-7 text-muted-foreground">{description}</p></div></section>
}

export function ExploreLink() { return <Button variant="outline" size="premium" asChild><Link to="/products">Explore all products <ArrowRight /></Link></Button> }
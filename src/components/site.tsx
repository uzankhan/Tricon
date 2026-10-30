import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Menu, X, MessageCircle, ArrowRight, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { brand, whatsappUrl } from '@/lib/brand'

export function BrandMark() {
  return <img
    src={brand.logoPath}
    alt="Tricon Container Trading"
    className="h-[84px] w-[84px] shrink-0 object-contain"
    width={768}
    height={768}
  />
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
  return <>
    <footer className="mt-20 border-t border-border bg-background pb-8 pt-16">
      <div className="site-wrap mx-auto max-w-6xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" aria-label="Tricon home" className="inline-block">
              <BrandMark />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Portable spaces. Practical possibilities. Portacabins and containers for your next requirement.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="flex flex-col space-y-3">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                <span className="rounded-full bg-primary/10 p-2"><MessageCircle className="h-5 w-5 text-primary" /></span>
                <span>Chat on WhatsApp</span>
              </a>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                <span className="rounded-full bg-primary/10 p-2"><Mail className="h-5 w-5 text-primary" /></span>
                <span>{brand.email}</span>
              </a>
              <a href={brand.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                <span className="rounded-full bg-primary/10 p-2"><Facebook className="h-5 w-5 text-primary" /></span>
                <span>Follow on Facebook</span>
              </a>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                <span className="rounded-full bg-primary/10 p-2"><Phone className="h-5 w-5 text-primary" /></span>
                <span>{brand.phone}</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Location</h4>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p>{brand.address}</p>
            </div>
            <div className="mt-4 h-40 w-full overflow-hidden rounded-xl border border-border">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapQuery)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tricon Location"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Tricon. All rights reserved.</p>
          <p>Built around your needs.</p>
        </div>
      </div>
    </footer>
    <Button variant="hero" asChild className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full shadow-xl" aria-label="Chat with Tricon on WhatsApp">
      <a href={whatsappUrl()} target="_blank" rel="noreferrer" title="Chat on WhatsApp">
        <MessageCircle className="size-6" />
      </a>
    </Button>
  </>
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="border-b border-border bg-secondary/40 py-16 md:py-20"><div className="site-wrap reveal"><p className="eyebrow mb-6 text-primary">{eyebrow}</p><h1 className="page-title">{title}</h1><p className="mt-5 max-w-xl text-lg leading-7 text-muted-foreground">{description}</p></div></section>
}

export function ExploreLink() { return <Button variant="outline" size="premium" asChild><Link to="/products">Explore all products <ArrowRight /></Link></Button> }
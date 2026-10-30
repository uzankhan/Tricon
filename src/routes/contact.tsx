import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MessageCircle, ArrowUpRight, Phone, Globe } from 'lucide-react'
import { PageIntro, WhatsAppButton } from '@/components/site'
import { Button } from '@/components/ui/button'
import { brand, pageHead, whatsappUrl } from '@/lib/brand'
import { FrequentlyAskedQuestions } from '@/components/seo-content'
export const Route = createFileRoute('/contact')({
  head: () => pageHead(
    'Contact Tricon Container Trading | Pakistan',
    'Contact Tricon to discuss portable cabins, shipping containers, site offices, container modifications and delivery arrangements for your project in Pakistan.',
    '/contact'
  ),
  component: Contact,
})
function Contact() {
  const [prepared, setPrepared] = useState<string | null>(null)
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `Hello Tricon, I would like to discuss a project.\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nInterested in: ${data.get('product')}\nProject location: ${data.get('location')}\nRequirements: ${data.get('requirements')}`
    setPrepared(whatsappUrl(message))
  }
  return <><PageIntro eyebrow="Contact Tricon Container Trading" title="LET’S TALK ABOUT YOUR SPACE." description="Have a cabin or container in mind? Share your requirements and start a conversation." /><section className="section-space"><div className="site-wrap grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div><h2 className="section-heading">A DIRECT LINE<br />TO TRICON.</h2><p className="mb-8 mt-5 max-w-sm leading-7 text-muted-foreground">From an initial idea to specific requirements, get in touch to discuss the options.</p><div className="mb-8 flex items-center gap-4 border-y border-border py-6"><Phone className="text-primary" size={24} /><div><p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Call or WhatsApp</p><a href="tel:+923331220694" className="text-xl font-medium">{brand.phone}</a></div></div><WhatsAppButton /><a href={brand.facebook} target="_blank" rel="noreferrer" className="mt-7 flex items-center gap-3 text-sm"><Globe size={18} className="text-primary" />Visit our Facebook profile <ArrowUpRight size={16} /></a></div><div><h2 className="mb-2 text-3xl">TELL US WHAT YOU HAVE IN MIND.</h2><p className="mb-7 text-sm text-muted-foreground">Your enquiry will be prepared for WhatsApp. Send it there to reach Tricon.</p><form onSubmit={submit} className="grid gap-5"><div className="grid gap-5 sm:grid-cols-2"><label className="field">Your name<input name="name" autoComplete="name" required placeholder="Full name" /></label><label className="field">Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="Your phone number" /></label></div><div className="grid gap-5 sm:grid-cols-2"><label className="field">I’m interested in<select name="product"><option>Portacabin</option><option>Shipping container</option><option>Custom office cabin</option><option>Modular space</option><option>Other requirement</option></select></label><label className="field">Project location<input name="location" placeholder="City or site location" required /></label></div><label className="field">Your requirements<textarea name="requirements" rows={4} required placeholder="Intended use, approximate size, quantity and any specific requirements…" /></label><Button type="submit" variant="industrial" size="premium" className="justify-self-start"><MessageCircle />Prepare WhatsApp enquiry <ArrowUpRight /></Button></form>{prepared && <div role="status" className="mt-6 border-l-2 border-primary bg-secondary/50 p-5"><h3 className="text-2xl">YOUR ENQUIRY IS READY.</h3><p className="mb-4 mt-2 text-sm text-muted-foreground">Continue to WhatsApp, then send your message to Tricon.</p><Button variant="hero" size="premium" asChild><a href={prepared} target="_blank" rel="noreferrer">Continue to WhatsApp <ArrowUpRight /></a></Button></div>}</div></div></section><FrequentlyAskedQuestions /></>
}
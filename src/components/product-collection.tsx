import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import { whatsappUrl } from '@/lib/brand'

export function ProductCollection({ full = false }: { full?: boolean }) {
  return <div className={`grid gap-8 ${full ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
    {products.slice(0, full ? 4 : 3).map((product, i) => <article key={product.id} className="product-card">
      <Link to="/products" className="block overflow-hidden rounded-sm" aria-label={`Explore ${product.title}`}><img src={product.image} width={1024} height={768} alt={`${product.title} illustrative design`} loading="lazy" className="product-image" /></Link>
      <div className="mb-3 mt-5 flex items-center justify-between"><p className="product-number uppercase text-muted-foreground">{product.category}</p><span className="product-number text-primary">0{i + 1}</span></div>
      <div className="flex items-center justify-between gap-3"><h3 className="product-title">{product.title}</h3><Button variant="ghost" size="icon" asChild><a href={whatsappUrl(`Hello Tricon, I am interested in ${product.title}. Please share the available options.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${product.title}`} title="Enquire on WhatsApp"><ArrowUpRight /></a></Button></div>
      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{product.description}</p>
      {full && <><ul className="my-5 grid gap-2 text-sm">{product.details.map(detail => <li key={detail} className="flex items-center gap-2"><span className="h-1 w-1 bg-primary" />{detail}</li>)}</ul><Button variant="outline" asChild><a href={whatsappUrl(`Hello Tricon, I am interested in ${product.title}. Please share the available options.`)} target="_blank" rel="noreferrer">Contact us on WhatsApp <ArrowUpRight /></a></Button></>}
    </article>)}
  </div>
}
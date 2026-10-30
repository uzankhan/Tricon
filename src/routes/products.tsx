import { createFileRoute } from '@tanstack/react-router'
import { PageIntro, ContactBand } from '@/components/site'
import { ProductCollection } from '@/components/product-collection'
import { pageHead } from '@/lib/brand'

export const Route = createFileRoute('/products')({
  head: () => pageHead(
    'Portable Cabins, Container Offices & Prefab Homes | Tricon',
    'Explore Tricon portable cabins, container offices, site cabins and prefab homes in Pakistan, with options for workplaces, accommodation and project sites.',
    '/products'
  ),
  component: Products,
})
function Products() { return <><PageIntro eyebrow="The Tricon collection" title="PORTA CABIN PRICE IN PAKISTAN & CONTAINER OFFICE SOLUTIONS." description="Explore portable cabins, container houses, shipping container homes, office containers and modular spaces for Pakistan, Dubai and Saudi Arabian projects." /><section className="section-space"><div className="site-wrap"><ProductCollection full /><p className="mt-8 text-xs text-muted-foreground">Images are illustrative design concepts. Confirm available models, specifications and finishes directly with Tricon for your exact container office, portacabin or prefab requirement.</p></div></section><ContactBand /></> }
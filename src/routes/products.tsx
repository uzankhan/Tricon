import { createFileRoute } from '@tanstack/react-router'
import { PageIntro, ContactBand } from '@/components/site'
import { ProductCollection } from '@/components/product-collection'
import { pageHead } from '@/lib/brand'

export const Route = createFileRoute('/products')({ head: () => pageHead('Our Products | Tricon Portacabins & Containers', 'Explore portacabins, shipping containers, office cabin interiors and modular space concepts. Contact Tricon on WhatsApp for available options.'), component: Products })
function Products() { return <><PageIntro eyebrow="The Tricon collection" title="SPACES THAT WORK FOR YOU." description="Explore portable cabins and container concepts for work, storage and your next project." /><section className="section-space"><div className="site-wrap"><ProductCollection full /><p className="mt-8 text-xs text-muted-foreground">Images are illustrative design concepts. Confirm available models, specifications and finishes directly with Tricon.</p></div></section><ContactBand /></> }
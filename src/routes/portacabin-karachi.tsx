import { createFileRoute } from '@tanstack/react-router'
import { ServiceAreaPage } from '@/components/seo-content'
import { pageHead } from '@/lib/brand'

export const Route = createFileRoute('/portacabin-karachi')({
  head: () =>
    pageHead(
      'Portacabins in Karachi | Tricon Container Trading',
      'Discuss portacabins, site offices and container modifications in Karachi with Tricon directly. Port Qasim access and delivery needs are confirmed per project.',
      '/portacabin-karachi',
    ),
  component: KarachiPortacabins,
})

function KarachiPortacabins() {
  return (
    <ServiceAreaPage
      content={{
        city: 'Karachi',
        title: 'PORTACABINS AND SITE OFFICES IN KARACHI.',
        intro:
          'Explore portable cabin, site office and container options for business and project locations in Karachi. Share your intended use, dimensions and site details to discuss a suitable configuration.',
        description:
          'Tricon Container Trading discusses portacabin layouts, container office requirements and potential modifications for Karachi projects. Each enquiry is assessed against the space requirements and delivery location.',
        locationNote:
          'For sites around Port Qasim and other Karachi industrial or port locations, provide the site address and access details. Vehicle access, unloading arrangements and delivery feasibility need confirmation for each project.',
        keywords: 'PORTABLE CABINS FOR KARACHI PROJECTS.',
      }}
    />
  )
}

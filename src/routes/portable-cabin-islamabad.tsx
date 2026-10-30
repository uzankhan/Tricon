import { createFileRoute } from '@tanstack/react-router'
import { ServiceAreaPage } from '@/components/seo-content'
import { pageHead } from '@/lib/brand'

export const Route = createFileRoute('/portable-cabin-islamabad')({
  head: () =>
    pageHead(
      'Portable Cabins in Islamabad | Tricon Container Trading',
      'Discuss portable cabins, container offices and site cabins for Islamabad projects with Tricon. Confirm transport options, location and access requirements.',
      '/portable-cabin-islamabad',
    ),
  component: IslamabadPortableCabins,
})

function IslamabadPortableCabins() {
  return (
    <ServiceAreaPage
      content={{
        city: 'Islamabad',
        title: 'PORTABLE CABINS FOR ISLAMABAD PROJECTS.',
        intro:
          'Explore portable cabin, site office and container workspace options for projects in Islamabad. Discuss the layout, dimensions and intended use before selecting a configuration.',
        description:
          'Tricon Container Trading discusses portable cabin and container office requirements for Islamabad projects. Share the project address and site conditions so transport and delivery needs can be reviewed.',
        locationNote:
          'For Islamabad sites, including industrial locations around I-9, provide the exact site address, access restrictions and unloading arrangements. Delivery timing and feasibility depend on the project details.',
        keywords: 'SITE CABINS AND PORTABLE OFFICES IN ISLAMABAD.',
      }}
    />
  )
}

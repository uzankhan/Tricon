import { createFileRoute } from '@tanstack/react-router'
import { ServiceAreaPage } from '@/components/seo-content'
import { pageHead } from '@/lib/brand'

export const Route = createFileRoute('/container-office-lahore')({
  head: () =>
    pageHead(
      'Container Offices in Lahore | Tricon Container Trading',
      'Discuss container offices, portable cabins and site office requirements in Lahore with Tricon. Transport feasibility and site access are confirmed per project.',
      '/container-office-lahore',
    ),
  component: LahoreContainerOffices,
})

function LahoreContainerOffices() {
  return (
    <ServiceAreaPage
      content={{
        city: 'Lahore',
        title: 'CONTAINER OFFICES FOR LAHORE PROJECTS.',
        intro:
          'Plan a container office or portable site cabin for a Lahore workplace, construction site or industrial project. Configuration depends on how the space will be used.',
        description:
          'Tricon Container Trading can discuss container office layouts, cabin dimensions, fittings and possible modifications for Lahore requirements. Share your project location and intended use to start planning.',
        locationNote:
          'For Lahore locations, including sites near Sundar Industrial Estate, provide the exact address, entry restrictions and unloading details. Transport options and site access must be checked before confirming delivery.',
        keywords: 'CONTAINER OFFICE PLANNING IN LAHORE.',
      }}
    />
  )
}

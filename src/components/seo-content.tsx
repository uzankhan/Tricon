import { Link } from '@tanstack/react-router'
const frequentlyAskedQuestions = [
  {
    question: 'How much does a portacabin cost in Pakistan?',
    answer:
      'The price depends on the cabin size, layout, materials, fittings, and delivery location. Share your requirements with Tricon to discuss a suitable configuration and quotation.',
  },
  {
    question: 'Do you deliver shipping containers to Lahore?',
    answer:
      'Delivery arrangements to Lahore can be discussed. Feasibility and cost depend on container size, project location, transport, and site access, so confirm these details with Tricon.',
  },
  {
    question: 'Can a container be modified into an office?',
    answer:
      'Office layouts and container modifications can be discussed based on your intended use, dimensions, fittings, and project requirements.',
  },
]

const serviceAreas = [
  {
    to: '/portacabin-karachi' as const,
    title: 'Portacabins in Karachi',
    description: 'Discuss Karachi site requirements, including access and delivery planning around Port Qasim.',
  },
  {
    to: '/container-office-lahore' as const,
    title: 'Container offices in Lahore',
    description: 'Plan container office requirements in Lahore and confirm transport and site access.',
  },
  {
    to: '/portable-cabin-islamabad' as const,
    title: 'Portable cabins in Islamabad',
    description: 'Discuss portable cabin configurations and delivery feasibility for Islamabad projects.',
  },
]

export function FrequentlyAskedQuestions() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: frequentlyAskedQuestions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <section className="section-space">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <div className="site-wrap">
        <p className="eyebrow mb-4 text-primary">Frequently asked questions</p>
        <h2 className="section-heading mb-8">CLEAR ANSWERS TO COMMON QUESTIONS.</h2>
        <div className="grid gap-4">
          {frequentlyAskedQuestions.map(({ question, answer }) => (
            <details key={question} className="border-b border-border py-4">
              <summary className="cursor-pointer text-xl font-semibold">{question}</summary>
              <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceAreaLinks() {
  return (
    <section className="section-space bg-muted">
      <div className="site-wrap">
        <p className="eyebrow mb-4 text-primary">Project locations</p>
        <h2 className="section-heading mb-8">EXPLORE OUR CITY SERVICE PAGES.</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <article key={area.to} className="border-t border-border pt-5">
              <h3 className="text-2xl">{area.title}</h3>
              <p className="my-3 text-sm leading-6 text-muted-foreground">{area.description}</p>
              <Link to={area.to} className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                View location details
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

type ServiceAreaPageContent = {
  city: string
  title: string
  description: string
  intro: string
  locationNote: string
  keywords: string
}

export function ServiceAreaPage({ content }: { content: ServiceAreaPageContent }) {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
        <div className="site-wrap">
          <p className="eyebrow mb-6 text-primary">Tricon Container Trading · {content.city}</p>
          <h1 className="page-title">{content.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-muted-foreground">{content.intro}</p>
        </div>
      </section>
      <section className="section-space">
        <div className="site-wrap grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="section-heading">{content.keywords}</h2>
            <p className="mt-5 leading-7 text-muted-foreground">{content.description}</p>
          </div>
          <div className="border-l-2 border-primary bg-muted p-6">
            <h2 className="text-2xl">Delivery and site access</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{content.locationNote}</p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Share your dimensions, intended use and exact site location with Tricon to discuss transport feasibility, access requirements and a quotation.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-12">
        <div className="site-wrap flex flex-wrap items-center justify-between gap-5">
          <p className="text-lg">Planning a project in {content.city}?</p>
          <Link to="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            Contact Tricon about your requirements
          </Link>
        </div>
      </section>
    </>
  )
}

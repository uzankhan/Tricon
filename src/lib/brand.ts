export const brand = {
  name: 'Tricon Container Trading',
  phone: '+92 333 1220694',
  whatsapp: '923331220694',
  email: 'uzankhan17@gmail.com',
  facebook: 'https://www.facebook.com/people/Tricon-Container-Trading/100063767394188/',
  logoPath: '/tricon-logo.png',
  streetAddress: 'PLOT NO 31/1, KEMARI AREA HASSAN TERMINAL, NEAR ZIA UDDIN HOSPITAL CLIFTON',
  address: 'PLOT NO 31/1, KEMARI AREA HASSAN TERMINAL, NEAR ZIA UDDIN HOSPITAL CLIFTON, Karachi, Pakistan',
  mapQuery: 'Hassan Terminal Kemari Karachi',
  siteUrl: 'https://tricon-portacabin.com',
  twitterHandle: '@TriconPK',
};

export const seoKeywords = [
  'porta cabin price in Pakistan',
  'container house Pakistan',
  'portacabin office',
  'site office cabins',
  'shipping container homes',
  'portable cabins in Karachi',
  'container office in Lahore',
  'portable cabins in Islamabad',
  'container homes in Dubai',
  '20ft container office',
  'portable security cabins',
  'container accommodation',
  'furnished office containers',
  'prefab homes Pakistan',
  'modular office cabin',
  'Tricon portacabin',
];

export function whatsappUrl(message = 'Hello Tricon, I would like to discuss a portacabin or container requirement.') {
  return `https://wa.me/923331220694?text=${encodeURIComponent(message)}`
}

export function pageHead(title: string, description: string, path: string) {
  const fullTitle = title.includes('Tricon') ? title : `${title} | Tricon`;
  const ogImage = `${brand.siteUrl}/og-image.jpg`;
  const canonicalUrl = `${brand.siteUrl}${path === '/' ? '/' : path}`;

  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { name: 'keywords', content: seoKeywords.join(', ') },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: 'Tricon' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Tricon' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: brand.twitterHandle },
      { name: 'twitter:domain', content: new URL(brand.siteUrl).hostname },
      { name: 'theme-color', content: '#0f172a' },
    ],
    links: [
      { rel: 'canonical', href: canonicalUrl },
      { rel: 'alternate', href: canonicalUrl, hreflang: 'en' },
      { rel: 'alternate', href: canonicalUrl, hreflang: 'en-PK' },
    ],
  };
}
export const brand = {
  name: 'Tricon',
  phone: '+92 333 1220694',
  facebook: 'https://www.facebook.com/profile.php?id=100063767394188',
}

export function whatsappUrl(message = 'Hello Tricon, I would like to discuss a portacabin or container requirement.') {
  return `https://wa.me/923331220694?text=${encodeURIComponent(message)}`
}

export function pageHead(title: string, description: string) {
  return { meta: [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }
}
## Website architecture
- Keep business identity, contact links, and page metadata helpers in `src/lib/brand.ts` so every page shares a single source of truth.
- Keep the product catalog in `src/lib/products.ts` and use shared collection rendering to keep product presentation consistent.
- Mount shared navigation and footer in the root layout, with separate public content routes for independently shareable pages.
- Enquiries prepare a WhatsApp message client-side; never imply an enquiry has been delivered before the visitor sends it in WhatsApp.
- Use generated imagery only as illustrative concepts, never as evidence of completed company projects.

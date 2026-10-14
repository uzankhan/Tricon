<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep business identity, contact links, and page metadata helpers in `src/lib/brand.ts` so every page shares a single source of truth.
- Keep the product catalog in `src/lib/products.ts` and use shared collection rendering to keep product presentation consistent.
- Mount shared navigation and footer in the root layout, with separate public content routes for independently shareable pages.
- Enquiries prepare a WhatsApp message client-side; never imply an enquiry has been delivered before the visitor sends it in WhatsApp.
- Use generated imagery only as illustrative concepts, never as evidence of completed company projects.

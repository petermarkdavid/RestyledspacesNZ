# RestyledspacesNZ

Restyled Spaces NZ — managed website and brand assets.

- **`website/`** — production app (TanStack Start, Vite, Tailwind). Run `npm install` and `npm run dev` from that folder.
- **`Assets/`** — source imagery and design references.

The live domain is configured in `website/src/lib/site.ts` (`https://restyledspaces.nz`).

## GitHub Pages

Pushes to `main` run [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which builds from `website/` with `VITE_BASE_PATH=/RestyledspacesNZ/`, then deploys `website/.output/public`.

In the repo **Settings → Pages**: set **Source** to **GitHub Actions** (not “Deploy from a branch”). The site URL will be `https://petermarkdavid.github.io/RestyledspacesNZ/`.

**Note:** The contact form’s `/api/contact` handler does not run on static Pages; use your production host for that, or wire the form to an external service.

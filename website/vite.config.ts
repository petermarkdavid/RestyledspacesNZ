import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

/** GitHub Pages project sites use a subpath; local dev uses `/`. Set in CI via `VITE_BASE_PATH`. */
const base = process.env.VITE_BASE_PATH ?? '/'

const config = defineConfig({
  base,
  plugins: [
    devtools(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      // Static HTML shell + prerender so `.output/public` can be served from GitHub Pages.
      spa: { enabled: true },
    }),
    viteReact(),
  ],
})

export default config

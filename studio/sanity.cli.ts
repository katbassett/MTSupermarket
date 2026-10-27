import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  studioHost: 'mtsupermarket',
  // Keep classic Vite builds so basePath `/studio` works behind the Vercel rewrite.
  // Auto-updates force basePath `/` and blank the Studio at /studio.
  deployment: {
    autoUpdates: false,
  },
})

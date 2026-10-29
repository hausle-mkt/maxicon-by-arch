import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Maxicon BY ARCH — Gestor de Conteúdo',

  // Substitua pelo seu Project ID obtido em sanity.io/manage
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'SEU_PROJECT_ID_AQUI',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      title: 'Conteúdo do Site',
    }),
    visionTool({
      title: 'Testador GROQ (Vision)',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})

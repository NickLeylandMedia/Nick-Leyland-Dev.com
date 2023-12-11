import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import schemaTypes from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Nick Leyland Dev',

  projectId: '6dwr9jgn',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})

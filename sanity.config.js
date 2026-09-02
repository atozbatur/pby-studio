import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './schemas'

export default defineConfig({
  name: 'pinkblackyellow-studio',
  title: 'PinkBlackYellow',

  // ← paste your Project ID from sanity.io/manage here
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('PinkBlackYellow Content')
          .items([
            // Singleton — Site Settings appears once at the top
            S.listItem()
              .title('⚙️  Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.listItem()
              .title('📝  Blog Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog Posts')),
            S.listItem()
              .title('🎬  Portfolio Items')
              .schemaType('portfolioItem')
              .child(S.documentTypeList('portfolioItem').title('Portfolio')),
            S.listItem()
              .title('📁  Featured Projects')
              .schemaType('project')
              .child(S.documentTypeList('project').title('Projects')),
            S.listItem()
              .title('👤  Team Members')
              .schemaType('person')
              .child(S.documentTypeList('person').title('Team')),
          ]),
    }),
    visionTool(), // lets you run GROQ queries directly — useful for testing
  ],

  schema: { types: schemas },
})

export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'tag_en',
      title: 'Tag — English',
      description: 'Format + year label. e.g. "Short Film, 2025"',
      type: 'string',
    },
    {
      name: 'tag_tr',
      title: 'Tag — Turkish',
      description: 'e.g. "Kısa Film, 2025"',
      type: 'string',
    },
    {
      name: 'desc_en',
      title: 'Description — English',
      type: 'text',
      rows: 4,
    },
    {
      name: 'desc_tr',
      title: 'Description — Turkish',
      type: 'text',
      rows: 4,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Display Order',
      description: 'Lower numbers appear first.',
      type: 'number',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag_en', media: 'image' },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}

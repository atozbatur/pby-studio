export const person = {
  name: 'person',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'role_en',
      title: 'Role — English',
      description: 'e.g. "Filmmaker & Director"',
      type: 'string',
    },
    {
      name: 'role_tr',
      title: 'Role — Turkish',
      description: 'e.g. "Yönetmen & Film Yapımcısı"',
      type: 'string',
    },
    {
      name: 'disciplines',
      title: 'Discipline Badge',
      description: 'Shown as a coloured label on the photo card.',
      type: 'string',
      options: {
        list: [
          { title: 'Film', value: 'Film' },
          { title: 'Art / Sanat', value: 'Art' },
          { title: 'Psychology / Psikoloji', value: 'Psychology' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'bio_en',
      title: 'Bio — English',
      type: 'text',
      rows: 4,
    },
    {
      name: 'bio_tr',
      title: 'Bio — Turkish',
      type: 'text',
      rows: 4,
    },
    {
      name: 'photo',
      title: 'Photo',
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
    select: { title: 'name', subtitle: 'role_en', media: 'photo' },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}

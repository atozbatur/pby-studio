export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title_en',
      title: 'Title — English',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'title_tr',
      title: 'Title — Turkish',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title_en', maxLength: 96 },
      validation: (R) => R.required(),
    },
    {
      name: 'kind',
      title: 'Kind',
      description: 'Dispatch = the email newsletter. Note = a written essay.',
      type: 'string',
      options: {
        list: [
          { title: 'Dispatch (newsletter)', value: 'dispatch' },
          { title: 'Note (essay)', value: 'note' },
        ],
        layout: 'radio',
      },
      initialValue: 'note',
      validation: (R) => R.required(),
    },
    {
      name: 'readingMinutes',
      title: 'Reading time (minutes)',
      type: 'number',
      initialValue: 5,
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (R) => R.required(),
    },
    {
      name: 'excerpt_en',
      title: 'Excerpt — English',
      description: 'Short summary shown on the homepage and archive page.',
      type: 'text',
      rows: 3,
    },
    {
      name: 'excerpt_tr',
      title: 'Excerpt — Turkish',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body_en',
      title: 'Full Post — English',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'body_tr',
      title: 'Full Post — Turkish',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
  ],
  preview: {
    select: { title: 'title_en', subtitle: 'publishedAt', kind: 'kind' },
    prepare: function (v) {
      return {
        title: v.title,
        subtitle: (v.kind === 'dispatch' ? '✉ Dispatch' : '✎ Note') + ' — ' + (v.subtitle || 'no date'),
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
}

export const portfolioItem = {
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Film', value: 'film' },
          { title: 'Art', value: 'art' },
          { title: 'Psychology', value: 'psychology' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
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
      description: 'Lower numbers appear first in the grid.',
      type: 'number',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'year', media: 'image' },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}

export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'linkCategory'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}

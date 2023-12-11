export default {
  name: 'extrasPage',
  title: 'Extras Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
    },
    {
      name: 'builtWith',
      title: 'Site Built With',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'techtool'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

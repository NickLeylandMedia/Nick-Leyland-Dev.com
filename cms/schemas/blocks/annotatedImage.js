export default {
  name: 'annotatedImage',
  title: 'Annotated Image',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
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
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    },
  ],
}

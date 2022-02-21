export default {
  name: "techtool",
  title: "Tech/Tool",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured?",
      type: "boolean",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};

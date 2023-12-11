export default {
  name: "postTag",
  title: "Post Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};

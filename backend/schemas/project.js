export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "url",
      title: "Live Project URL",
      type: "string",
    },
    {
      name: "github",
      title: "Github Link",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured?",
      type: "boolean",
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "fulldesc",
      title: "Full Project Description",
      type: "blockContent",
    },
    {
      name: "tools",
      title: "Tools",

      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "techtool" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};

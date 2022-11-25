export default {
  name: "offercard",
  title: "Offer Card",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'FAQ Title',
      description: "What is the title of your offer?",
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: "describe exactly what you have to offer.",
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

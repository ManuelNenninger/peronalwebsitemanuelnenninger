export default {
  name: "faqrow",
  title: "FAQ Row",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'FAQ Title',
      description: "What is the question you want to answer?",
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: "What is the answer to the question.",
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

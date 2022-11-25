export default {
  name: 'impressum',
  title: 'Impressum',
  type: 'document',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: "Here you can insert the entire imprint text.",
    },
  ],
  //Zeigt, wie es in Sanity angezeigt wird
    preview: {
      select: {
        title: 'body',
      }
    }}

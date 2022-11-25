export default {
  name: 'blocksite',
  title: 'Block Site',
  type: 'document',
  fields: [
    {
      name: 'blockNote',
      type: 'note',
      options: {
        headline: 'What is there for here exactly?',
        message: `This page is meant for imprint, shipping, privacy policy etc. This section takes at least one full page. You can give a title and write a lot of text. But it is still not a blog site!`
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "What is your title for this site? E.g Impressum, Versand, FAQ...",
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
     title: 'Section Settings',
     name: 'sectionsettings',
     type: 'sectionsettings',
   },
  ],
//Zeigt, wie es in Sanity angezeigt wird
  preview: {
    select: {
      title: 'title',
    }
  }
}

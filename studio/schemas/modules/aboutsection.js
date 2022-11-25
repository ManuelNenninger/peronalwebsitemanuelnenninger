export default {
  name: 'aboutsection',
  title: 'About me Section',
  type: 'document',
  fields: [
    {
      name: 'aboutTitle',
      title: 'About Me Title',
      type: 'string',
      description: "What is your about me title?",
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
      title: 'aboutTitle',
    }
  }
}

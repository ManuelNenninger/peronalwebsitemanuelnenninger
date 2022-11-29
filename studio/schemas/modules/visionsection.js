export default {
  name: 'visionsection',
  title: 'Vision Section',
  type: 'object',
  fields: [
    {
      name: 'sectiontitle',
      title: 'Vision Title',
      type: 'string',
      description: "What is your Vision title?",
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
      title: 'sectiontitle',
    }
  }
}

export default {
  name: 'offersection',
  title: 'Offer Section',
  type: 'object',
  fields: [
    {
      name: 'sectiontitle',
      title: 'Offer Section Title',
      type: 'string',
      description: "What is your Section title?",
    },
    {
      name: 'offercardbuilder',
      title: 'Offer´s',
      type: 'array',
      description: "Here you can create new offer cards.",
      of: [{ type: 'offercard' }],
      validation: Rule => Rule.required().min(2)
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

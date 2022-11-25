export default {
  name: 'processsection',
  title: 'Process Section',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Process Section Title',
      type: 'string',
      description: "What is your Process Section title?",
    },
    {
      name: 'processbuilder',
      title: 'Process Step',
      type: 'array',
      description: "Here you can create new process steps.",
      of: [{ type: 'processstep' }],
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
      title: 'sectionTitle',
    }
  }
}

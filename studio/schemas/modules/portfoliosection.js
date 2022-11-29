export default {
  name: 'portfoliosection',
  title: 'Portfolio Section',
  type: 'object',
  fields: [
    {
      name: 'sectiontitle',
      title: 'Portfolio title',
      type: 'string',
      description: "What is your portfolio title?",
    },
    {
      name: 'portfoliobuilder',
      title: 'portfolio card',
      type: 'array',
      description: "Here you can create new portfolio cards.",
      of: [{ type: 'portfoliocard' }],
    },
  ],
//Zeigt, wie es in Sanity angezeigt wird
  preview: {
    select: {
      title: 'sectiontitle',
    }
  }
}

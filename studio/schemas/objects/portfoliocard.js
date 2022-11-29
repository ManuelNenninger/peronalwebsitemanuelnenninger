export default {
  title: 'Portfolio Card',
  name: 'portfoliocard',
  type: 'object',
  fields: [
    {
      title: 'Portfolio Card Title',
      name: 'title',
      type: 'string',
      description:
        'The Portfolio Card shows your work. What is the title of this card? The name of your artwork, photo shoot or website.',
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      description: "What is the URL for your work? (e.g /blog; https://www.example.com)",
    },
    {
      title: 'Main Color',
      name: 'color',
      type: 'string',
      description:
        'Define a hex code as color. Alternatively rgb code is also ok.',
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      description:
        'Define the describtion. Make it short and pregnant.',
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}

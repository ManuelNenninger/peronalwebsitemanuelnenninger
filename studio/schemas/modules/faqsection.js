export default {
  name: 'faqsection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    {
      name: 'faqsectiontitle',
      title: 'FAQ Section Title',
      type: 'string',
      description: "What is your FAQ Section title?",
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: "If you don't add a picture, the question will go all over the screen.  Create a visual complement to the section with an image.",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'faqbuilder',
      title: 'FAQ´s',
      type: 'array',
      description: "Here you can create new FAQ´s. steps.",
      of: [{ type: 'faqrow' }],
      validation: Rule => Rule.required().min(1).max(10)
    },
    {
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      description: 'On which page should the questions be and on which the picture?',
      options: {
        list: [
          { title: 'On the left side the picture. On the right side the FAQ´s', value: 'leftPicture' },
          { title: 'On the left side the FAQ´s. On the right side the Picture', value: 'rightPicture' },
        ]
      },
      validation: Rule => Rule.required(),
      initialValue: 'rightPicture',
    },
  ],
//Zeigt, wie es in Sanity angezeigt wird
  preview: {
    select: {
      title: 'sectionTitle',
    }
  }
}

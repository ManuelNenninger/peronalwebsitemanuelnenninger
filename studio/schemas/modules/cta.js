export default {
  name: "cta",
  title: "Call to Action",
  type: "document",
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
      description: "What is the text of the Bbtton?",
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      description: "What is the URL for the button? (e.g /preis; https://www.example.com)",
    },
    {
      name: 'kind',
      type: 'string',
      title: 'Kind of button',
      description: "Is this a primary button, secondary button or another type?",
      options: {
        list: [
          { title: 'primary', value: 'primary' },
          { title: 'secondary', value: 'secondary' },
          { title: 'subscribe to newsletter', value: 'subscribe' },
        ]
      },
      validation: Rule => Rule.required(),
      initialValue: 'primary',
    }
  ],
  preview: {
    select: {
      title: 'linkText',
      description: 'kind'
    }
  }
}

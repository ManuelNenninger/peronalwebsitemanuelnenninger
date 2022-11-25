export default {
  title: 'Footer Link',
  name: 'footerlink',
  type: 'object',
  fields: [
    {
      name: 'linkname',
      type: 'string',
      title: 'Link name',
      description: "What is the Name for the link? (e.g /preis; https://www.example.com)",
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      description: "What is the URL for the link? (e.g /preis; https://www.example.com)",
    },
  ]
}

export default {
  title: 'Footer Row',
  name: 'footerrow',
  type: 'object',
  fields: [
    {
      title: 'Row Title',
      name: 'metaTitle',
      type: 'string',
      description: 'For Example: Services',
      validation: Rule =>
        Rule.max(20).warning('Longer titles may be unattraktiv')
    },
    {
      title: 'Link Builder',
      name: 'linkbuilder',
      type: 'array',
      of: [{type: 'footerlink'}],
      description: 'Here you can add the Links',
    },
  ]
}

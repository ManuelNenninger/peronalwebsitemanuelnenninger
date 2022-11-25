
export default {
  title: 'Agreement Card',
  name: 'agreementcard',
  type: 'object',
  fields: [
    {
      title: 'Icon Name',
      name: 'iconname',
      type: 'string',
      description:
        'Define the icon name. Choose one from Material UI Icons.',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description:
        'Define the title of the agreement. Make it short and pregnant.',
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

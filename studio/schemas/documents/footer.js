export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'brandname',
      title: 'Brand Name',
      type: 'string',
      description: 'Brandname displayed in the footer.',
    },
    {
      name: 'footerrowbuilder',
      title: 'Footer Theme Title',
      type: 'array',
      of: [{type: 'footerrow'}],
      description: 'Create a series with links. e.g. Services with the link Shipping and FAQ.',
    },
    {
     title: 'Social connections',
     name: 'footersocial',
     type: 'footersocial',
   }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

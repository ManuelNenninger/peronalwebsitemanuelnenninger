export default {
  name: 'herosection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'blockContent',
      description: "What is your action title?",
    },
    {
      name: 'heroDescribtion',
      type: 'text',
      title: 'Hero Describtion',
      description: "What is your action describtion?",

    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'primaryCallToAction',
      title: 'Primary - Call to action',
      type: 'reference',
      to: {type: 'cta'},
    },
    {
      name: 'secondaryCallToAction',
      title: 'Secondary - Call to action',
      type: 'reference',
      to: {type: 'cta'},
    },
  ],
//Zeigt, wie es in Sanity angezeigt wird
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'heroDescribtion',
      media: 'mainImage'
    }
  }
}

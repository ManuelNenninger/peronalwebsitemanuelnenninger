// page.js
export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      description: '(required) Click on generate after choosing a Page Title',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'pageBuilder',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'herosection' },
        {
          title: 'Reusable Section',
          type: 'reference',
          to: [{ type: 'section' }]
        }
        ]
    },
    {
     title: 'SEO / Share Settings',
     name: 'seo',
     type: 'seo',
   }
  ]
}

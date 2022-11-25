import React from 'react'
import { Badge } from '@sanity/ui'


export default {
  title: 'Reusable Section',
  name: 'section',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description:
        'Provide a name to reference this section. For internal use only.',
      validation: Rule => Rule.required()
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'aboutsection' },
        { type: 'grid' },
        { type: 'processsection' },
        { type: 'faqsection' },
        { type: 'offersection' },
        { type: 'blocksite' },
        // { type: 'marquee' },
        // { type: 'dividerPhoto' }
      ],
      validation: Rule =>
        Rule.length(1).error('You can only have one piece of content')
    },
  ],
  preview: {
    select: {
      title: 'name',
      // subtitle: "content._type"
    },
  }
}

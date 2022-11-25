import React from 'react'
import { Avatar } from '@sanity/ui'


export default {
  title: 'Column',
  name: 'gridColumn',
  type: 'object',
  fields: [
    {
      title: 'Column Sizes',
      name: 'sizes',
      type: 'array',
      of: [{ type: 'gridSize' }],
      description:
        'Define the display size of this column for different screen widths',
      validation: Rule => Rule.required().min(1)
    },
    {
      title: 'Content Blocks',
      name: 'blocks',
      type: 'array',
      description: 'The content that exists inside this column. At this time, just the agreement card is availible.',
      of: [
        { type: 'agreementcard' },
        // { type: 'accordions' },
        // { type: 'productCard' }
      ]
    }
  ],
  preview: {
    select: {
      sizes: 'sizes.0',
      blocks: 'blocks'
    },
  }
}

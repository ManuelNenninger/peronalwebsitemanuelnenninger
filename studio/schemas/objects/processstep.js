export default {
  name: "processstep",
  title: "Process Step",
  type: "object",
  fields: [
    {
      name: 'mainTitle',
      type: 'string',
      title: 'Process Step Title',
      description: "What is the process steps name? Just one word is better.",
    },
    {
      name: 'describtion',
      title: 'Describtion',
      type: 'string',
      description: "What is the process description? Keep it short and pregnant.",
    },
    {
      name: 'mainImage',
      title: 'Main image for process step',
      type: 'image',
      description: "Which picture / illustration best describes the Step?",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'iconname',
      title: 'Iconname',
      type: 'string',
      description: "Choose an icon name from Material Ui Icons: https://mui.com/material-ui/material-icons/",
    },
  ],
  preview: {
    select: {
      title: 'mainTitle',
      media: 'mainImage',
    },
  },
}

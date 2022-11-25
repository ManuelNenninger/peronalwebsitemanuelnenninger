export default {
  title: 'Section Settings',
  name: 'sectionsettings',
  type: 'object',
  options: {
    collapsible: true
  },
  fields: [
    {
      title: 'Background Color',
      name: 'bgcolor',
      type: 'string',
      description: 'Which background color should be used',
      options: {
        list: [
          { title: 'Primary color', value: "none" },
          { title: 'Secondary Color', value: "secondaryBackgroundColor" },
        ]
      },
      initialValue: "Primary color"
    },
    {
      title: 'Upper / Lower Wave - Section devider',
      name: 'deviderwave',
      type: 'string',
      description: 'Should an upper or lower wave be used as section separator?',
      options: {
        list: [
          { title: 'No Wave', value: "none" },
          { title: 'Upper Wave', value: "upperWave" },
          { title: 'Lower Wave', value: "lowerWave" },
        ]
      },
      initialValue: "No Wave"
    },
    {
      title: 'Upper / Lower Distanc between sections.',
      name: 'sectiondistance',
      type: 'string',
      description: 'Select the distance (the pudding) between your sections.',
      options: {
        list: [
          { title: 'No distance', value: "none" },
          { title: 'Normal distance top', value: "upperWave" },
          { title: 'Normal distance bottom', value: "lowerWave" },
          { title: 'Big distance top', value: "upperWave" },
          { title: 'Big distance bottom', value: "lowerWave" },
          { title: 'Section should take up whole screen', value: "fullViewHeight" },
        ]
      },
      initialValue: "No distance"
    },
  ]
}

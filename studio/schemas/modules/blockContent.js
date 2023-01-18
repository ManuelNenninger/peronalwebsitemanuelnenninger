/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;

const highlightRender = (props) => (
  <span
    style={{ backgroundColor: "rgb(29, 58, 36)", color: "rgb(222, 222, 210)" }}
  >
    {props.children}
  </span>
);

const gradientTextIcon = () => <span style={{ fontWeight: "bold" }}>G</span>;

const gradientTextRender = (props) => (
  <span
    style={{
      backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
      backgroundClip: "text",
      textFillColor: "transparent",
    }}
  >
    {props.children}
  </span>
);
const animatedTextIcon = () => (
  <span style={{ fontWeight: "bold" }}>Animate</span>
);

const animatedTextRender = (props) => (
  <span
    style={{
      color: "rgb(222, 222, 210)",
    }}
  >
    {props.children}
  </span>
);

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "body1", value: "body1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "Custom Heading", value: "customHeading" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
          {
            title: "Gradient Text",
            value: "gradientText",
            blockEditor: {
              icon: gradientTextIcon,
              render: gradientTextRender,
            },
          },
          {
            title: "Animated Text",
            value: "animatedText",
            blockEditor: {
              icon: animatedTextIcon,
              render: animatedTextRender,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      fields: [
        {
          type: "text",
          name: "alt",
          title: "describtion",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          title: "Image Position",
          name: "position",
          type: "string",
          options: {
            list: [
              { title: "Center", value: "center" },
              { title: "Left", value: "left" },
              { title: "Right", value: "right" },
            ],
            layout: "radio",
            isHighlighted: true,
          },
        },
      ],
      options: { hotspot: true },
    },
  ],
};

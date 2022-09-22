import React from 'react';
import Heading from './Typography/Heading';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'titleXxl',
          'titleXl',
          'titleL',
          'titleM',
          'titleS',
          'textXxl',
          'textXl',
          'textL',
          'textM',
          'textS',
        ],
      },
    },
  },
};

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingText = Template.bind({});

HeadingText.args = {
  label: '이건 제목이에요.',
  size: 'titleXxl',
  color: 'grey800',
};
export const BodyText = Template.bind({});

BodyText.args = {
  label: '이건 본문이에요.',
  size: 'textXxl',
  color: 'grey800',
};

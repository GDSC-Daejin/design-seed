import React from 'react';
import Heading from './Typography/Heading';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Text',
  component: Heading,
};

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const HeadingText = Template.bind({});

HeadingText.args = {
  label: '이건 제목이에요.',
  size: 'h1',
  color: 'grey800',
};
export const BodyText = Template.bind({});

BodyText.args = {
  label: '이건 본문이에요.',
  size: 'body1',
  color: 'grey800',
};
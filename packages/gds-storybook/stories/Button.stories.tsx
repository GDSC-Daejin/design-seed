import React from 'react';
import Button from './Button/Button';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
};

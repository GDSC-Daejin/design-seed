import React from 'react';
import { Footer } from '../../styled-components-theme';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    disable: false,
    pages: [
      {
        text: 'Tech Blog',
        link: 'link',
      },
      {
        text: 'Design System',
        link: 'link',
      },
      {
        text: 'About Us',
        link: 'link',
      },
    ],
  },
};

const Template: Story<typeof Footer> = (args) => <Footer {...args} />;
export const Default = Template.bind({});

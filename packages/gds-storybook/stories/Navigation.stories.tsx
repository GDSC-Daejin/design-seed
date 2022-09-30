import React from 'react';
import { Navigation } from '../../styled-components-theme';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    menuPosition: {
      control: {
        type: 'select',
        options: ['left', 'right', 'left-mobile-only', 'right-mobile-only'],
      },
    },
    pointColor: {
      control: {
        type: 'select',
        options: [
          'blue900',
          'blue600',
          'green900',
          'green600',
          'yellow900',
          'yellow600',
          'red900',
          'red600',
        ],
      },
    },
  },
};

const Template: Story<typeof Navigation> = (args) => <Navigation {...args} />;
export const Default = Template.bind({});
Default.args = {
  routes: [
    {
      route: '/foundation',
      title: 'Foundation',
    },
    {
      route: '/component',
      title: 'Component',
    },
    {
      route: '/frameWork',
      title: 'FrameWork',
    },
  ],
  title: 'Design System',
  // pointColor: 'blue600',
  themeButtonActive: true,
  menuPosition: 'left',
  isMenuOpen: false,
  pointColor: 'blue600',
  sideMenu: <div>test</div>,
  menuToggle: () => {},
  menuHandler: () => {},
  rightElement: <div>test</div>,
  customLogo: null,
};

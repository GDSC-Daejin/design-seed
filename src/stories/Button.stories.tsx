import React from 'react';
import SeedButton from './Button/Button';

export default {
  title: 'Components/Button',
  component: SeedButton,
};

export const button = () => {
  return <SeedButton>BUTTON</SeedButton>;
};

button.story = {
  name: 'Default',
};

export const primaryButton = () => {
  return <SeedButton>PRIMARY</SeedButton>;
};

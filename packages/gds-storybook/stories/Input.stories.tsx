import {
  TextArea as Area,
  FileInput as File,
  TextInput as Text,
} from '@gdsc-dju/styled-components';
import { Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Input',
  component: Text,
};

const TextInputTemplate: Story<typeof Text> = (args) => <Text {...args} />;
const TextAreaTemplate: Story<typeof Area> = (args) => <Area {...args} />;
const FileTemplate: Story<typeof File> = (args) => <File {...args} />;

export const TextInput = TextInputTemplate.bind({});
TextInput.args = {
  placeholder: 'placeholder',
  disabled: false,
};

export const TextArea = TextAreaTemplate.bind({});
TextArea.args = {
  placeholder: 'placeholder',
  disabled: false,
};

export const FileInput = FileTemplate.bind({});

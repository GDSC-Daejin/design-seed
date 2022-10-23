import React from 'react';

import {
  TextArea as Area,
  FileInput as File,
  Input as Text,
} from '@gdsc-dju/styled-components';

// eslint-disable-next-line import/named
import { Story } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Text,
};
// @ts-ignore
const TextInputTemplate: Story<typeof Text> = (args) => <Text {...args} />;
// @ts-ignore
const TextAreaTemplate: Story<typeof Area> = (args) => <Area {...args} />;
// @ts-ignore
const FileTemplate: Story<typeof File> = (args) => <File {...args} />;

export const TextInput = TextInputTemplate.bind({});

TextInput.args = {
  // @ts-ignore
  placeholder: 'placeholder',
  disabled: false,
};

export const TextArea = TextAreaTemplate.bind({});
TextArea.args = {
  // @ts-ignore
  placeholder: 'placeholder',
  disabled: false,
};

export const FileInput = FileTemplate.bind({});

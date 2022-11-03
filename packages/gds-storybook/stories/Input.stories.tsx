import React from 'react';

import { Story } from '@storybook/react';

import {
  TextArea as Area,
  FileInput as File,
  Input as Text,
  TagInput as Tag,
} from '../../styled-components/src';

// eslint-disable-next-line import/named

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
// @ts-ignore
const TagTemplate: Story<typeof File> = (args) => <Tag {...args} />;

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

export const TagInput = TagTemplate.bind({});

TagInput.args = {
  // @ts-ignore
  placeholder: 'placeholder',
  borderless: true,
  onChange: (tags: string[]) => {
    console.log(tags);
  },
};

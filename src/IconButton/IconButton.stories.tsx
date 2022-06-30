import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconButton } from './IconButton';
import { IIconButton } from './IIconButton.d';
import Star from '../assets/icons/star.svg';

export default {
  title: 'IconButton',
  component: IconButton,
} as Meta<typeof IconButton>;

const Template: Story<IIconButton> = args => (
  <IconButton {...args}>
    <Star />
  </IconButton>
);

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  type: 'button',
  variant: 'primary',
  shape: 'filled',
  disabled: false,
};

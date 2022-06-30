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

export const FilledPrimary = Template.bind({});
FilledPrimary.args = {
  size: 'md',
  type: 'button',
  variant: 'primary',
  shape: 'filled',
  disabled: false,
};

export const FilledSecondary = Template.bind({});
FilledSecondary.args = {
  size: 'md',
  type: 'button',
  variant: 'secondary',
  shape: 'filled',
  disabled: false,
};

export const FilledNeutral = Template.bind({});
FilledNeutral.args = {
  size: 'md',
  type: 'button',
  variant: 'neutral',
  shape: 'filled',
  disabled: false,
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
  size: 'md',
  type: 'button',
  variant: 'primary',
  shape: 'ghost',
  disabled: false,
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  size: 'md',
  type: 'button',
  variant: 'secondary',
  shape: 'ghost',
  disabled: false,
};

export const GhostNeutral = Template.bind({});
GhostNeutral.args = {
  size: 'md',
  type: 'button',
  variant: 'neutral',
  shape: 'ghost',
  disabled: false,
};

export const BlankPrimary = Template.bind({});
BlankPrimary.args = {
  size: 'md',
  type: 'button',
  variant: 'primary',
  shape: 'blank',
  disabled: false,
};

export const BlankSecondary = Template.bind({});
BlankSecondary.args = {
  size: 'md',
  type: 'button',
  variant: 'secondary',
  shape: 'blank',
  disabled: false,
};

export const BlankNeutral = Template.bind({});
BlankNeutral.args = {
  size: 'md',
  type: 'button',
  variant: 'neutral',
  shape: 'blank',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'md',
  type: 'button',
  variant: 'primary',
  shape: 'filled',
  disabled: true,
};

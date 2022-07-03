import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconButton } from '.';
import { IIconButton } from './IIconButton.d';
import Star from '../../assets/icons/star.svg';

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
  color: 'primary',
  variant: 'filled',
  disabled: false,
};

export const FilledSecondary = Template.bind({});
FilledSecondary.args = {
  size: 'md',
  type: 'button',
  color: 'secondary',
  variant: 'filled',
  disabled: false,
};

export const FilledNeutral = Template.bind({});
FilledNeutral.args = {
  size: 'md',
  type: 'button',
  color: 'neutral',
  variant: 'filled',
  disabled: false,
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
  size: 'md',
  type: 'button',
  color: 'primary',
  variant: 'ghost',
  disabled: false,
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  size: 'md',
  type: 'button',
  color: 'secondary',
  variant: 'ghost',
  disabled: false,
};

export const GhostNeutral = Template.bind({});
GhostNeutral.args = {
  size: 'md',
  type: 'button',
  color: 'neutral',
  variant: 'ghost',
  disabled: false,
};

export const BlankPrimary = Template.bind({});
BlankPrimary.args = {
  size: 'md',
  type: 'button',
  color: 'primary',
  variant: 'text',
  disabled: false,
};

export const BlankSecondary = Template.bind({});
BlankSecondary.args = {
  size: 'md',
  type: 'button',
  color: 'secondary',
  variant: 'text',
  disabled: false,
};

export const BlankNeutral = Template.bind({});
BlankNeutral.args = {
  size: 'md',
  type: 'button',
  color: 'neutral',
  variant: 'text',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'md',
  type: 'button',
  color: 'primary',
  variant: 'filled',
  disabled: true,
};

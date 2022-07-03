import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from '.';
import { ButtonProps } from './types';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
/**Test The comment Here */
export const FilledPrimary = Template.bind({});
FilledPrimary.args = {
  children: 'Filled-primary',
  color: 'primary',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const FilledSecondary = Template.bind({});
FilledSecondary.args = {
  children: 'Filled-Secondary',
  color: 'secondary',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const FilledNeutral = Template.bind({});
FilledNeutral.args = {
  children: 'Filled-Neutral',
  color: 'neutral',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
  children: 'Chost-Primary',
  color: 'primary',
  variant: 'ghost',
  size: 'large',
  disabled: false,
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  children: 'Chost-Secondary',
  color: 'secondary',
  variant: 'ghost',
  size: 'large',
  disabled: false,
};

export const GhostNeutral = Template.bind({});
GhostNeutral.args = {
  children: 'Chost-Neutral',
  color: 'neutral',
  variant: 'ghost',
  size: 'large',
  disabled: false,
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  children: 'Text-Primary',
  color: 'primary',
  variant: 'text',
  size: 'large',
  disabled: false,
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  children: 'Text-Secondary',
  color: 'secondary',
  variant: 'text',
  size: 'large',
  disabled: false,
};

export const TextNeutral = Template.bind({});
TextNeutral.args = {
  children: 'Text-Neutral',
  color: 'neutral',
  variant: 'text',
  size: 'large',
  disabled: false,
};

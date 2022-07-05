import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from '.';
import { IButtonProps } from './IButton.d';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const Template: Story<IButtonProps> = args => (
  <Button {...args}>click me</Button>
);

export const Default = Template.bind({});
Default.args = {};
/**Test The comment Here */
export const FilledPrimary = Template.bind({});
FilledPrimary.args = {
  color: 'primary',
  variant: 'filled',
  size: 'lg',
  disabled: false,
};

export const FilledSecondary = Template.bind({});
FilledSecondary.args = {
  color: 'secondary',
  variant: 'filled',
  size: 'lg',
  disabled: false,
};

export const FilledNeutral = Template.bind({});
FilledNeutral.args = {
  color: 'neutral',
  variant: 'filled',
  size: 'lg',
  disabled: false,
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
  color: 'primary',
  variant: 'ghost',
  size: 'lg',
  disabled: false,
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  color: 'secondary',
  variant: 'ghost',
  size: 'lg',
  disabled: false,
};

export const GhostNeutral = Template.bind({});
GhostNeutral.args = {
  color: 'neutral',
  variant: 'ghost',
  size: 'lg',
  disabled: false,
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  color: 'primary',
  variant: 'text',
  size: 'lg',
  disabled: false,
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  color: 'secondary',
  variant: 'text',
  size: 'lg',
  disabled: false,
};

export const TextNeutral = Template.bind({});
TextNeutral.args = {
  color: 'neutral',
  variant: 'text',
  size: 'lg',
  disabled: false,
};

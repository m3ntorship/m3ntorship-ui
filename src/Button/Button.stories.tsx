import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from './Button';
import { ButtonProps } from './types';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  content: 'button Comp',
  color: 'primary',
  variant: 'filled',
  size: 'large',
  disabled: false,
};
/**Test The comment Here */
export const FilledPrimary = Template.bind({});
FilledPrimary.args = {
  content: 'Filled-primary',
  color: 'primary',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const FilledSecondary = Template.bind({});
FilledSecondary.args = {
  content: 'Filled-Secondary',
  color: 'secondary',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const FilledNeutral = Template.bind({});
FilledNeutral.args = {
  content: 'Filled-Neutral',
  color: 'neutral',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
  content: 'Chost-Primary',
  color: 'primary',
  variant: 'ghost',
  size: 'large',
  disabled: false,
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  content: 'Chost-Secondary',
  color: 'secondary',
  variant: 'ghost',
  size: 'large',
  disabled: false,
};

export const GhostNeutral = Template.bind({});
GhostNeutral.args = {
  content: 'Chost-Neutral',
  color: 'neutral',
  variant: 'ghost',
  size: 'large',
  disabled: false,
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  content: 'Text-Primary',
  color: 'primary',
  variant: 'text',
  size: 'large',
  disabled: false,
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  content: 'Text-Secondary',
  color: 'secondary',
  variant: 'text',
  size: 'large',
  disabled: false,
};

export const TextNeutral = Template.bind({});
TextNeutral.args = {
  content: 'Text-Neutral',
  color: 'neutral',
  variant: 'text',
  size: 'large',
  disabled: false,
};

import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button component',
  component: Button,
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  content: 'Filled Variant',
  color: 'primary',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  content: 'primary',
  color: 'primary',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: 'Secondary',
  color: 'secondary',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

export const Neutral = Template.bind({});
Neutral.args = {
  content: 'Neutral',
  color: 'neutral',
  variant: 'filled',
  size: 'large',
  disabled: false,
};

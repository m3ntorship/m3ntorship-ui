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
  content: 'Filled Type',
  color: 'primary',
  variant: 'filled',
  size: 'large',
};

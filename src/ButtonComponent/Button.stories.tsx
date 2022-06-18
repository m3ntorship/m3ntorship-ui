import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button component',
  component: Button,
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { content: 'Primary One', type: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { content: 'Secondary One', type: 'secondary' };

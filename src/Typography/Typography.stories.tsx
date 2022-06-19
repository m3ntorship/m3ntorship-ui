import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Typography } from './Typography';
import { TypographyProps } from './Typography.types';

export default {
  title: 'Typography',
  component: Typography,
} as Meta<typeof Typography>;

const Template: Story<TypographyProps> = args => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'h1',
  children: 'Lorem ipsum dolor sit amet.',
  className: 'bg-red-200',
};

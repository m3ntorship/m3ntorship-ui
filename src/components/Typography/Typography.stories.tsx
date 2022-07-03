import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Typography } from '.';
import { TypographyProps } from './Typography.types';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    component: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Typography>;

const Template: Story<TypographyProps> = args => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet.',
};

export const WithVariant = Template.bind({});
WithVariant.args = {
  children: 'Lorem ipsum dolor sit amet.',
  variant: 'hero',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  children: 'Lorem ipsum dolor sit amet.',
  className: 'bg-red-200',
};

export const WithAlignment = Template.bind({});
WithAlignment.args = {
  children: 'Lorem ipsum dolor sit amet.',
  align: 'center',
};

export const WithComponent = Template.bind({});
WithComponent.args = {
  children: 'Lorem ipsum dolor sit amet.',
  component: 'div',
};

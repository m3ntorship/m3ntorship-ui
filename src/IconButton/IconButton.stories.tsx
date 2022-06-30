import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseIcon } from './BaseIcon';
import { IBaseIcon } from './IIcon.d';
import Star from '../assets/icons/star.svg';

export default {
  title: 'BaseIcon',
  component: BaseIcon,
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof BaseIcon>;

const Template: Story<IBaseIcon> = args => (
  <BaseIcon {...args}>
    <Star />
  </BaseIcon>
);

export const Default = Template.bind({});
Default.args = {
  size: 'md',
};

// export const Small = Template.bind({});
// Small.args = {
//   href: 'https://www.google.com/',
//   children: 'Link',
//   size: 'small',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   href: 'https://www.google.com/',
//   children: 'Link',
//   disabled: true,
// };

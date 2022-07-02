import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Link } from '.';
import { LinkProps } from './Link.types';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    size: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Link>;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://www.google.com/',
  children: 'Link',
};

export const Small = Template.bind({});
Small.args = {
  href: 'https://www.google.com/',
  children: 'Link',
  size: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: 'https://www.google.com/',
  children: 'Link',
  disabled: true,
};

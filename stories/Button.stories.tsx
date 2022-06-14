import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../src/Button';
import { ButtonProps } from '../src/types/buttons';

const meta: Meta = {
  title: 'Buttons',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  tailwindUtilities: [
    'bg-gray-500',
    'hover:bg-gray-700',
    'font-bold',
    'text-white',
    'text-red-500',
  ],
  size: 'md',
  children: 'Button',
};

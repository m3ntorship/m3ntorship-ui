import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ExComponent } from './ExComponent';

export default {
  title: 'example component',
  component: ExComponent,
} as Meta<typeof ExComponent>;

const Template: Story<typeof ExComponent> = function (args) {
  return <ExComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = { styles: '', content: 'Defalt' };

export const Primary = Template.bind({});
Primary.args = { styles: '', content: 'Primary', type: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { styles: '', content: 'Primary', type: 'secondary' };

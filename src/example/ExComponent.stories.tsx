import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ExComponent } from './ExComponent';

export default {
  title: 'example component',
  component: ExComponent,

} as Meta<typeof ExComponent>

const Template : Story<typeof ExComponent> = (args) => <ExComponent startCount={10} {...args} />

export const Default = Template.bind({})
Default.args = {styles: "bg-gray-500", content : "Defalt"}

export const Primary = Template.bind({})
Primary.args = {styles: "", content: "Primary", type: "primary"}

export const Secondary = Template.bind({})
Secondary.args = {styles: "", content: "Primary", type: "secondary"}

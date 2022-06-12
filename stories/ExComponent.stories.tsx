import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ExComponent } from '../src/example/ExComponent';

export default {
  title: 'example component',
  component: ExComponent,

} as Meta<typeof ExComponent>

const Template : Story<typeof ExComponent> = (args) => <ExComponent {...args} />

export const Default = Template.bind({})
Default.args = {styles: "bg-gray-500 p-4", content : "Defalt"}

export const Primary = Template.bind({})
Primary.args = {styles: "", content: "Primary", type: "primary"}

// export const Primary: Story<typeof ExComponent> = () => <ExComponent type="primary" styles="bg-test p-4" content='Here is the content' />
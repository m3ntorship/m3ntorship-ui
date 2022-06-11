import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ExComponent } from '../src/example/ExComponent';

export default {
  title: 'example component',
  component: ExComponent,

} as Meta<typeof ExComponent>


export const Primary: Story<typeof ExComponent> = () => <ExComponent type="primary" styles="bg-test p-4" content='Here is the content' />
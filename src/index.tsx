import React, { FC, HTMLAttributes, ReactChild } from 'react';
import Button from './Button';
import { ExComponent } from './example/ExComponent';
export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className={`mt-10 bg-yellow-500 p-10 rounded-md`}>
      {children || `the snozzberries taste like snozzberries`}
    </div>
  );
};

export {Button, ExComponent}
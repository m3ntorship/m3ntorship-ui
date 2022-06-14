import React, { FC, HTMLAttributes, ReactElement } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactElement;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return (
    <div className="mt-10 bg-yellow-500 p-10 rounded-md">
      {children || `the snozzberries taste like snozzberries`}
    </div>
  );
};

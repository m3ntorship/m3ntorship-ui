import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Typography.module.css';

import { TypographyProps } from './Typography.types';

/** The Typography component makes it easy to apply a default set of font weights and sizes in the application. */
const Typography: FC<TypographyProps> = ({
  className,
  variant = 'body1',
  align = 'left',
  children,
  component,
  ...props
}) => {
  const Tag = component || 'p';
  return (
    <Tag
      className={classNames(
        'font-inter text-dgrey-800',
        `text-${align}`, //we added the text alignment classes to "safelist" key in the tailwind config file to make sure that Tailwind generates them.
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export { Typography };

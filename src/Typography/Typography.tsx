import classNames from 'classnames';
import React, { ElementType, FC } from 'react';

import styles from './Typography.module.css';

import { TypographyProps } from './Typography.types';

const TYPOGRAPHY_VARIANTS: { [variant: string]: ElementType } = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'p',
  disclaimer: 'p',
};

/** The Typography component makes it easy to apply a default set of font weights and sizes in the application. */
const Typography: FC<TypographyProps> = ({
  className,
  variant = 'body1',
  style,
  align = 'left',
  children,
  component,
  ...props
}) => {
  const Tag = ((): ElementType => {
    if (component) return component;
    return TYPOGRAPHY_VARIANTS[variant] || 'p';
  })();
  return (
    <Tag
      className={classNames(
        'font-inter text-dgrey-800',
        styles[variant],
        className
      )}
      style={{ textAlign: align, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export { Typography };

import classNames from 'classnames';
import React, { FC } from 'react';

import { LinkProps } from './Link.types';

/** The Link component is an element for navigation. */
const Link: FC<LinkProps> = ({
  className,
  size,
  children,
  disabled,
  href,
  ...props
}) => {
  return (
    <a
      className={classNames(
        'font-inter text-primary-text font-regular px-xs tracking-normal hover:bg-action-background-hover visited:font-semi-bold rounded-sm text-base leading-24',
        {
          'text-14 leading-20': size === 'small',
          'text-disabled-text hover:bg-background-surface pointer-events-none':
            disabled,
        },
        className
      )}
      href={disabled || !href ? '/' : href}
      {...props}
    >
      {children}
    </a>
  );
};

export { Link };

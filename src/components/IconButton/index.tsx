import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './IconButton.module.css';

import { BaseIcon } from './BaseIcon';
import { IIconButton } from './IIconButton.d';

const IconButton: FC<IIconButton> = ({
  size = 'md',
  children,
  type = 'button',
  buttonClasses,
  color = 'primary',
  variant = 'filled',
  disabled = false,
  clicked = (): null => null,
}) => {
  const iconButtonClasses = classNames(
    `group ${styles['icon-btn']} `,
    styles[`icon-btn-${variant}-${color}`],
    {
      'p-sm': size === 'lg',
      'p-xs': size === 'md',
      'p-xxs': size === 'sm',
    },
    buttonClasses
  );

  const svgClasses = classNames({
    'fill-action-disabled': disabled,
    'fill-white': variant === 'filled',
    'fill-primary group-hover:fill-primary-hover group-active:fill-ba-900':
      (variant === 'ghost' || variant === 'blank') &&
      color === 'primary' &&
      !disabled,
    'fill-secondary group-hover:fill-secondary-hover group-active:fill-bb-900':
      (variant === 'ghost' || variant === 'blank') &&
      color === 'secondary' &&
      !disabled,
    'fill-neutral group-hover:fill-dgrey-800 group-active:fill-dgrey-900':
      (variant === 'ghost' || variant === 'blank') &&
      color === 'neutral' &&
      !disabled,
  });

  return (
    <button
      type={type}
      className={iconButtonClasses}
      disabled={disabled}
      onClick={clicked}
    >
      <BaseIcon svgClasses={svgClasses} size={size}>
        {children}
      </BaseIcon>
    </button>
  );
};

export { IconButton };

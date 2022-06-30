import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './IconButton.module.css';

import { BaseIcon } from './BaseIcon';
import { IIconButton } from './IIconButton.d';

const IconButton: FC<IIconButton> = ({
  size = 'md',
  children,
  type = 'button',
  className,
  variant = 'primary',
  shape = 'filled',
  disabled = false,
  clicked = (): void => null,
}) => {
  const iconButtonClasses = classNames(
    styles['icon-btn'],
    {
      'p-sm': size === 'lg',
      'p-xs': size === 'md',
      'p-xxs': size === 'sm',
    },
    {
      [styles['icon-btn-filled-primary']]:
        variant === 'primary' && shape === 'filled',
      [styles['icon-btn-filled-secondary']]:
        variant === 'secondary' && shape === 'filled',
      [styles['icon-btn-filled-neutral']]:
        variant === 'neutral' && shape === 'filled',
    },
    {
      [styles['icon-btn-ghost-primary']]:
        variant === 'primary' && shape === 'ghost',
      [styles['icon-btn-ghost-secondary']]:
        variant === 'secondary' && shape === 'ghost',
      [styles['icon-btn-ghost-neutral']]:
        variant === 'neutral' && shape === 'ghost',
    },
    {
      [styles['icon-btn-blank-primary']]:
        variant === 'primary' && shape === 'blank',
      [styles['icon-btn-blank-secondary']]:
        variant === 'secondary' && shape === 'blank',
      [styles['icon-btn-blank-neutral']]:
        variant === 'neutral' && shape === 'blank',
    },
    className
  );

  return (
    <button
      type={type}
      className={iconButtonClasses}
      disabled={disabled}
      onClick={clicked}
    >
      <BaseIcon size={size}>{children}</BaseIcon>
    </button>
  );
};

export { IconButton };

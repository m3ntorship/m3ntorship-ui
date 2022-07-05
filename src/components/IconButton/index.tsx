import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './IconButton.module.css';

import { BaseIcon } from './BaseIcon';
import { Button } from '../Button';
import { IButtonProps } from '../Button/IButton.d';

const IconButton: FC<IButtonProps> = ({
  size = 'md',
  children,
  type = 'button',
  className,
  color = 'primary',
  variant = 'filled',
  disabled = false,
  onClick = (): null => null,
}) => {
  const iconButtonClasses = classNames(
    `group ${styles['icon-btn']}`,
    styles[`size-${size}`],
    className
  );

  const svgClasses = classNames({
    'fill-action-disabled': disabled,
    'fill-white': variant === 'filled' && !disabled,
    'fill-primary group-hover:fill-primary-hover group-active:fill-ba-900':
      (variant === 'ghost' || variant === 'text') &&
      color === 'primary' &&
      !disabled,
    'fill-secondary group-hover:fill-secondary-hover group-active:fill-bb-900':
      (variant === 'ghost' || variant === 'text') &&
      color === 'secondary' &&
      !disabled,
    'fill-neutral group-hover:fill-dgrey-800 group-active:fill-dgrey-900':
      (variant === 'ghost' || variant === 'text') &&
      color === 'neutral' &&
      !disabled,
  });

  return (
    <Button
      type={type}
      className={iconButtonClasses}
      disabled={disabled}
      onClick={onClick}
      size={size}
      color={color}
      variant={variant}
    >
      <BaseIcon svgClasses={svgClasses} size={size}>
        {children}
      </BaseIcon>
    </Button>
  );
};

export { IconButton };

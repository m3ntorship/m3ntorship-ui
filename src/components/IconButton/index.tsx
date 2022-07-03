import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './IconButton.module.css';

import { BaseIcon } from './BaseIcon';
import { IIconButton } from './IIconButton.d';
import { Button } from '../Button';

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
    `group ${styles['icon-btn']}`,
    styles[`size-${size}`],
    buttonClasses
  );

  const svgClasses = classNames({
    'fill-action-disabled': disabled,
    'fill-white': variant === 'filled',
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
      classes={iconButtonClasses}
      disabled={disabled}
      clicked={clicked}
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

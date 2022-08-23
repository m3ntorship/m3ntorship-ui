import classnames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.css';

import { IButtonProps } from './IButton.d';

/**Button Component uses to implement all your button styles like (variant, size, color, etc...) all you have to do is create your button styles here and copy the component structure to use it in your website */
const Button: FC<IButtonProps> = ({
  children = 'Default',
  variant = 'filled',
  color = 'primary',
  size = 'md',
  disabled = false,
  onClick = (): null => null,
  type = 'button',
  className,
}) => {
  const buttonClasses = classnames(
    styles.shared,
    styles[`variant-${variant}-shared`],
    styles[`size-${size}`],
    styles[`variant-${variant}-${color}`],
    className
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export { Button };

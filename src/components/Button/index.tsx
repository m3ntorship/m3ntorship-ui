import classnames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.css';

import { ButtonProps } from './types';

/**Button Component uses to implement all your button styles like (variant, size, color, etc...) all you have to do is create your button styles here and copy the component structure to use it in your website */
const Button: FC<ButtonProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
  size = 'md',
  disabled = false,
  clicked = (): null => null,
  type = 'button',
  classes,
}) => {
  const buttonClasses = classnames(
    styles.shared,
    styles[`variant-${variant}-shared`],
    styles[`size-${size}`],
    styles[`variant-${variant}-${color}`],
    classes
  );

  return (
    <button
      onClick={clicked}
      disabled={disabled}
      type={type}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export { Button };

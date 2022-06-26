import classnames from 'classnames';
import React from 'react';

import styles from './Button.module.css';

import { ButtonProps } from './types';

/**Button Component uses to implement all your button styles like (variant, size, color, etc...) all you have to do is create your button styles here and copy the component structure to use it in your website */
const Button = ({
  content,
  variant,
  color,
  size,
  disabled,
  clickFun,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={clickFun}
      disabled={disabled}
      className={classnames(
        styles.shared,
        styles[`variant-${variant}-shared`],
        styles[`size-${size}`],
        styles[`variant-${variant}-${color}`]
      )}
    >
      {content}
    </button>
  );
};

export { Button };

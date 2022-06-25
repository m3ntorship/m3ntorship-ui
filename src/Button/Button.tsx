import classnames from 'classnames';
import React from 'react';

import styles from './Button.module.css';

import { ButtonProps } from './types';

// https://github.com/m3ntorship/pickify-frontend/blob/develop/modules/shared/components/atoms/Button/Button.tsx

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

import classnames from 'classnames';
import React from 'react';

import csStyle from './Button.module.css';

import { ButtonProps } from './types';

// https://github.com/m3ntorship/pickify-frontend/blob/develop/modules/shared/components/atoms/Button/Button.tsx

const styles = {
  shared: {
    classes: 'rounded-med',
    sizes: {
      large: 'py-med px-lrg text-20',
      medium: 'py-xs px-med text-base',
      small: 'py-xs px-sm text-14',
    },
  },
  variants: {
    filled: {
      shared: 'disabled:text-disabled-text disabled:bg-neutral-fade',
      primary: 'bg-primary hover:bg-primary-hover active:bg-ba-900 text-white',
      secondary:
        'bg-secondary hover:bg-secondary-hover active:bg-bb-900 text-white ',
      neutral: 'bg-neutral hover:bg-dgrey-700 active:bg-dgrey-900 text-white',
    },
    ghost: {
      shared:
        'disabled:text-disabled-text disabled:border-disabled-text disabled:hover:bg-transparent border-thin active:border-thick',
      primary:
        'border-primary-border hover:bg-primary-ghost-hover hover:text-primary-hover active:text-ba-900 text-primary',
      secondary:
        'border-secondary-border hover:bg-secondary-ghost-hover hover:text-secondary-hover active:text-bb-900 text-secondary ',
      neutral:
        'border-dgrey-900 hover:bg-neutral-fade hover:text-dgrey-800 active:text-dgrey-900  text-neutral ',
    },
    text: {
      shared: 'disabled:text-disabled-text disabled:hover:bg-transparent',
      primary:
        'hover:bg-primary-ghost-hover hover:text-primary-hover active:text-ba-900 text-primary ',
      secondary:
        'hover:bg-secondary-ghost-hover hover:text-secondary-hover active:text-bb-900 text-secondary ',
      neutral:
        'hover:bg-neutral-fade hover:text-dgrey-800 active:text-dgrey-900 text-neutral',
    },
  },
};

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
        csStyle.test,
        styles.shared.classes,
        styles.variants[variant].shared,
        styles.shared.sizes[size],
        styles.variants[variant][color]
      )}
    >
      {content}
    </button>
  );
};

export { Button };

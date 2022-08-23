import classnames from 'classnames';
import React, { FC } from 'react';

import styles from './Checkbox.module.css';

import { ICheckboxProps } from './ICheckbox.d';

const Checkbox: FC<ICheckboxProps> = ({
  id,
  variant = 'primary',
  label,
  indeterminate,
  disabled,
  ...props
}) => {
  const labelClasses = classnames(styles['label'], {
    [styles['label-disabled']]: disabled,
  });

  const checkboxClasses = classnames(styles['checkbox'], {
    [styles['checkbox-primary']]: variant === 'primary',
    [styles['checkbox-secondary']]: variant === 'secondary',
    [styles['checkbox-primary-indeterminate']]:
      indeterminate && variant === 'primary',
    [styles['checkbox-secondary-indeterminate']]:
      indeterminate && variant === 'secondary',
    [styles['checkbox-indeterminate']]: indeterminate,
    [styles['checkbox-disabled']]: disabled,
  });
  return (
    <div className="inline-flex items-center">
      <input
        type="checkbox"
        id={id}
        className={checkboxClasses}
        disabled={disabled}
        {...props}
      />
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
    </div>
  );
};

export { Checkbox };

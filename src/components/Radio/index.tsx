import classnames from 'classnames';
import React, { FC } from 'react';

import styles from './Radio.module.css';

import { IRadioProps } from './IRadio.d';

const Radio: FC<IRadioProps> = ({ id, label, disabled, ...props }) => {
  const radioClasses = classnames(styles['radio'], {
    [styles['disabled-radio']]: disabled,
  });

  const labelClasses = classnames(styles['label'], {
    [styles['disabled-label']]: disabled,
  });

  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        className={radioClasses}
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

export { Radio };

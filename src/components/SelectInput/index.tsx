import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './SelectInput.module.css';

import { ISelectInputProps } from './ISelectInput.d';

const SelectInput: FC<ISelectInputProps> = ({
  id,
  label,
  placeholder,
  options,
  disabled = false,
  error = false,
  errorMessage = '',
  ...props
}) => {
  const selectInputClasses = classNames(styles['select'], {
    [styles['error']]: error,
  });

  const customSelectClasses = classNames(styles['custom-select'], {
    [styles['disabled']]: disabled,
  });

  const labelClasses = classNames(styles['label'], {
    [styles['disabled']]: disabled,
  });

  return (
    <>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={customSelectClasses}>
        <select id={id} className={selectInputClasses} {...props}>
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {options.map(({ label, value }) => {
            return (
              <option value={value} key={value}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
      {errorMessage && (
        <span className={styles['error-message']}>{errorMessage}</span>
      )}
    </>
  );
};

export { SelectInput };

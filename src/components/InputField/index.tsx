import classnames from 'classnames';
import React, { FC } from 'react';

import styles from './InputField.module.css';

import { IInputFieldProps } from './IInputField.d';
import { BaseIcon } from '../IconButton/BaseIcon';
import { Typography } from '../Typography';

const InputField: FC<IInputFieldProps> = ({
  label,
  className,
  id,
  prefix,
  suffix,
  icon,
  error,
  errorMessage,
  disabled,
  multiline,
  ...props
}) => {
  const inputClasses = classnames(styles['input-field'], {
    [styles['error']]: error,
    [styles['disabled']]: disabled,
    [styles['prefix-padding']]: prefix,
    [styles['default-padding']]: !prefix,
    className,
  });
  const inputProps = { ...props } as React.InputHTMLAttributes<
    HTMLInputElement
  >;
  const textareaProps = { ...props } as React.TextareaHTMLAttributes<
    HTMLTextAreaElement
  >;

  const textareaClasses = classnames(inputClasses, styles['textarea']);

  const labelClasses = classnames(styles['label'], {
    [styles['disabled']]: disabled,
  });

  return (
    <div className="flex flex-col relative">
      {label ? (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      ) : null}
      <div className="w-full relative">
        {prefix ? (
          <BaseIcon
            size="sm"
            svgClasses={` ${styles['icon']}  ${styles['prefix']}`}
          >
            {icon}
          </BaseIcon>
        ) : null}
        {suffix ? (
          <BaseIcon
            size="sm"
            svgClasses={`${styles['icon']}  ${styles['suffix']}`}
          >
            {icon}
          </BaseIcon>
        ) : null}
        {multiline ? (
          <textarea
            id={id}
            className={textareaClasses}
            rows={3}
            {...textareaProps}
          />
        ) : (
          <input id={id} className={inputClasses} {...inputProps} />
        )}
      </div>
      {errorMessage && (
        <Typography variant="body1" className={styles['error-message']}>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export { InputField };

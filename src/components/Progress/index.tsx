import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Progress.module.css';

import { IProgressProps } from './IProgress.d';

const Progress: FC<IProgressProps> = ({
  variant = 'primary',
  label,
  labelPlacement = 'left',
  maxValue,
  value,
}) => {
  const outerClasses = classNames(styles['outer'], {
    [styles['outer-primary']]: variant === 'primary',
    [styles['outer-secondary']]: variant === 'secondary',
  });

  const innerClasses = classNames(styles['inner'], {
    [styles['inner-primary']]: variant === 'primary',
    [styles['inner-secondary']]: variant === 'secondary',
  });

  const labelClasses = classNames(styles['label'], {
    [styles['label-left']]: labelPlacement === 'left',
    [styles['label-right']]: labelPlacement === 'right',
  });
  const innerValue =
    ((value / maxValue) * 100 <= 100 ? (value / maxValue) * 100 : 100) + '%';

  const labelContent = label ? label : value + '/' + maxValue;
  return (
    <div className="flex items-center">
      {labelPlacement === 'left' ? (
        <span className={labelClasses}>{labelContent}</span>
      ) : null}
      <div className={outerClasses}>
        <div className={innerClasses} style={{ width: innerValue }}></div>
      </div>
      {labelPlacement === 'right' ? (
        <span className={labelClasses}>{labelContent}</span>
      ) : null}
    </div>
  );
};

export { Progress };

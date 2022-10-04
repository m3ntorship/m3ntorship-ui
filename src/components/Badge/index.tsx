import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Badge.module.css';

import { IBadgeProps } from './IBadge.d';

const Badge: FC<IBadgeProps> = ({
  text = '',
  color = 'primary',
  className,
}) => {
  const BadgeClasses = classNames(
    `${styles['shared']} ${styles[`variant-${color}`]}`,
    {
      [styles['empty-state']]: !text,
      [styles['filled-state']]: Boolean(text),
    },
    className
  );
  const capitalizedFirstLetter = text?.charAt(0).toUpperCase();
  const label = `${capitalizedFirstLetter}${text?.slice(1)}`;

  return (
    <span data-testid="badge" className={BadgeClasses}>
      {label}
    </span>
  );
};

export { Badge };

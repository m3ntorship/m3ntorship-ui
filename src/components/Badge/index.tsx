import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Badge.module.css';

import { IBadgeProps } from './IBadge.d';

const Badge: FC<IBadgeProps> = ({
  children = '',
  color = 'primary',
  className,
}) => {
  const BadgeClasses = classNames(
    `${styles['shared']} ${styles[`variant-${color}`]}`,
    {
      [styles['empty-state']]: !children,
      [styles['filled-state']]: Boolean(children),
    },
    className
  );
  const capitalizedFirstLetter = children?.charAt(0).toUpperCase();
  const label = `${capitalizedFirstLetter}${children?.slice(1)}`;

  return <label className={BadgeClasses}>{label}</label>;
};

export { Badge };

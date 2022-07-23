import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Badge.module.css';

import { IBadgeProps } from './IBadge.d';
const Badge: FC<IBadgeProps> = ({
  children = 'Badge',
  color = 'primary',
  className,
}) => {
  const BadgeClasses = classNames(
    styles.shared,
    styles[`variant-${color}`],
    className
  );
  return <div className={BadgeClasses}>{children}</div>;
};

export { Badge };

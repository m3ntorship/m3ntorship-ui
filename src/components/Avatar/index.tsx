import classnames from 'classnames';
import React, { FC, useState } from 'react';

import styles from './Avatar.module.css';

import { IAvatarProps } from './IAvatar.d';

const Avatar: FC<IAvatarProps> = ({
  alt,
  src,
  size = 'sm',
  className,
  children,
}) => {
  const [error, setError] = useState<boolean>(false);
  const textClasses = classnames(
    styles.shared,
    styles[`size-${size}`],
    styles['variant-text-shared'],
    styles[`variant-text-${size}`],
    className
  );

  const imageClasses = classnames(
    styles.shared,
    styles[`size-${size}`],
    className
  );

  return error || !src ? (
    <p className={textClasses}>
      {children ? children : alt ? alt.charAt(0) : 'A'}
    </p>
  ) : (
    <img
      src={src}
      onError={(): void => setError(true)}
      alt={alt}
      className={imageClasses}
    />
  );
};

export { Avatar };

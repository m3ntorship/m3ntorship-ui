import classnames from 'classnames';
import React, { FC } from 'react';

import styles from './Avatar.module.css';

import { IAvatarProps } from './IAvatar.d';

const Avatar: FC<IAvatarProps> = ({
  variant = 'text',
  text = 'ww',
  size = 'sm',
  imageURL,
  className,
}) => {
  const avatarClasses = classnames(
    styles.shared,
    styles[`size-${size}`],
    styles[`variant-${variant}-shared`],
    styles[`variant-${variant}-${size}`],
    className
  );
  return variant === 'text' ? (
    <p className={avatarClasses}>{text}</p>
  ) : (
    <img className={avatarClasses} src={imageURL} alt="avatar" />
  );
};

export { Avatar };

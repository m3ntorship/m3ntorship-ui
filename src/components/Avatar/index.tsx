import classnames from 'classnames';
import React, { FC } from 'react';

import styles from './Avatar.module.css';

import { IAvatarProps } from './IAvatar.d';

const Avatar: FC<IAvatarProps> = ({
  variant = 'text',
  imageURL = 'https://via.placeholder.com/100',
  text = 'ww',
  size = 'sm',
  className,
}) => {
  const imgPlaceholder = {
    sm: 'https://via.placeholder.com/32',
    md: 'https://via.placeholder.com/40',
    lg: 'https://via.placeholder.com/48',
  };
  const avatarClasses = classnames(
    styles.shared,
    styles[`size-${size}`],
    styles[`variant-${variant}-shared`],
    styles[`variant-${variant}-${size}`],
    className
  );

  return variant === 'text' ? (
    <span className={avatarClasses}>{text}</span>
  ) : (
    <img
      className={avatarClasses}
      src={imageURL || imgPlaceholder[`${size}`]}
      alt="avatar"
    />
  );
};

export { Avatar };

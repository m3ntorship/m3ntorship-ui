import classNames from 'classnames';
import React, { ElementType, FC } from 'react';

import {
  BaseTypographyProps,
  SHARED_CLASSNAMES,
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from './Typography.types';

const BaseTypography: FC<BaseTypographyProps> = ({
  as: Tag,
  children,
  ...props
}) => <Tag {...props}>{children}</Tag>;

const Typography: FC<TypographyProps> = ({
  className,
  variant = 'body1',
  style,
  align,
  children,
  ...props
}) => {
  return (
    <BaseTypography
      as={TYPOGRAPHY_VARIANTS[variant].variantName as ElementType}
      className={classNames(
        SHARED_CLASSNAMES,
        TYPOGRAPHY_VARIANTS[variant].variantClassName,
        className
      )}
      style={{ textAlign: align, ...style }}
      {...props}
    >
      {children}
    </BaseTypography>
  );
};

export { Typography };

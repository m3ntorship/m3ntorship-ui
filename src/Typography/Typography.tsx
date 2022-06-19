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
  variant,
  style,
  align,
  children,
  ...props
}) => {
  const isValidVariant = variant && TYPOGRAPHY_VARIANTS[variant];

  return (
    <BaseTypography
      as={
        isValidVariant
          ? (TYPOGRAPHY_VARIANTS[variant].variantName as ElementType)
          : 'p'
      }
      className={classNames(
        SHARED_CLASSNAMES,
        isValidVariant
          ? TYPOGRAPHY_VARIANTS[variant].variantClassName
          : TYPOGRAPHY_VARIANTS.body1.variantClassName,
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

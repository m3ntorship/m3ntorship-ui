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
  return variant && TYPOGRAPHY_VARIANTS[variant] ? (
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
  ) : (
    <BaseTypography
      as="p"
      className={classNames(
        SHARED_CLASSNAMES,
        TYPOGRAPHY_VARIANTS.body1.variantClassName,
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

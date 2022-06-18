import className from 'classnames';
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

const Typography: FC<TypographyProps> = (props) => {
  return props.variant && TYPOGRAPHY_VARIANTS[props.variant] ? (
    <BaseTypography
      as={TYPOGRAPHY_VARIANTS[props.variant].variantName as ElementType}
      className={className(
        SHARED_CLASSNAMES,
        TYPOGRAPHY_VARIANTS[props.variant].variantClassName
      )}
      {...props}
    >
      {props.children}
    </BaseTypography>
  ) : (
    <BaseTypography
      as="p"
      className={className(
        SHARED_CLASSNAMES,
        TYPOGRAPHY_VARIANTS.body1.variantClassName
      )}
      {...props}
    >
      {props.children}
    </BaseTypography>
  );
};

export { Typography };

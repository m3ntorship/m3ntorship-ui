import conditionalProperties from 'classnames';
import React, { FC } from 'react';

import { IBaseIcon } from './IIconButton.d';

const BaseIcon: FC<IBaseIcon> = ({ size, children, svgClasses }) => {
  const baseIconSizes = conditionalProperties({
    '32': size === 'lg',
    '24': size === 'md',
    '20': size === 'sm',
  });

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      width: baseIconSizes,
      height: baseIconSizes,
      className: svgClasses,
    });
  }

  return null;
};

export { BaseIcon };

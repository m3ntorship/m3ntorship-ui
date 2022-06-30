import conditionalProperties from 'classnames';
import React, { FC } from 'react';

import { IBaseIcon } from './IIconButton.d';

const BaseIcon: FC<IBaseIcon> = ({ size, children, fillColor }) => {
  const baseIconSizes = conditionalProperties({
    '32': size === 'lg',
    '24': size === 'md',
    '20': size === 'sm',
  });

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      width: baseIconSizes,
      height: baseIconSizes,
      fill: fillColor,
    });
  }

  return null;
};

export { BaseIcon };

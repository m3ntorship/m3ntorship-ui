import conditionalProperties from 'classnames';
import React, { FC, ReactElement } from 'react';

import { IBaseIcon } from './IIcon.d';

const BaseIcon: FC<IBaseIcon> = ({ size, children }): ReactElement => {
  const baseIconSizes = conditionalProperties({
    '32': size === 'lg',
    '24': size === 'md',
    '20': size === 'sm',
  });

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      width: baseIconSizes,
      height: baseIconSizes,
    });
  }

  return <>children</>;
};

export { BaseIcon };

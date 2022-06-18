import cn from 'classnames';
import React from 'react';

import { ButtonProps } from './types';

const Button = ({ content }: ButtonProps): JSX.Element => {
  return (
    <div>
      <button className={cn(`py-med px-lrg rounded-med`)}>{content}</button>
    </div>
  );
};

export { Button };

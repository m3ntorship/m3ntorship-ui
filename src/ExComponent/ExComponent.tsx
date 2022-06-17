import cn from 'classnames';
import React from 'react';

import { ExTypes } from './types';

const ExComponent = ({ content, styles, type }: ExTypes): JSX.Element => {
  return (
    <div
      className={cn(styles, 'p-4 bg-green-200', {
        'bg-success text-white': type === 'primary',
        'bg-error text-black': type === 'secondary',
      })}
    >
      this is the content you have typed {content}
    </div>
  );
};

export { ExComponent };

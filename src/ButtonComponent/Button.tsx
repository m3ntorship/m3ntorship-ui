import classnames from 'classnames';
import React from 'react';

import { ButtonProps } from './types';

const Button = ({
  content,
  variant,
  color,
  size,
}: ButtonProps): JSX.Element => {
  if (variant === 'filled') {
    return (
      <button
        className={classnames('rounded-med', {
          // handle the sizes
          ' py-med px-lrg text-20 ': size === 'large',
          ' py-xs px-med text-base': size === 'medium',
          ' py-xs px-sm text-14': size === 'small',

          // handle the color
          'bg-primary hover:bg-primary-hover text-white ': color === 'primary',
          'bg-secondary hover:bg-secondary-hover text-white ':
            color === 'secondary',
          'bg-neutral hover:bg-neutral-hover text-white ': color === 'neutral',
        })}
      >
        {content}
      </button>
    );
  } else {
    return <button>Test</button>;
  }
};

export { Button };

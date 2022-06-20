import classnames from 'classnames';
import React from 'react';

import { ButtonProps } from './types';

// https://github.com/m3ntorship/pickify-frontend/blob/develop/modules/shared/components/atoms/Button/Button.tsx

const Button = ({
  content,
  variant,
  color,
  size,
}: ButtonProps): JSX.Element => {
  if (variant === 'filled') {
    return (
      <BasedButton
        content={content}
        size={size}
        spicialClasses={classnames('rounded-med', {
          // handle the color
          'bg-primary hover:bg-primary-hover active:bg-primary text-white ':
            color === 'primary',
          'bg-secondary hover:bg-secondary-hover text-white ':
            color === 'secondary',
          'bg-neutral hover:bg-neutral-hover text-white ': color === 'neutral',
        })}
      />
    );
  } else {
    return <button>Test</button>;
  }
};

export { Button };

const BasedButton = ({
  content,
  spicialClasses,
  size,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classnames('rounded-med', spicialClasses, {
        // handle the sizes
        ' py-med px-lrg text-20 ': size === 'large',
        ' py-xs px-med text-base': size === 'medium',
        ' py-xs px-sm text-14': size === 'small',
      })}
    >
      {content}
    </button>
  );
};

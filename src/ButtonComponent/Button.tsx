import classnames from 'classnames';
import React from 'react';

import { ButtonProps } from './types';

// https://github.com/m3ntorship/pickify-frontend/blob/develop/modules/shared/components/atoms/Button/Button.tsx

const Button = ({
  content,
  variant,
  color,
  size,
  disabled,
}: ButtonProps): JSX.Element => {
  if (variant === 'filled') {
    return (
      <BasedButton
        content={content}
        size={size}
        disabled={disabled}
        spicialClasses={classnames(
          'disabled:text-disabled-text disabled:bg-action-background-disabled',
          {
            // handle the color
            'bg-primary hover:bg-primary-hover active:bg-ba-900 text-white ':
              color === 'primary',
            'bg-secondary hover:bg-secondary-hover active:bg-bb-900 text-white ':
              color === 'secondary',
            'bg-neutral hover:bg-dgrey-700 active:bg-dgrey-900 text-white ':
              color === 'neutral',
          }
        )}
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
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button
      disabled={disabled}
      className={classnames('rounded-med ', spicialClasses, {
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

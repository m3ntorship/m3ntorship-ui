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
  clickFun,
}: ButtonProps): JSX.Element => {
  if (variant === 'filled') {
    return (
      <BasedButton
        content={content}
        size={size}
        disabled={disabled}
        clickFun={clickFun}
        spicialClasses={classnames(
          'disabled:text-disabled-text disabled:bg-neutral-fade',
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
  } else if (variant === 'ghost') {
    return (
      <BasedButton
        content={content}
        size={size}
        disabled={disabled}
        clickFun={clickFun}
        spicialClasses={classnames(
          'disabled:text-disabled-text disabled:border-disabled-text disabled:hover:bg-transparent border-thin active:border-thick',
          {
            // handle the color
            ' border-primary-border hover:bg-primary-ghost-hover hover:text-primary-hover active:text-ba-900 text-primary ':
              color === 'primary',
            'border-secondary-border hover:bg-secondary-ghost-hover hover:text-secondary-hover active:text-bb-900 text-secondary ':
              color === 'secondary',
            'border-dgrey-900 hover:bg-neutral-fade hover:text-dgrey-800 active:text-dgrey-900  text-neutral ':
              color === 'neutral',
          }
        )}
      />
    );
  } else if (variant === 'text') {
    return (
      <BasedButton
        content={content}
        size={size}
        disabled={disabled}
        clickFun={clickFun}
        spicialClasses={classnames(
          'disabled:text-disabled-text disabled:hover:bg-transparent',
          {
            // handle the color
            'hover:bg-primary-ghost-hover hover:text-primary-hover active:text-ba-900 text-primary ':
              color === 'primary',
            'hover:bg-secondary-ghost-hover hover:text-secondary-hover active:text-bb-900 text-secondary ':
              color === 'secondary',
            'hover:bg-neutral-fade hover:text-dgrey-800 active:text-dgrey-900 text-neutral ':
              color === 'neutral',
          }
        )}
      />
    );
  } else {
    return <BasedButton clickFun={clickFun} />;
  }
};

export { Button };

const BasedButton = ({
  content,
  spicialClasses,
  size,
  disabled,
  clickFun,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={clickFun}
      disabled={disabled}
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

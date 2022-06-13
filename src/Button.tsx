import React, { FC } from 'react';
import { ButtonProps } from './types/buttons';

const Button: FC<ButtonProps> = ({
  tailwindUtilities,
  children,
  size,
  ...props
}) => {
  return (
    <button
      className={`${props.className}
      ${tailwindUtilities?.join(' ')} 
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

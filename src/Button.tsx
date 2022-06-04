import React, { FC } from 'react';
import { ButtonProps } from './types/buttons';

const Button: FC<ButtonProps> = ({
  tailwindUtilities = [
    'bg-gray-500',
    'hover:bg-gray-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
  ],
  children,
  ...props
}) => {
  return (
    <button
      className={`${tailwindUtilities?.join(' ')} ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

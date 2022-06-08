import React, { FC } from 'react';
import { ButtonProps } from './types/buttons';

const Button: FC<ButtonProps> = ({
  tailwindUtilities = [
    'bg-test',
    'hover:bg-gray-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
  ],
  children,
  classNames,
  ...props
}) => {
  return (
    <button
      className={`${tailwindUtilities?.join(' ')} ${classNames}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

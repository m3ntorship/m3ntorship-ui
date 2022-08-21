import { InputHTMLAttributes } from 'react';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
}

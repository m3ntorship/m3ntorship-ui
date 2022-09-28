import { InputHTMLAttributes } from 'react';

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
}

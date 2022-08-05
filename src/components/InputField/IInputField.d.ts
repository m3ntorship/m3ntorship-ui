import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

export interface IInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  id?: string;
  prefix?: boolean;
  suffix?: boolean;
  icon?: ReactNode;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  multiline?: boolean;
}

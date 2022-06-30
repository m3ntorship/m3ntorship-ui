import { ReactNode } from 'react';

export interface IBaseIcon {
  size?: 'lg' | 'md' | 'sm';
  children: ReactNode;
  svgClasses?: string;
}

export interface IIconButton extends IBaseIcon {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary' | 'neutral';
  shape?: 'filled' | 'ghost' | 'blank';
  className?: string;
  disabled?: boolean;
  clicked?: (e: MouseEvent<HTMLButtonElement>) => void;
}

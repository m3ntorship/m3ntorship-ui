import { ReactNode } from 'react';

export interface IAvatarProps {
  src?: string;
  alt?: string;
  size?: 'xlg' | 'lg' | 'md' | 'sm';
  className?: string;
  children?: ReactNode | string;
}

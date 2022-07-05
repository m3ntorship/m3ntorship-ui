import { ReactNode } from 'react';

export interface IBaseIcon {
  /**determine icon size */
  size?: 'lg' | 'md' | 'sm';
  /**the invoked svg element */
  children: ReactNode;
  /**add additional icon classes */
  svgClasses?: string;
}

import { ReactNode } from 'react';

export interface IBaseIcon {
  /**determine icon size */
  size?: 'lg' | 'md' | 'sm';
  /**the invoked svg element */
  children: ReactNode;
  /**add additional icon classes */
  svgClasses?: string;
}

export interface IIconButton extends IBaseIcon {
  /**the type of the button element */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /**colors of the icon button */
  color?: 'primary' | 'secondary' | 'neutral';
  /**the visibility of background & border colors for the icon button */
  variant?: 'filled' | 'ghost' | 'text';
  /**add additional classes for the icon button */
  buttonClasses?: string;
  /**disable any interactions for the icon button */
  disabled?: boolean;
  /**do some action when icon button is clicked */
  clicked?: (e: MouseEvent<HTMLButtonElement>) => void;
}

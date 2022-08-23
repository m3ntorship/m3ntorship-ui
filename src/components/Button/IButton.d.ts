import { ReactNode } from 'react';

export interface IButtonProps {
  /**Add The text or component which will be wrapped by the Button component */
  children?: ReactNode | string;
  /**Choose which variant you button is */
  variant?: 'filled' | 'ghost' | 'text';
  /**Choose you button color */
  color?: 'primary' | 'secondary' | 'neutral';
  /**Change the size here */
  size?: 'lg' | 'md' | 'sm';
  /**test the disabled button styles by changing this value to true */
  disabled?: true | false;
  /**do some action when icon button is clicked */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**the type of the button element */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /**add additional classes for button element */
  className?: string;
}

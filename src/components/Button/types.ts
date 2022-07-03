import { ReactNode } from 'react';
export interface ButtonProps {
  /**Add The text or component which will be wrapped by the Button component */
  children: ReactNode | string;
  /**Choose which variant you button is */
  variant: 'filled' | 'ghost' | 'text';
  /**Choose you button color */
  color: 'primary' | 'secondary' | 'neutral';
  /**Change the size here */
  size: 'large' | 'medium' | 'small';
  /**test the disabled button styles by changing this value to true */
  disabled?: true | false;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

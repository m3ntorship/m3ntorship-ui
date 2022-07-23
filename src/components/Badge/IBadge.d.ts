export interface IBadgeProps {
  /**Add The text or component which will be wrapped by the Badge component */
  children?: ReactNode | string;
  /**Choose which color variant  for the Badge component*/
  color?: 'primary' | 'secondary' | 'warning' | 'info' | 'error' | 'success';
  className?: string;
}

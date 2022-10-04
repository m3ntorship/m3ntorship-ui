export interface IBadgeProps {
  /**Add The text or component which will be wrapped by the Badge component */
  text?: string;
  /**Choose which color variant  for the Badge component*/
  color?: 'primary' | 'secondary' | 'warning' | 'info' | 'error' | 'success';
  /**add additional classes for Badge component */
  className?: string;
}

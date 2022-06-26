export interface ButtonProps {
  /**Add The text wil be in the button */
  content?: string;
  /**Choose wich variant you button is */
  variant: 'filled' | 'ghost' | 'text';
  /**Choose you button color */
  color: 'primary' | 'secondary' | 'neutral';
  /**Change the size here */
  size: 'large' | 'medium' | 'small';
  /**test the disabled button styles by changing this value to true */
  disabled?: true | false;
  clickFun?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

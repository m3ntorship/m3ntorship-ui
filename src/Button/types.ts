export interface ButtonProps {
  content?: string;
  variant?: 'filled' | 'ghost' | 'text';
  color?: 'primary' | 'secondary' | 'neutral';
  size?: 'large' | 'medium' | 'small';
  spicialClasses?: string;
  disabled?: true | false;
}

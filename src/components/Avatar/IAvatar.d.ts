export interface IAvatarProps {
  src?: string | undefined;
  alt?: string | undefined;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
  children?: ReactNode | string;
}

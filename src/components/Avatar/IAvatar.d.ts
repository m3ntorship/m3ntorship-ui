export interface IAvatarProps {
  variant?: 'text' | 'image';
  imageURL?: string | undefined;
  text?: string | undefined;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
}

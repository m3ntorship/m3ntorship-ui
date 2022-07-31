export interface IAvatarProps {
  type?: 'letters' | 'image';
  imageURL?: string | undefined;
  letters?: string | undefined;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
}

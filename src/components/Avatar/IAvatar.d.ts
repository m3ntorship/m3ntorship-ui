export interface IAvatarProps {
  type?: 'imgAvatar' | 'nameAvatar';
  imgURL?: string | undefined;
  name?: string | undefined;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
}

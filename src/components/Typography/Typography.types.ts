import { ElementType, HTMLAttributes, ReactNode } from 'react';
export interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLParagraphElement> {
  /**Applies the theme typography styles.*/
  variant?:
    | 'hero'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'disclaimer';
  /**Applies the custom styles using a custom classNames.*/
  className?: string;
  /**The content of the component*/
  children: ReactNode;
  /**Set the text-align on the component.*/
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right' | 'start' | 'end';
  /**The component used as the root node of the content. For example `div`, `span`, ...*/
  component?: ElementType;
}

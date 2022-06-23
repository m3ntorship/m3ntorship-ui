import { AnchorHTMLAttributes, ReactNode } from 'react';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**Specifies the URL of the page the link goes to.*/
  href?: string;
  /**Changes the size of the Link.*/
  size?: 'small';
  /**The content of the component*/
  children: ReactNode;
  /**Transforms the Link to Disabled mode*/
  disabled?: boolean;
}

import { ElementType, HTMLAttributes, ReactNode } from 'react';

export const SHARED_CLASSNAMES = 'font-inter text-dgrey-800';
export const TYPOGRAPHY_VARIANTS = {
  hero: {
    variantName: 'h1',
    variantClassName: 'font-bold leading-80 text-72 tracking-very-tight',
  },
  h1: {
    variantName: 'h1',
    variantClassName: 'font-bold leading-72 text-64 tracking-tight',
  },
  h2: {
    variantName: 'h2',
    variantClassName: 'font-bold leading-64 text-56 tracking-semi-tight3',
  },
  h3: {
    variantName: 'h3',
    variantClassName: 'font-bold leading-56 text-48 tracking-semi-tight3',
  },
  h4: {
    variantName: 'h4',
    variantClassName: 'font-bold leading-48 text-40 tracking-semi-tight2',
  },
  h5: {
    variantName: 'h5',
    variantClassName: 'font-bold leading-40 text-32 tracking-semi-tight1',
  },
  h6: {
    variantName: 'h6',
    variantClassName: 'font-semibold leading-36 text-28 tracking-normal',
  },
  subtitle: {
    variantName: 'h6',
    variantClassName: 'font-regular leading-32 text-20 tracking-semi-wide',
  },
  body1: {
    variantName: 'p',
    variantClassName: 'font-regular leading-24 text-base tracking-semi-wide',
  },
  body2: {
    variantName: 'p',
    variantClassName: 'font-regular leading-20 text-14 tracking-semi-wide',
  },
  caption: {
    variantName: 'p',
    variantClassName: 'font-regular leading-16 text-12 tracking-wide',
  },
  disclaimer: {
    variantName: 'p',
    variantClassName: 'font-regular leading-14 text-10 tracking-very-wide',
  },
};

export interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLParagraphElement> {
  variant?: keyof typeof TYPOGRAPHY_VARIANTS;
  children?: ReactNode;
}

export interface BaseTypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    HTMLAttributes<HTMLParagraphElement> {
  as: ElementType;
}

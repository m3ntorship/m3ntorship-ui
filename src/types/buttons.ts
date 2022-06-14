import { HTMLAttributes } from 'react';

export interface ButtonVarient {
  varient:
    | 'primary' // for example varient: '100'
    | 'secondary' // for example varient: '200'
    | 'success' // for example varient: '300'
    | 'danger' // for example varient: '400'
    | 'warning' // for example varient: '500'
    | 'info' // for example varient: '600'
    //.... and so on
    | 'light' // Theme varient but till now i am thinking to make it a separate varient
    | 'dark';
}

export interface ButtonSize {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ButtonTailwindUtility {
  tailwindUtilities: Array<string> | null;
}

export interface ButtonProps
  extends ButtonVarient,
    ButtonSize,
    ButtonTailwindUtility,
    HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface IProgressProps {
  variant?: 'primary' | 'secondary';
  label?: string;
  labelPlacement?: string;
  maxValue: number;
  value: number;
}

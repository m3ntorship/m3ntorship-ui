export interface ISelectInputProps {
  id?: string;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  options: Option[];
}

interface Option {
  label: string;
  value: string | number;
}

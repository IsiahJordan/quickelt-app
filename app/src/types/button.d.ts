
export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'nofill';

export interface ButtonProps {
  variant?: ButtonVariant;
  label: string;
  color?: string;
  onClick: () => void;
}


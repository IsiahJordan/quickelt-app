
export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'nofill';

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: string;
  onClick: () => void;
}


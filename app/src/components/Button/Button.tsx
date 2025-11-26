import { ButtonVariant, ButtonProps } from '@/types/button.d.ts'

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 max-sm:px-7 sm:px-7",
  secondary: "bg-secondary-500 max-sm:px-7 sm:px-7",
  accent: "bg-accent-500 max-sm:px-4 sm:px-4",
  nofill: ""
};

export default function Button({ variant="primary", label, color="text-default", onClick }: ButtonProps) {
  const base = "btn font-default";
  const classes = base + " " + variantClasses[variant] + " " + color;

  return (
    <button className={classes} onClick={onClick}>{label}</button>
  ); 
}

import { BadgeVariant, BadgeProps } from '@/types/badge.d.ts'

const variantClasses: Record<BadgeVariant, string> = {
  active: "bg-secondary-500 text-default",
  inactive: "bg-secondary-500/60 text-default"
};

export default function Badge({ variant="active", onClick, label }: BadgeProps) {
  const base = "badge sm:min-h-[22px] sm:mb-1 sm:min-w-[92px] max-sm:min-h[19px] px-4";
  const classes = base + " " + variantClasses[variant];

  return (
    <div className={classes} onClick={onClick}>
      {label}
    </div> 
  );
}


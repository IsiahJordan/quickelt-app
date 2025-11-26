import { BrandVariant, BrandProps } from '@/types/brand.d.ts'
import BrandLogo from '@/assets/brand.svg'
import IconLogo from '@/assets/icon-brand.svg'

const variantClasses: Record<BrandVariant, string> = {
  full: "",
  short: ""
};

export default function Brand({ variant="full" }: BrandProps) {
  const base = "bg-background";
  const classes = base + " " + variantClasses[variant];

  return (
    <div className={classes}>
      { variant === "full" ? 
        ( <img src={BrandLogo} alt="brand-logo"/> ):
        ( <img src={IconLogo} alt="brand-logo"/> )
      }
    </div>
  );
}

import { BrandVariant, BrandProps } from '@/types/brand.d.ts'
import BrandLogo from '@/assets/brand.svg'
import IconLogo from '@/assets/icon-brand.svg'

const variantClasses: Record<BrandVariant, string> = {
  full: "",
  short: ""
};

export default function Brand({ variant="full", style }: BrandProps) {
  const base = "bg-background flex justify-center";
  const classes = base + " " + variantClasses[variant];

  return (
    <div className={classes}>
      { variant === "full" ? 
        ( <img src={BrandLogo} className={style}alt="brand-logo"/> ):
        ( <img src={IconLogo} className={style} alt="brand-logo"/> )
      }
    </div>
  );
}

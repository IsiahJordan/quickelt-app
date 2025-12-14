import { TableCardVariant, TableCardProps } from '@/types/tablecard.d.ts'

const variantClasses: Record<TableCardVariant, string> = {
  light: "bg-background-accent-alt text-alt border-solid border-2 border-black/30",
  dark: "bg-background-accent/8 text-default backdrop-blur-md"
};

export default function TableCell({ variant="dark", styles, children }: TableCardProps) {
  const base = "table-card flex items-center max-sm:px-1 sm:px-10 sm:tracking-wider";
  const classes = base + " " + variantClasses[variant];
  return (
    <div className={classes}>
      {children.map((item, index) => (
        <div className={styles[index]}>
          {item}
        </div>
      ))}  
    </div>
  );
}

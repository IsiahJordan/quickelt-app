import InputBox from '@/components/InputBox'

import { FormVariant, FormProps } from '@/types/form.d.ts'

const variantClasses: Record<FormVariant, string> = {
  large: "bg-background text-default",
  small: ""
};

// add pure whiteless background for profile later on
export default function Form({
  variant="large",
  labels, 
  types, 
  children,
  leftIcons,
  rightIcons,
  setter, 
  onSubmit
}: FormProps) {
  const base = "flex flex-col items-center w-full h-full py-4";
  const classes = base + " " + variantClasses[variant];

  return (
    <div className={classes}>
      {children}
      {labels.map((item, index) => (
        <div className="my-2 w-full px-8">
          <label className="label">{item}</label>
          <InputBox
            variant={variant === "large" ? "dark" : "light"}
            type={types[index]}
            placeholder={item}
            leftChild={leftIcons[index]}
            rightChild={rightIcons[index]}
            onChange={(text: string) => setter(text)}
          />
        </div>
      ))}
    </div>
  );
}

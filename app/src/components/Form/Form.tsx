import InputBox from '@/components/InputBox'

import { FormVariant, FormProps } from '@/types/form.d.ts'
import { useState } from 'react'

import Log from '@/utils/log'

const variantClasses: Record<FormVariant, string> = {
  large: "bg-background text-default",
  small: "bg-background-alt text-alt"
};

// add pure whiteless background for profile later on
export default function Form({
  variant="large",
  labels, 
  types, 
  topChild,
  bottomChild,
  leftIcons,
  rightIcons,
  setter,
  style
}: FormProps) {
  const base = "flex flex-col items-center w-full py-4 px-8";
  const classes = base + " " + variantClasses[variant] + " " + style;
  const log = Log("Form");
  const [inputArray, setInputArray] = useState<Array<string>>(Array(labels.length));

  return (
    <div className={classes}>
      {topChild}
      {labels.map((item, index) => (
        <div className="w-full mb-4" key={index}>
          <label className="label">{item}</label>
          <InputBox
            variant={variant === "large" ? "dark" : "light"}
            type={types[index]}
            placeholder={item}
            leftChild={leftIcons[index]}
            rightChild={rightIcons[index]}
            onChange={(e) => {
              const array = inputArray;
              array[index] = e.target.value;
              setInputArray(array);
              setter(array);
            }}
          />
        </div>
      ))}
      <div className="mt-10 w-full">
        {bottomChild}
      </div>
    </div>
  );
}

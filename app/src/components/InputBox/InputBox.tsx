import { InputVariant, InputProps } from '@/types/inputbox.d.ts'

const variantInputClasses: Record<InputVariant, string> = {
  dark: "bg-accent-500/60",
  light: "bg-accent-300",
  outline: ""
};

export default function InputBox({ 
  variant="dark", 
  type="text",
  color="text-default", 
  placeholder,
  leftChild,
  rightChild,
  onChange
} : InputProps) {
  const inputBase = "input font-default";
  const boxBase = "box font-default";
  const inputClasses = inputBase + " " + variantInputClasses[variant];
  const boxClasses = boxBase + " " + color;
  
  return (
    <div className={inputClasses}>
      { leftChild && 
        <div className="icon-input">{leftChild}</div>
      }
      <input className={boxClasses} type={type} placeholder={placeholder}/>
      { rightChild &&
        <div className="icon-input flex-[0.2]">{rightChild}</div>
      }
    </div>
  );
}

import { InputVariant, InputProps } from '@/types/inputbox.d.ts'

const variantInputClasses: Record<InputVariant, string> = {
  dark: "bg-accent-500/60",
  light: "bg-accent-300",
  outline: "border-solid rounded-[10px] border-default/90"
};

export default function InputBox({ 
  variant="dark", 
  type="text",
  color="text-default", 
  placeholder,
  leftChild,
  rightChild,
  style,
  onChange
} : InputProps) {
  const inputBase = "input font-default";
  const boxBase = "box font-default";
  const inputClasses = inputBase + " " + variantInputClasses[variant] + " " + color + " " + style;
  const boxClasses = boxBase + " ";
  
  return (
    <div className={inputClasses}>
      { leftChild && 
        <div className="icon-input">{leftChild}</div>
      }
      <input className={boxClasses} type={type} placeholder={placeholder} onChange={onChange}/>
      { rightChild &&
        <div className="icon-input flex-[0.5] pr-4">{rightChild}</div>
      }
    </div>
  );
}

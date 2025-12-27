import { AreaProps } from '@/types/inputarea.d.ts'

export default function InputArea({
  placeholder,
  scale,
  style,
  maxlength,
  onChange
}: AreaProps) {
  const base = "input-area px-3 py-2 bg-background-accent-alt";
  const classes = base + " " + style;

  return (
    <textarea
      className={classes}
      rows={8*scale}
      cols={40*scale}
      onChange={onChange}
      placeholder={placeholder}
      maxlength={maxlength}
    >
    </textarea>
  ); 
}

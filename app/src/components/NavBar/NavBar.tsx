import { NavBarVariant, NavBarProps } from '@/type/navbar.d'
import React from 'react'

const variantClasses: Record<NavBarVariant, string> = {
  large: "sm:min-h-[72px] sm:w-[45%] sm:rounded-md sm:text-[26px] sm:tracking-wide ",
  small: "max-sm:min-h-[48px] max-sm:w-[100%]"
};

export default function NavBar({ 
  variant="large",
  orientation="normal", 
  bgColor="bg-background", 
  styles, // this is multiple and index based 
  children 
}: NavBarProps) {
  const base = "nav";
  const innerBase = "flex justify-center";
  const innerClasses = styles !== undefined ? styles : Array(children.Length);
  const orient = orientation === "normal" ? "flex" : "flex-row-reverse";
  const classes = base + " " + bgColor + " " + orient + " " + variantClasses[variant];

  return (
    <nav className={classes}>
      { children.map((item, index) => (
        <div className={innerBase + " " + innerClasses[index]} key={index}>
          {item}
        </div>
      )) }
    </nav>
  );
}

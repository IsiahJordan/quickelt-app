import { NavBarVariant, NavBarProps } from '@/type/navbar.d'
import React from 'react'


export default function NavBar({ 
  orientation="normal", 
  bgColor="bg-background", 
  styles, // this is multiple and index based 
  children 
}: NavBarProps) {
  const base = "nav";
  const innerBase = "flex justify-center ";
  const innerClasses = styles !== undefined ? styles : Array(children.Length);
  const orient = orientation === "normal" ? "flex" : "flex-row-reverse";
  const classes = base + " " + bgColor + " " + orient;

  return (
    <nav className={classes}>
      { children.map((item, index) => (
        <div className={innerBase + innerClasses[index]} key={index}>
          {item}
        </div>
      )) }
    </nav>
  );
}

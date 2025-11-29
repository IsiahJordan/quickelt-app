import { IconProps } from '@/types/icon.d.ts'
import { IoMdMail } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Icon({ variant, color="text-default" }: IconProps) {
  
  // in the future, add logic into specific icon in responds
  // to niche use case
  switch (variant) {
    case "mail":
      return <IoMdMail size={28} color={color}/>;
    case "lock":
      return <FaLock size={22} color={color}/>;
    case "neye":
      return <FaRegEyeSlash size={28} color={color}/>;
    case "profile":
      return <IoPerson size={28} color={color}/>;
  }

  // replace this with icon placeholder
  return undefined;
}

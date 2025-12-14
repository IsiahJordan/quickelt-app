import { IconProps } from '@/types/icon.d.ts'
import { IoMdMail } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const variantColor: Record<string, string> = {
  "text-default" : "#FFFFFF",
  "text-alt": "#000000",
  "text-extra": "#FFCA28"
};

export default function Icon({ variant, color="text-default" }: IconProps) {
  color = variantColor[color];
  const isBigScreen = useMediaQuery({query: '(min-width: 640px)'});

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
    case "nav":
      return <RxHamburgerMenu size={28} color={color}/>;
    case "exit":
      return <RxCross1 size={28} color={color}/>
    case "search":
      return <FaSearch size={18} color={color}/>
    case "image":
      return <FaRegImage size={isBigScreen ? 62: 48} color={color}/>
    case "like":
      return <IoIosThumbsUp size={32} color={color}/>
    case "dislike":
      return <IoIosThumbsDown size={32} color={color}/>
  }

  // replace this with icon placeholder
  return undefined;
}

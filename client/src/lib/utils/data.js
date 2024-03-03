import { MdOutlineExpandMore } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";

export const menuItems = [
  { label: "Home", href: "/" },
  { label: "Series", href: "/series", icon: <MdOutlineExpandMore /> },
  { label: "Fixtures", href: "/fixtures" },
  {
    label: "States Corner",
    href: "/states",
    withIcon: true,
    icon: <GiCricketBat color="#F3AD61" />,
  },
  { label: "Rankings", href: "/rankings" },
];

import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Dropdown from "../dropdown/Dropdown";
import { NavigationItem } from "./interface/interface";


const navigationItems: NavigationItem[] = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Products",
    },
    {
        name: "Resources",
    },
    {
        name: "Pricing",
    },
];

interface NavigationItemsProps {
    className: string;
}

export default function NavigationItems({ className }: NavigationItemsProps) {
    return (
        <ul className={className}>
            {
                navigationItems.map((item, index) => (
                    <li key={index} className="text-sm font-semibold text-secondary_color">
                        <Link href={item.link || "/"}>
                            {
                                item.name === "Products" || item.name === "Resources" ? (
                                    <Dropdown
                                        name={item.name}
                                        open_icon={<IoIosArrowDown />}
                                        close_icon={<IoIosArrowUp />}
                                    />
                                ) :
                                (
                                    item.name
                                )
                            }
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}
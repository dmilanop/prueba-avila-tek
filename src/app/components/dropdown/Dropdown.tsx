"use client"

import { useState } from "react";
import { DropdownProps } from "./interface/interface";
import DropdownInfo from "./DropdowInfo";

export default function Dropdown({ name, className, open_icon, close_icon, onClick }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        name ? (
            <div className="flex items-center gap-2">
                {name}

                {
                    isOpen ? (
                        <div className="flex flex-col relative">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {close_icon}
                            </button>

                            {
                                name === "Products" && (
                                    <DropdownInfo className="top-10 right-[-16px] md:right-1 xl:flex xl:flex-row xl:justify-between xl:gap-8 xl:p-5 xl:w-[500px] xl:h-[250px]"/>
                                )
                            }

                            {
                                name === "Resources" && (
                                    <DropdownInfo className="top-10 right-[-16px] md:left-1 xl:left-1 xl:flex xl:flex-row xl:justify-between xl:gap-8 xl:p-5 xl:w-[500px] xl:h-[250px]"/>
                                )
                            }
                        </div>


                    )  :
                    (
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {open_icon}
                        </button>
                    )
                }
            </div>
        ) :
        (
            isOpen ? (
                <span onClick={() => setIsOpen(!isOpen)}>
                    <button className={className} onClick={onClick}>
                        {close_icon}
                    </button>
                </span>
            )  :
            (
                <span onClick={() => setIsOpen(!isOpen)}>
                    <button className={className} onClick={onClick}>
                        {open_icon}
                    </button>
                </span>
            )
        )
    )
}
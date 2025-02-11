"use client"

import { useState } from "react";
import { DropdownProps } from "./interface/interface";

export default function Dropdown({ name, className, open_icon, close_icon, onClick }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        name ? (
            <div className="flex items-center gap-2">
                {name}

                {
                    isOpen ? (
                        <div className="flex flex-col">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {close_icon}
                            </button>
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
"use client"

import logo from "@/app/assets/logo/logo.svg";
import Image from "next/image";
import { useState } from "react";
import Button from "../button/Button"
import Dropdown from "../dropdown/Dropdown";
import NavigationItems from "./NavigationItems";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    
    return (
        <nav className="flex items-center absolute z-10 justify-between h-20 px-4 md:px-5 lg:px-24 xl:px-60 w-full motion-translate-x-in-[0%] motion-translate-y-in-[-50%] motion-duration-[1.50s]">
            <section className="flex items-center md:gap-8">
                <div className="flex items-center gap-1">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={38}
                        height={38}
                        className="h-8 w-8"
                    />

                    <h1 className="text-lg font-semibold text-primary_color md:text-xl">Test Front-End UI</h1>
                </div>

                <NavigationItems className="hidden md:flex md:items-center md:gap-5 lg:gap-6" />
            </section>


            <section className="hidden md:flex md:gap-6">
                <Button name="Log in" className="text-sm font-semibold text-secondary_color hover:text-primary_color"/>

                <Button name="Sign up" className="text-sm font-medium text-white bg-quinary_color w-20 h-10 hover:bg-violet-700"/>
            </section>

            {/* Navigation Items Responsive */}
            <section className="md:hidden">
                <Dropdown
                    close_icon={<IoMdClose className="text-2xl text-primary_color motion-preset-pop motion-duration-1500" />}
                    open_icon={<IoMdMenu className="text-2xl text-primary_color motion-preset-pop motion-duration-1500" />}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                />

                {
                    isOpenMenu && (
                        <section 
                            className="flex flex-col items-end gap-6 absolute drop-shadow-2xl right-0 top-20 bg-white rounded-xl w-56 pr-4 py-4 md:hidden"
                        >
                            <NavigationItems className="flex flex-col items-center gap-6" />

                            <div className="flex gap-8">
                                <Button name="Log in" className="text-sm font-semibold text-secondary_color hover:text-primary_color"/>

                                <Button name="Sign up" className="text-sm font-medium text-white bg-quinary_color w-20 h-10 hover:bg-violet-700"/>
                            </div>
                        </section>
                    ) 
                }
            </section>
        </nav>
    )
}
import Image from "next/image";
import { companyLinks, legalLinks, productsLinks, resourcesLinks, socialLinks } from "@/data/footer-links";
import FooterNavigation from "./FooterNavigation";
import logo from "@/app/assets/logo/logo.svg"
import { BiLogoPlayStore } from "react-icons/bi";
import { RiAppStoreFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-16 mt-40 px-5 py-5 md:px-0">
            <div className="flex flex-col-reverse items-start justify-start px-5 md:flex-row md:justify-center md:gap-32 lg:gap-32">
                <div className="grid grid-cols-2 gap-20 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:flex xl:flex-row xl:gap-32">
                    <FooterNavigation title="Product" links={productsLinks} />

                    <FooterNavigation title="Company" links={companyLinks} />

                    <FooterNavigation title="Resources" links={resourcesLinks} />

                    <FooterNavigation title="Social" links={socialLinks} />

                    <FooterNavigation title="Legal" links={legalLinks} />
                </div>

                <div className="flex flex-col items-center gap-3 mb-10 md:mb-0">

                    <h6 className="text-sm font-semibold text-menu">Get the app</h6>

                        <div className="flex gap-3 items-center">

                            <RiAppStoreFill className="text-xl text-menu" />

                            <BiLogoPlayStore className="text-xl text-menu" />

                        </div>
                </div>
            </div>

            <div className="flex flex-col justify-start gap-3 py-5 px-5 border-t border-gray-100 md:flex-row md:justify-between md:items-center md:mx-28">
                <span className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" className="h-8 w-8"/>

                    <h1 className="text-lg font-semibold text-primary_color md:text-xl">Test Front-End UI</h1>
                </span>
                
                <p className="text-sm font-normal text-gray-500">
                    © 2077 Untilted UI. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
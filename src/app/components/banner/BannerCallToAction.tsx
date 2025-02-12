import Image from "next/image";
import person from "@/app/assets/persons/person-6.png"
import Button from "../button/Button";

export default function BannerCallToAction() {
    return (
        <div className="flex flex-col-reverse items-center gap-5 bg-quaternary_color w-[90%] rounded-xl md:flex md:flex-row md:justify-between md:items-center md:w-[80%]">
            <article className="flex flex-col items-center gap-5 md:pl-10 md:gap-5">
                <header>
                    <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">Give us a shot</h1>
                </header>

                <p className="text-sm text-center px-2 font-normal text-purple-200 md:text-base lg:text-lg">
                    Join over 4,000+ startups already growing with Untilted.
                </p>

                <footer className="flex gap-5 pb-2">
                    <Button name="Learn more" className="text-sm font-medium text-gray-700 bg-white py-[2px] px-2 hover:text-gray-900 md:py-3 md:px-4 md:text-base"/>

                    <Button name="Get started" className="text-sm font-medium text-white bg-quinary_color py-2 px-4 hover:bg-violet-700 md:py-3 md:px-4 md:text-base"/>
                </footer>
            </article>

            <Image
                src={person}
                alt="Image Banner"
                priority
                className="w-[100%] rounded-t-xl  md:w-[50%] md:rounded-r-xl"
            />
        </div>
    )
}
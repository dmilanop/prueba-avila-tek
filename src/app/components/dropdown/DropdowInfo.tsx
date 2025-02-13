import Image from "next/image";
import person from "@/app/assets/persons/person-7.png"
import { LuBook } from "react-icons/lu";
import { WiStars } from "react-icons/wi";
import { FiPlayCircle } from "react-icons/fi";
import Button from "../button/Button";

interface DropdownInfoProps {
    className?: string;
};

export default function DropdownInfo ({ className }: DropdownInfoProps) {
    return (
        <div className={`flex flex-col justify-between gap-8 p-5 bg-white absolute rounded-xl ${className} md:top-10 w-[250px] h-[500px] border-2 border-gray-100`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                        <LuBook className="text-quinary_color text-xl"/>

                        <h6 className="text-sm font-semibold text-primary_color">Blog</h6>
                    </span>

                    <p className="text-xs pl-[16px] text-gray-500">
                        The latest industry news, updates and info.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                        <WiStars className="text-quinary_color text-xl"/>

                        <h6 className="text-sm font-semibold text-primary_color">Customer stories</h6>
                    </span>

                    <p className="text-xs pl-[16px] text-gray-500">Learn how our customers are making big changes.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                        <FiPlayCircle className="text-quinary_color text-xl"/>

                        <h6 className="text-sm font-semibold text-primary_color">Video tutorials</h6>
                    </span>

                    <p className="text-xs pl-[16px] text-gray-500">Get up and running on new features and techniques</p>
                </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
                <Image src={person} alt="Person" className="w-[180px] rounded-xl"/>

                <span className="flex flex-col gap-1">
                    <h6 className="text-sm font-semibold text-primary_color">We've just released an update!</h6>

                    <p className="text-xs text-gray-500">Check out the all new dashboard view. Pages now load faster.</p>
                </span>

                <span className="flex gap-3">
                    <Button name="Dismiss" className="text-sm font-semibold text-secondary_color"/>

                    <Button name="Changelog" className="text-sm font-semibold text-quaternary_color"/>
                </span>
            </div>
        </div>
    )
}
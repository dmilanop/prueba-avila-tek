import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiLineChart } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import Button from "../../button/Button";
import { Features } from "../interfaces/interfaces";

const features: Features[] = [
    {
        title: "Share team inboxes",
        text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        icon: <IoChatbubblesOutline className="text-2xl text-primary_color"/>,
    },
    {
        title: "Deliver instant answers",
        text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        icon: <AiOutlineThunderbolt className="text-2xl text-primary_color"/>,
    },
    {
        title: "Manage your team with reports",
        text: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        icon: <BiLineChart className="text-2xl text-primary_color"/>,
    }
]

export default function FeaturesCard() {
    return (
        <ul className="grid grid-cols-1 gap-y-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            {
                features.map((feature, index) => (
                    <li key={index} className="flex flex-col items-center px-10 gap-4">
                        {feature.icon}

                        <h2 className="text-lg text-center font-semibold text-primary_color">{feature.title}</h2>

                        <p className="text-base text-center text-secondary_color">{feature.text}</p>
                        
                        <span className="flex items-center gap-2">
                            <Button name="Learn more" className="font-semibold text-tertiary_color hover:text-violet-700"/>

                            <IoIosArrowRoundForward className="text-2xl font-bold text-tertiary_color hover:text-violet-700"/>
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}
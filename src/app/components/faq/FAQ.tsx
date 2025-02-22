"use client"

import { useState } from "react";
import { faqs } from "@/data/faq";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export default function FAQ() {
    const [isOpen, setIsOpen] = useState<boolean[]>(new Array(faqs.length).fill(false));
    
    const toggleQuestion = (index: number) => {
        const showAnswers = [...isOpen];
        showAnswers[index] = !showAnswers[index];
        setIsOpen(showAnswers);
    };

    return (
        <>
            {
                faqs.map((faq, index) => (
                    <div key={index} className="flex flex-col justify-start items-center w-full px-5">
                        <div className={`flex flex-col ${index === faqs.length - 1 ? "" : "border-b-2"} w-full py-6`}>
                            <div className="flex justify-between items-center">
                                <h6 className="text-normal font-medium text-primary_color">
                                    {faq.question}
                                </h6>

                                <button className="text-3xl">
                                    {
                                        isOpen[index] ? (
                                            <CiCircleMinus className="text-slate-600 motion-scale-in-[0.81] motion-ease-bounce" onClick={() => toggleQuestion(index)}/>
                                        ) :
                                        (
                                            <CiCirclePlus className="text-slate-600 motion-scale-in-[0.81] motion-ease-bounce" onClick={() => toggleQuestion(index)}/>
                                        )
                                    }
                                </button>
                            </div>

                            {
                                isOpen[index] && (
                                    <p className="flex flex-col text-secondary_color text-sm font-normal py-2 pr-6 w-[90%] motion-translate-x-in-[0%] motion-translate-y-in-[-50%] motion-duration-[1.13s] motion-ease-spring-smooth">
                                        {faq.answer}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}
"use client"

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

export default function HorizontalTestimonialCard() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const selectTestimonial = (selectedIndex: number) => {
        setCurrentIndex(selectedIndex)
    };

    return (
        <>
            {
                testimonials.slice(currentIndex, currentIndex + 1).map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="flex flex-col justify-between w-[90%] bg-quaternary_color rounded-xl md:flex md:flex-row md:justify-between md:w-[90%] lg:w-[70%]"
                    >
                        <Image
                            src={testimonial.image}
                            alt={`Profile of ${testimonial.name}`}
                            className="w-[100%] rounded-t-xl md:w-[30%] md:rounded-l-[12px] md:rounded-t-none lg:w-[30%]"
                        />
                        <article className="flex flex-col justify-center items-center p-5 gap-8 md:flex md:flex-col md:items-start md:p-10">
                            <header className="flex flex-col items-center gap-5 md:flex md:flex-col md:items-start">
                                <span className="flex items-center gap-1">
                                    {testimonial.stars.map(index => <FaStar className="text-yellow-500" key={index}/>)}
                                </span>


                                <p className="text-lg text-center font-medium text-white md:text-left lg:text-2xl">
                                    {testimonial.comment}
                                </p>
                            </header>
                            
                            <span className="flex flex-col items-center md:flex md:flex-col md:items-start">
                                <div className="flex items-center gap-1">
                                    <hr className="text-white bg-white w-4 h-[2px]"/>

                                    <h5 className="text-lg font-medium text-white md:text-base md:font-light lg:text-lg lg:font-medium">{testimonial.name}</h5>
                                </div>

                                <h6 className="text-sm font-normal text-purple-200">{testimonial.profession}</h6>
                            </span>

                            <footer className="flex gap-3">
                                {
                                    testimonials.slice(0, 3).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => selectTestimonial(i)}
                                            className="focus:outline-none"
                                        >
                                            {
                                                i === currentIndex ? (
                                                    <FaCircle className="text-[8px] text-white"/>
                                                ) :
                                                (
                                                    <FaCircle className="text-[8px] text-violet-400"/>
                                                )
                                            }
                                        </button>
                                    ))
                                }
                            </footer>
                        </article>
                    </div>
                ))
            }
        </>
    )
}
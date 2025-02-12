"use client"

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


export default function TestimonialCard() {
    return (
        <div className="flex flex-col items-center gap-10">
            {
                testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="flex flex-col justify-between w-[90%] bg-gray-500 opacity-90 rounded-xl md:flex md:flex-row md:justify-between md:w-[90%]"
                    >
                        <Image
                            src={testimonial.image}
                            alt={`Profile of ${testimonial.name}`}
                            className="w-[100%] rounded-t-xl md:w-[30%] md:rounded-l-[12px] md:rounded-t-none lg:w-[30%]"
                        />

                        <article className="flex flex-col justify-center items-center p-5 gap-8 md:flex md:flex-col md:items-start md:p-10">
                            <header className="flex flex-col items-center gap-5 md:flex md:flex-col md:items-start">
                                <span className="flex items-center gap-2">
                                    {testimonial.stars.map(index => <FaStar className="text-white text-sm" key={index}/>)}
                                </span>


                                <p className="text-lg text-center font-medium text-white md:text-left lg:text-2xl">
                                    {testimonial.comment}
                                </p>
                            </header>
                            
                            <span className="flex flex-col gap-5 items-center md:flex md:flex-col md:items-start">
                                <h5 className="text-lg font-medium text-white md:text-base md:font-light lg:text-lg lg:font-medium">{testimonial.name}</h5>

                                <div>
                                    <h6 className="text-base font-medium text-white">{testimonial.profession}</h6>

                                    <h5 className="text-base font-medium text-white">{testimonial.company_name}</h5>
                                </div>
                            </span>
                        </article>
                    </div>
                ))
            }
        </div>
    )
}
import { products } from "@/data/products";
import Image from "next/image";
import Button from "../../button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ProductsCard() {


    return (
        <ul className="grid grid-cols-1 gap-y-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            {
                products.map((product) => (
                    <li key={product.id} className="flex flex-col items-center px-12 gap-3">
                        <Image src={product.logo} alt="Product Logo"/>

                        <h2 className="text-xl font-semibold text-primary_color">{product.name} integration</h2>

                        <p className="text-base text-center text-secondary_color">{product.text}</p>
                        
                        <span className="flex items-center gap-2">
                            <Button name="View integration" className="font-semibold text-tertiary_color hover:text-violet-700"/>

                            <IoIosArrowRoundForward className="text-2xl font-bold text-tertiary_color hover:text-violet-700"/>
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}
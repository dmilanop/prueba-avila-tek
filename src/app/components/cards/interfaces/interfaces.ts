import { StaticImageData } from "next/image";

export interface Products {
    id: number;
    name: string;
    text: string;
    logo: StaticImageData;
}
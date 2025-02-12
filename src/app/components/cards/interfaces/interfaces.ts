import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface Products {
    id: number;
    name: string;
    text: string;
    logo: StaticImageData;
}

export interface Features {
    title: string;
    text: string;
    icon: ReactElement
}
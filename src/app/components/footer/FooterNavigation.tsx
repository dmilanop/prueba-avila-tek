import { FooterLinks } from "./interface/interface";

interface FooterProps {
    title: string;
    links: FooterLinks[]
};

export default function FooterNavigation({ title, links }: FooterProps) {
    return (
        <article className="flex flex-col gap-5">
            <header className="flex">
                <h6 className="text-sm font-bold text-primary_color">
                    {title}
                </h6>
            </header>

            <ul className="flex flex-col gap-3">
                {
                    links.map((link, index) => (
                        <li key={index} className="text-base font-semibold text-tertiary_color">
                            {link.link}
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}
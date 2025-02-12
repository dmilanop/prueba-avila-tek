import { Testimonials } from "@/app/components/cards/interfaces/interfaces";
import person1 from "@/app/assets/persons/person-1.png";
import person2 from "@/app/assets/persons/person-2.png";
import person3 from "@/app/assets/persons/person-3.png";
import person4 from "@/app/assets/persons/person-4.png";
import person5 from "@/app/assets/persons/person-5.png";

export const testimonials: Testimonials[] = [
    {
        id: 1,
        image: person3,
        name: "Renee Wells",
        profession: "Product Designer, Quotient",
        stars: [1, 2, 3, 4, 5],
        comment: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    },
    {
        id: 2,
        image: person1,
        name: "Alisa Hester",
        profession: "PM, Hourglass",
        stars: [1, 2, 3, 4, 5],
        comment: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        company_name: "Web Design Agency"
    },
    {
        id: 3,
        image: person2,
        name: "Rich Wilson",
        profession: "COO, Command+R",
        stars: [1, 2, 3, 4, 5],
        comment: " “We've really sped up our workflow using Untitled.” ",
        company_name: "Web Development Agency"
    },
    {
        id: 4,
        image: person5,
        name: "Annie Stanley",
        profession: "Designer, Catalog",
        stars: [1, 2, 3, 4, 5],
        company_name: "UX Agency",
        comment: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    },
    {
        id: 5,
        image: person4,
        name: "Jhonny Beel",
        profession: "PM, Sisyphus",
        stars: [1, 2, 3, 4, 5],
        comment: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        company_name: "Machine Learning"
    },
]
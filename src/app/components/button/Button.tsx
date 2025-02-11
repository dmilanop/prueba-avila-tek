interface ButtonProps {
    name: string;
    className?: string
}

export default function Button({ name, className }: ButtonProps) {
    return (
        <button className={`rounded-md ${className}`}>
            {name}
        </button>
    )
}
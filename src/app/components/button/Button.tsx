interface ButtonProps {
    name: string;
    className?: string
}

export default function Button({ name, className }: ButtonProps) {
    return (
        <button className={`rounded-md ${className} hover:motion-preset-fade hover:motion-duration-1000`}>
            {name}
        </button>
    )
}
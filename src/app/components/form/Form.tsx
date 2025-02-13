import Button from "../button/Button";

export default function Form() {
    return (
        <form className="flex flex-col items-center gap-4 sm:gap-2 sm:items-start">
            <div className="flex flex-col gap-4 items-center sm:flex sm:flex-row sm:gap-6">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-sm w-60 h-10 px-2 rounded-lg outline-none text-primary_color border-0 sm:w-72"
                />

                <Button
                    name="Get started"
                    className="text-base font-medium text-white bg-quinary_color hover:bg-violet-700 w-32 h-10"
                />
            </div>

            <p className="text-sm text-purple-200">
                We care about your data in our <span className="border-b border-purple-200 cursor-pointer">privacy policy</span>.
            </p>
        </form>
    )
}
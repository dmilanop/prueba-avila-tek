import Image from "next/image";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import userOverTimeChart from "@/app/assets/charts/users-over-time.svg";
import activeUsers from "@/app/assets/charts/active-users.svg";

export default function Home() {
  return (
    <>
      <header className="flex flex-col gap-10 items-center">
        <Navbar />
        
        <section className="flex flex-col items-center py-16 h-[600px] w-[95%] rounded-xl bg-quaternary_color sm:h-[600px] md:w-[85%]">
            <article className="flex flex-col items-center gap-10">
              <header className="flex flex-col items-center gap-2 sm:gap-5">
                <h1 className="text-4xl text-white font-bold sm:text-6xl">Grow your users.</h1>

                <h2 className="text-4xl text-purple-200 font-bold sm:text-6xl">Smarter.</h2>
              </header>

              <p className="text-sm text-center text-purple-200 font-normal w-[75%] sm:w-[95%] lg:w-[75%] xl:w-[60%] sm:text-lg">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
                Trusted by over 4,000 startups.
              </p>

              <footer>
                <Form/>
              </footer>
            </article>
        </section>

        <section className="flex flex-col items-center lg:flex lg:flex-row lg:justify-center lg:gap-10">
            <Image
                alt="User Over Time Chart"
                src={userOverTimeChart}
                className="w-auto h-auto lg:w-[50%] lg:h-[50%] 2xl:absolute 2xl:top-[100%] 2xl:w-[75%] 2xl:h-[75%]"
            />

            <Image
                alt="User Over Time Chart"
                src={activeUsers}
                className="2xl:absolute 2xl:right-52 2xl:top-[140%]"
            />
        </section>
      </header>
    </>
  );
}

import Image from "next/image";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import userOverTimeChart from "@/app/assets/charts/users-over-time.svg";
import activeUsers from "@/app/assets/charts/active-users.svg";
import ProductsCard from "./components/cards/products/ProductsCard";

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

      <main className="flex flex-col items-center mt-5 gap-40">
        <section className="flex flex-col items-center gap-12">
            <article className="flex flex-col items-center gap-6">
                <h6 className="text-xs font-medium text-tertiary_color border-2 border-purple-200 bg-purple-50 py-[6px] px-3 rounded-2xl">
                    Integrations
                </h6>

                <h1 className="text-2xl text-center font-bold text-primary_color md:text-3xl">
                    Get more value from your tools
                </h1>

                <p className="text-sm text-center text-secondary_color w-[350px] md:text-base md:w-[600px]">
                    Connect your tools, connect your teams. With over 100 apps already available in our directory, 
                    your team's favourite tools are just a click away.
                </p>
            </article>
            
            <ProductsCard />
        </section>

        <section className="flex flex-col items-center">
            <article className="flex flex-col items-centers gap-20">
                <header className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl text-center px-2 font-bold text-primary_color md:text-3xl">
                        Unleash the full power of data
                    </h2>

                    <p className="text-base px-2 text-center text-secondary_color md:text-lg">
                        Everything you need to convert, engage, and retain more users.
                    </p>
                </header>

                <ul className="flex flex-col items-center gap-20 md:flex md:flex-row md:gap-20 md:justify-between md:px-2">
                    <li className="flex flex-col items-center gap-5">
                        <h5 className="text-6xl font-bold text-quinary_color">400+</h5>
                        <h6 className="text-xl font-semibold text-primary_color ">Projects completed</h6>
                    </li>

                    <li className="flex flex-col items-center gap-5">
                        <h5 className="text-6xl font-bold text-quinary_color">600%</h5>
                        <h6 className="text-xl font-semibold text-primary_color ">Return on investment</h6>
                    </li>

                    <li className="flex flex-col items-center gap-5">
                        <h5 className="text-6xl font-bold text-quinary_color">10k</h5>
                        <h6 className="text-xl font-semibold text-primary_color ">Global downloads</h6>
                    </li>
                </ul>
            </article>
        </section>
      </main>
    </>
  );
}

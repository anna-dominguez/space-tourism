import Link from "next/link"
import Resume from "./components/Resume"

const Home = () => {
  return (
    <div className="px-6 md:pt-28 flex flex-col h-full items-center justify-between md:space-y-24 lg:grid lg:grid-flow-col lg:mx-40 mt-12 lg:mt-40">
      <div className="flex flex-col gap-4 place-items-center lg:place-items-start text-center lg:text-left md:space-y-6 lg:space-y8">
        <p className="barlow text-blue tracking-[2.7px] md:text-bodyM lg:text-heading5">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="bellefair text-[80px] leading-[100px] md:text-heanding1">
          SPACE
        </h1>
        <Resume
          resume="Let’s face it; if you want to go to space, you might as
         well genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this world experience!"
        />
      </div>
      <Link href="/destinations/moon">
        <div className="p-[88px] hover:bg-white hover:bg-opacity-10 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full">
          <button className="bellefair w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full text-black text-[20px] md:text-heading4 tracking-[1.25px]">
            EXPLORE
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Home

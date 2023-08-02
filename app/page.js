import Link from "next/link"
import Resume from "./components/Resume"

const Home = () => {
  return (
    <div className="px-6 md:pt-28 flex flex-col h-full items-center justify-between md:space-y-24 lg:grid lg:grid-flow-col lg:mx-40 mt-12 lg:mt-64">
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
        <button className="bellefair mb-14 w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full text-black text-[20px] md:text-heading4 tracking-[1.25px]">
          EXPLORE
        </button>
      </Link>
    </div>
  )
}

export default Home

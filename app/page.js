import Link from "next/link"

const Home = () => {
  return (
    <div className="flex flex-col h-full place-items-center justify-between mt-12">
      <div className="flex flex-col gap-4 place-items-center text-center">
        <p className="barlow text-blue tracking-[2.7px]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="bellefair text-[80px] leading-[100px]">SPACE</h1>
        <p className="barlow w-[90%] text-blue text-[15px] leading-[25px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link href="/destinations/moon">
        <button className="bellefair mb-14 w-[150px] h-[150px] bg-white rounded-full text-black text-[20px] tracking-[1.25px]">
          EXPLORE
        </button>
      </Link>
    </div>
  )
}

export default Home

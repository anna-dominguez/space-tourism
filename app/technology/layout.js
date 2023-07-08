"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import ImgLaunch from "../../public/images/technology/image-launch-vehicle-landscape.jpg"
import ImgSpaceport from "../../public/images/technology/image-spaceport-landscape.jpg"
import ImgSpaceCapsule from "../../public/images/technology/image-space-capsule-landscape.jpg"

const TechnologyLayout = () => {
  const pathname = usePathname()
  const technology = pathname.split("/")[2]

  return (
    <div className="w-full flex flex-col mt-6 items-center">
      <div className="w-full flex flex-col space-y-8 items-center">
        <p className="barlow spacing">
          <span className="font-bold text-white/25">03</span> SPACE LAUNCH 101
        </p>
        {technology === "launch-vehicle" && (
          <Image placeholder="blur" alt="Moon picture" src={ImgLaunch} />
        )}
        {technology === "spaceport" && (
          <Image placeholder="blur" alt="Mars picture" src={ImgSpaceport} />
        )}
        {technology === "space-capsule" && (
          <Image
            placeholder="blur"
            alt="Europa picture"
            src={ImgSpaceCapsule}
          />
        )}
        <div className="flex gap-4">
          {["launch-vehicle", "spaceport", "space-capsule"].map(
            (key, index) => (
              <Link
                href={`/technology/${key}`}
                key={key}
                className={`bellefair border-[1px] border-white border-opacity-25 py-1 rounded-full hover:border-opacity-100
                ${index + 1 === 1 ? "px-3.5" : "px-3"} ${
                  technology === key && "bg-white text-black "
                }`}
              >
                {index + 1}
              </Link>
            )
          )}
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-nav barlow tracking-[2.36px] text-blue">
            THE TERMINOLOGY...
          </h3>
          <h2 className="bellefair text-[24px] mb-4">
            {technology === "launch-vehicle" && "LAUNCH VEHICLE"}
            {technology === "spaceport" && "SPACEPORT"}
            {technology === "space-capsule" && "SPACECAPSULE"}
          </h2>
          <p className="text-blue text-center text-[15px] mx-6 mb-8">
            {technology === "launch-vehicle" &&
              "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}
            {technology === "spaceport" &&
              "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."}
            {technology === "space-capsule" &&
              "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TechnologyLayout

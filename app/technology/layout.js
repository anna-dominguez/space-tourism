"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

import Title from "../components/Title"
import Resume from "../components/Resume"

import ImgLaunch from "../../public/images/technology/image-launch-vehicle-landscape.jpg"
import ImgSpaceport from "../../public/images/technology/image-spaceport-landscape.jpg"
import ImgSpaceCapsule from "../../public/images/technology/image-space-capsule-landscape.jpg"
import LauchPortrait from "../../public/images/technology/image-launch-vehicle-portrait.jpg"
import SpaceportPortrait from "../../public/images/technology/image-spaceport-portrait.jpg"
import SpaceCapsulePortrait from "../../public/images/technology/image-space-capsule-portrait.jpg"

const technologies = {
  launchVehicule: {
    name: "Launch Vehicule",
    resume:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    name: "Spaceport",
    resume:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  spaceCapsule: {
    name: "Space Capsule",
    resume:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
}

const TechnologyLayout = () => {
  const pathname = usePathname()
  const technology = pathname.split("/")[2]

  const { launchVehicule, spaceport, spaceCapsule } = technologies

  const [technologyTarget, setTechnologyTarget] = useState(launchVehicule)

  useEffect(() => {
    if (technology === "launch-vehicule") setTechnologyTarget(launchVehicule)
    else if (technology === "spaceport") setTechnologyTarget(spaceport)
    else if (technology === "space-capsule") setTechnologyTarget(spaceCapsule)
  })

  return (
    <div className="w-full flex flex-col mt-6 items-center">
      <div className="w-full flex flex-col space-y-8 items-center">
        <Title titleNb="03" title="Space launch 101" />
        <div className="w-full lg:h-full lg:flex space-y-8 lg:justify-between lg:items-center">
          {technology === "launch-vehicle" && (
            <>
              <Image
                className="w-full lg:hidden"
                placeholder="blur"
                alt="Moon picture"
                src={ImgLaunch}
              />
              <Image
                className="w-fit h-[858px] hidden lg:block lg:order-3"
                placeholder="blur"
                alt="Moon picture"
                src={LauchPortrait}
              />
            </>
          )}
          {technology === "spaceport" && (
            <>
              <Image
                className="w-full lg:hidden"
                placeholder="blur"
                alt="Mars picture"
                src={ImgSpaceport}
              />
              <Image
                className="w-fit h-[729px] hidden lg:block lg:order-3"
                placeholder="blur"
                alt="Mars picture"
                src={SpaceportPortrait}
              />
            </>
          )}
          {technology === "space-capsule" && (
            <>
              <Image
                className="w-full lg:hidden"
                placeholder="blur"
                alt="Europa picture"
                src={ImgSpaceCapsule}
              />
              <Image
                className="w-[790px] hidden lg:block lg:order-3"
                placeholder="blur"
                alt="Europa picture"
                src={SpaceCapsulePortrait}
              />
            </>
          )}
          <div className="space-y-8 lg:flex lg:ml-40 lg:items-center">
            <div className="flex lg:flex-col gap-4 md:my-11 justify-center lg:order-1">
              {["launch-vehicle", "spaceport", "space-capsule"].map(
                (key, index) => (
                  <Link
                    href={`/technology/${key}`}
                    key={key}
                    className={`bellefair border-[1px] text-center md:text-[24px] lg:text-heading4 border-white border-opacity-25 py-2.5 md:px-4 lg:py-[22px] rounded-full hover:border-opacity-100
                ${
                  index + 1 === 1
                    ? "px-[18.5px] md:px-6 lg:px-10"
                    : "px-4 md:px-5 lg:px-9"
                } ${technology === key && "bg-white text-black "}`}
                  >
                    {index + 1}
                  </Link>
                )
              )}
            </div>
            <div className="flex flex-col items-center lg:items-start lg:ml-20 lg:order-2">
              <h3 className="text-nav barlow tracking-[2.36px] text-blue">
                THE TERMINOLOGY...
              </h3>
              <h2 className="bellefair text-[24px] md:text-[40px] lg:text-heading3 mb-4 md:my-4 uppercase">
                {technologyTarget.name}
              </h2>
              <Resume resume={technologyTarget.resume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyLayout

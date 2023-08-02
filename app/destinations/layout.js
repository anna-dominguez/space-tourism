"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

import Title from "../components/Title"
import Resume from "../components/Resume"

import ImgMoon from "../../public/images/destination/image-moon.webp"
import ImgMars from "../../public/images/destination/image-mars.webp"
import ImgEuropa from "../../public/images/destination/image-europa.webp"
import ImgTitan from "../../public/images/destination/image-titan.webp"

const destinations = {
  moon: {
    resume:
      "See our planet as you’ve never seen it before. A perfect relaxing trip\
          away to help regain perspective and come back refreshed. While you’re\
          there, take in some history by visiting the Luna 2 and Apollo 11\
          landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS",
  },
  mars: {
    resume:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle\
          Olympus Mons, the tallest planetary mountain in our solar system.\
          It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS",
  },
  europa: {
    resume:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa\
          is a winter lover’s dream. With an icy surface,\
          it’s perfect for a bit of ice skating, curling, hockey,\
          or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "3 YEARS",
  },
  titan: {
    resume:
      "The only moon known to have a dense atmosphere other than Earth,\
          Titan is a home away from home (just a few hundred degrees colder!).\
           As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS",
  },
}
const DestinationsLayout = () => {
  const pathname = usePathname()
  const destination = pathname.split("/")[2]
  const { moon, mars, europa, titan } = destinations

  const [destinationTarget, setDestinationTarget] = useState(moon)

  useEffect(() => {
    if (destination === "moon") setDestinationTarget(moon)
    else if (destination === "mars") setDestinationTarget(mars)
    else if (destination === "europa") setDestinationTarget(europa)
    else if (destination === "titan") setDestinationTarget(titan)
  })

  return (
    <div className="w-full h-full p-6 flex flex-col mt-6 items-center">
      <div className="w-full h-full flex flex-col space-y-8 md:space-y-16 lg:space-y-40 items-center">
        <Title titleNb="01" title="Pick your destination" />
        <div className="w-full h-full flex flex-col place-items-center lg:flex-row gap-12 lg:justify-around">
          <Image
            placeholder="blur"
            alt="Moon picture"
            className="w-[30%]"
            src={
              destination === "moon"
                ? ImgMoon
                : destination === "mars"
                ? ImgMars
                : destination === "europa"
                ? ImgEuropa
                : destination === "titan" && ImgTitan
            }
          />
          <div className="flex flex-col items-center lg:items-start">
            <div className="barlow w-[50%] lg:ml-4 flex space-x-8 uppercase text-navS md:text-nav tracking-[2.362px] justify-center">
              <Link
                href="/destinations/moon"
                className={`cursor-pointer pb-2 ${
                  destination != "moon" ? "other-destination" : "border-b-[3px]"
                }`}
              >
                Moon
              </Link>
              <Link
                href="/destinations/mars"
                className={`cursor-pointer pb-2 ${
                  destination != "mars" ? "other-destination" : "border-b-[3px]"
                }`}
              >
                Mars
              </Link>
              <Link
                href="/destinations/europa"
                className={`cursor-pointer pb-2  ${
                  destination != "europa"
                    ? "other-destination"
                    : "border-b-[3px]"
                }`}
              >
                Europa
              </Link>
              <Link
                href="/destinations/titan"
                className={`cursor-pointer pb-2  ${
                  destination != "titan"
                    ? "other-destination"
                    : "border-b-[3px]"
                }`}
              >
                Titan
              </Link>
            </div>
            <h1 className="uppercase bellefair text-heading3 md:text-[80px] lg:text-[100px] md:mt-6 md:mb-2">
              {destination}
            </h1>
            <Resume resume={destinationTarget.resume} />
            <div className="w-full md:w-[75%] border-t border-blue/50 flex flex-col md:flex-row md:justify-around gap-8 items-center p-8 lg:pl-0">
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <h3 className="barlow uppercase tracking-[2.362px] text-navS justify-center text-blue">
                  AVG. DISTANCE
                </h3>
                <p className="bellefair text-heading5">
                  {destinationTarget.distance}
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <h3 className="barlow uppercase tracking-[2.362px] text-navS justify-center text-blue">
                  EST. TRAVEL TIME
                </h3>
                <p className="bellefair text-heading5">
                  {destinationTarget.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationsLayout

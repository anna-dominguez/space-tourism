"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import ImgMoon from "../../public/images/destination/image-moon.webp"
import ImgMars from "../../public/images/destination/image-mars.webp"
import ImgEuropa from "../../public/images/destination/image-europa.webp"
import ImgTitan from "../../public/images/destination/image-titan.webp"

const DestinationsLayout = () => {
  const pathname = usePathname()
  const destination = pathname.split("/")[2]

  return (
    <div className="w-full flex flex-col mt-6 items-center">
      <div className="w-full flex flex-col space-y-8 items-center">
        <p className="barlow spacing">
          <span className="font-bold text-white/25">01</span> PICK YOUR
          DESTINATION
        </p>
        {destination === "moon" && (
          <Image
            placeholder="blur"
            alt="Moon picture"
            className="w-[50%]"
            src={ImgMoon}
          />
        )}
        {destination === "mars" && (
          <Image
            placeholder="blur"
            alt="Mars picture"
            className="w-[50%]"
            src={ImgMars}
          />
        )}
        {destination === "europa" && (
          <Image
            placeholder="blur"
            alt="Europa picture"
            className="w-[50%]"
            src={ImgEuropa}
          />
        )}
        {destination === "titan" && (
          <Image
            placeholder="blur"
            alt="Titan picture"
            className="w-[50%]"
            src={ImgTitan}
          />
        )}
        <div className="barlow w-[50%] flex space-x-8 uppercase tracking-[2.362px] justify-center">
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
              destination != "europa" ? "other-destination" : "border-b-[3px]"
            }`}
          >
            Europa
          </Link>
          <Link
            href="/destinations/titan"
            className={`cursor-pointer pb-2  ${
              destination != "titan" ? "other-destination" : "border-b-[3px]"
            }`}
          >
            Titan
          </Link>
        </div>
      </div>
      <h1 className="uppercase bellefair text-heading3">{destination}</h1>
      <p className="text-blue text-center text-[15px] mb-8">
        {destination === "moon" &&
          "See our planet as you’ve never seen it before. A perfect relaxing trip\
          away to help regain perspective and come back refreshed. While you’re\
          there, take in some history by visiting the Luna 2 and Apollo 11\
          landing sites."}
        {destination === "mars" &&
          "Don’t forget to pack your hiking boots. You’ll need them to tackle\
          Olympus Mons, the tallest planetary mountain in our solar system.\
          It’s two and a half times the size of Everest!"}
        {destination === "europa" &&
          "The smallest of the four Galilean moons orbiting Jupiter, Europa\
          is a winter lover’s dream. With an icy surface,\
          it’s perfect for a bit of ice skating, curling, hockey,\
          or simple relaxation in your snug wintery cabin."}
        {destination === "titan" &&
          "The only moon known to have a dense atmosphere other than Earth,\
          Titan is a home away from home (just a few hundred degrees colder!).\
           As a bonus, you get striking views of the Rings of Saturn."}
      </p>
      <div className="w-full border-t border-blue flex flex-col gap-8 items-center p-8">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="barlow uppercase tracking-[2.362px] justify-center text-blue">
            AVG. DISTANCE
          </h3>
          <p className="bellefair text-heading5">1.6 BIL. KM</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h3 className="barlow uppercase tracking-[2.362px] justify-center text-blue">
            EST. TRAVEL TIME
          </h3>
          <p className="bellefair text-heading5">7 YEARS</p>
        </div>
      </div>
    </div>
  )
}

export default DestinationsLayout

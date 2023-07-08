"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import ImgCommander from "../../public/images/crew/image-douglas-hurley.webp"
import ImgMissionSpecialist from "../../public/images/crew/image-mark-shuttleworth.webp"
import ImgPilot from "../../public/images/crew/image-victor-glover.webp"
import ImgFlightEngineer from "../../public/images/crew/image-anousheh-ansari.webp"

const CrewLayout = () => {
  const pathname = usePathname()
  const crewMember = pathname.split("/")[2]

  console.log("crewMember", crewMember)
  return (
    <div className="p-6 z-0 w-full flex flex-col mt-6 items-center">
      <div className="w-full flex flex-col space-y-8 items-center">
        <p className="barlow spacing">
          <span className="font-bold text-white/25">02</span> MEET YOUR CREW
        </p>
        {crewMember === "commander" && (
          <Image
            className="h-[222px] w-fit"
            placeholder="blur"
            alt="Picture of Douglas Hurley, commander"
            src={ImgCommander}
          />
        )}
        {crewMember === "mission-specialist" && (
          <Image
            className="h-[222px] w-fit"
            placeholder="blur"
            alt="Picture of Mark Shuttleworth, mission specialist"
            src={ImgMissionSpecialist}
          />
        )}
        {crewMember === "pilot" && (
          <Image
            className="h-[222px] w-fit"
            placeholder="blur"
            alt="Picture of Victor Glover, pilot"
            src={ImgPilot}
          />
        )}
        {crewMember === "flight-engineer" && (
          <Image
            className="h-[222px] w-fit"
            placeholder="blur"
            alt="Picture of Anousheh Ansari, flight engineer"
            src={ImgFlightEngineer}
          />
        )}
      </div>
      <div className="py-8 flex gap-2 border-t border-blue/50 w-full justify-center">
        {["commander", "mission-specialist", "pilot", "flight-engineer"].map(
          (key) => (
            <Link
              key={key}
              className={`cursor-pointer w-1.5 h-1.5 rounded-full bg-white ${
                crewMember !== key && "opacity-50"
              }`}
              href={`/crew/${key}`}
            />
          )
        )}
      </div>
      <h3 className="opacity-50 bellefair text-nav z-0">
        {crewMember === "commander" && "FLIGHT ENGINEER"}
        {crewMember === "mission-specialist" && "MISSION SPECIALIST"}
        {crewMember === "pilot" && "PILOT"}
        {crewMember === "flight-engineer" && "FLIGHT ENGINEER"}
      </h3>
      <h2 className="bellefair text-[24px]">
        {crewMember === "commander" && "DOUGLAS HURLEY"}
        {crewMember === "mission-specialist" && "MARK SHUTTLEWORTH"}
        {crewMember === "pilot" && "VICTOR GLOVER"}
        {crewMember === "flight-engineer" && "ANOUSHEH ANSARI"}
      </h2>
      <p className="text-blue barlow text-center mt-4">
        {crewMember === "commander" &&
          "Douglas Gerald Hurley is an American engineer,\
           former Marine Corps pilot and former NASA astronaut.\
            He launched into space for the third time as commander\
             of Crew Dragon Demo-2."}
        {crewMember === "mission-specialist" &&
          "Mark Richard Shuttleworth is the founder and CEO\
           of Canonical, the company behind the Linux-based\
            Ubuntu operating system. Shuttleworth became\
             the first South African to travel to space as\
              a space tourist."}
        {crewMember === "pilot" &&
          "Pilot on the first operational flight of the SpaceX \
          Crew Dragon to the International Space Station.\
           Glover is a commander in the U.S. Navy where he pilots\
            an F/A-18.He was a crew member of Expedition 64,\
             and served as a station systems flight engineer. "}
        {crewMember === "flight-engineer" &&
          "Anousheh Ansari is an Iranian American engineer and\
           co-founder of Prodea Systems. Ansari was the fourth\
            self-funded space tourist, the first self-funded woman\
             to fly to the ISS, and the first Iranian in space. "}
      </p>
    </div>
  )
}

export default CrewLayout

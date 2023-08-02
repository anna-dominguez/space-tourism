"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

import Title from "../components/Title"
import Resume from "../components/Resume"

import ImgCommander from "../../public/images/crew/image-douglas-hurley.webp"
import ImgMissionSpecialist from "../../public/images/crew/image-mark-shuttleworth.webp"
import ImgPilot from "../../public/images/crew/image-victor-glover.webp"
import ImgFlightEngineer from "../../public/images/crew/image-anousheh-ansari.webp"

const members = {
  commander: {
    role: "Commander",
    name: "Douglas Hurley",
    resume:
      "Douglas Gerald Hurley is an American engineer,\
           former Marine Corps pilot and former NASA astronaut.\
            He launched into space for the third time as commander\
             of Crew Dragon Demo-2.",
  },
  missionSpecialist: {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    resume:
      "Mark Richard Shuttleworth is the founder and CEO\
           of Canonical, the company behind the Linux-based\
            Ubuntu operating system. Shuttleworth became\
             the first South African to travel to space as\
              a space tourist.",
  },
  pilot: {
    role: "Pilot",
    name: "Victor Glover",
    resume:
      "Pilot on the first operational flight of the SpaceX \
          Crew Dragon to the International Space Station.\
           Glover is a commander in the U.S. Navy where he pilots\
            an F/A-18.He was a crew member of Expedition 64,\
             and served as a station systems flight engineer. ",
  },
  flightEngineer: {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    resume:
      "Anousheh Ansari is an Iranian American engineer and\
           co-founder of Prodea Systems. Ansari was the fourth\
            self-funded space tourist, the first self-funded woman\
             to fly to the ISS, and the first Iranian in space. ",
  },
}

const CrewLayout = () => {
  const pathname = usePathname()
  const crewMember = pathname.split("/")[2]

  const { commander, missionSpecialist, pilot, flightEngineer } = members

  const [memberTarget, setMemberTarget] = useState(commander)

  useEffect(() => {
    if (crewMember === "commander") setMemberTarget(commander)
    else if (crewMember === "mission-specialist")
      setMemberTarget(missionSpecialist)
    else if (crewMember === "pilot") setMemberTarget(pilot)
    else if (crewMember === "flight-engineer") setMemberTarget(flightEngineer)
  })

  return (
    <div className="p-6 z-0 w-full flex flex-col mt-6 items-center lg:items-start">
      <div className="w-full flex flex-col space-y-8 items-center">
        <Title titleNb="02" title="Meet your crew" />
        {crewMember === "commander" && (
          <Image
            className="h-[222px] md:h-[572px] lg:h-[80%] w-fit md:absolute md:bottom-0 lg:right-40 md:w-fit "
            alt={`Picture of ${memberTarget.name}, ${memberTarget.role}`}
            src={ImgCommander}
          />
        )}
        {crewMember === "mission-specialist" && (
          <Image
            className="h-[222px] md:h-[532px] lg:h-[80%] w-fit md:absolute md:bottom-0 md:w-fit lg:right-40"
            alt={`Picture of ${memberTarget.name}, ${memberTarget.role}`}
            src={ImgMissionSpecialist}
          />
        )}
        {crewMember === "pilot" && (
          <Image
            className="h-[222px] md:h-[532px] lg:h-[80%] w-fit md:absolute md:bottom-0 md:w-fit lg:right-40"
            alt={`Picture of ${memberTarget.name}, ${memberTarget.role}`}
            src={ImgPilot}
          />
        )}
        {crewMember === "flight-engineer" && (
          <Image
            className="h-[222px] md:h-[532px] lg:h-[80%] w-fit md:absolute md:bottom-0 md:w-fit lg:right-40"
            alt={`Picture of ${memberTarget.name}, ${memberTarget.role}`}
            src={ImgFlightEngineer}
          />
        )}
      </div>
      <div className="flex flex-col md:flex-col-reverse lg:ml-40">
        <div className="py-8 lg:pt-40 flex gap-4 lg:gap-6 border-t border-blue/50 md:border-hidden w-full justify-center lg:justify-start">
          {["commander", "mission-specialist", "pilot", "flight-engineer"].map(
            (key) => (
              <Link
                key={key}
                className={`cursor-pointer w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full bg-white ${
                  crewMember !== key && "opacity-50"
                }`}
                href={`/crew/${key}`}
              />
            )
          )}
        </div>
        <div className="flex flex-col items-center lg:items-start md:mt-[60px] lg:mt-72">
          <h3 className="opacity-50 bellefair text-nav z-0 md:text-[24px] lg:text-heading4 uppercase md:mb-2">
            {memberTarget.role}
          </h3>
          <h2 className="bellefair text-[24px] md:text-[40px] lg:text-heading3 uppercase md:mb-4">
            {memberTarget.name}
          </h2>
          <Resume resume={memberTarget.resume} />
        </div>
      </div>
    </div>
  )
}

export default CrewLayout

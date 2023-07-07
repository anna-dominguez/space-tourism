"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import ImgMoon from "../../public/images/destination/image-moon.webp"
import ImgMars from "../../public/images/destination/image-mars.webp"
import ImgEuropa from "../../public/images/destination/image-europa.webp"
import ImgTitan from "../../public/images/destination/image-titan.webp"

const CrewLayout = () => {
  const pathname = usePathname()
  const destination = pathname.split("/")[2]

  return (
    <div className="w-full flex flex-col mt-6 items-center">
      <div className="w-full flex flex-col space-y-8 items-center">
        <p className="barlow spacing">
          <span className="font-bold text-white/25">03</span> SPACE LAUNCH 101
        </p>
      </div>
    </div>
  )
}

export default CrewLayout

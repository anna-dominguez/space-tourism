"use client"

import Image from "next/image"
import Link from "next/link"

import Logo from "../../public/images/shared/logo.svg"
import IconHamburger from "../../public/images/shared/icon-hamburger.svg"
import IconClose from "../../public/images/shared/icon-close.svg"
import { useState } from "react"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="px-6 pt-6 z-50 flex justify-between items-center w-full">
      <Image className=" w-10" src={Logo} />
      <Image
        className={`${openMenu && "hidden"} w-6 after:cursor-pointer md:hidden`}
        onClick={() => setOpenMenu(!openMenu)}
        src={IconHamburger}
      />
      <div
        className={`${
          !openMenu ? "hidden" : "flex"
        } bg-[rgba(255,255,255,0.04)] backdrop-blur-2xl
         h-full flex-col items-end p-6 pt-8 right-0 top-0 w-[65%] max-sm:absolute md:w-fit md:flex md:flex-row `}
      >
        <Image
          onClick={() => setOpenMenu(!openMenu)}
          className={`${!openMenu && "hidden"} w-[19px] md:hidden pb-16`}
          src={IconClose}
        />
        <div className="menu spacing barlow text-nav z-50">
          <Link href="/">
            <span className="font-bold mr-3">00</span>Home
          </Link>
          <Link href="/destinations/moon">
            <span className="font-bold mr-3">01</span>Destination
          </Link>
          <Link href="/crew/commander">
            <span className="font-bold mr-3">02</span>Crew
          </Link>
          <Link href="/technology/launch-vehicle">
            <span className="font-bold mr-3">03</span>Technology
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

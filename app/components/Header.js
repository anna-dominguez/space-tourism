"use client"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import Logo from "../../public/images/shared/logo.svg"
import IconHamburger from "../../public/images/shared/icon-hamburger.svg"
import IconClose from "../../public/images/shared/icon-close.svg"
import { useState } from "react"

const Header = () => {
  const pathname = usePathname()
  const activeMenu = pathname.split("/")[1]
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="px-6 lg:mt-8 md:px-0 pt-6 md:pt-0 z-50 flex justify-between items-center w-full">
      <Image className="w-10 md:w-12 md:ml-10 md:mt-6" src={Logo} />
      <Image
        className={`${openMenu && "hidden"} w-6 after:cursor-pointer md:hidden`}
        onClick={() => setOpenMenu(!openMenu)}
        src={IconHamburger}
      />
      <div
        className={`${
          !openMenu ? "hidden" : "flex"
        } bg-[rgba(255,255,255,0.04)] backdrop-blur-2xl
         h-full flex-col items-end p-6 md:p-0 pt-8 right-0 top-0 w-[65%] max-sm:absolute md:w-fit md:flex md:flex-row `}
      >
        <Image
          onClick={() => setOpenMenu(!openMenu)}
          className={`${!openMenu && "hidden"} w-[19px] md:hidden pb-16`}
          src={IconClose}
        />
        <div className="menu spacing barlow text-nav md:text-navS z-50">
          <Link
            className={`flex hover:md:border-b-4 hover:md:border-b-white/50 md:py-10 ${
              activeMenu === "" && "md:border-b-4 md:border-b-white"
            }`}
            href="/"
          >
            <span className="font-bold  mr-3 md:mr-0 lg:mr-3 md:hidden lg:block">
              00
            </span>
            Home
          </Link>
          <Link
            className={`flex hover:md:border-b-4 hover:md:border-b-white/50 md:py-10 ${
              activeMenu === "destinations" && "md:border-b-4 md:border-b-white"
            }`}
            href="/destinations/moon"
          >
            <span className="font-bold mr-3 md:mr-0 lg:mr-3 md:hidden lg:block">
              01
            </span>
            Destination
          </Link>
          <Link
            className={`flex hover:md:border-b-4 hover:md:border-b-white/50  md:py-10 ${
              activeMenu === "crew" && "md:border-b-4 md:border-b-white"
            }`}
            href="/crew/commander"
          >
            <span className="font-bold mr-3 md:mr-0 lg:mr-3 md:hidden lg:block">
              02
            </span>
            Crew
          </Link>
          <Link
            className={`flex hover:md:border-b-4 hover:md:border-b-white/50  md:py-10 ${
              activeMenu === "technology" && "md:border-b-4 md:border-b-white"
            }`}
            href="/technology/launch-vehicle"
          >
            <span className="font-bold mr-3 md:mr- lg:mr-3 md:hidden lg:block">
              03
            </span>
            Technology
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

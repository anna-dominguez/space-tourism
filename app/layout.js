"use client"
import { usePathname } from "next/navigation"
import "./globals.css"

import { Barlow_Condensed, Bellefair } from "next/font/google"

import Header from "./components/Header"

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--barlow",
  weight: ["400", "700"],
})

const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  variable: "--bellefair",
  weight: "400",
})

const RootLayout = ({ children }) => {
  const pathname = usePathname()
  const defineBg = pathname.split("/")[1]
  console.log("defineBg", defineBg)

  return (
    <html lang="en">
      <head>
        <title>Space Tourism</title>
      </head>
      <body
        className={`${barlow.variable} ${bellefair.variable} ${
          defineBg === "" && "home"
        } ${defineBg === "destinations" && "destinations"}
        ${defineBg === "crew" && "crew"}
        ${defineBg === "technology" && "technology"}`}
      >
        <div className="flex flex-col h-full">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

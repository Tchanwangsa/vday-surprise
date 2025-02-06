"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CustomBackground from "../components/CustomBackground"
import Image from 'next/image'

export default function ProposalPage() {
  const [noCount, setNoCount] = useState(0)

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1)
  }

  const getYesButtonText = () => {
    switch (noCount) {
      case 0:
        return "Yes"
      case 1:
        return "YES!!!"
      case 2:
        return "WHAT RLY? YES!"
      case 3:
        return "OMGGG YES??!"
      default:
        return "I ONLY PRESSED NO FOR FUN :)))\nYES OF COURSE!!"
    }
  }

  const getNoButtonText = () => {
    switch (noCount) {
      case 1:
        return "Are you sure??"
      case 2:
        return "Awwww"
      case 3:
        return ":("
      default:
        return "No"
    }
  }

  return (
    <CustomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Soooo its the 14th of Feb??...</h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-8 text-pink-200">Can I be your Valentines?</h2>

        {/* Placeholder for GIF */}
        <div className="w-64 h-64 rounded-lg mb-8 flex items-center justify-center">
          <Image
            src="/please-gif.gif"
            alt="Please say yes gif"
            width={256}
            height={256}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-x-4">
          <Link href="/yes">
            <Button
              className="bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 ease-in-out whitespace-pre-line"
              style={{
                fontSize: `${1 + noCount * 0.1}rem`,
                padding: `${0.8 + noCount * 0.2}rem ${1 + noCount * 0.2}rem`,
              }}
            >
              {getYesButtonText()}
            </Button>
          </Link>
          {noCount < 4 && (
            <Button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-600 text-white transition-all duration-300 ease-in-out"
              style={{
                fontSize: `${1 - noCount * 0.1}rem`,
                padding: `${0.5 - noCount * 0.05}rem ${1 - noCount * 0.1}rem`,
              }}
            >
              {getNoButtonText()}
            </Button>
          )}
        </div>
      </div>
    </CustomBackground>
  )
}


"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import CustomBackground from "../components/CustomBackground"

export default function SurprisePage() {
  const [tapCount, setTapCount] = useState(0)
  const router = useRouter()

  const handleTap = () => {
    if (tapCount < 9) {
      setTapCount(tapCount + 1)
    } else {
      router.push("/proposal")
    }
  }

  return (
    <CustomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center" onClick={handleTap}>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">A Special Surprise Awaits!</h1>
        <p className="text-xl mb-4 text-pink-200">Tap the screen {10 - tapCount} more times to reveal your surprise!</p>
      </div>
    </CustomBackground>
  )
}


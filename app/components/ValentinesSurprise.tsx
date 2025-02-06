"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ValentinesSurprise() {
  const [tapCount, setTapCount] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const handleTap = () => {
    if (tapCount < 9) {
      setTapCount(tapCount + 1)
    } else {
      setRevealed(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center" onClick={handleTap}>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-red-600">A Special Surprise Awaits!</h1>
      {!revealed ? (
        <p className="text-xl mb-4 text-pink-700">Tap the screen {10 - tapCount} more times to reveal your surprise!</p>
      ) : (
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600">Do you want to be my Valentine?</h2>
          <div className="space-x-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">YES!</Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white">YES, OF COURSE!</Button>
          </div>
        </div>
      )}
    </div>
  )
}


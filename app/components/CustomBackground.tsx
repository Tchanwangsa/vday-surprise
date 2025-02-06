import Image from "next/image"
import type React from "react"

export default function CustomBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/custom-bg.jpg"
        alt="Valentine's Day Background"
        fill
        className="object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}


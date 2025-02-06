"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CustomBackground from "../components/CustomBackground"

// You'll need to replace these with your actual image URLs
const images = [
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpg",
  "/gallery/gallery-8.jpg",
  "/gallery/gallery-9.jpg",
  "/gallery/gallery-10.jpg",
]

export default function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <CustomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">THX FOR BEING MY VALENTINES ❤️</h1>
        <p className="text-xl mb-4 text-pink-200">
          I miss you so much and can't wait to see u soon. Don't forget to scroll to the end for a surprise.
        </p>
        <div className="w-full max-w-md">
          <div className="relative aspect-square mb-4 shadow-xl border-4 border-white rounded-lg">
            <Image
              src={images[currentImage] || "/placeholder.svg"}
              alt={`Gallery image ${currentImage + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between items-center">
            <Button onClick={prevImage} variant="outline" className="bg-gray-300 hover:bg-white transition-colors">
              Previous
            </Button>
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentImage ? "bg-black" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <Button onClick={nextImage} variant="outline" className="bg-gray-300 hover:bg-white transition-colors">
              Next
            </Button>
          </div>
        </div>
      </div>
    </CustomBackground>
  )
}


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomBackground from "../components/CustomBackground";
import confetti from "canvas-confetti";
import Countdown from "../components/Countdown";
import Link from "next/link";

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
  "/gallery/gallery-11.jpg",
  "/gallery/gallery-12.jpg",
  "/gallery/gallery-13.jpg",
  "/gallery/gallery-14.jpg",
  "/gallery/gallery-end.jpg",
];

export default function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  useEffect(() => {
    if (showCountdown) {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showCountdown]);

  const nextImage = () => {
    setCurrentImage((prev) => {
      const nextIndex = (prev + 1) % images.length;
      if (nextIndex === images.length - 1) {
        setShowCountdown(true);
      }
      return nextIndex;
    });
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const targetDate = "2025-02-16T20:20:00Z";

  return (
    <CustomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          SURPRISE!! 🥳🥳
        </h1>
        <p className="text-xl mb-2 text-pink-200">
          A secret source gave me some goofy photos of us u might&apos;ve
          forgotten about!! Here's some memories and cheers to many more TGT!
        </p>
        <p className="text-xl mb-2 text-pink-200">
          I miss you so much and can&apos;t wait to see u soon. Make sure you
          scroll to the end!!
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
            <Button
              onClick={prevImage}
              variant="outline"
              className="bg-gray-300 hover:bg-white transition-colors text-xs md:text-sm"
            >
              Previous
            </Button>
            <div className="flex space-x-1 md:space-x-2 mx-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    index === currentImage ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextImage}
              variant="outline"
              className="bg-gray-300 hover:bg-white transition-colors text-xs md:text-sm"
            >
              Next
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-center">
              {currentImage + 1}/{images.length}{" "}
            </p>
          </div>
        </div>
        {showCountdown && (
          <>
            <Countdown targetDate={targetDate} />
            <Link href="/finalsurprise">
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                CLICK ME!
              </Button>
            </Link>
          </>
        )}
      </div>
    </CustomBackground>
  );
}

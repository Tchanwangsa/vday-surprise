"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomBackground from "../components/CustomBackground";
import Image from "next/image";

export default function ProposalPage() {
  const [noCount, setNoCount] = useState(0);
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const [showForthText, setShowForthText] = useState(false);
  const [showFifthText, setShowFifthText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const firstTextTimeout = setTimeout(() => {
      setShowFirstText(true);
    }, 1000);

    const secondTextTimeout = setTimeout(() => {
      setShowSecondText(true);
    }, 3000);

    const thirdTextTimeout = setTimeout(() => {
      setShowThirdText(true);
    }, 6000);

    const forthTextTimeout = setTimeout(() => {
      setShowForthText(true);
    }, 8000);

    const fifthTextTimeout = setTimeout(() => {
      setShowFifthText(true);
    }, 11000);

    const photoTimeout = setTimeout(() => {
      setShowPhoto(true);
    }, 12000);

    const buttonsTimeout = setTimeout(() => {
      setShowButtons(true);
    }, 13000);

    return () => {
      clearTimeout(firstTextTimeout);
      clearTimeout(secondTextTimeout);
      clearTimeout(thirdTextTimeout);
      clearTimeout(fifthTextTimeout);
      clearTimeout(buttonsTimeout);
      clearTimeout(photoTimeout);
    };
  }, []);

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const getYesButtonText = () => {
    switch (noCount) {
      case 0:
        return "Yes";
      case 1:
        return "YES!!!";
      case 2:
        return "WHAT RLY? YES!";
      case 3:
        return "OMGGG YES??!";
      default:
        return "I ONLY PRESSED NO FOR FUN :)))\nYES OF COURSE!!";
    }
  };

  const getNoButtonText = () => {
    switch (noCount) {
      case 1:
        return "Are you sure??";
      case 2:
        return "Awwww";
      case 3:
        return ":(";
      default:
        return "No";
    }
  };

  return (
    <CustomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        {showFirstText && (
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white fade-in">
            Today&apos;s the 14th of Feb??...
          </h1>
        )}
        {showSecondText && (
          <h2 className="text-xl md:text-3xl font-semibold text-pink-200 fade-in">
            I think you know whats coming....
          </h2>
        )}
        {showThirdText && (
          <h2 className="text-xl md:text-3xl font-semibold text-pink-200 fade-in">
            What would u say if.....
          </h2>
        )}
        {showForthText && (
          <h2 className="text-xl md:text-3xl font-semibold text-pink-200 fade-in">
            I asked to be your.....
          </h2>
        )}
        {showFifthText && (
          <h2 className="text-xl md:text-3xl font-semibold mb-4 text-pink-200 fade-in">
            Valentines? 😊😊😊
          </h2>
        )}

        {showPhoto && (
          <div className="w-64 h-64 rounded-lg mb-8 flex items-center justify-center fade-in">
            <Image
              src="/proposal.jpg"
              alt="Please say yes!"
              width={256}
              height={256}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {showButtons && (
          <div className="space-x-4 fade-in">
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
        )}
      </div>
    </CustomBackground>
  );
}

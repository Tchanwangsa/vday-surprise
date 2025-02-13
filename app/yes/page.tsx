"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import CustomBackground from "../components/CustomBackground";
import Image from "next/image";

export default function YesPage() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });

  return (
    <CustomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Yay!!!!! HAPPY VALENTINES?! ❤️
        </h1>
        <p className="text-xl text-pink-200 mb-4">
          Awwww well I didn&apos;t give u a choice, but I guess you said yes!!
        </p>
        <p className="text-xl mb-2 text-pink-200">
          If I ever asked myself from the first time we met we&apos;d be where
          we are rn, I wouldn&apos;t believe it and I&apos;m sure you
          wouldn&apos;t have either.
        </p>
        <p className="text-xl mb-2 text-pink-200">
          But it&apos;s all been a pleasant surprise. Being with you makes me so
          happy I can&apos;t wait to see you again. You&apos;ve become very
          special to me and I MEAN IT!
        </p>
        <p className="text-xl mb-2 text-pink-200">
          Did you rly rly genuinely mean it??? I don&apos;t believe it!! If you
          rly mean it then send me a nice msg to show it!
        </p>

        <div className="rounded-lg flex items-center justify-center fade-in">
          <Image
            src="/love-fart.gif"
            alt="HEHE!"
            width={206}
            height={160}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </CustomBackground>
  );
}

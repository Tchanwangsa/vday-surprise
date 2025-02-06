"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import CustomBackground from "../components/CustomBackground";

export default function YesPage() {
  const [tapCount, setTapCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const handleTap = () => {
    if (tapCount < 49) {
      setTapCount(tapCount + 1);
    } else {
      router.push("/gallery");
    }
  };

  const getTapMessage = () => {
    if (tapCount < 10) return "Start tapping!";
    if (tapCount < 20) return "Long way to goooo";
    if (tapCount < 30) return "Almost there";
    if (tapCount < 40) return "Just joking hehe KEEP GOINGG";
    return `${50 - tapCount} left`;
  };

  return (
    <CustomBackground>
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4 text-center"
        onClick={handleTap}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Yay! Happy Valentine&apos;s Day Bon Bon! ❤️
        </h1>
        <p className="text-xl text-pink-200 mb-8">
          Awwww you said yes??? I don&apos;t believe it!! text me saying
          &quot;YAY! Happy VDAY&quot; if you&apos;ve reached this stage.
        </p>

        <p className="text-xl mb-4 text-pink-200">
          TAP TAP TAP! FOR FINAL SURPRISE
        </p>
        <p className="text-2xl font-bold text-white">{getTapMessage()}</p>
      </div>
    </CustomBackground>
  );
}

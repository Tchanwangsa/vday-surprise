"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CustomBackground from "../components/CustomBackground";

export default function YesPage() {
  const [tapCount, setTapCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (tapCount >= 50) {
      timeout = setTimeout(() => {
        router.push("/proposal");
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [tapCount, router]);

  const handleTap = () => {
    setTapCount(tapCount + 1);
  };

  const getTapMessage = () => {
    if (tapCount < 10) return "Start tapping!";
    if (tapCount < 20) return "Long way to goooo";
    if (tapCount < 30) return "Almost there";
    if (tapCount < 40) return "Just joking hehe KEEP GOINGG";
    if (tapCount < 50) return `${50 - tapCount} left`;
    return "SURPRISE LOADING.....";
  };

  return (
    <CustomBackground>
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4 text-center"
        onClick={handleTap}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          WAIT! THERES MORE
        </h1>
        <p className="text-xl mb-4 text-pink-200">
          TAP TAP TAP! FOR FINAL SURPRISE
        </p>
        <p className="text-2xl font-bold text-white">{getTapMessage()}</p>
      </div>
    </CustomBackground>
  );
}

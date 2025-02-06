"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// Define our questions and answers (replace these with your personalized questions)
const questions = [
  {
    question: "When in O-Week was our first ever interaction? 🍻",
    answer: "The Clyde",
  },
  { question: "Whats your favorite way of annoying me?", answer: "Tickling" },
  {
    question:
      'What word starts with "T" that you call me when you\'re angry? 😡😡😡',
    answer: "Turd",
  },
  {
    question: "What is the name of the jellycat elephant I got you? 🐘",
    answer: "Josh",
  },
  {
    question: "What is your favourite song that I introduced you to?",
    answer: "It's time",
  },
];

export default function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userAnswer.replace(/’/g, "'").toLowerCase());
    if (
      userAnswer.replace(/’/g, "'").toLowerCase() ===
      questions[currentQuestion].answer.toLowerCase()
    ) {
      if (currentQuestion === questions.length - 1) {
        setMessage("ALL Correct?? U must be...");
        setTimeout(() => {
          setQuizCompleted(true);
        }, 1500);
      } else {
        setMessage("Correct! Moving to next question...");
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setUserAnswer("");
          setMessage("");
        }, 1500);
      }
    } else {
      setMessage("Hmm, that's not quite right. Try again!");
    }
  };

  return (
    <div className="w-full max-w-md">
      {!quizCompleted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="answer" className="text-lg font-medium">
              Question {currentQuestion + 1}:
            </Label>
            <p>{questions[currentQuestion].question}</p>
            <Input
              id="answer"
              type="text"
              placeholder="Your answer..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full bg-white bg-opacity-20 text-black placeholder-gray-600 border-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white"
          >
            Submit Answer
          </Button>
        </form>
      ) : (
        <div className="text-center space-y-2">
          <h3 className="text-lg">{message}</h3>
          <p className="text-2xl font-bold"> BONNIEEE!??</p>
          <Link href="/surprise">
            <Button className="my-2 w-full bg-red-500 hover:bg-red-600 text-white">
              YEPP THATS MEEE
            </Button>
          </Link>
        </div>
      )}
      {message && !quizCompleted && (
        <div
          className={`mt-4 p-4 ${
            message.includes("Correct") ? "bg-green-100" : "bg-red-100"
          } rounded-md`}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

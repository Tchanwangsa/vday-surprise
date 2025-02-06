import QuizComponent from "./components/QuizComponent"
import WelcomeContent from "./components/WelcomeContent"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-200 via-red-300 to-pink-400">
      <WelcomeContent />
      <QuizComponent />
    </main>
  )
}


"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Key } from "lucide-react"
import { AnimatedEnvelope } from "@/components/animated-envelope"
import { ThemeControls } from "@/components/theme-controls"
import { Fireworks } from "@/components/fireworks"
import { RomanticParticles } from "@/components/romantic-particles"
import { useTheme } from "@/hooks/use-theme"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import toothless from "@/app/toothless.png"
import stich from "@/app/stichh.png"
import kitty from "@/app/kitty.webp"

const CORRECT_PASSWORD = "Ronaldo"

const LETTER_CONTENT = {
  ru: {
    title: "Моё сердце",
    text: `Уже прошло 3–4 месяца с тех пор, как я видел тебя. И всё это время я не переставал думать о тебе. Я очень хочу, чтобы та встреча не стала последней.

Я должен признаться: я всё ещё люблю тебя и искренне надеюсь, что в будущем у нас может что-то получиться. Я собирался уехать учиться в Англию, но понял, что меня удерживает здесь. И это — ты. Ты единственная причина, по которой я остаюсь в этой стране.

Я не прошу тебя о многом. Мне достаточно, если мы будем общаться хотя бы раз в неделю. Для меня это будет огромным счастьем. Я мечтаю однажды жениться на тебе, но я не хочу мешать твоей учёбе или планам — наоборот, я хочу, чтобы ты достигла всего, чего желаешь.

Ты для меня особенная. И если ты не захочешь отвечать, я пойму. Но если ответишь — знай, для меня это будет одним из самых радостных моментов за долгое время.`,
    loginTitle: "Вход в личное пространство",
    loginHint: "Самый лучший футболист в мире (Напиши имя английскими буквами, Первая буква He M)",
    loginButton: "Открыть",
    loginError: "Попробуй ещё раз 💕",
    loginPlaceholder: "Введи пароль...",
    envelopeHint: "Нажми на конверт, чтобы открыть письмо",
    signature: "С любовью H ❤️",
  },
  en: {
    title: "My Heart",
    text: `It's been 3-4 months since I last saw you. And all this time I haven't stopped thinking about you. I really want that meeting not to be the last.

I must confess: I still love you and sincerely hope that we might have something in the future. I was going to go study in England, but realized what's keeping me here. And that's you. You're the only reason I'm staying in this country.

I'm not asking for much. It's enough if we communicate at least once a week. For me, that would be enormous happiness. I dream of marrying you someday, but I don't want to interfere with your studies or plans — I want you to achieve everything you desire.

You are special to me. And if you don't want to answer, I will understand. But if you do answer — it will be one of the happiest moments in a long time.`,
    loginTitle: "Enter Personal Space",
    loginHint: "The best footballer in the world (Write the name using English letters, The first letter is not M)",
    loginButton: "Open",
    loginError: "Try again 💕",
    loginPlaceholder: "Enter password...",
    envelopeHint: "Click the envelope to open the letter",
    signature: "With love N ❤️",
  },
}

export default function HomePage() {
  const { isDark } = useTheme()
  const { language } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)

  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)
  const [isLockOpening, setIsLockOpening] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null // предотвращаем гидрацию

  const letter = LETTER_CONTENT[language] || LETTER_CONTENT.ru

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setIsLockOpening(true)
      setShowError(false)

      setTimeout(() => {
        setIsAuthenticated(true)
        setShowFireworks(true)
        setTimeout(() => setShowFireworks(false), 5000)
      }, 1500)
    } else {
      setShowError(true)
      setPassword("")
    }
  }

  if (isAuthenticated) {
    return (
      <div
        className={`min-h-screen transition-all duration-1000 ${
          isDark
            ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800"
            : "bg-gradient-to-br from-pink-50 via-rose-50 to-white"
        }`}
      >
        <ThemeControls />
        <Fireworks isActive={showFireworks} isDarkMode={isDark} />
        <RomanticParticles isDarkMode={isDark} />

        {/* Персонажи */}
        <div className="absolute top-20 left-8 animate-bounce">
          <div className="w-112 rounded-full flex items-center justify-center overflow-hidden">
            <Image src={stich} alt="stich" width={280} height={280} className="object-cover" />
          </div>
        </div>

        <div className="absolute top-32 right-12 animate-bounce">
          <div className="w-100 rounded-full flex items-center justify-center overflow-hidden">
            <Image src={toothless} alt="Toothless" width={240} height={240} className="object-cover" />
          </div>
        </div>

        <div className="absolute bottom-32 left-12 animate-bounce">
          <div className="w-112 rounded-full flex items-center justify-center overflow-hidden">
            <Image src={kitty} alt="kitten" width={220} height={220} className="object-cover" />
          </div>
        </div>

        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="text-center max-w-4xl">
            <AnimatedEnvelope
              isOpen={isEnvelopeOpen}
              onToggle={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
              language={language}
              isDarkMode={isDark}
            />

            {isEnvelopeOpen && (
              <Card
                className={`max-w-md mx-auto shadow-2xl animate-fade-in transition-all duration-1000 ${
                  isDark
                    ? "bg-purple-900/90 backdrop-blur-sm border-purple-700"
                    : "bg-white/90 backdrop-blur-sm border-rose-200"
                }`}
              >
                <CardHeader className="text-center pb-3">
                  <CardTitle
                    className={`text-lg font-bold mb-2 font-caveat ${
                      isDark ? "text-rose-300" : "text-rose-600"
                    }`}
                  >
                    {letter.title}
                  </CardTitle>
                  <div className="flex justify-center gap-2">
                    {[...Array(3)].map((_, i) => (
                      <Heart
                        key={i}
                        className="w-3 h-3 animate-heart-beat text-rose-400"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="px-4 py-3">
                  <div className="prose prose-rose max-w-none">
                    {letter.text.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-2 leading-relaxed text-xs font-caveat text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="text-center mt-3 pt-2 border-t border-rose-200">
                    <p className="italic text-xs font-caveat text-rose-500">{letter.signature}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Lock page
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-1000 ${
        isDark
          ? "bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800"
          : "bg-gradient-to-br from-pink-100 via-rose-100 to-pink-50"
      }`}
    >
      <ThemeControls />

      <div className="relative w-80 h-96">
        {/* Замок */}
        <div
          className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-28 border-4 rounded-t-xl ${
            isDark ? "border-pink-400" : "border-pink-500"
          } ${isLockOpening ? "rotate-45 translate-x-8" : ""}`}
          style={{ borderBottom: "none" }}
        />

        <div
          className={`relative top-20 w-full h-48 rounded-2xl border-4 ${
            isDark
              ? "bg-gradient-to-b from-pink-500 to-rose-600 border-pink-400"
              : "bg-gradient-to-b from-pink-400 to-rose-500 border-pink-500"
          } ${isLockOpening ? "animate-pulse" : ""}`}
          style={{ borderRadius: "2rem 2rem 1.5rem 1.5rem" }}
        >
          {/* Ключ */}
          {isLockOpening && (
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 animate-spin-key">
              <Key className={`w-6 h-6 ${isDark ? "text-yellow-300" : "text-yellow-400"}`} />
            </div>
          )}

          {/* Ввод пароля */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2 text-center">
            <h2 className={`text-base font-bold ${isDark ? "text-white/90" : "text-gray-800"}`}>
              {letter.loginTitle}
            </h2>
            <p className={`text-xs ${isDark ? "text-pink-100/90" : "text-white/90"}`}>{letter.loginHint}</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="password"
                placeholder={letter.loginPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLockOpening}
                className={`text-center text-sm ${
                  isDark
                    ? "bg-purple-800/70 border-purple-600 text-rose-200 placeholder:text-rose-300/70 focus:border-rose-300 focus:ring-rose-300"
                    : "bg-white/80 border-rose-300 focus:border-rose-400 focus:ring-rose-400"
                }`}
              />
              {showError && <p className="text-xs text-white/90">{letter.loginError}</p>}
              <Button
                type="submit"
                disabled={isLockOpening}
                size="sm"
                className="w-full font-semibold text-xs bg-rose-600 hover:bg-rose-700 text-white"
              >
                {isLockOpening ? "Открывается..." : letter.loginButton}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

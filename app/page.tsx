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

const CORRECT_PASSWORD = "Беззубик"

const LETTER_CONTENT = {
  ru: {
    title: "Моё сердце",
    text: `Я хочу попросить прощения за всё, что могло тебя обидеть. Я никогда не хотел причинять тебе боль. и то что кто то тебя обзывал в классе это не я им говорил, наоборот, я просил их перестать. Всё это время я был на твоей стороне.Если ты захочешь, я могу объяснить всё более подробно, как на самом деле было. Ещё раз прости меня за всё.







    Уже прошло 3–4 месяца с тех пор, как я видел тебя. И всё это время я не переставал думать о тебе. Я очень хочу, чтобы та встреча не стала последней.
Я должен признаться: я всё ещё люблю тебя и искренне надеюсь, что у нас может быть будущее вместе. Я собирался поехать учиться в Англию, но были причины, по которым я не поехал, и одна из них — ты.

Я не прошу тебя сразу начинать отношения или что-то подобное. Мне будет достаточно, если мы будем общаться хотя бы раз в неделю. Я просто не хочу упустить тебя, потому что мечтаю о том, чтобы однажды жениться на тебе.

Я знаю, что ты хочешь стать стоматологом, и я никогда не буду мешать твоей учёбе — наоборот, готов поддерживать тебя во всём. Ин Ша Аллах, мы сможем вместе открыть клинику и построить наше будущее.
Я буду принимать все твои капризы, дарить тебе цветы и радость, делать всё, чтобы ты была счастлива. Я никогда не обижу тебя и не дам, чтобы кто-то причинил тебе боль.

Ты для меня особенная, и я буду рад, если ты найдёшь время ответить. Спасибо, что прочитала всё это.`,
    loginTitle: "Вход в личное пространство",
    loginHint: "Пароль — твой любимый мультперсонаж (первая буква — Б).",
    loginButton: "Открыть",
    loginError: "Попробуй ещё раз 💕",
    loginPlaceholder: "Введи пароль...",
    envelopeHint: "Нажми на конверт, чтобы открыть письмо",
    signature: "С любовью H ❤️",
  },
  en: {
    title: "My Heart",
    text: `I want to apologize for everything that might have hurt you. I never meant to cause you any pain. And the fact that someone called you names in class—it wasn’t me who said it; on the contrary, I asked them to stop. All this time, I have been on your side. If you want, I can explain everything in more detail, how it really happened. Once again, I’m sorry for everything.

It’s already been 3–4 months since I last saw you, and all this time I haven’t stopped thinking about you. I really hope that our last meeting wasn’t the final one.

I have to admit: I still love you and sincerely hope that we could have a future together. I had planned to go study in England, but there were reasons why I didn’t go, and one of them was you.

I’m not asking you to start a relationship or anything like that right away. It would be enough for me if we could just stay in touch, even once a week. I just don’t want to lose you, because I dream of one day marrying you.

I know you want to become a dentist, and I will never interfere with your studies—on the contrary, I’m ready to support you in every way. Inshalla, we could open a clinic together and build our future.
I will accept all your moods, give you flowers and joy, and do everything I can to make you happy. I will never hurt you and will never let anyone cause you pain.

You are very special to me, and I would be happy if you found the time to reply. Thank you for reading all of this.`,
    loginTitle: "Enter Personal Space",
    loginHint: "the password is your favourite cartoon character (the first letter is B)",
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

        {/* 🎭 Персонажи */}
        {/* Ститч */}
        <div className="absolute top-10 left-4 sm:top-20 sm:left-8 animate-bounce">
          <div className="w-14 sm:w-20 md:w-36 lg:w-52 rounded-full overflow-hidden">
            <Image src={stich} alt="stich" width={200} height={200} className="object-contain" />
          </div>
        </div>

        {/* Беззубик */}
        <div className="absolute top-28 right-4 sm:top-32 sm:right-12 animate-bounce">
          <div className="w-14 sm:w-20 md:w-36 lg:w-48 rounded-full overflow-hidden">
            <Image src={toothless} alt="toothless" width={180} height={180} className="object-contain" />
          </div>
        </div>

        {/* Китти */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:bottom-20 sm:left-12 sm:translate-x-0 animate-bounce">
          <div className="w-14 sm:w-20 md:w-32 lg:w-44 rounded-full overflow-hidden">
            <Image src={kitty} alt="kitty" width={160} height={160} className="object-contain" />
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
                      <p
                        key={index}
                        className="mb-2 leading-relaxed text-xs font-caveat text-gray-700"
                      >
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

  // 🔒 Lock page
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
              <Key
                className={`w-6 h-6 ${isDark ? "text-yellow-300" : "text-yellow-400"}`}
              />
            </div>
          )}

          {/* Ввод пароля */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2 text-center">
            <h2
              className={`text-base font-bold ${
                isDark ? "text-white/90" : "text-gray-800"
              }`}
            >
              {letter.loginTitle}
            </h2>
            <p
              className={`text-xs ${
                isDark ? "text-pink-100/90" : "text-white/90"
              }`}
            >
              {letter.loginHint}
            </p>
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

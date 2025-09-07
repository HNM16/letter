"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

interface AnimatedEnvelopeProps {
  isOpen: boolean
  onToggle: () => void
  language: "ru" | "en"
  isDarkMode: boolean
}

export function AnimatedEnvelope({ isOpen, onToggle, language, isDarkMode }: AnimatedEnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="mb-8">
      <div
        className={`relative mx-auto w-40 h-28 cursor-pointer transition-all duration-700 transform ${
          isOpen ? "scale-110" : isHovered ? "scale-105" : "scale-100"
        } ${isHovered ? "drop-shadow-2xl animate-envelope-glow" : "drop-shadow-lg"}`}
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 rounded-lg blur-sm translate-y-2 translate-x-1 transition-all duration-700 ${
            isHovered ? "bg-rose-500/30" : "bg-black/20"
          }`}
        />

        <div
          className={`absolute inset-0 rounded-lg shadow-xl border-2 transition-all duration-700 ${
            isDarkMode
              ? "bg-gradient-to-br from-rose-300 to-rose-400 border-rose-200"
              : "bg-gradient-to-br from-rose-200 to-rose-300 border-rose-400"
          } ${isHovered ? "shadow-rose-300/50" : ""}`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-14 transition-all duration-1000 ${
              isDarkMode
                ? "bg-gradient-to-b from-rose-400 via-rose-450 to-rose-500"
                : "bg-gradient-to-b from-rose-300 via-rose-350 to-rose-400"
            }`}
            style={{
              clipPath: "polygon(0 0, 50% 75%, 100% 0)",
              transformOrigin: "top center",
            }}
          />

          <div
            className={`absolute top-0 left-0 w-full h-14 transition-all duration-1000 ease-out origin-top z-10 ${
              isDarkMode
                ? "bg-gradient-to-b from-rose-500 via-rose-550 to-rose-600"
                : "bg-gradient-to-b from-rose-400 via-rose-450 to-rose-500"
            } ${isOpen ? "rotate-[30deg] translate-y-4 translate-x-2" : "rotate-0"}`}
            style={{
              clipPath: "polygon(0 0, 50% 75%, 100% 0)",
            }}
          />

          <div
            className={`absolute top-3 left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-20 ${
              isOpen ? "scale-0 rotate-180 opacity-0" : "scale-100 rotate-0 opacity-100"
            }`}
          >
            <div
              className={`w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                isHovered ? "shadow-red-400/60 shadow-lg" : ""
              }`}
            >
              <Heart className="w-3 h-3 text-white fill-current" />
            </div>
          </div>

          {/* Envelope Body Decoration */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center opacity-60">
            <div className="w-1 h-1 bg-rose-600 rounded-full" />
            <div className="flex-1 h-px bg-rose-600 mx-2" />
            <div className="w-1 h-1 bg-rose-600 rounded-full" />
          </div>
        </div>

        <div
          className={`absolute -top-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 ease-out ${
            isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-90"
          }`}
        >
          <div
            className={`w-16 h-20 rounded-lg shadow-2xl border-2 transition-all duration-1000 ${
              isDarkMode
                ? "bg-gradient-to-b from-amber-50 to-amber-100 border-amber-200 shadow-amber-200/30"
                : "bg-gradient-to-b from-white to-amber-50 border-rose-200 shadow-rose-200/30"
            } ${isOpen ? "animate-envelope-glow" : ""}`}
          >
            <div className="p-1.5 text-center">
              <div className="text-xs mb-0.5 animate-pulse">💌</div>
              <div className="text-[7px] font-semibold text-rose-600 mb-0.5" style={{ fontFamily: "Caveat, cursive" }}>
                {language === "ru" ? "Для тебя" : "For You"}
              </div>
              <div className="w-full h-px bg-rose-300 mb-0.5" />
            </div>

            <div className="px-1.5 space-y-0.5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-px bg-gray-300 rounded animate-pulse"
                  style={{
                    width: `${40 + Math.random() * 20}%`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>

            <div className="absolute bottom-0.5 right-0.5">
              <Heart className="w-1.5 h-1.5 text-rose-400 animate-pulse" />
            </div>
          </div>
        </div>

        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full animate-ping ${
                  i % 2 === 0 ? "bg-rose-300" : "bg-yellow-300"
                }`}
                style={{
                  top: `${15 + i * 12}%`,
                  left: `${10 + i * 15}%`,
                  animationDelay: `${i * 0.25}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <p
        className={`mt-6 font-medium transition-colors duration-300 text-center ${isDarkMode ? "text-rose-300" : "text-rose-600"}`}
        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
      >
        {isOpen
          ? language === "ru"
            ? "Письмо открыто ✨"
            : "Letter is open ✨"
          : language === "ru"
            ? "Нажми на конверт, чтобы открыть письмо"
            : "Click the envelope to open the letter"}
      </p>
    </div>
  )
}

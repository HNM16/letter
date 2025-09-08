"use client"

import { Heart, Sparkles } from "lucide-react"

interface RomanticParticlesProps {
  isDarkMode: boolean
}

export function RomanticParticles({ isDarkMode }: RomanticParticlesProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Hearts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Heart
          key={`heart-${i}`}
          className={`absolute animate-float opacity-40 transition-colors duration-1000 ${
            isDarkMode ? "text-rose-400" : "text-rose-300"
          }`}
          style={{
            left: `${5 + i * 12}%`,
            top: `${10 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
          size={12 + (i % 3) * 4}
        />
      ))}

      {/* Twinkling Sparkles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          <Sparkles
            className={`transition-colors duration-1000 ${isDarkMode ? "text-yellow-300" : "text-yellow-400"}`}
            size={8}
          />
        </div>
      ))}

      {/* Romantic Glow Orbs */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`orb-${i}`}
          className={`absolute rounded-full animate-romantic-glow transition-all duration-1000 ${
            isDarkMode ? "bg-rose-900" : "bg-rose-800/30"
          }`}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: `${20 + i * 5}px`,
            height: `${20 + i * 5}px`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  )
}

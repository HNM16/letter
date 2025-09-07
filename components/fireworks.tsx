"use client"

import { useEffect, useState } from "react"
import { Sparkles, Star } from "lucide-react"

interface FireworksProps {
  isActive: boolean
  isDarkMode: boolean
}

export function Fireworks({ isActive, isDarkMode }: FireworksProps) {
  const [fireworks, setFireworks] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    if (isActive) {
      const newFireworks = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }))
      setFireworks(newFireworks)
    } else {
      setFireworks([])
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            animationDelay: `${firework.delay}s`,
          }}
        >
          <Sparkles className={`animate-firework ${isDarkMode ? "text-yellow-300" : "text-yellow-500"}`} size={24} />
        </div>
      ))}

      {/* Additional star sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          <Star className={`${isDarkMode ? "text-pink-300" : "text-pink-400"}`} size={12} />
        </div>
      ))}
    </div>
  )
}

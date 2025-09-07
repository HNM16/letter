"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useLanguage } from "@/hooks/use-language"

export function ThemeControls() {
  const { isDark, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="absolute top-4 right-4 flex gap-2 z-10">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className={`backdrop-blur-sm transition-all duration-300 ${
          isDark
            ? "bg-purple-900/80 border-purple-700 text-rose-300 hover:bg-purple-800/90"
            : "bg-white/80 border-rose-200 text-rose-600 hover:bg-white/90"
        }`}
      >
        <Globe className="w-4 h-4 mr-1" />
        {language === "ru" ? "🇷🇺" : "🇬🇧"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className={`backdrop-blur-sm transition-all duration-300 ${
          isDark
            ? "bg-purple-900/80 border-purple-700 text-rose-300 hover:bg-purple-800/90"
            : "bg-white/80 border-rose-200 text-rose-600 hover:bg-white/90"
        }`}
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </Button>
    </div>
  )
}

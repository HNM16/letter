"use client"
import { useState, useEffect } from "react"

export type Language = "ru" | "en"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("ru") // всегда "ru" на сервере
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // синхронизируем только на клиенте
    const stored = localStorage.getItem("romantic-language") as Language | null
    if (stored) {
      setLanguage(stored)
    }
    setIsReady(true)

    const handler = () => {
      const newLang = (localStorage.getItem("romantic-language") as Language) || "ru"
      setLanguage(newLang)
    }
    window.addEventListener("language-changed", handler)
    return () => window.removeEventListener("language-changed", handler)
  }, [])

  const toggleLanguage = () => {
    const newLang: Language = language === "ru" ? "en" : "ru"
    setLanguage(newLang)
    localStorage.setItem("romantic-language", newLang)
    window.dispatchEvent(new Event("language-changed"))
  }

  return { language, toggleLanguage, isReady }
}

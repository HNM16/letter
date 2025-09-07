"use client"
import { useState, useEffect } from "react"

export type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("romantic-theme") as Theme) || "light"
    }
    return "light"
  })

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("romantic-theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    window.dispatchEvent(new Event("theme-changed"))
  }

  useEffect(() => {
    const handler = () => setTheme((localStorage.getItem("romantic-theme") as Theme) || "light")
    window.addEventListener("theme-changed", handler)
    return () => window.removeEventListener("theme-changed", handler)
  }, [])

  return { theme, toggleTheme, isDark: theme === "dark" }
}

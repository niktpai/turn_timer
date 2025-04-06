'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Moon, Sun } from "lucide-react"
import { useSettings } from "@/contexts/SettingsContext"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { settings } = useSettings()
  const [mounted, setMounted] = useState(false)
  
  // Just a simple mount effect
  useEffect(() => {
    setMounted(true)
  }, [])

  // Not rendering anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null
  }

  // Simple toggle handler
  const handleToggle = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    
    // Save only the theme setting directly to localStorage without affecting other settings
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(newTheme === 'dark'))
    }
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="dark-mode"
        checked={isDark}
        onCheckedChange={handleToggle}
      />
      <div className="flex items-center gap-2">
        <Label htmlFor="dark-mode">Dark Mode</Label>
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </div>
    </div>
  )
} 
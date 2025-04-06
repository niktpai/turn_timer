'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SettingsProvider } from "@/contexts/SettingsContext"
import { PlayerProvider } from "@/contexts/PlayerContext"
import { useState, useEffect } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
    // Only render theme provider on client side
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    return (
        <>
            {mounted ? (
                <NextThemesProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    forcedTheme={undefined}
                >
                    <SettingsProvider>
                        <PlayerProvider>
                            {children}
                        </PlayerProvider>
                    </SettingsProvider>
                </NextThemesProvider>
            ) : (
                <SettingsProvider>
                    <PlayerProvider>
                        {children}
                    </PlayerProvider>
                </SettingsProvider>
            )}
        </>
    )
}

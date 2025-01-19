'use client'

import { SettingsProvider } from "@/contexts/SettingsContext"
import { PlayerProvider } from "@/contexts/PlayerContext"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SettingsProvider>
            <PlayerProvider>
                {children}
            </PlayerProvider>
        </SettingsProvider>
    )
}

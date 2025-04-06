'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Settings {
    autoStart: boolean
    addTimeInterval: number
    turnDuration: number
    darkMode: boolean
}

interface SettingsContextType {
    settings: Settings
    updateSettings: (newSettings: Partial<Settings>) => void
}

const defaultSettings: Settings = {
    autoStart: true,
    addTimeInterval: 10,
    turnDuration: 60,
    darkMode: false,
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: ReactNode }) {
    // Start with default settings for SSR
    const [settings, setSettings] = useState<Settings>(defaultSettings)
    const [isLoaded, setIsLoaded] = useState(false)
    
    // Load settings from localStorage only on client
    useEffect(() => {
        if (typeof window !== 'undefined' && !isLoaded) {
            try {
                // Load individual settings with fallbacks
                const loadSetting = <T extends boolean | number>(key: string, defaultValue: T): T => {
                    const item = localStorage.getItem(key)
                    return item ? JSON.parse(item) : defaultValue
                }
                
                // Check system preference for dark mode as default if not set
                const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
                
                const loadedSettings = {
                    autoStart: loadSetting('autoStart', defaultSettings.autoStart),
                    addTimeInterval: loadSetting('addTimeInterval', defaultSettings.addTimeInterval),
                    turnDuration: loadSetting('turnDuration', defaultSettings.turnDuration),
                    darkMode: loadSetting('darkMode', prefersDarkMode),
                }
                
                setSettings(loadedSettings)
                setIsLoaded(true)
            } catch (error) {
                console.error('Error loading settings:', error)
            }
        }
    }, [isLoaded])

    const updateSettings = (newSettings: Partial<Settings>) => {
        const updatedSettings = { ...settings, ...newSettings }
        
        // Save to localStorage immediately
        if (typeof window !== 'undefined') {
            try {
                // Only save the changed settings
                Object.entries(newSettings).forEach(([key, value]) => {
                    localStorage.setItem(key, JSON.stringify(value))
                })
            } catch (error) {
                console.error('Error saving settings:', error)
            }
        }
        
        // Update state
        setSettings(updatedSettings)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings,
                updateSettings
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    const context = useContext(SettingsContext)
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider')
    }
    return context
}

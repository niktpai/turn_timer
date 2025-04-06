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
    updateSettings: (newSettings: Settings) => void
    hasUnsavedChanges: boolean
    saveChanges: () => void
    resetChanges: () => void
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
    const [tempSettings, setTempSettings] = useState<Settings>(defaultSettings)
    const [isLoaded, setIsLoaded] = useState(false)
    
    // Load settings from localStorage only on client
    useEffect(() => {
        if (typeof window !== 'undefined' && !isLoaded) {
            try {
                // Load individual settings with fallbacks
                const loadSetting = (key: string, defaultValue: any) => {
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
                setTempSettings(loadedSettings)
                setIsLoaded(true)
            } catch (error) {
                console.error('Error loading settings:', error)
            }
        }
    }, [isLoaded])

    const updateSettings = (newSettings: Settings) => {
        setTempSettings(newSettings)
    }

    const hasUnsavedChanges = JSON.stringify(settings) !== JSON.stringify(tempSettings)

    const saveChanges = () => {
        if (typeof window !== 'undefined') {
            try {
                // Save all settings to localStorage
                localStorage.setItem('autoStart', JSON.stringify(tempSettings.autoStart))
                localStorage.setItem('addTimeInterval', JSON.stringify(tempSettings.addTimeInterval))
                localStorage.setItem('turnDuration', JSON.stringify(tempSettings.turnDuration))
                localStorage.setItem('darkMode', JSON.stringify(tempSettings.darkMode))
            } catch (error) {
                console.error('Error saving settings:', error)
            }
        }
        setSettings(tempSettings)
    }

    const resetChanges = () => {
        setTempSettings(settings)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings,
                updateSettings,
                hasUnsavedChanges,
                saveChanges,
                resetChanges
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

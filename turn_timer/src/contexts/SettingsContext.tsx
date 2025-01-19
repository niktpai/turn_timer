'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Settings {
    autoStart: boolean
    addTimeInterval: number
    turnDuration: number
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
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: ReactNode }) {
    const [settings, setSettings] = useState<Settings>(defaultSettings)
    const [tempSettings, setTempSettings] = useState<Settings>(defaultSettings)

    useEffect(() => {
        // Load saved settings on mount
        const storedAutoStart = localStorage.getItem('autoStart')
        const storedAddTimeInterval = localStorage.getItem('addTimeInterval')
        const storedTurnDuration = localStorage.getItem('turnDuration')

        const loadedSettings = {
            autoStart: storedAutoStart ? JSON.parse(storedAutoStart) : defaultSettings.autoStart,
            addTimeInterval: storedAddTimeInterval ? JSON.parse(storedAddTimeInterval) : defaultSettings.addTimeInterval,
            turnDuration: defaultSettings.turnDuration, // Always use default value (60) for turnDuration
        }

        setSettings(loadedSettings)
        setTempSettings(loadedSettings)
    }, [])

    const updateSettings = (newSettings: Settings) => {
        setTempSettings(newSettings)
    }

    const hasUnsavedChanges = JSON.stringify(settings) !== JSON.stringify(tempSettings)

    const saveChanges = () => {
        // Save to localStorage and update current settings
        localStorage.setItem('autoStart', JSON.stringify(tempSettings.autoStart))
        localStorage.setItem('addTimeInterval', JSON.stringify(tempSettings.addTimeInterval))
        // Don't save turnDuration to localStorage so it resets to 60 for new sessions
        setSettings(tempSettings)
    }

    const resetChanges = () => {
        // Reset temp settings to current settings
        setTempSettings(settings)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings: tempSettings,
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

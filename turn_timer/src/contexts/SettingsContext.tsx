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
    const loadStoredSettings = () => {
        if (typeof window !== 'undefined') {
            try {
                const storedAutoStart = localStorage.getItem('autoStart')
                const storedAddTimeInterval = localStorage.getItem('addTimeInterval')
                const storedTurnDuration = localStorage.getItem('turnDuration')

                return {
                    autoStart: storedAutoStart ? JSON.parse(storedAutoStart) : defaultSettings.autoStart,
                    addTimeInterval: storedAddTimeInterval ? JSON.parse(storedAddTimeInterval) : defaultSettings.addTimeInterval,
                    turnDuration: storedTurnDuration ? JSON.parse(storedTurnDuration) : defaultSettings.turnDuration,
                }
            } catch (error) {
                console.error('Error loading settings:', error)
                return defaultSettings
            }
        }
        return defaultSettings
    }

    const [settings, setSettings] = useState<Settings>(loadStoredSettings)
    const [tempSettings, setTempSettings] = useState<Settings>(loadStoredSettings)

    // Reset temp settings to saved settings when unmounting settings page
    useEffect(() => {
        return () => {
            setTempSettings(settings)
        }
    }, [settings])

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
            } catch (error) {
                console.error('Error saving settings:', error)
            }
        }
        setSettings(tempSettings)
    }

    const resetChanges = () => {
        // Reset temp settings to current settings
        setTempSettings(settings)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings,  // Use actual saved settings from sessionStorage
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

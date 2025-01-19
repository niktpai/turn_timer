'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface Player {
    id: string
    name: string
}

interface PlayerContextType {
    players: Player[]
    addPlayer: (name: string) => void
    removePlayer: (id: string) => void
    reorderPlayers: (newPlayers: Player[]) => void
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export function PlayerProvider({ children }: { children: ReactNode }) {
    const [players, setPlayers] = useState<Player[]>([])

    const addPlayer = (name: string) => {
        if (name.trim()) {
            const newPlayer = { id: Date.now().toString(), name: name.trim() }
            setPlayers(prev => [...prev, newPlayer])
        }
    }

    const removePlayer = (id: string) => {
        setPlayers(prev => prev.filter(player => player.id !== id))
    }

    const reorderPlayers = (newPlayers: Player[]) => {
        setPlayers(newPlayers)
    }

    return (
        <PlayerContext.Provider
            value={{
                players,
                addPlayer,
                removePlayer,
                reorderPlayers
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

export function usePlayers() {
    const context = useContext(PlayerContext)
    if (context === undefined) {
        throw new Error('usePlayers must be used within a PlayerProvider')
    }
    return context
}

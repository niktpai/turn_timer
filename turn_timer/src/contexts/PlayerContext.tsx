'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Player {
    id: string
    name: string
    order: number
}

interface PlayerContextType {
    players: Player[]
    addPlayer: (name: string) => void
    removePlayer: (id: string) => void
    reorderPlayers: (newPlayers: Player[]) => void
    resetPlayers: () => void
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export function PlayerProvider({ children }: { children: ReactNode }) {
    const [players, setPlayers] = useState<Player[]>(() => {
        if (typeof window !== 'undefined') {
            const savedPlayers = sessionStorage.getItem('players')
            return savedPlayers ? JSON.parse(savedPlayers) : []
        }
        return []
    })

    useEffect(() => {
        sessionStorage.setItem('players', JSON.stringify(players))
    }, [players])

    const addPlayer = (name: string) => {
        if (name.trim()) {
            const newPlayer = {
                id: Date.now().toString(),
                name: name.trim(),
                order: players.length
            }
            setPlayers([...players, newPlayer])
        }
    }

    const removePlayer = (id: string) => {
        setPlayers(players.filter(player => player.id !== id))
    }

    const reorderPlayers = (newPlayers: Player[]) => {
        const reorderedPlayers = newPlayers.map((player, index) => ({
            ...player,
            order: index
        }))
        setPlayers(reorderedPlayers)
    }

    const resetPlayers = () => {
        setPlayers([])
        sessionStorage.removeItem('players')
    }

    return (
        <PlayerContext.Provider
            value={{
                players,
                addPlayer,
                removePlayer,
                reorderPlayers,
                resetPlayers
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

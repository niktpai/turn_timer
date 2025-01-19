'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import PlayerList from '@/components/PlayerList'
import { Button } from '@/components/ui/button'

interface Player {
  id: string
  name: string
}

export default function Home() {
  const router = useRouter()
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    const storedPlayers = localStorage.getItem('players')
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers))
    }
  }, [])

  const handlePlayersChange = (updatedPlayers: Player[]) => {
    setPlayers(updatedPlayers)
    localStorage.setItem('players', JSON.stringify(updatedPlayers))
  }

  const handleStartGame = () => {
    if (players.length > 0) {
      router.push('/gameplay')
    } else {
      alert('Please add at least one player before starting the game.')
    }
  }

  return (
    <Layout title="Turn Timer">
      <div className="space-y-8">
        <PlayerList initialPlayers={players} onPlayersChange={handlePlayersChange} />
        <div className="flex justify-end">
          <Button size="lg" onClick={handleStartGame}>Start Game</Button>
        </div>
      </div>
    </Layout>
  )
}

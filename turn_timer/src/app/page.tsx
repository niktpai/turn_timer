'use client'

import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Layout from '@/components/Layout'
import PlayerList from '@/components/PlayerList'
import { Button } from '@/components/ui/button'
import { usePlayers } from '@/contexts/PlayerContext'

function HomeContent() {
  const router = useRouter()
  const { players } = usePlayers()

  const handleStartGame = () => {
    if (players.length > 0) {
      router.push('/gameplay')
    } else {
      alert('Please add at least one player before starting the game.') //todo minimum in game is 2 players
    }
  }

  return (
    <Layout title="Turn Timer">
      <div className="space-y-8">
        <PlayerList />
        <div className="flex justify-end">
          <Button size="lg" onClick={handleStartGame}>Start Game</Button>
        </div>
      </div>
    </Layout>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}

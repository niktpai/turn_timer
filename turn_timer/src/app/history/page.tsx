'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'

interface TurnLog {
  player: string
  duration: string
  skipped: boolean
}

export default function History() {
  const router = useRouter()
  const [turnLog, setTurnLog] = useState<TurnLog[]>([])
  const [totalDuration, setTotalDuration] = useState('0:00')

  useEffect(() => {
    // In a real app, you'd fetch the actual game history from storage or an API
    const mockHistory = [
      { player: 'Player 1', duration: '1:30', skipped: false },
      { player: 'Player 2', duration: '2:00', skipped: false },
      { player: 'Player 3', duration: '0:45', skipped: true },
    ]
    setTurnLog(mockHistory)
    setTotalDuration('4:15')
  }, [])

  const handleStartNewGame = () => {
    // Clear the game history
    localStorage.removeItem('gameHistory')
    router.push('/')
  }

  return (
    <Layout title="Game History">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Turn Log</h2>
        <ul className="space-y-2">
          {turnLog.map((turn, index) => (
            <li key={index} className={`p-2 rounded ${turn.skipped ? 'bg-yellow-100' : 'bg-secondary'}`}>
              {turn.player}: {turn.duration} {turn.skipped && '(Skipped)'}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold">Game Summary</h2>
        <p>Total game duration: {totalDuration}</p>
        <p>Number of turns: {turnLog.length}</p>
        <div className="pt-6">
          <Button onClick={handleStartNewGame}>Start New Game</Button>
        </div>
      </div>
    </Layout>
  )
}

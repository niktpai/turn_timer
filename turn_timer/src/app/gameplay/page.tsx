'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Timer from '@/components/Timer'
import ControlButtons from '@/components/ControlButtons'
import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'

interface Player {
  id: string
  name: string
}

export default function Gameplay() {
  const router = useRouter()
  const [isRunning, setIsRunning] = useState(true)
  const [players, setPlayers] = useState<Player[]>([])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [addTimeInterval, setAddTimeInterval] = useState(10)
  const [turnDuration, setTurnDuration] = useState(60)

  useEffect(() => {
    const storedPlayers = localStorage.getItem('players')
    const storedAddTimeInterval = localStorage.getItem('addTimeInterval')
    const storedTurnDuration = localStorage.getItem('turnDuration')
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers))
    }
    if (storedAddTimeInterval) {
      setAddTimeInterval(JSON.parse(storedAddTimeInterval))
    }
    if (storedTurnDuration) {
      const duration = JSON.parse(storedTurnDuration)
      setTurnDuration(duration)
      setTimeLeft(duration)
    }
  }, [])

  const currentPlayer = players[currentPlayerIndex]
  const nextPlayer = players[(currentPlayerIndex + 1) % players.length]

  const handleStart = () => setIsRunning(true)
  const handleSkip = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length)
    setIsRunning(true)
    setTimeLeft(turnDuration)
  }
  const handleAddTime = () => {
    setTimeLeft((prevTime) => prevTime + addTimeInterval)
  }
  const handleTimeUp = () => {
    handleSkip()
  }
  const handleNextTurn = () => {
    handleSkip()
  }

  const handleEndGame = () => {
    router.push('/history')
  }

  if (players.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={`${currentPlayer.name}'s Turn`}>
      <div className="space-y-8">
        <Timer duration={turnDuration} timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleTimeUp} isRunning={isRunning} />
        <ControlButtons
          onStart={handleStart}
          onSkip={handleSkip}
          onAddTime={handleAddTime}
          isRunning={isRunning}
          addTimeInterval={addTimeInterval}
        />
        <div className="text-center text-muted-foreground">
          Next: {nextPlayer.name}
        </div>
        <div className="flex justify-center">
          <Button onClick={handleNextTurn} size="lg">Next Turn</Button>
        </div>
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">End Game</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to end the game?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. You'll be redirected to the history and stats page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleEndGame}>End Game</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </Layout>
  )
}

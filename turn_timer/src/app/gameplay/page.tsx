'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import Timer from '@/components/Timer'
import ControlButtons from '@/components/ControlButtons'
import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { useSettings } from '@/contexts/SettingsContext'

interface Player {
  id: string
  name: string
}

export default function Gameplay() {
  const router = useRouter()
  const { settings } = useSettings()
  const [isRunning, setIsRunning] = useState(true)
  const [players, setPlayers] = useState<Player[]>([])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(settings.turnDuration)

  useEffect(() => {
    const storedPlayers = localStorage.getItem('players')
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers))
    }
  }, [])

  // Update timeLeft when turnDuration changes in settings
  useEffect(() => {
    setTimeLeft(settings.turnDuration)
  }, [settings.turnDuration])

  const currentPlayer = players[currentPlayerIndex]
  const nextPlayer = players[(currentPlayerIndex + 1) % players.length]

  const handleStart = () => setIsRunning(true)
  const handleSkip = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length)
    setIsRunning(true)
    setTimeLeft(settings.turnDuration)
  }
  const handleAddTime = () => {
    setTimeLeft((prevTime) => prevTime + settings.addTimeInterval)
  }
  const handleTimeUp = () => {
    if (settings.autoStart) {
      handleSkip()
    } else {
      setIsRunning(false)
      setTimeLeft(settings.turnDuration)
    }
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
        <Timer duration={settings.turnDuration} timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleTimeUp} isRunning={isRunning} />
        <ControlButtons
          onStart={handleStart}
          onSkip={handleSkip}
          onAddTime={handleAddTime}
          isRunning={isRunning}
          addTimeInterval={settings.addTimeInterval}
        />
        <div className="text-center text-muted-foreground">
          Next: {nextPlayer.name}
        </div>
        <div className="flex justify-center">
          <Button onClick={handleNextTurn} size="lg">Next Turn</Button>
        </div>
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => router.push('/settings?returnTo=/gameplay')}
          >
            Settings
          </Button>
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

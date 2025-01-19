'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Player {
  id: string
  name: string
}

export default function Settings() {
  const router = useRouter()
  const [autoStart, setAutoStart] = useState(true)
  const [addTimeInterval, setAddTimeInterval] = useState(10)
  const [turnDuration, setTurnDuration] = useState(60)
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    const storedPlayers = localStorage.getItem('players')
    const storedAutoStart = localStorage.getItem('autoStart')
    const storedAddTimeInterval = localStorage.getItem('addTimeInterval')
    const storedTurnDuration = localStorage.getItem('turnDuration')
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers))
    }
    if (storedAutoStart) {
      setAutoStart(JSON.parse(storedAutoStart))
    }
    if (storedAddTimeInterval) {
      setAddTimeInterval(JSON.parse(storedAddTimeInterval))
    }
    if (storedTurnDuration) {
      setTurnDuration(JSON.parse(storedTurnDuration))
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('autoStart', JSON.stringify(autoStart))
    localStorage.setItem('addTimeInterval', JSON.stringify(addTimeInterval))
    localStorage.setItem('turnDuration', JSON.stringify(turnDuration))
    router.push('/gameplay')
  }

  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Switch id="auto-start" checked={autoStart} onCheckedChange={setAutoStart} />
          <Label htmlFor="auto-start">Auto Start Next Turn</Label>
        </div>
        <div className="space-y-2">
          <Label htmlFor="turn-duration">Turn Duration (seconds)</Label>
          <Input
            id="turn-duration"
            type="number"
            value={turnDuration}
            onChange={(e) => setTurnDuration(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="add-time-interval">Add Time Interval (seconds)</Label>
          <Input
            id="add-time-interval"
            type="number"
            value={addTimeInterval}
            onChange={(e) => setAddTimeInterval(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label>Turn Order</Label>
          <ul className="space-y-2">
            {players.map((player, index) => (
              <li key={player.id} className="bg-secondary p-2 rounded">
                {index + 1}. {player.name}
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={handleSave}>Save Settings</Button>
      </div>
    </Layout>
  )
}

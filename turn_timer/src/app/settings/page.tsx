'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import Layout from '@/components/Layout'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useSettings } from '@/contexts/SettingsContext'
import { ThemeToggle } from '@/components/ThemeToggle'

interface Player {
  id: string
  name: string
}

function SettingsContent() {
  const players: Player[] = []
  const router = useRouter()
  const searchParams = useSearchParams()
  const { settings, updateSettings } = useSettings()
  const [turnDurationInput, setTurnDurationInput] = useState(settings.turnDuration.toString())
  const [addTimeInput, setAddTimeInput] = useState(settings.addTimeInterval.toString())

  // Update input fields when settings change (e.g., after reset)
  useEffect(() => {
    setTurnDurationInput(settings.turnDuration.toString())
    setAddTimeInput(settings.addTimeInterval.toString())
  }, [settings])

  // Get the return path from URL params, default to home page
  const returnTo = searchParams.get('returnTo') || '/'

  const handleReturn = () => {
    router.push(returnTo)
  }

  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Switch
            id="auto-start"
            checked={settings.autoStart}
            onCheckedChange={(checked) => updateSettings({ autoStart: checked })}
          />
          <Label htmlFor="auto-start">Auto Start Next Turn</Label>
        </div>
        <div className="space-y-2">
          <Label htmlFor="turn-duration">Turn Duration (seconds)</Label>
          <Input
            id="turn-duration"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={turnDurationInput}
            onChange={(e) => {
              setTurnDurationInput(e.target.value)
            }}
            onBlur={() => {
              const num = parseInt(turnDurationInput)
              if (!isNaN(num) && num > 0) {
                updateSettings({ turnDuration: num })
              } else {
                // Reset input to current setting if invalid
                setTurnDurationInput(settings.turnDuration.toString())
              }
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="add-time-interval">Add Time Interval (seconds)</Label>
          <Input
            id="add-time-interval"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={addTimeInput}
            onChange={(e) => {
              setAddTimeInput(e.target.value)
            }}
            onBlur={() => {
              const num = parseInt(addTimeInput)
              if (!isNaN(num) && num >= 0) {
                updateSettings({ addTimeInterval: num })
              } else {
                // Reset input to current setting if invalid
                setAddTimeInput(settings.addTimeInterval.toString())
              }
            }}
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="space-y-2">
          <ThemeToggle />
        </div>

        <div className="flex justify-center">
          <Button variant="outline" onClick={handleReturn}>Return</Button>
        </div>
      </div>
    </Layout>
  )
}

export default function Settings() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SettingsContent />
    </Suspense>
  )
}

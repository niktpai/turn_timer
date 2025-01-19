'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import Layout from '@/components/Layout'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useSettings } from '@/contexts/SettingsContext'

interface Player {
  id: string
  name: string
}

interface Props {
  players: Player[]
}

export default function Settings({ players = [] }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { settings, updateSettings, hasUnsavedChanges, saveChanges, resetChanges } = useSettings()

  // Get the return path from URL params, default to home page
  const returnTo = searchParams.get('returnTo') || '/'

  const handleSave = () => {
    saveChanges()
    router.push(returnTo)
  }

  const handleClose = () => {
    if (hasUnsavedChanges) {
      resetChanges()
    }
    router.push(returnTo)
  }

  return (
    <Layout title="Settings">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Switch
            id="auto-start"
            checked={settings.autoStart}
            onCheckedChange={(checked) => updateSettings({ ...settings, autoStart: checked })}
          />
          <Label htmlFor="auto-start">Auto Start Next Turn</Label>
        </div>
        <div className="space-y-2">
          <Label htmlFor="turn-duration">Turn Duration (seconds)</Label>
          <Input
            id="turn-duration"
            type="number"
            value={settings.turnDuration}
            onChange={(e) => updateSettings({ ...settings, turnDuration: Number(e.target.value) })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="add-time-interval">Add Time Interval (seconds)</Label>
          <Input
            id="add-time-interval"
            type="number"
            value={settings.addTimeInterval}
            onChange={(e) => updateSettings({ ...settings, addTimeInterval: Number(e.target.value) })}
          />
        </div>
        <div className="space-y-2">
          <Label>Current Turn Order</Label>
          <ul className="space-y-2">
            {players.map((player, index) => (
              <li key={player.id} className="bg-secondary p-2 rounded">
                {index + 1}. {player.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={handleClose}>Close</Button>
          <Button
            onClick={handleSave}
            disabled={!hasUnsavedChanges}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Layout>
  )
}

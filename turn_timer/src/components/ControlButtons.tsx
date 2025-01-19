import { Button } from '@/components/ui/button'
import { Play, Plus, SkipForward } from 'lucide-react'

interface ControlButtonsProps {
  onStart: () => void
  onAddTime: () => void
  onSkip: () => void
  isRunning: boolean
  addTimeInterval: number
  autoStart: boolean
}

export default function ControlButtons({ onStart, onAddTime, onSkip, isRunning, addTimeInterval, autoStart }: ControlButtonsProps) {
  return (
    <div className="flex justify-center space-x-4">
      {!isRunning && !autoStart && (
        <Button onClick={onStart}>
          <Play className="mr-2 h-4 w-4" /> Start
        </Button>
      )}
      {isRunning && (
        <>
          <Button onClick={onAddTime}>
            <Plus className="mr-2 h-4 w-4" /> {addTimeInterval}s
          </Button>
          <Button onClick={onSkip} variant="secondary">
            <SkipForward className="mr-2 h-4 w-4" /> Skip
          </Button>
        </>
      )}
    </div>
  )
}

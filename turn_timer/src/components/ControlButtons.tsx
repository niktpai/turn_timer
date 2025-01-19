import { Button } from '@/components/ui/button'
import { Play, Plus, SkipForward, Pause } from 'lucide-react'

interface ControlButtonsProps {
  onStart: () => void
  onAddTime: () => void
  onSkip: () => void
  onPause: () => void
  isRunning: boolean
  isPaused: boolean
  addTimeInterval: number
  autoStart: boolean
}

export default function ControlButtons({ onStart, onAddTime, onSkip, onPause, isRunning, isPaused, addTimeInterval, autoStart }: ControlButtonsProps) {
  return (
    <div className="flex justify-center space-x-4">
      {!isRunning && !isPaused && !autoStart && (
        <Button onClick={onStart}>
          <Play className="mr-2 h-4 w-4" /> Start
        </Button>
      )}
      {isPaused && (
        <Button onClick={onStart}>
          <Play className="mr-2 h-4 w-4" /> Resume
        </Button>
      )}
      {isRunning && !isPaused && (
        <>
          <Button onClick={onAddTime}>
            <Plus className="mr-2 h-4 w-4" /> {addTimeInterval}s
          </Button>
          <Button onClick={onSkip} variant="secondary">
            <SkipForward className="mr-2 h-4 w-4" /> Skip
          </Button>
          <Button onClick={onPause} variant="secondary">
            <Pause className="mr-2 h-4 w-4" /> Pause
          </Button>
        </>
      )}
    </div>
  )
}

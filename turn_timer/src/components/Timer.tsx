'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface TimerProps {
  duration: number
  timeLeft: number
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  onTimeUp: () => void
  isRunning: boolean
}

export default function Timer({ duration, timeLeft, setTimeLeft, onTimeUp, isRunning }: TimerProps) {

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer)
            onTimeUp()
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning, timeLeft, onTimeUp, setTimeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const progressPercentage = (timeLeft / duration) * 100

  return (
    <div className="text-center space-y-4">
      <div className="text-6xl font-bold tabular-nums">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-linear"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}


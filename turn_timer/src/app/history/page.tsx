'use client'

import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'

function HistoryContent() {
  const router = useRouter()

  const handleStartNewGame = () => {
    router.push('/')
  }

  return (
    <Layout title="Game History">
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6 text-center">
        <h2 className="text-2xl font-bold">🚧 Work in Progress</h2>
        <p className="text-muted-foreground">
          Game stats are work in progress!
        </p>
        <div className="pt-4">
          <Button onClick={handleStartNewGame}>Start New Game</Button>
        </div>
      </div>
    </Layout>
  )
}

export default function History() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HistoryContent />
    </Suspense>
  )
}

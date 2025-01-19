'use client'

import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'
import { Button } from '@/components/ui/button'

export default function History() {
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

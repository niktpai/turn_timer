import Link from 'next/link'
import { Settings, X } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

function LayoutContent({ children, title }: LayoutProps) {
  const pathname = usePathname()
  const isSettingsPage = pathname === '/settings'
  const searchParams = useSearchParams()
  const returnTo = searchParams.get('returnTo') || '/'

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold">{title}</h1>
        {isSettingsPage ? (
          <Link href={returnTo} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </Link>
        ) : (
          <Link href={`/settings?returnTo=${pathname}`} className="text-muted-foreground hover:text-foreground transition-colors">
            <Settings size={24} />
          </Link>
        )}
      </header>
      <main className="p-4">{children}</main>
    </div>
  )
}

export default function Layout(props: LayoutProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LayoutContent {...props} />
    </Suspense>
  )
}

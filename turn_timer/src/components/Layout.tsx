import Link from 'next/link'
import { Settings, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps) {
  const pathname = usePathname()
  const isSettingsPage = pathname === '/settings'

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold">{title}</h1>
        {isSettingsPage ? (
          <Link href="/gameplay" className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </Link>
        ) : (
          <Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
            <Settings size={24} />
          </Link>
        )}
      </header>
      <main className="p-4">{children}</main>
    </div>
  )
}


import './globals.css'

export const metadata = {
  title: 'Les Botanistes | Restaurant Gastronomique',
  description: 'Découvrez Les Botanistes, une expérience gastronomique unique où la nature rencontre la haute cuisine.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}

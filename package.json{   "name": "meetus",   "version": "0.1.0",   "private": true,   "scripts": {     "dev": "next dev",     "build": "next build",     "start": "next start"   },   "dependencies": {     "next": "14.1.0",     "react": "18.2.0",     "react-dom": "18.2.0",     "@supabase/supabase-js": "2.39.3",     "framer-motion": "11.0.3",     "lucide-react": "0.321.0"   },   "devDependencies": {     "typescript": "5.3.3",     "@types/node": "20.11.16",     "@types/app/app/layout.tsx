import './globals.css'

export const metadata = {
  title: 'MEETUS',
  description: 'Hyperlocal connection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

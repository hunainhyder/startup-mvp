import './globals.css'

export const metadata = {
  title: 'Wholesalio',
  description: 'Where Retailers meet business',
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


export const metadata = {
  title: 'Fysiotheraphie Yperlaan',
  description: 'Fysiotheraphie Yperlaan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

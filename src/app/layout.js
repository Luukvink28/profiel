export const metadata = {
  title: 'Luuk Vink',
  description: 'Portfolio van Luuk Vink',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>

    </html>
  );
}

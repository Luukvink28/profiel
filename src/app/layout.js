export const metadata = {
  title: 'Luuk Vink',
  description: 'Portfolio van Luuk Vink',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

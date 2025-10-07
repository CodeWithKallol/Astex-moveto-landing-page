import { Poppins } from 'next/font/google'
import './globals.css'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
})

export const metadata = {
  title: 'Moveto - Your Moving Partner',
  description: 'Move smarter with Moveto. Professional moving services for your home and office.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
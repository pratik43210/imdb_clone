import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is a clone of IMDB website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header/>
          <Navbar/>
          <SearchBox/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
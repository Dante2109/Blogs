import AuthContextProvider from '@/Context/authContext'
import Navbar from './Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const noPrivateRouteRequired=["/"]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <div style={{position:'sticky',top:0}}>
         <Navbar/> 
          </div>
         {children}
         <Footer/>
        </AuthContextProvider>
      </body>
    </html>
  )
}

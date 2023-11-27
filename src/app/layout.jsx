import { Pacifico } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

const akorede = Pacifico({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Beginners React class',
  descriprion: 'Frontend 6b6 class 1 on React',
  keywords: 'React, Next, JavaScript'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className= 'min-h-[70vh]'>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}

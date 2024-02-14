import Footer from "components/Footer"
import { Header } from "components/Header"
import Head from "next/head"
import "styles/tailwind.css"
import { Orbitron } from 'next/font/google';


const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={orbitron.className} >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

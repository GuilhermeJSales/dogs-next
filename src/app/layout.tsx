import type { Metadata } from 'next'
import './globals.css'
import { typeSecond } from '@/functions/fonts'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { UserContextProvider } from '@/context/user-context'
import { userGet } from '@/actions/user-get'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros',
}

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  const { data: user } = await userGet()
  return (
    <html lang="pt-BR">
      <body className={typeSecond.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
        <SpeedInsights/>
      </body>
    </html>
  )
}

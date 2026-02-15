import type { Metadata, Viewport } from 'next'
import { DM_Sans, Sora } from 'next/font/google'
import { MotionProvider } from '@/components/motion-provider'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata: Metadata = {
  title: 'NeuronaHub | Entrena tu mente, potencia tu marca',
  description: 'NeuronaHub es el ecosistema estratégico que integra formación, asesoría, educación digital y productos funcionales para potenciar tu crecimiento profesional y empresarial.',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#080d12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}

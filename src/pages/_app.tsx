import '../styles/globals.css'
/* eslint-disable */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Noto_Serif_JP } from '@next/font/google'
import localFont from '@next/font/local'

const noto_serif_jp = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-noto-serif-jp',
})

const hackgen = localFont({
  src: [
    {
      path: './fonts/HackGen/HackGen-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/HackGen/HackGen-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-hackgen',
})

const hackgen35 = localFont({
  src: [
    {
      path: './fonts/HackGen/HackGen35-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/HackGen/HackGen35-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-hackgen35',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <div className={`${hackgen.variable} ${hackgen35.variable} ${noto_serif_jp.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

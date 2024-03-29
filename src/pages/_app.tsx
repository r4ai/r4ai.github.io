import '@/styles/globals.css'
import '@/styles/post.css'

/* eslint-disable */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import localFont from 'next/font/local'
import { DEFAULT_THEME } from '@/lib/constants'

const hackgen = localFont({
  src: './fonts/HackGen/HackGen-Regular.woff2',
  variable: '--font-hackgen',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme={DEFAULT_THEME}>
      <div className={`${hackgen.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

import { Analytics } from '@vercel/analytics/react'
import TagManager from 'react-gtm-module'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  TagManager.initialize({ gtmId: 'G-N18YMBS4W7' })

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

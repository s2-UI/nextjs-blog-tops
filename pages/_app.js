import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-N18YMBS4W7'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-N18YMBS4W7', {
                  page_path: window.location.pathname,
                  });
                `,
        }}
      />
    </>
  )
}

import type { AppProps } from 'next/app'
import '../styles/globals.css'

declare global {
  interface Window {
    _paq?: any[]
  }
}

function setUpMatomo() {
  const _paq = (window._paq = window._paq || [])
  _paq.push(['trackPageView'])
  _paq.push(['enableLinkTracking'])
  ;(function () {
    const u = 'https://stats.data.gouv.fr/'
    _paq.push(['setTrackerUrl', u + 'matomo.php'])
    _paq.push(['setSiteId', '298'])
    const d = document
    const g = d.createElement('script')
    const s = d.getElementsByTagName('script')[0]
    g.async = true
    g.src = u + 'matomo.js'
    if (s?.parentNode) s.parentNode.insertBefore(g, s)
    else d.head.appendChild(g)
  })()
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

if (typeof window !== 'undefined') {
  setUpMatomo()
}

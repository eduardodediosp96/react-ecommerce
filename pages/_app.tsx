import '../styles/globals.css'
import type { AppProps } from 'next/app'
export var APP_VERSION = 'ASDASD'
export var APP_VERSION_2 = 'ASDASD'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

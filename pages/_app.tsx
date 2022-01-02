import type { AppProps } from 'next/app'
import GlobalLayout from '../components/Layout/GlobalLayout'
import '../styles/antd.less'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}

export default MyApp

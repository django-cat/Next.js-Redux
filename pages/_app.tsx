import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import global from '../public/css/Global'
import wrapper from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={global} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
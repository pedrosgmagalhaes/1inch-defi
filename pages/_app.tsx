import "../styles/globals.scss"
import "bootstrap/dist/css/bootstrap.css"
import type { AppProps } from "next/app"
import { wrapper } from "../store/store"
import Layout from "../layouts/main"
import { WagmiConfig, createClient } from "wagmi"
import { getDefaultProvider } from "ethers"

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  )
}

export default wrapper.withRedux(MyApp)

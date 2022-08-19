import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import styles from "../../styles/Main.module.scss"

export default function Layout({ children }: any) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Iora Swap</title>
          <meta name="description" content="Swaping IORAS for any tokens" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

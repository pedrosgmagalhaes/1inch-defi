import type { NextPage } from "next"
import Image from "next/image"
import styles from "../../styles/Footer.module.scss"

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
        Powered by Iora Labs
    </footer>
  )
}

export default Footer

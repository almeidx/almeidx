import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>This is a website.</h1>
        <h4>or is it</h4>
      </main>

      <footer className={styles.footer}>
        Copyright © {new Date().getFullYear()} Almeida. All rights reserved.
      </footer>
    </div>
  )
}

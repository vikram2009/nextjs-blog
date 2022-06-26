import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog-Vikram-Srinivas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Blog
        </h1>

        <p className={styles.description}>
          Get started by pasting this into ur favorite terminal{' '}
          <code className={styles.code}>npm i nextjs-blog-vikramsrinivas</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vikramsrinivas.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="https://logo-phi.vercel.app/favicon.ico" alt="VS" width={75} height={75} />
          </span>
        </a>
      </footer>
    </div>
  )
}

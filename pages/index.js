import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome To My NextJs App
        </h1>

        <p className={styles.description}>
          Get started by choosing a one
        </p>

        <div className={styles.grid}>
          <a href="/articles" className={styles.card}>
            <h3>Articles</h3>
            <p>See a list of all the available articles</p>
          </a>

          <a href="/users" className={styles.card}>
            <h3>Users</h3>
            <p>See a list of all the users with their articles</p>
          </a>
        </div>
      </main>
    </div>
  )
}

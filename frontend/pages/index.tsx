import Head from 'next/head'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

function UserGreeting () {
  const { data, error } = useSWR('http://localhost:4000', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <h1>{data.greeting}</h1>
}

function Coins () {
  const { data, error } = useSWR('http://localhost:4000/coins', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.grid}>
      {data.map((coin, index) => {
        return (
          <div className={styles.card} key={index}>
            <h3>Name: {coin.name}</h3>
            <p>Ausgabejahr: {coin.year_of_issue}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Change2Collect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" alt="Logo" />

        <UserGreeting />

        <Coins />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Next
        </a>
      </footer>
    </div>
  )
}

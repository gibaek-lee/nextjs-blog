import Head from 'next/head'
import Link from 'next/link'
import Mode from '../components/mode'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'GiBi.log'
export const siteTitle = 'GiBi.log'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Mode />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <>
        {home ? (
          <header className={styles.header}>
            <img
              src="/images/profile_gibi-min.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </header>
        ) : (
          <header className={styles.headerPost}>
            <Link href="/">
              <a>
                <img
                  src="/images/profile_gibi-min.jpg"
                  className={`${styles.headerPostImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </header>
        )}
      </>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
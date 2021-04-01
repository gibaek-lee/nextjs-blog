import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import landingJSON from '../public/json/landing.json'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Who</h2>
        <p>{landingJSON.introduce.brief}</p>
      </section>
      <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>More</h2>
        <Link href={landingJSON.introduce.link.linkedin}>
          <a>LinkedIn</a>
        </Link>
        <span>{', '}</span>
        <Link href={landingJSON.introduce.link.github}>
          <a>GitHub</a>
        </Link>
      </section> 
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Pre-rendering: Static Generation
export async function getStaticProps() {
  /**
   * improvement with getStaticPaths
   * In production, getStaticProps runs at build time. 
   * However, this behavior can be enhanced using the fallback key returned by getStaticPaths
   * https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
   */
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// Pre-rendering: Server-Side Redering
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }
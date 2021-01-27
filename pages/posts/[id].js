import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  // fallback: true optional
  // const router = useRouter()

  // // If the page is not yet generated, this will be displayed
  // // initially until getStaticProps() finishes running
  // if(router.isFallback) {
  //   return <div>Loading...</div>
  // }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}


/**
 * Tips
 * getStaticProps and getStaticPaths runs only on the server-side. 
 * It will never be run on the client-side. 
 * It won’t even be included in the JS bundle for the browser. 
 * That means you can write code such as direct database queries without them being sent to browsers.
 * so, Do Not Fetch an API Route from getStaticProps or getStaticPaths.
 */
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}
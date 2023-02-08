import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import {getPosts} from '../services'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-1 mb-8">
      {/* Header */}
      <Head>
        <title>nim : A blogging website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      {/* Body  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* PostCard  */}
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => <PostCard post={post.node} key={index} />)}
        </div>
        {/* SideBar : PostWidget & Categories */}
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div> 

      </div>

    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [] ;

  return {
    props : {
      posts : posts 
    }
  }
}

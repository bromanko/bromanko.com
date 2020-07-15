import PageContent from '../components/pageContent'
import Posts from '../components/posts'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import React from 'react'
import * as constants from '../lib/constants'

export default function Index({ posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{constants.Title}</title>
        </Head>
        <PageContent>
          <Posts posts={posts} />
        </PageContent>
      </Layout>
    </>
  )
}

const replaceContentWithExcerpts = (posts) =>
  posts.map((p) => {
    const replaced = Object.assign({}, p)
    if (p.excerpt) replaced.content = p.excerpt
    return replaced
  })

export async function getStaticProps() {
  const allPosts = await getAllPosts([
    'title',
    'excerpt',
    'date',
    'slug',
    'content',
  ])

  return {
    props: { posts: replaceContentWithExcerpts(allPosts) },
  }
}

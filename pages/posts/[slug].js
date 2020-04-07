import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PageContent from '../../components/pageContent'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import React from 'react'
import Post from '../../components/post'
import Head from 'next/head'
import * as constants from '../../lib/constants'

export default function Slug({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Head>
        <title>{`${constants.Title} :: ${post.slug}`}</title>
      </Head>
      <PageContent>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <Post post={post} />
        )}
      </PageContent>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

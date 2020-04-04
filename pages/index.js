import Container from '../components/container'
import Posts from '../components/posts'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import React from 'react'
import Header from '../components/header'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>bromanko on the www</title>
        </Head>
        <Container>
          <Header />
          <Posts posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts(['title', 'date', 'slug', 'content'])

  return {
    props: { allPosts },
  }
}

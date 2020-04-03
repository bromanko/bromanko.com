import Container from '../components/container'
import Stories from '../components/stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import React from "react";
import Header from "../components/header";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>bromanko on the www</title>
        </Head>
        <Container>
          <Header />
          <Stories posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

import Post from './post'
import React from 'react'

export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </>
  )
}

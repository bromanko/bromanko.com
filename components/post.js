import PostHeader from './post-header'
import PostBody from './post-body'
import React from 'react'
import PostFooter from './post-footer'

export default function Post({ post }) {
  return (
    <article className="mb-32">
      <PostHeader slug={post.slug} title={post.title} date={post.date} />
      <PostBody content={post.content} />
      <PostFooter />
    </article>
  )
}

import React from 'react'
import Link from 'next/link'

export default function PostTitle({ slug, title }) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="text-gray-700 hover:text-black">
        <h1 className="text-3xl font-extrabold border-b-2 border-gray-300 mb-2">
          {title}
        </h1>
      </a>
    </Link>
  )
}

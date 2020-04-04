import React from "react";
import Link from "next/link";

export default function PostTitle({ slug, title }) {
  return (
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
            <h1 className="text-2xl font-black">
                {title}
            </h1>
        </a>
      </Link>
  )
}

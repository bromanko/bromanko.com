import Post from "./post";
import React from "react";

export default function Posts({ posts }) {
  return (
    <section>
      <div className="mt-8 px-4">
        {posts.map(post => (
            <Post
                key={post.slug}
                post={post}/>
        ))}
      </div>
    </section>
  )
}

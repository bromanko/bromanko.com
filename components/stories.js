import PostPreview from '../components/post-preview'

export default function Stories({ posts }) {
  return (
    <section>
      <div className="mt-8 px-2">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

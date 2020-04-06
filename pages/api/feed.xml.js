import RSS from 'rss'
import * as constants from '../../lib/constants'
import { getAllPosts } from '../../lib/api'

const addItemsToFeed = async (feed) => {
  const posts = await getAllPosts(['title', 'date', 'slug', 'content'])
  posts.map((p) => {
    feed.item({
      title: p.title,
      description: p.content,
      url: p.slug,
      date: p.date,
    })
  })
}

export default async (req, res) => {
  const feed = new RSS({
    title: constants.Title,
    feed_url: 'https://bromanko.com/api/feed.xml',
    site_url: 'https://bromanko.com',
  })

  await addItemsToFeed(feed)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/rss+xml')
  res.end(feed.xml({ indent: true }))
}

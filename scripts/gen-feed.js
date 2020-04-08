const RSS = require('rss')
const constants = require('../lib/constants')
const Api = require('../lib/api')

const addItemsToFeed = async (feed) => {
  const posts = await Api.getAllPosts(['title', 'date', 'slug', 'content'])
  posts.map((p) => {
    feed.item({
      title: p.title,
      description: p.content,
      url: `${constants.BaseUrl}/posts/${p.slug}`,
      date: p.date,
    })
  })
}

;(async function () {
  const feed = new RSS({
    title: constants.Title,
    feed_url: `${constants.BaseUrl}/api/feed.xml`,
    site_url: constants.BaseUrl,
  })

  await addItemsToFeed(feed)
  console.log(feed.xml({ indent: true }))
})()

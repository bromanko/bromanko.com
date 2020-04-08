import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from './markdownToHtml'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()
const postsDirectory = join(serverRuntimeConfig.PROJECT_ROOT, '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  for (let i = 0; i < fields.length; i++) {
    let field = fields[i]

    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = await markdownToHtml(content || '')
    }

    if (data[field]) {
      items[field] = data[field]
    }
  }

  return items
}

function sortPosts(a, b) {
  return new Date(b.date) - new Date(a.date)
}

export async function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => getPostBySlug(slug, fields))
  )
  return posts.sort(sortPosts)
}

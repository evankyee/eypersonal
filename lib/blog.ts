import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

// List of slugs to hide from the blog listing
const hiddenPosts = ['getting-started', 'sample-post']

export interface Post {
  slug: string
  title: string
  date: string
  excerpt?: string
  readTime?: number
  content: string
}

// Get all posts including hidden ones (for static generation)
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.(mdx|md)$/, ''))
  } catch (error) {
    console.error('Error reading post slugs:', error)
    return []
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.(mdx|md)$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || slug,
          date: data.date || '',
          excerpt: data.excerpt || '',
          readTime: data.readTime || Math.ceil(content.split(' ').length / 200),
          content,
        }
      })
      // Filter out hidden posts
      .filter((post) => !hiddenPosts.includes(post.slug))
      .sort((a, b) => (a.date > b.date ? -1 : 1))

    return posts
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const altPath = path.join(postsDirectory, `${slug}.md`)
    
    let fileContents: string
    
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } else if (fs.existsSync(altPath)) {
      fileContents = fs.readFileSync(altPath, 'utf8')
    } else {
      return null
    }

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      readTime: data.readTime || Math.ceil(content.split(' ').length / 200),
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}


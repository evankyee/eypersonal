import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import PDFViewer from '@/components/PDFViewer'

// Custom components available in MDX files
const components = {
  PDFViewer,
}

export async function generateStaticParams() {
  // Use getAllPostSlugs to get all posts including hidden ones for static generation
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return <p>Post not found</p>
  }

  return (
    <>
      <p><Link href="/blog">← Back to writing</Link></p>
      
      <h1>{post.title}</h1>
      
      <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
        {post.date}
      </p>

      <hr />

      <div className="prose">
        <MDXRemote source={post.content} components={components} />
      </div>
    </>
  )
}


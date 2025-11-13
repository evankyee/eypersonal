import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <p><Link href="/">← Back to home</Link></p>
      
      <h1>Writing</h1>
      
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <>
          {posts.map((post) => (
            <div key={post.slug} style={{ marginBottom: '20px' }}>
              <div>
                <Link href={`/blog/${post.slug}`}><strong>{post.title}</strong></Link>
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>
                {post.date}
              </div>
              {post.excerpt && (
                <div style={{ marginTop: '6px' }}>
                  {post.excerpt}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </>
  )
}


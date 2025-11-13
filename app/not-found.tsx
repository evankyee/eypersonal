import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      
      <p>The page you're looking for doesn't exist.</p>
      
      <p><Link href="/">← Back to home</Link></p>
    </>
  )
}


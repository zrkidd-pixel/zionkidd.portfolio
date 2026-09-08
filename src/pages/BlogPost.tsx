import { Navigate, useParams } from 'react-router-dom'
import { getPost } from '../content/posts'
import '../styles/blog.css'

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <div className="container blog">
      <p className="blog-list__date">{post.date}</p>
      <h1>{post.title}</h1>
      <div className="blog-post__body">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

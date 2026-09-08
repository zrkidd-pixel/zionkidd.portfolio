import { Link } from 'react-router-dom'
import { posts } from '../content/posts'
import '../styles/blog.css'

export function BlogList() {
  return (
    <div className="container blog">
      <p className="eyebrow">Writing</p>
      <h1>Blog</h1>
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug} className="blog-list__item">
            <Link to={`/blog/${post.slug}`}>
              <p className="blog-list__date">{post.date}</p>
              <p className="blog-list__title">{post.title}</p>
              <p className="blog-list__excerpt">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

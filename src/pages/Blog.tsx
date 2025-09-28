import React from 'react'
import { Link } from 'react-router-dom'
import { blogData } from '../data/blogData'

const Blog: React.FC = () => {
  const publishedPosts = blogData.filter(post => !post.draft)

  return (
    <div className="blog-page">
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-posts">
        <div className="container">
          <div className="row">
            {publishedPosts.map((post, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <article className="blog-post">
                  {post.image && (
                    <div className="blog-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                  )}
                  <div className="blog-content">
                    <h2 className="blog-title">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="blog-date">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="blog-description">{post.description}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more">
                      Read More
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

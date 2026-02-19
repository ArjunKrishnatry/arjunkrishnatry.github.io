import { BlogCard } from '../blog/BlogCard';
import blogData from '../../data/blog-posts.json';

/**
 * Blog Section Component
 * Displays a list of blog post previews
 */
export function Blog() {
  const { posts } = blogData;

  // Show message if no posts
  if (!posts || posts.length === 0) {
    return (
      <section id="blog" className="section">
        <div className="container-custom">
          <h2 className="section-title">
            Latest <span className="text-gradient">Posts</span>
          </h2>
          <p className="text-gray-400">
            Blog posts coming soon...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="section">
      <div className="container-custom">
        <h2 className="section-title">
          Latest <span className="text-gradient">Posts</span>
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl">
          Thoughts, tutorials, and insights from my journey in software development.
        </p>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;

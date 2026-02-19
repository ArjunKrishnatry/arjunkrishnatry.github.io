import { useState } from 'react';
import { parseMarkdown, formatDate } from '../../utils/markdown';

/**
 * BlogCard Component
 * Displays a blog post preview with expandable content
 */
export function BlogCard({ post }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-surface rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary/30">
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readTime || '3 min read'}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-100 mb-2">
          {post.title}
        </h3>

        <p className="text-gray-400 mb-4">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary-light transition-colors text-sm font-medium inline-flex items-center gap-1"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 border-t border-border pt-4">
          <div
            className="prose prose-invert prose-cyan max-w-none
              prose-headings:text-gray-100 prose-headings:font-semibold
              prose-p:text-gray-400 prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-200
              prose-code:text-primary prose-code:bg-background prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-background prose-pre:border prose-pre:border-border
              prose-ul:text-gray-400 prose-ol:text-gray-400
              prose-li:marker:text-primary"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
          />
        </div>
      </div>
    </article>
  );
}

export default BlogCard;

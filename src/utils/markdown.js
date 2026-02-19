import { marked } from 'marked';

/**
 * Markdown utility functions
 * Handles parsing markdown content with frontmatter
 */

// Configure marked for safe rendering
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert line breaks to <br>
});

/**
 * Parse markdown content to HTML
 * @param {string} content - Markdown content
 * @returns {string} HTML string
 */
export function parseMarkdown(content) {
  return marked.parse(content);
}

/**
 * Format a date string
 * @param {string} dateString - ISO date string (YYYY-MM-DD)
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

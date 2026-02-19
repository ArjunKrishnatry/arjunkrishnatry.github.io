# Arjun Krishnatry - Portfolio

A modern, accessible portfolio website featuring a dark oceanic theme with cyan accents and terminal-style hero animation.

**Live Site:** [akrishnatry.com](https://akrishnatry.com)

## Tech Stack

- **Framework:** React 18
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** GitHub Pages via GitHub Actions

## Features

- Dark oceanic theme with light mode toggle
- Terminal-style typing animation in hero section
- Expandable project cards
- Skills section with technology icons
- Blog with markdown support
- Mobile-friendly floating action button navigation
- Smooth scroll navigation with active section highlighting
- Accessibility features (skip links, ARIA labels, keyboard navigation)
- Respects reduced motion preferences

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer, MobileNav, ThemeToggle
│   ├── sections/    # Hero, About, Projects, Skills, Blog, Contact
│   ├── ui/          # ProjectCard, SkillIcon, TechTag, Terminal, Button
│   └── blog/        # BlogCard
├── data/            # JSON data files
├── hooks/           # useTheme, useScrollSpy, useTypewriter
├── posts/           # Markdown blog posts
└── utils/           # Markdown parsing utilities
```

## Customization

### Adding Projects

Edit `src/data/projects.json`:

```json
{
  "id": "project-id",
  "title": "Project Name",
  "description": "Brief description",
  "longDescription": "Detailed description",
  "technologies": ["React", "Node.js"],
  "github": "https://github.com/...",
  "demo": "https://...",
  "challenges": "Key challenges faced"
}
```

### Adding Blog Posts

Edit `src/data/blog-posts.json`:

```json
{
  "id": "post-id",
  "title": "Post Title",
  "date": "2024-01-15",
  "tags": ["tag1", "tag2"],
  "excerpt": "Brief excerpt",
  "content": "Markdown content here"
}
```

### Updating Skills

Edit `src/data/skills.json` to add/remove skills and categories.

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

## License

MIT

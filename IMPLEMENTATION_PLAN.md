# Portfolio Website Implementation Plan

## Project Overview

A modern, accessible portfolio website for **Arjun Krishnatry** featuring a dark oceanic theme with cyan accents, terminal-style hero animation, and a focus on maintainability.

| Item | Value |
|------|-------|
| **Domain** | akrishnatry.com |
| **Hosting** | GitHub Pages (arjunkrishnatry.github.io) |
| **Repository** | https://github.com/ArjunKrishnatry/arjunkrishnatry.github.io |
| **Timeline** | Quality-focused, no rush |

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 18 | User preference, great ecosystem |
| Styling | Tailwind CSS | Fast development, maintainable |
| Build Tool | Vite | Fast builds, simple config |
| Data | JSON files | Easy to update, version controlled |
| Blog | Markdown + gray-matter | Simple authoring workflow |
| Analytics | Plausible | Privacy-friendly, no cookies |
| Deployment | GitHub Actions → GitHub Pages | Free, automatic |

### Key Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "gray-matter": "^4.x",
    "marked": "^12.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "@vitejs/plugin-react": "^4.x"
  }
}
```

---

## Design Specifications

### Color Palette - Dark Mode (Default)

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Deep navy black | `#0a0f1a` |
| Surface | Elevated surfaces | `#111827` |
| Primary | Cyan accent | `#06b6d4` |
| Primary Light | Hover states | `#22d3ee` |
| Primary Glow | Glow effects | `rgba(6, 182, 212, 0.2)` |
| Text Primary | Main text | `#f9fafb` |
| Text Secondary | Muted text | `#9ca3af` |
| Border | Subtle borders | `#1f2937` |

### Color Palette - Light Mode

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Light gray | `#f9fafb` |
| Surface | White | `#ffffff` |
| Primary | Darker cyan | `#0891b2` |
| Text Primary | Dark gray | `#111827` |
| Text Secondary | Medium gray | `#6b7280` |

### Typography

| Usage | Font | Notes |
|-------|------|-------|
| Headings | Inter | Clean, modern sans-serif |
| Body | Inter | Consistent with headings |
| Code/Terminal | JetBrains Mono | Monospace for terminal animation |
| Scale | Tailwind default | Responsive sizing |

### Animation Guidelines

- **Allowed**: Fade-in on scroll, hover lift on cards, terminal typing, smooth scrolling
- **Avoided**: Parallax, particles, heavy JS animations
- **Implementation**: CSS transitions preferred over JS libraries
- **Accessibility**: Respect `prefers-reduced-motion` media query

---

## Site Structure

```
/
├── public/
│   ├── resume.pdf                    # User to add
│   └── images/
│       └── projects/                 # Project screenshots
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx           # Fixed navigation
│   │   │   ├── Footer.jsx           # Site footer
│   │   │   ├── MobileNav.jsx        # Floating action button
│   │   │   └── ThemeToggle.jsx      # Dark/light switch
│   │   ├── sections/
│   │   │   ├── Hero.jsx             # Terminal animation
│   │   │   ├── About.jsx            # Bio and interests
│   │   │   ├── Projects.jsx         # Project grid
│   │   │   ├── Skills.jsx           # Skills icons
│   │   │   ├── Blog.jsx             # Blog listing
│   │   │   └── Contact.jsx          # Contact links
│   │   ├── ui/
│   │   │   ├── ProjectCard.jsx      # Expandable card
│   │   │   ├── SkillIcon.jsx        # Skill badge
│   │   │   ├── TechTag.jsx          # Colored tech badge
│   │   │   ├── Terminal.jsx         # Typing animation
│   │   │   └── Button.jsx           # Reusable button
│   │   └── blog/
│   │       ├── BlogCard.jsx         # Blog post preview
│   │       └── BlogPost.jsx         # Full post view
│   ├── data/
│   │   ├── projects.json            # Project data
│   │   ├── skills.json              # Skills by category
│   │   └── terminal-commands.json   # Terminal animation data
│   ├── posts/
│   │   └── *.md                     # Blog posts (markdown)
│   ├── hooks/
│   │   ├── useTheme.js              # Theme management
│   │   ├── useScrollSpy.js          # Active section detection
│   │   └── useTypewriter.js         # Typing animation
│   ├── utils/
│   │   ├── markdown.js              # Markdown parsing
│   │   └── analytics.js             # Plausible integration
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind imports
├── tailwind.config.js               # Custom theme config
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies
├── IMPLEMENTATION_PLAN.md           # This file
├── TESTING.md                       # Testing procedures
└── README.md                        # Project documentation
```

---

## Section Implementation Details

### 1. Hero Section

**Components**: `Hero.jsx`, `Terminal.jsx`, `useTypewriter.js`

**Terminal Commands Animation**:
```
$ whoami
> Arjun Krishnatry

$ cat role.txt
> Computer Science Student & Developer

$ ls skills/
> C++  Python  React  ...

$ echo $CONTACT
> arjun.krishnatry@gmail.com
```

**Features**:
- [x] Typewriter effect with configurable speed
- [x] Blinking cursor animation
- [x] Command-by-command reveal
- [x] CTA buttons: "View Projects" | "Contact Me"
- [x] Reduced motion support

**Data File** (`terminal-commands.json`):
```json
{
  "commands": [
    {
      "command": "whoami",
      "output": "Arjun Krishnatry",
      "delay": 100
    },
    {
      "command": "cat role.txt",
      "output": "Computer Science Student & Developer",
      "delay": 100
    }
  ]
}
```

---

### 2. About Section

**Component**: `About.jsx`

**Content**:
- [ ] Brief introduction paragraph
- [ ] Education details
- [ ] Technical interests
- [ ] Personal interests (weightlifting, basketball, video games)
- [ ] Resume PDF download link

**Notes**:
- No photo (per user preference)
- Concise and engaging tone

---

### 3. Projects Section

**Components**: `Projects.jsx`, `ProjectCard.jsx`, `TechTag.jsx`

**Features**:
- [ ] Grid layout (2 cols desktop, 1 col mobile)
- [ ] Click to expand accordion-style
- [ ] Colored technology tags
- [ ] GitHub/demo links in expanded view
- [ ] Smooth height animation
- [ ] Image lazy loading

**Data Structure** (`projects.json`):
```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "Project Name",
      "description": "Brief description (2-3 sentences)",
      "longDescription": "Expanded details shown on click",
      "technologies": ["React", "Python", "Node.js"],
      "github": "https://github.com/...",
      "demo": "https://...",
      "image": "/images/projects/project-1.png",
      "challenges": "Key challenges and how they were solved"
    }
  ]
}
```

---

### 4. Skills Section

**Components**: `Skills.jsx`, `SkillIcon.jsx`

**Features**:
- [ ] Icon grid grouped by category
- [ ] Devicon or simple-icons for logos
- [ ] Responsive grid (4 → 3 → 2 cols)
- [ ] Hover effects

**Data Structure** (`skills.json`):
```json
{
  "categories": [
    {
      "name": "Languages",
      "skills": [
        { "name": "C++", "icon": "cpp" },
        { "name": "Python", "icon": "python" },
        { "name": "JavaScript", "icon": "javascript" }
      ]
    },
    {
      "name": "Frameworks",
      "skills": [
        { "name": "React", "icon": "react" },
        { "name": "Tailwind CSS", "icon": "tailwindcss" }
      ]
    },
    {
      "name": "Tools",
      "skills": [
        { "name": "Git", "icon": "git" },
        { "name": "VS Code", "icon": "vscode" }
      ]
    }
  ]
}
```

---

### 5. Blog Section

**Components**: `Blog.jsx`, `BlogCard.jsx`, `BlogPost.jsx`

**Features**:
- [ ] Recent posts listing (3-4 cards)
- [ ] Markdown files with frontmatter
- [ ] "Read More" expands inline
- [ ] Tag display
- [ ] Date formatting

**Frontmatter Format**:
```markdown
---
title: "Blog Post Title"
date: "2024-01-15"
tags: ["react", "tutorial"]
excerpt: "A brief description of the post..."
---

Post content in markdown...
```

---

### 6. Contact Section

**Component**: `Contact.jsx`

**Features**:
- [ ] Email link (mailto:arjun.krishnatry@gmail.com)
- [ ] GitHub icon + link
- [ ] LinkedIn icon + link
- [ ] Resume PDF download button
- [ ] No contact form (simple and direct)

---

## Navigation Implementation

### Desktop Navigation

- [ ] Fixed header with logo/name
- [ ] Section links (About, Projects, Skills, Blog, Contact)
- [ ] Smooth scroll on click
- [ ] Active section highlighting (scroll spy)
- [ ] Theme toggle button

### Mobile Navigation (FAB)

- [ ] Floating action button in bottom-right
- [ ] Click to expand radial menu
- [ ] Section icons with labels
- [ ] Collapses on selection
- [ ] Collapses on outside click
- [ ] Accessible keyboard navigation

---

## Accessibility Requirements (WCAG AA)

| Requirement | Implementation |
|-------------|----------------|
| Semantic HTML | `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` |
| ARIA labels | All interactive elements |
| Skip link | "Skip to main content" link |
| Keyboard nav | Visible focus states |
| Color contrast | ≥ 4.5:1 ratio |
| Alt text | All images |
| Reduced motion | Respect `prefers-reduced-motion` |
| Focus visible | Outline on focus |

---

## Performance Optimizations

- [ ] Vite code splitting
- [ ] Lazy load images (`loading="lazy"`)
- [ ] Optimize images before adding
- [ ] Minimal dependencies
- [ ] Tailwind CSS purging
- [ ] No heavy animation libraries
- [ ] Font subsetting (Inter, JetBrains Mono)

---

## SEO & Meta Tags

```html
<title>Arjun Krishnatry | CS Student & Developer</title>
<meta name="description" content="Portfolio of Arjun Krishnatry, a Computer Science student and developer specializing in C++, Python, and React.">
<meta property="og:title" content="Arjun Krishnatry | Portfolio">
<meta property="og:description" content="Computer Science Student & Developer">
<meta property="og:image" content="https://akrishnatry.com/og-image.png">
<meta property="og:url" content="https://akrishnatry.com">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://akrishnatry.com">
```

---

## Implementation Phases

### Phase 1: Project Setup ⬜
1. [ ] Initialize Vite + React project
2. [ ] Install and configure Tailwind CSS
3. [ ] Set up custom theme colors
4. [ ] Create folder structure
5. [ ] Configure ESLint
6. [ ] Set up GitHub Actions for deployment

### Phase 2: Layout & Theme ⬜
1. [ ] Create Header component
2. [ ] Create Footer component
3. [ ] Implement ThemeToggle
4. [ ] Create useTheme hook
5. [ ] Add skip-to-content link
6. [ ] Test theme persistence

### Phase 3: Hero Section ⬜
1. [ ] Create Terminal component
2. [ ] Create useTypewriter hook
3. [ ] Build Hero section
4. [ ] Add terminal-commands.json
5. [ ] Add CTA buttons
6. [ ] Test reduced motion

### Phase 4: Content Sections ⬜
1. [ ] Build About section
2. [ ] Build Contact section
3. [ ] Create skills.json
4. [ ] Build Skills section with icons
5. [ ] Create projects.json (placeholder)
6. [ ] Build ProjectCard with expand
7. [ ] Build Projects grid
8. [ ] Implement scroll spy

### Phase 5: Blog ⬜
1. [ ] Set up gray-matter + marked
2. [ ] Create markdown utility
3. [ ] Create sample blog post
4. [ ] Build BlogCard component
5. [ ] Build Blog section
6. [ ] Build BlogPost component

### Phase 6: Mobile & Polish ⬜
1. [ ] Build MobileNav (FAB)
2. [ ] Test all breakpoints
3. [ ] Accessibility audit
4. [ ] Performance audit
5. [ ] Add real project content
6. [ ] Add project images
7. [ ] Add Plausible analytics

### Phase 7: Deployment ⬜
1. [ ] Configure vite.config.js for GitHub Pages
2. [ ] Create GitHub Actions workflow
3. [ ] Push to repository
4. [ ] Configure custom domain
5. [ ] Test live site
6. [ ] Verify HTTPS

---

## Data Files to Populate (User Tasks)

After implementation, you'll need to add:

| File | Location | Description |
|------|----------|-------------|
| Resume PDF | `/public/resume.pdf` | Your current resume |
| Projects data | `/src/data/projects.json` | 4-6 project entries |
| Skills data | `/src/data/skills.json` | Your technologies |
| Project images | `/public/images/projects/` | Screenshots |
| Blog posts | `/src/posts/*.md` | Markdown articles |
| OG Image | `/public/og-image.png` | Social sharing image |

---

## GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Verification Checklist

See `TESTING.md` for complete testing procedures.

---

## Notes

- Code includes detailed comments for maintainability
- Straightforward patterns over clever abstractions
- CSS transitions preferred over JS libraries
- Each component is self-contained
- Data files make future updates simple

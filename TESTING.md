# Portfolio Website Testing Guide

This document outlines all testing procedures for the portfolio website. Use this checklist before each deployment.

---

## Table of Contents

1. [Development Testing](#development-testing)
2. [Build Testing](#build-testing)
3. [Functional Testing](#functional-testing)
4. [Accessibility Testing](#accessibility-testing)
5. [Responsive Testing](#responsive-testing)
6. [Performance Testing](#performance-testing)
7. [Browser Compatibility](#browser-compatibility)
8. [SEO Testing](#seo-testing)
9. [Deployment Testing](#deployment-testing)
10. [Post-Deployment Verification](#post-deployment-verification)

---

## Development Testing

### Local Development Server

```bash
# Start development server
npm run dev

# Expected: Server starts at http://localhost:5173
# Check: No console errors
# Check: Hot module replacement works
```

**Checklist:**
- [ ] `npm run dev` starts without errors
- [ ] Site loads at localhost:5173
- [ ] No console errors in browser DevTools
- [ ] Hot reload works when editing files
- [ ] All images load correctly
- [ ] Fonts load correctly (Inter, JetBrains Mono)

### Linting

```bash
# Run ESLint
npm run lint

# Expected: No errors or warnings
```

**Checklist:**
- [ ] No ESLint errors
- [ ] No ESLint warnings
- [ ] Code follows project conventions

---

## Build Testing

### Production Build

```bash
# Create production build
npm run build

# Expected: Build completes without errors
# Output: ./dist folder created
```

**Checklist:**
- [ ] Build completes successfully
- [ ] No build warnings
- [ ] `dist` folder is created
- [ ] `dist/index.html` exists
- [ ] `dist/assets/` contains JS and CSS bundles

### Preview Production Build

```bash
# Preview production build locally
npm run preview

# Expected: Server starts at http://localhost:4173
```

**Checklist:**
- [ ] Preview server starts
- [ ] Site functions identically to dev mode
- [ ] All routes work correctly
- [ ] Assets load from correct paths

---

## Functional Testing

### Navigation

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Desktop nav links | Click each nav link | Smooth scroll to section |
| Mobile FAB | Tap FAB button | Menu expands |
| Mobile nav links | Tap menu item | Scrolls to section, menu closes |
| Outside click | Click outside FAB menu | Menu closes |
| Keyboard nav | Tab through nav | Clear focus indicators |
| Skip link | Press Tab on page load | Skip link appears |

**Checklist:**
- [ ] All desktop nav links work
- [ ] Mobile FAB opens/closes
- [ ] Mobile menu items navigate correctly
- [ ] Outside click closes mobile menu
- [ ] Keyboard navigation works
- [ ] Skip to content link works

### Theme Toggle

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Toggle dark→light | Click theme button | Colors change to light mode |
| Toggle light→dark | Click theme button | Colors change to dark mode |
| Persistence | Toggle, refresh page | Theme persists |
| System preference | Set OS to dark mode | Initial theme matches OS |

**Checklist:**
- [ ] Theme toggle switches colors
- [ ] Theme persists on refresh
- [ ] Respects system preference initially
- [ ] All components update colors
- [ ] No flash of wrong theme on load

### Hero Section

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Terminal animation | Load page | Commands type out sequentially |
| Cursor blink | Watch cursor | Cursor blinks |
| Reduced motion | Enable in OS settings | Animation is instant |
| CTA buttons | Click each button | Navigate to correct sections |

**Checklist:**
- [ ] Terminal animation plays
- [ ] Typing speed is readable
- [ ] Cursor blinks correctly
- [ ] Reduced motion disables animation
- [ ] "View Projects" scrolls to projects
- [ ] "Contact Me" scrolls to contact

### Projects Section

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Card display | View section | All projects render |
| Card expand | Click a project card | Card expands with details |
| Card collapse | Click expanded card | Card collapses |
| Tech tags | View expanded card | Technology tags display |
| GitHub link | Click GitHub button | Opens in new tab |
| Demo link | Click Demo button | Opens in new tab |
| Images | View cards | Images load, lazy loaded |

**Checklist:**
- [ ] All project cards render
- [ ] Expand/collapse works smoothly
- [ ] Long descriptions display correctly
- [ ] Tech tags show correct colors
- [ ] External links work
- [ ] Images lazy load
- [ ] Grid is responsive

### Skills Section

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Categories | View section | All categories display |
| Icons | View skills | All icons load |
| Hover effect | Hover on skill | Visual feedback |
| Grid layout | Resize window | Grid adapts |

**Checklist:**
- [ ] All skill categories render
- [ ] All icons display correctly
- [ ] Hover states work
- [ ] Responsive grid works

### Blog Section

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Post listing | View section | Blog posts display |
| Post preview | View card | Title, date, excerpt show |
| Read more | Click read more | Post content expands |
| Markdown | View post | Markdown renders correctly |
| Tags | View post | Tags display |

**Checklist:**
- [ ] Blog posts load from markdown
- [ ] Frontmatter parses correctly
- [ ] Markdown renders properly
- [ ] Code blocks styled
- [ ] Links in posts work
- [ ] Tags display

### Contact Section

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Email link | Click email | Opens mail client |
| GitHub link | Click GitHub | Opens GitHub profile |
| LinkedIn link | Click LinkedIn | Opens LinkedIn profile |
| Resume download | Click download | PDF downloads/opens |

**Checklist:**
- [ ] Email mailto link works
- [ ] GitHub link opens correctly
- [ ] LinkedIn link opens correctly
- [ ] Resume PDF accessible

---

## Accessibility Testing

### Automated Testing

```bash
# Install axe-core browser extension
# Or use: npx axe-core http://localhost:5173
```

**Tools:**
- axe DevTools browser extension
- Lighthouse accessibility audit
- WAVE browser extension

### Manual Testing

| Test | Steps | Expected Result |
|------|-------|-----------------|
| Keyboard only | Navigate site with Tab/Enter | All interactive elements reachable |
| Screen reader | Use VoiceOver/NVDA | Content announced correctly |
| Focus indicators | Tab through page | Focus visible on all elements |
| Color contrast | Use contrast checker | ≥4.5:1 for normal text |
| Alt text | Inspect images | All images have alt text |
| Heading order | Check headings | Logical h1→h2→h3 order |
| ARIA labels | Inspect elements | Interactive elements labeled |

**Checklist:**
- [ ] Tab navigation works throughout
- [ ] Focus indicators visible
- [ ] Screen reader reads content correctly
- [ ] Color contrast passes WCAG AA
- [ ] All images have alt text
- [ ] Heading hierarchy is correct
- [ ] Skip link is first focusable element
- [ ] ARIA labels present where needed
- [ ] No keyboard traps

### Reduced Motion

```css
/* Test this media query is respected */
@media (prefers-reduced-motion: reduce) {
  /* Animations should be disabled */
}
```

**Checklist:**
- [ ] Enable reduced motion in OS
- [ ] Terminal animation is instant
- [ ] Scroll is instant (no smooth)
- [ ] Hover effects still work (non-motion)

---

## Responsive Testing

### Breakpoints

| Breakpoint | Width | Device Type |
|------------|-------|-------------|
| xs | <640px | Small phones |
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Device Testing

**Mobile (320px - 640px):**
- [ ] Navigation hides, FAB shows
- [ ] Text is readable
- [ ] Touch targets ≥44px
- [ ] No horizontal scroll
- [ ] Images scale properly
- [ ] Cards stack vertically

**Tablet (768px - 1024px):**
- [ ] Layout adapts appropriately
- [ ] Navigation visible
- [ ] Grid columns adjust
- [ ] Touch and mouse work

**Desktop (1024px+):**
- [ ] Full navigation visible
- [ ] Multi-column layouts work
- [ ] Hover states work
- [ ] No wasted space

### Testing Tools

```bash
# Chrome DevTools device toolbar
# Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows)
```

**Test on real devices:**
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)

---

## Performance Testing

### Lighthouse Audit

```bash
# Run in Chrome DevTools > Lighthouse
# Or: npx lighthouse http://localhost:4173
```

**Target Scores:**
| Category | Target |
|----------|--------|
| Performance | ≥90 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### Core Web Vitals

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | <2.5s | Largest Contentful Paint |
| FID | <100ms | First Input Delay |
| CLS | <0.1 | Cumulative Layout Shift |

**Checklist:**
- [ ] Lighthouse Performance ≥90
- [ ] LCP under 2.5 seconds
- [ ] No layout shifts on load
- [ ] Images optimized
- [ ] CSS/JS minified
- [ ] Fonts preloaded

### Bundle Size

```bash
# Check bundle size after build
npm run build

# Expected: Main bundle <200KB gzipped
```

**Checklist:**
- [ ] Main JS bundle reasonable size
- [ ] CSS bundle is purged
- [ ] No unnecessary dependencies
- [ ] Images are optimized

---

## Browser Compatibility

### Required Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |

### Testing Matrix

| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Chrome | [ ] | [ ] | Primary target |
| Firefox | [ ] | [ ] | |
| Safari | [ ] | [ ] | Test on Mac/iOS |
| Edge | [ ] | [ ] | |

### Features to Verify

- [ ] CSS Grid layout
- [ ] CSS Custom Properties
- [ ] Intersection Observer
- [ ] localStorage
- [ ] ES modules

---

## SEO Testing

### Meta Tags

```bash
# Use browser DevTools to inspect <head>
```

**Checklist:**
- [ ] `<title>` is present and descriptive
- [ ] `<meta name="description">` is present
- [ ] Open Graph tags present (og:title, og:description, og:image)
- [ ] Twitter card tags present
- [ ] Canonical URL set
- [ ] Favicon present

### Content

- [ ] One `<h1>` per page
- [ ] Semantic HTML structure
- [ ] Alt text on images
- [ ] Internal links work
- [ ] No broken links

### robots.txt

```bash
# Check https://akrishnatry.com/robots.txt
```

- [ ] robots.txt allows indexing
- [ ] sitemap.xml referenced (if created)

---

## Deployment Testing

### Pre-Deployment

```bash
# Run full test suite
npm run lint
npm run build
npm run preview
```

- [ ] All lint checks pass
- [ ] Build completes without errors
- [ ] Preview looks correct

### GitHub Actions

Check `.github/workflows/deploy.yml`:

- [ ] Workflow file exists
- [ ] Triggers on push to main
- [ ] Node version matches local
- [ ] Build command correct
- [ ] Deploy directory correct (`./dist`)

### Push & Monitor

```bash
git push origin main
```

- [ ] Push succeeds
- [ ] GitHub Actions workflow triggers
- [ ] Workflow completes successfully
- [ ] No deployment errors

---

## Post-Deployment Verification

### Live Site Checks

**URL:** https://akrishnatry.com

| Check | URL | Expected |
|-------|-----|----------|
| Homepage | / | Site loads |
| HTTPS | https://... | Secure connection |
| Custom domain | akrishnatry.com | Resolves correctly |
| www redirect | www.akrishnatry.com | Redirects to apex |

### Functional Verification

- [ ] All sections load
- [ ] Navigation works
- [ ] Theme toggle works
- [ ] Mobile FAB works
- [ ] External links work
- [ ] Resume downloads
- [ ] Images display
- [ ] Terminal animation plays

### Performance Verification

```bash
# Run Lighthouse on production URL
npx lighthouse https://akrishnatry.com
```

- [ ] Performance score maintained
- [ ] No console errors
- [ ] No 404 errors
- [ ] Fast load time

### Analytics

- [ ] Plausible script loads
- [ ] Page views tracking
- [ ] No console errors from analytics

---

## Test Commands Summary

```bash
# Development
npm run dev              # Start dev server

# Linting
npm run lint             # Check code quality

# Building
npm run build            # Create production build
npm run preview          # Preview production build

# Testing (if test framework added)
npm run test             # Run unit tests
npm run test:e2e         # Run end-to-end tests

# Auditing
npx lighthouse http://localhost:4173  # Performance audit
```

---

## Reporting Issues

When you find a bug, document:

1. **Steps to reproduce**
2. **Expected behavior**
3. **Actual behavior**
4. **Browser/device**
5. **Screenshot (if applicable)**

---

## Regression Testing

After any code change:

1. Run `npm run lint`
2. Run `npm run build`
3. Test the specific feature changed
4. Quick smoke test of related features
5. Check responsive at 320px and 1920px
6. Verify no console errors

---

## Testing Schedule

| Trigger | Tests to Run |
|---------|--------------|
| Every commit | Lint, Build |
| Before PR | Full functional test |
| Before deploy | Full checklist |
| After deploy | Live site verification |
| Weekly | Full accessibility audit |
| Monthly | Performance audit |

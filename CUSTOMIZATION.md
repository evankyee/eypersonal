# Customization Guide

This guide will help you customize your personal website. Everything is designed to be simple and maintainable.

## Quick Start Checklist

- [ ] Update `config.ts` with your name and social links
- [ ] Edit your bio in `app/page.tsx`
- [ ] Delete sample blog posts and add your own
- [ ] Update colors in `tailwind.config.js` (optional)
- [ ] Add your photo or customize the ASCII art (optional)

## 1. Site Configuration

**File:** `config.ts`

This is the main place to update your personal information:

```typescript
export const siteConfig = {
  name: 'Your Name',              // Your full name
  description: 'Personal website and blog',
  url: 'https://yourwebsite.com', // Your domain
  
  author: {
    name: 'Your Name',
    email: 'hello@example.com',   // Your email
  },
  
  social: {
    twitter: 'https://x.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    github: 'https://github.com/yourusername',
  },
  
  footer: {
    text: 'Made with care',        // Footer text
  },
}
```

## 2. Home Page Bio

**File:** `app/page.tsx`

Replace the placeholder text with your own story:

```tsx
<p>
  I'm currently building something new - you can think of it as...
</p>
```

Update all paragraphs in the "About" section with your background, interests, and personality.

## 3. Blog Posts

**Location:** `content/blog/`

### Delete Sample Posts

```bash
rm content/blog/sample-post.mdx
rm content/blog/getting-started.mdx
```

### Create New Posts

Create a new file like `content/blog/my-first-post.mdx`:

```markdown
---
title: "My First Post"
date: "2024-01-15"
excerpt: "A brief description that appears on the blog listing page."
---

Your content here in markdown...
```

The date format is `YYYY-MM-DD` and is used for sorting posts.

## 4. Colors & Design

**File:** `tailwind.config.js`

Change the color scheme:

```javascript
colors: {
  cream: '#f5f5f0',      // Background color
  charcoal: '#2a2a2a',   // Text color
},
```

You can also update the background in `app/globals.css`:

```css
body {
  background: #fafaf8;   /* Main background */
  color: #2a2a2a;        /* Main text color */
}
```

## 5. Fonts

**File:** `tailwind.config.js` and `app/globals.css`

Current fonts:
- **Inter** - Body text
- **IBM Plex Mono** - Code and monospace elements

To change fonts, update the Google Fonts import in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
},
```

## 6. Navigation

**File:** `components/Navigation.tsx`

Add or remove navigation items:

```tsx
const links = [
  { href: '/', label: 'About' },
  { href: '/blog', label: 'Writing' },
  // Add more links here
]
```

## 7. Links Section

**File:** `components/Links.tsx`

The links are automatically pulled from `config.ts`, but you can customize the descriptions:

```tsx
const links = [
  { 
    title: 'Email',
    href: `mailto:${siteConfig.author.email}`,
    description: 'Get in touch'  // Change this
  },
  // ...
]
```

## 8. ASCII Art Animation

**File:** `components/AsciiArt.tsx`

Create your own ASCII art frames or adjust the animation speed:

```tsx
// Change animation speed (milliseconds)
setInterval(() => {
  setFrame((prev) => (prev + 1) % frames.length)
}, 800)  // Change this number
```

To create new ASCII art:
1. Use a tool like https://ascii.co.uk/art or create your own
2. Replace the frames array with your artwork
3. Keep the same format with proper indentation

## 9. Metadata & SEO

**File:** `app/layout.tsx`

The title and description come from `config.ts`, but you can add more metadata:

```tsx
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  // Add more metadata here
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
}
```

## 10. Footer

**File:** `components/Footer.tsx`

Social links come from `config.ts`. To add more social links:

1. Add to `config.ts`:
```typescript
social: {
  twitter: '...',
  instagram: 'https://instagram.com/yourusername',  // Add new
}
```

2. Add to footer:
```tsx
const socialLinks = [
  { href: siteConfig.social.twitter, label: 'X' },
  { href: siteConfig.social.instagram, label: 'Instagram' },  // Add new
]
```

## Tips

### Maintaining Simplicity
- Don't add unnecessary animations or effects
- Keep the color palette minimal
- Let typography and content breathe with whitespace

### Content First
- Write in a natural, personal voice
- Keep paragraphs short and scannable
- Edit ruthlessly - less is more

### Performance
- This site is statically generated for speed
- Images should be optimized before uploading
- Keep blog posts in markdown for fast parsing

### Development Workflow
```bash
# Run locally
npm run dev

# Check for errors
npm run build

# Format code (if using prettier)
npx prettier --write .
```

## Need Help?

Check the main `README.md` for technical details or visit the [Next.js documentation](https://nextjs.org/docs).


# Personal Website

A minimalist, handcrafted personal website built with Next.js. Clean, fast, and easy to maintain.

## Features

- 📝 Simple blog system using MDX
- 🎨 Minimal, retro-inspired design
- ⚡ Fast static site generation
- 🎯 Easy to customize and maintain
- 📱 Responsive layout
- 🎭 ASCII art animation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Site Configuration

Edit `config.ts` to update your name, social links, and other site-wide settings.

### Home Page

Edit `app/page.tsx` to customize your bio and about section.

### Links

Update `components/Links.tsx` with your actual links and social profiles.

### Styling

- Global styles: `app/globals.css`
- Colors and theme: `tailwind.config.js`

### Blog Posts

Create new blog posts by adding `.mdx` files to the `content/blog` directory.

Each post needs frontmatter:

```yaml
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post."
---
```

Then write your content in markdown below the frontmatter.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── AsciiArt.tsx      # Animated ASCII art
│   ├── Footer.tsx        # Site footer
│   ├── Links.tsx         # Links section
│   └── Navigation.tsx    # Site navigation
├── content/              # Content files
│   └── blog/            # Blog posts (MDX)
├── lib/                 # Utility functions
│   └── blog.ts         # Blog post utilities
├── config.ts           # Site configuration
└── package.json        # Dependencies
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **MDX** - Markdown for blog posts
- **IBM Plex Mono** - Monospace font for code/ASCII art
- **Inter** - Sans-serif font for body text

## Deployment

This site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended) - Zero config deployment
- **Netlify**
- **GitHub Pages** with static export
- Any Node.js hosting platform

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

Feel free to use this as a template for your own site.


# Quick Start Guide

Get your personal website up and running in 5 minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Customize Your Information

Open `config.ts` and update:

```typescript
export const siteConfig = {
  name: 'Your Name',                      // ← Change this
  description: 'Personal website',        // ← And this
  
  author: {
    name: 'Your Name',                    // ← Change this
    email: 'hello@example.com',           // ← Change this
  },
  
  social: {
    twitter: 'https://x.com/yourusername',      // ← Update
    linkedin: 'https://linkedin.com/in/you',     // ← Update  
    github: 'https://github.com/yourusername',   // ← Update
  },
}
```

## Step 3: Write Your Bio

Open `app/page.tsx` and replace the placeholder text with your own story.

Look for this section:

```tsx
<p>
  I'm currently building something new...
</p>
```

Replace all the paragraphs with your own content.

## Step 4: Clean Up Blog Posts

Delete the sample blog posts:

```bash
rm content/blog/sample-post.mdx
rm content/blog/getting-started.mdx
```

## Step 5: Run Your Site

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## Next Steps

### Add Your First Blog Post

Create `content/blog/my-first-post.mdx`:

```markdown
---
title: "My First Post"
date: "2024-01-15"
excerpt: "What this post is about."
---

Your content here...
```

### Customize Colors (Optional)

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  cream: '#f5f5f0',      // Background
  charcoal: '#2a2a2a',   // Text
}
```

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

## File Guide

- `config.ts` - All your personal info and links
- `app/page.tsx` - Home page with your bio
- `content/blog/*.mdx` - Your blog posts
- `components/` - UI components (rarely need to edit)
- `tailwind.config.js` - Colors and design tokens

## Need More Help?

- Full customization guide: `CUSTOMIZATION.md`
- Technical details: `README.md`
- Next.js docs: https://nextjs.org/docs

That's it! You're ready to go. 🚀


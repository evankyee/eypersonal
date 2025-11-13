# 🚀 START HERE

Welcome! Your personal website is ready to go. Follow these steps:

## ✅ Pre-flight Checklist

### Step 1: Install Dependencies (2 min)

```bash
cd /Users/evanyee/Desktop/Soron
npm install
```

Wait for installation to complete.

### Step 2: Update Your Info (3 min)

Open `config.ts` and replace:

```typescript
name: 'Your Name',              // ← Put your name
email: 'hello@example.com',     // ← Your email
twitter: 'https://x.com/you',   // ← Your Twitter/X
linkedin: 'https://linkedin.com/in/you',  // ← Your LinkedIn  
github: 'https://github.com/you',         // ← Your GitHub
```

### Step 3: Write Your Bio (5 min)

Open `app/page.tsx` and replace the placeholder bio with your own story.

### Step 4: Launch! (1 min)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🎉 That's It!

Your site is now running. Here's what you see:

- **Home page** - Your bio and links
- **Writing page** - Blog posts (sample posts included)
- **ASCII animation** - Animated art on the side

## 📝 Next Steps

### Clean Up Sample Posts

```bash
rm content/blog/sample-post.mdx
rm content/blog/getting-started.mdx
```

### Add Your First Post

Create `content/blog/my-first-post.mdx`:

```markdown
---
title: "Hello World"
date: "2024-11-13"
excerpt: "My first post"
---

Your content here...
```

### Customize Design (Optional)

- **Colors:** Edit `tailwind.config.js`
- **ASCII Art:** Edit `components/AsciiArt.tsx`
- **Layout:** Adjust spacing in components

## 📚 Documentation

- **Quick setup:** `QUICKSTART.md` (5 minutes)
- **Full customization:** `CUSTOMIZATION.md` (everything you can change)
- **Technical details:** `README.md` (how it works)
- **What was built:** `PROJECT_SUMMARY.md` (overview)

## 🚢 Deploy to Production

When ready to publish:

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Deploy with one click

Or use Netlify, Cloudflare Pages, or any hosting platform.

## 🎨 Design Notes

This site is intentionally:
- **Minimal** - No clutter
- **Fast** - Static generation
- **Retro** - Old-school tech aesthetic
- **Personal** - Handcrafted feel

## ❓ Questions?

- Check the documentation files above
- Visit [Next.js docs](https://nextjs.org/docs)
- The code is simple - explore and modify as needed

---

**You're all set! Start by running `npm install` then `npm run dev`**


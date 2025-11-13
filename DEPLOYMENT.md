# Deployment Guide - GitHub Pages

## Quick Preview Locally

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** to preview your site.

---

## Deploy to GitHub Pages

### Step 1: Update package.json

Add this script to your `package.json` scripts section:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "export": "next build"
}
```

### Step 2: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Personal website"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** (in the left sidebar)
4. Under **Source**, select **GitHub Actions**

### Step 4: Create GitHub Actions Workflow

Create `.github/workflows/nextjs.yml`:

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with Next.js
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 5: Deploy

```bash
# Commit the workflow file
git add .github/workflows/nextjs.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

Your site will be live at: **https://yourusername.github.io**

---

## Build for Production Locally

To test the production build locally:

```bash
# Build the site
npm run build

# Preview the build (optional)
npx serve out
```

---

## Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file called `CNAME` in the `public/` directory
2. Add your domain to it (e.g., `example.com`)
3. Configure DNS settings with your domain provider

---

## Troubleshooting

### Issue: Images not loading
- Make sure `unoptimized: true` is in `next.config.js`

### Issue: 404 on refresh
- GitHub Pages serves static files correctly with Next.js export

### Issue: Build fails
- Check that all dependencies are in `package.json`
- Run `npm run build` locally to test

---

## Alternative: Deploy with a Script

Create `deploy.sh`:

```bash
#!/bin/bash

# Build the site
npm run build

# Navigate to the output directory
cd out

# Create a git repository
git init
git add -A
git commit -m "Deploy"

# Push to gh-pages branch
git push -f git@github.com:yourusername/yourusername.github.io.git main:gh-pages

cd -
```

Make it executable and run:

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Summary

**Local preview:** `npm run dev` → http://localhost:3000

**Deploy:** Push to GitHub → GitHub Actions automatically builds and deploys

**Live site:** https://yourusername.github.io

That's it! 🚀


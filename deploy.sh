#!/bin/bash

# Build the site
echo "Building site..."
npm run build

# Navigate to the output directory
cd out

# Initialize git and push to gh-pages branch
git init -b main
git add -A
git commit -m "Deploy"

# Push to gh-pages branch
echo "Deploying to GitHub Pages..."
git push -f git@github.com:evankyee/eypersonal.git main:gh-pages

cd -
echo "Done! Site should be live shortly at https://evanyee.xyz"



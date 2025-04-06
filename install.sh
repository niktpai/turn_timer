#!/bin/bash

# Exit on error
set -e

echo "🚀 Installing core dependencies for Turn Timer App..."

# Check if Next.js is already installed
if ! grep -q '"next":' package.json 2>/dev/null; then
  echo "📦 Installing Next.js and React..."
  npm install next react react-dom
else
  echo "📦 Next.js already installed, skipping..."
fi

# Check if TypeScript is already installed
if ! grep -q '"typescript":' package.json 2>/dev/null; then
  echo "📝 Installing TypeScript and type definitions..."
  npm install typescript @types/react @types/node @types/react-dom --save-dev
else
  echo "📝 TypeScript already installed, skipping..."
fi

# Ensure scripts are set up in package.json
if ! grep -q '"dev":' package.json 2>/dev/null; then
  echo "📝 Adding Next.js scripts to package.json..."
  npm pkg set scripts.dev="next dev"
  npm pkg set scripts.build="next build"
  npm pkg set scripts.start="next start"
else
  echo "📝 Next.js scripts already set up, skipping..."
fi

cd turn_timer && npm install

echo "✅ Setup complete! You can now run 'npm run dev' to start the development server." 
#!/bin/bash

# Clean Next.js build cache and temporary files
echo "🧹 Cleaning Next.js build cache..."

# Remove build cache
rm -rf .next

# Remove node_modules cache
rm -rf node_modules/.cache

# Remove any lock files that might be corrupted
# (Don't remove package-lock.json as it's needed)

echo "✅ Cache cleared! Now restart your dev server with: npm run dev"


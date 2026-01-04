# Troubleshooting Guide

## Build Cache Issues

If you're experiencing build errors like:
- `Cannot find module './vendor-chunks/tailwind-merge.js'`
- `Operation not permitted` errors
- `middleware-manifest.json` errors
- Random 500 errors

### Quick Fix

Run the cleanup script:
```bash
./clean-cache.sh
```

Or manually:
```bash
rm -rf .next
rm -rf node_modules/.cache
npm run dev
```

### Root Cause

**The project is located in iCloud Drive**, which can cause:
- File permission issues
- Build cache corruption
- Sync conflicts during development

### Recommended Solutions

#### Option 1: Move Project Out of iCloud Drive (Recommended)
Move your project to a local directory:
```bash
# Move to a local directory
mv "/Users/nathan_sai/Library/Mobile Documents/com~apple~CloudDocs/Documents/Work Document/MEM/mem-website" ~/Projects/mem-website
cd ~/Projects/mem-website
npm install
npm run dev
```

#### Option 2: Exclude .next from iCloud Sync
1. Right-click on the project folder
2. Select "Get Info"
3. Check "Keep on this Mac" to prevent iCloud sync

#### Option 3: Use .nextignore (if supported)
Add `.next` to your iCloud exclusion list in System Settings.

### When to Clean Cache

Run the cleanup script when you see:
- Module not found errors
- Build errors after code changes
- Random 500 errors
- "Operation not permitted" errors

### Development Workflow

1. **Before starting dev server:**
   ```bash
   ./clean-cache.sh
   npm run dev
   ```

2. **If errors persist:**
   ```bash
   rm -rf .next node_modules/.cache
   npm install
   npm run dev
   ```

3. **Last resort (full reinstall):**
   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   npm run dev
   ```


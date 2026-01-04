#!/bin/bash

# Start script for MEM Website
echo "🚀 Starting MEM Website..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Start the development server
echo "🌟 Starting Next.js development server..."
echo "📍 Open http://localhost:3000 in your browser"
npm run dev


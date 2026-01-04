# MEM Website

A donation platform built with Next.js, TypeScript, TailwindCSS, and shadcn/ui.

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /(site)
    /projects
      page.tsx        # Projects listing page
    layout.tsx        # Site layout with header/footer
    page.tsx          # Home page
  layout.tsx          # Root layout
  globals.css         # Global styles and CSS variables

/components
  /ui                 # shadcn/ui components

/features
  /layout
    SiteHeader.tsx    # Navigation header
    SiteFooter.tsx    # Site footer
  /projects
    ProjectCard.tsx           # Individual project card
    ProjectFilterBar.tsx      # Filter sidebar
    ProjectGrid.tsx           # Projects grid layout
    DonationProgress.tsx      # Progress bar component

/lib
  filters.ts          # Filter logic and types
  utils.ts            # Utility functions (cn)
  figma-tokens.d.ts   # Type definitions for Figma tokens

/data
  projects.mock.ts    # Mock project data
```

## Design Tokens

The design tokens (colors, typography, spacing) are currently using placeholder values. To update them with actual Figma tokens:

1. Use the Figma MCP to extract design tokens from your Figma file
2. Update `app/globals.css` with the actual color values
3. Update `tailwind.config.ts` with typography and spacing scales
4. See `lib/figma-tokens.d.ts` for the expected structure

## Features

- ✅ Responsive design
- ✅ Project filtering (category, collection, goal status)
- ✅ Donation progress tracking
- ✅ Accessible components with proper ARIA labels
- ✅ Framer Motion animations (respects prefers-reduced-motion)
- ✅ SEO-friendly metadata
- ✅ TypeScript for type safety

## Project Data

Each project in the mock data includes information about goals, progress, and categories. The project data structure supports filtering by category, collection, and goal status.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Animations**: framer-motion
- **Image Optimization**: next/image

## Next Steps

1. Connect to Figma to pull actual design tokens
2. Replace mock data with API integration
3. Add authentication if needed
4. Implement donation flow
5. Add project detail pages



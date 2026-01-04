import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Simple pass-through middleware - doesn't modify anything
  return NextResponse.next();
}

// Only run middleware on actual page routes, not static assets
export const config = {
  matcher: [
    /*
     * Match request pathnames except for:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml
     * - files with extensions (images, fonts, etc.)
     */
    "/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};


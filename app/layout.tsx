import type { Metadata } from "next";
import { SiteHeader } from "@/features/layout/SiteHeader";
import { SiteFooter } from "@/features/layout/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEM - Making a Difference Through Collective Action",
  description:
    "Join us in supporting meaningful projects around the world. Discover and contribute to causes that matter.",
  keywords: ["donation", "charity", "projects", "fundraising", "social impact"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa] font-sans text-[#504736] antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}



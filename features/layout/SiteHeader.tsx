"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavigationItem = {
  name: string;
  href: string;
  primary?: boolean;
};

const navigation: NavigationItem[] = [
  { name: "Our Mission", href: "/mission" },
  { name: "Support Us", href: "/projects", primary: true },
] as const;

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-cream/60 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-[80px] w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image
              src="/icons/mem-logo.svg"
              alt="Mekong Evangelical Mission icon"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-xs font-semibold uppercase tracking-[0.25em] text-brand-brown">
            <span className="text-[13px] tracking-[0.1em] text-brand-brown-light">
              Mekong
            </span>
            <span className="text-[12px] tracking-[0.1em] text-brand-text-dark">
              Evangelical Mission
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-brand-text-dark md:flex">
          {navigation.map((item) =>
            item.primary ? (
              <Button
                key={item.name}
                asChild
                className="rounded-full bg-brand-brown text-white px-6 py-2 text-sm hover:bg-brand-brown/90"
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-brand-brown"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto rounded-full md:hidden"
            >
              <Menu className="h-6 w-6 text-brand-text-dark" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <SheetHeader className="space-y-1">
              <SheetTitle className="text-left text-brand-text-dark">
                Mekong Evangelical Mission
              </SheetTitle>
              <p className="text-left text-sm text-brand-text-medium">
                Sharing Christ&apos;s love across Thailand and Laos.
              </p>
            </SheetHeader>
            <div className="mt-8 flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-semibold text-brand-text-dark"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

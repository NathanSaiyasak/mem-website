"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="bg-[#fefbf5] min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-brand-text-dark">
          Something went wrong!
        </h1>
        <p className="text-base text-brand-text-medium">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="rounded-full bg-brand-brown text-white hover:bg-brand-brown/90"
          >
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white"
          >
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


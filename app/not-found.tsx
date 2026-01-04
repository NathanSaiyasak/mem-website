import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-[#fefbf5] min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-brand-text-dark">404</h1>
        <h2 className="text-2xl font-semibold text-brand-text-dark">
          Page Not Found
        </h2>
        <p className="text-base text-brand-text-medium">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="rounded-full bg-brand-brown text-white hover:bg-brand-brown/90"
          >
            <Link href="/">Go home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white"
          >
            <Link href="/projects">View projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="bg-[#fefbf5] min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-brand-text-dark">
          Project Not Found
        </h1>
        <p className="text-base text-brand-text-medium">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="rounded-full bg-brand-brown text-white hover:bg-brand-brown/90"
          >
            <Link href="/projects">Back to Projects</Link>
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


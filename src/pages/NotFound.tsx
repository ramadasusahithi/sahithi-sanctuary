import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 - Page Not Found | Ramadasu Sahithi Kala Seva Samstha";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-premium inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs font-bold tracking-[0.16em] text-maroon-deep uppercase"
            style={{ background: "var(--gradient-gold)" }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

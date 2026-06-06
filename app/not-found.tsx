import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-start justify-center px-6 py-20 lg:px-10">
      <p className="text-xs uppercase tracking-[0.25em] text-gold">Page Not Found</p>
      <h1 className="mt-5 text-5xl font-semibold text-theme-primary">The page you requested is not available.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-theme-secondary">
        Return to the homepage to explore the company overview, divisions, compliance profile, leadership, or contact information.
      </p>
      <Link href="/" className="button-primary-theme mt-8 rounded-full px-6 py-3 text-sm font-semibold transition hover:brightness-105">
        Back to homepage
      </Link>
    </div>
  );
}
